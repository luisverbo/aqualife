import { list } from "@vercel/blob";
import {
  DEFAULT_TESTIMONIALS,
  TESTIMONIALS_BLOB,
  sanitizeTestimonials,
} from "@/lib/testimonials";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const headers: HeadersInit = {
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
};

/**
 * Depoimentos atuais. Usa os salvos no Blob (painel /admin); se não houver
 * nenhum ou faltar Blob/token, cai nos exemplos padrão.
 */
export async function GET() {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return Response.json(DEFAULT_TESTIMONIALS, { headers });
    }
    const { blobs } = await list({ prefix: TESTIMONIALS_BLOB });
    const found = blobs.find((b) => b.pathname === TESTIMONIALS_BLOB);
    if (!found) return Response.json(DEFAULT_TESTIMONIALS, { headers });

    const version = new Date(found.uploadedAt).getTime();
    const res = await fetch(`${found.url}?v=${version}`, { cache: "no-store" });
    if (!res.ok) return Response.json(DEFAULT_TESTIMONIALS, { headers });

    const data = sanitizeTestimonials(await res.json());
    if (data.length === 0) return Response.json(DEFAULT_TESTIMONIALS, { headers });
    return Response.json(data, { headers });
  } catch {
    return Response.json(DEFAULT_TESTIMONIALS, { headers });
  }
}
