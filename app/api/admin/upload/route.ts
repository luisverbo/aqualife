import { put } from "@vercel/blob";
import { BLOB_PREFIX, isValidSlot } from "@/lib/imageSlots";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

/** Comparação de senha em tempo ~constante. */
function passwordOk(provided: string, expected: string): boolean {
  if (provided.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function POST(req: Request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return json({ error: "ADMIN_PASSWORD não configurada no servidor." }, 500);
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return json(
      { error: "Vercel Blob não configurado (BLOB_READ_WRITE_TOKEN ausente)." },
      500,
    );
  }

  const password = req.headers.get("x-admin-password") ?? "";
  if (!passwordOk(password, expected)) {
    return json({ error: "Senha incorreta." }, 401);
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return json({ error: "Requisição inválida." }, 400);
  }

  const slot = String(form.get("slot") ?? "");
  const file = form.get("file");

  if (!isValidSlot(slot)) return json({ error: "Slot inválido." }, 400);
  if (!(file instanceof File)) return json({ error: "Arquivo ausente." }, 400);
  if (!file.type.startsWith("image/")) {
    return json({ error: "Envie um arquivo de imagem." }, 415);
  }
  if (file.size > MAX_BYTES) {
    return json({ error: "Imagem acima de 8 MB. Comprima antes." }, 413);
  }

  try {
    const blob = await put(`${BLOB_PREFIX}${slot}`, file, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: file.type,
    });
    return json({ url: blob.url, slot });
  } catch (e) {
    return json(
      { error: e instanceof Error ? e.message : "Falha ao enviar." },
      500,
    );
  }
}

function json(data: unknown, status = 200) {
  return Response.json(data, { status });
}
