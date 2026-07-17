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
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return Response.json({}, { headers: cacheHeaders() });
    }
    const { blobs } = await list({ prefix: BLOB_PREFIX });
    const map: Record<string, string> = {};
    for (const b of blobs) {
      const key = b.pathname.replace(BLOB_PREFIX, "");
      // A URL do Blob é estável (addRandomSuffix:false) e já vem versionada
      // por conteúdo; usamos direto.
      map[key] = b.url;
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
