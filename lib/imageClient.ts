"use client";

/**
 * Busca (uma vez, memoizado) o mapa { slot: url } das imagens no Blob.
 * Compartilhado entre todos os MediaSlot pra fazer só um fetch.
 */
let cache: Promise<Record<string, string>> | null = null;

export function getImageMap(): Promise<Record<string, string>> {
  if (!cache) {
    cache = fetch("/api/images")
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}));
  }
  return cache;
}
