import { put } from "@vercel/blob";
import { passwordOk } from "@/lib/adminAuth";
import { TESTIMONIALS_BLOB, sanitizeTestimonials } from "@/lib/testimonials";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return Response.json(
      { error: "ADMIN_PASSWORD não configurada no servidor." },
      { status: 500 },
    );
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.BLOB_STORE_ID) {
    return Response.json(
      { error: "Vercel Blob não conectado a este projeto." },
      { status: 500 },
    );
  }

  const password = req.headers.get("x-admin-password") ?? "";
  if (!passwordOk(password, expected)) {
    return Response.json({ error: "Senha incorreta." }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "JSON inválido." }, { status: 400 });
  }

  const clean = sanitizeTestimonials(payload);

  try {
    await put(TESTIMONIALS_BLOB, JSON.stringify(clean), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 30,
    });
    return Response.json({ ok: true, count: clean.length });
  } catch (e) {
    return Response.json(
      { error: e instanceof Error ? e.message : "Falha ao salvar." },
      { status: 500 },
    );
  }
}
