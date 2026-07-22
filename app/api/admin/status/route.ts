export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Diagnóstico do painel: informa (só booleans, sem vazar segredos) se as
 * variáveis necessárias estão configuradas no servidor.
 */
export async function GET() {
  return Response.json({
    hasPassword: Boolean(process.env.ADMIN_PASSWORD),
    // Token clássico OU conexão OIDC (BLOB_STORE_ID) contam como configurado.
    hasBlob: Boolean(
      process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID,
    ),
  });
}
