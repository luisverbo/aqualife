/**
 * Slots de imagem gerenciáveis pelo painel /admin.
 * A `key` é usada como nome do arquivo no Vercel Blob (prefixo "site/")
 * e como fallback local em /public/images/{key}.jpg.
 */
export const IMAGE_SLOTS = [
  {
    key: "logo",
    label: "Logo da empresa",
    hint: "PNG com fundo transparente (ideal). Aparece no topo e no rodapé.",
  },
  {
    key: "servico-guardiao",
    label: "Serviço — Guardião de Piscina",
    hint: "Foto do guardião / cadeira de salva-vidas. ~800×600.",
  },
  {
    key: "servico-tratamento",
    label: "Serviço — Tratamento de Água",
    hint: "Foto de água limpa / tratamento. ~800×600.",
  },
  {
    key: "servico-manutencao",
    label: "Serviço — Vigilância e Manutenção",
    hint: "Foto de manutenção / piscina do condomínio. ~800×600.",
  },
  {
    key: "og",
    label: "Compartilhamento (WhatsApp / redes)",
    hint: "Imagem de preview ao compartilhar o link. 1200×630.",
  },
] as const;

export type ImageSlotKey = (typeof IMAGE_SLOTS)[number]["key"];

export const BLOB_PREFIX = "site/";

export function isValidSlot(slot: string): slot is ImageSlotKey {
  return IMAGE_SLOTS.some((s) => s.key === slot);
}
