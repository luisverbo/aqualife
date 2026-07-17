"use client";

import { useEffect, useRef, useState } from "react";
import { IMAGE_SLOTS, type ImageSlotKey } from "@/lib/imageSlots";
import { prepareImage } from "@/lib/prepareImage";

type SlotState = {
  url?: string;
  status: "idle" | "uploading" | "done" | "error";
  message?: string;
};

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent] = useState<Record<string, string>>({});
  const [slots, setSlots] = useState<Record<string, SlotState>>({});

  // Carrega as imagens atuais (pra mostrar preview do que já está no ar).
  useEffect(() => {
    fetch("/api/images")
      .then((r) => (r.ok ? r.json() : {}))
      .then((m: Record<string, string>) => setCurrent(m))
      .catch(() => setCurrent({}));
  }, []);

  async function uploadFile(slot: ImageSlotKey, file: File) {
    setSlots((s) => ({ ...s, [slot]: { status: "uploading" } }));
    try {
      // Otimiza no navegador (redimensiona + WebP) para deixar leve e
      // evitar o limite de ~4,5 MB das funções da Vercel.
      const optimized = await prepareImage(file, slot === "og" ? 1200 : 1600);
      if (optimized.size > 4 * 1024 * 1024) {
        throw new Error(
          "Imagem muito grande mesmo após otimizar. Envie um JPG/PNG/WebP.",
        );
      }
      const body = new FormData();
      body.append("slot", slot);
      body.append("file", optimized);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "x-admin-password": password },
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Erro ${res.status}`);
      }
      // Cache-busting no preview.
      const busted = `${data.url}?t=${Date.now()}`;
      setCurrent((c) => ({ ...c, [slot]: busted }));
      setSlots((s) => ({
        ...s,
        [slot]: { status: "done", url: busted, message: "Enviada!" },
      }));
    } catch (e) {
      setSlots((s) => ({
        ...s,
        [slot]: {
          status: "error",
          message: e instanceof Error ? e.message : "Falha no envio.",
        },
      }));
    }
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-agua-profunda px-6">
        <div className="w-full max-w-sm rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md">
          <h1 className="font-heading text-2xl font-bold text-papel">
            Painel de fotos
          </h1>
          <p className="mt-2 font-body text-sm text-papel/70">
            Digite a senha para gerenciar as imagens do site.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password.trim()) setUnlocked(true);
            }}
            className="mt-6 space-y-3"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              autoFocus
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 font-body text-papel placeholder:text-papel/40 outline-none focus:border-azul-piscina"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-azul-piscina px-4 py-3 font-body font-semibold text-agua-profunda transition-transform hover:scale-[1.02] active:scale-95"
            >
              Entrar
            </button>
          </form>
          <p className="mt-4 font-body text-xs text-papel/50">
            A senha é validada só no envio. Configure-a na variável
            <code className="mx-1 rounded bg-white/10 px-1">ADMIN_PASSWORD</code>
            na Vercel.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[100svh] bg-papel px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-tinta sm:text-3xl">
              Fotos do site
            </h1>
            <p className="mt-1 font-body text-sm text-tinta/60">
              Escolha uma imagem por seção. A troca é imediata no site.
            </p>
          </div>
          <button
            onClick={() => setUnlocked(false)}
            className="rounded-full border border-tinta/15 px-4 py-2 font-body text-sm font-medium text-tinta/70 hover:bg-tinta/5"
          >
            Sair
          </button>
        </header>

        <div className="mt-8 space-y-4">
          {IMAGE_SLOTS.map((s) => (
            <SlotCard
              key={s.key}
              slotKey={s.key}
              label={s.label}
              hint={s.hint}
              currentUrl={current[s.key]}
              state={slots[s.key]}
              onFile={(file) => uploadFile(s.key, file)}
            />
          ))}
        </div>

        <p className="mt-8 font-body text-xs text-tinta/50">
          Dica: use imagens leves (JPG/WebP, até ~300 KB) para o site abrir
          rápido. Máximo 8 MB por arquivo.
        </p>
      </div>
    </main>
  );
}

function SlotCard({
  slotKey,
  label,
  hint,
  currentUrl,
  state,
  onFile,
}: {
  slotKey: string;
  label: string;
  hint: string;
  currentUrl?: string;
  state?: SlotState;
  onFile: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const uploading = state?.status === "uploading";

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 ring-1 ring-tinta/5 sm:flex-row sm:items-center">
      {/* Preview */}
      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-agua-profunda sm:w-40">
        {currentUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentUrl}
            alt={label}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-[10px] uppercase tracking-widest text-papel/50">
            sem foto
          </div>
        )}
      </div>

      {/* Info + ação */}
      <div className="min-w-0 flex-1">
        <p className="font-body text-sm font-semibold text-tinta">{label}</p>
        <p className="mt-0.5 font-body text-xs text-tinta/55">{hint}</p>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) onFile(file);
          }}
          className={`mt-3 flex items-center gap-3 rounded-xl border border-dashed px-3 py-2.5 transition-colors ${
            dragOver ? "border-azul-piscina bg-azul-piscina/5" : "border-tinta/20"
          }`}
        >
          <button
            type="button"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
            className="rounded-lg bg-azul-piscina px-3 py-1.5 font-body text-xs font-semibold text-agua-profunda transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {uploading ? "Enviando…" : "Escolher"}
          </button>
          <span className="truncate font-body text-xs text-tinta/50">
            {state?.status === "done" && "✓ "}
            {state?.message ?? "ou arraste a imagem aqui"}
          </span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onFile(file);
              e.target.value = "";
            }}
          />
        </div>

        {state?.status === "error" && (
          <p className="mt-2 font-body text-xs text-red-600">{state.message}</p>
        )}
      </div>
    </div>
  );
}
