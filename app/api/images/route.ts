import { list } from "@vercel/blob";
import { BLOB_PREFIX } from "@/lib/imageSlots";

// Sempre em runtime (nunca no build) — evita exigir token na hora do build.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Retorna o mapa { slot: url } com as imagens atualmente no Vercel Blob.
 * Se não houver Blob configurado (sem token) ou der erro, devolve {} —
 * o site então usa o fallback local / gráfico da marca.
 */
export async function GET() {
  try {
    // Sem token clássico nem OIDC (store id) configurado → devolve vazio.
    if (
      !process.env.BLOB_READ_WRITE_TOKEN &&
      !process.env.BLOB_STORE_ID
    ) {
      return Response.json({}, { headers: cacheHeaders() });
    }
    const { blobs } = await list({ prefix: BLOB_PREFIX });
    const map: Record<string, string> = {};
    for (const b of blobs) {
      const key = b.pathname.replace(BLOB_PREFIX, "");
      // URL estável (addRandomSuffix:false) + query de versão pelo uploadedAt,
      // pra o CDN servir a nova imagem quando o mesmo slot é reenviado.
      const version = new Date(b.uploadedAt).getTime();
      map[key] = `${b.url}?v=${version}`;
    }
    return Response.json(map, { headers: cacheHeaders() });
  } catch {
    return Response.json({}, { headers: cacheHeaders() });
  }
}

function cacheHeaders(): HeadersInit {
  return {
    // CDN cacheia por 60s; navegador revalida rápido.
    "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
  };
}
