"use client";

import { useEffect, useRef, useState } from "react";
import { IMAGE_SLOTS, type ImageSlotKey } from "@/lib/imageSlots";
import { prepareImage } from "@/lib/prepareImage";
import {
  DEFAULT_TESTIMONIALS,
  MAX_TESTIMONIALS,
  type Testimonial,
} from "@/lib/testimonials";

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

  // Depoimentos
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [testiSaving, setTestiSaving] = useState(false);
  const [testiMsg, setTestiMsg] = useState("");

  // Diagnóstico de configuração do servidor
  const [status, setStatus] = useState<{
    hasPassword: boolean;
    hasBlob: boolean;
  } | null>(null);

  useEffect(() => {
    fetch("/api/admin/status")
      .then((r) => (r.ok ? r.json() : null))
      .then(setStatus)
      .catch(() => setStatus(null));
    fetch("/api/images")
      .then((r) => (r.ok ? r.json() : {}))
      .then((m: Record<string, string>) => setCurrent(m))
      .catch(() => setCurrent({}));
    fetch("/api/testimonials")
      .then((r) => (r.ok ? r.json() : DEFAULT_TESTIMONIALS))
      .then((d: Testimonial[]) =>
        setTestimonials(Array.isArray(d) && d.length ? d : DEFAULT_TESTIMONIALS),
      )
      .catch(() => setTestimonials(DEFAULT_TESTIMONIALS));
  }, []);

  async function uploadFile(slot: ImageSlotKey, file: File) {
    setSlots((s) => ({ ...s, [slot]: { status: "uploading" } }));
    try {
      const optimized = await prepareImage(
        file,
        slot === "og" ? 1200 : slot === "logo" ? 640 : 1600,
        slot === "logo" ? 0.92 : 0.82,
      );
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
      if (!res.ok) throw new Error(data.error || `Erro ${res.status}`);
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

  function updateTesti(i: number, field: keyof Testimonial, value: string) {
    setTestimonials((list) =>
      list.map((t, idx) => (idx === i ? { ...t, [field]: value } : t)),
    );
  }
  function addTesti() {
    setTestimonials((list) =>
      list.length >= MAX_TESTIMONIALS
        ? list
        : [...list, { quote: "", name: "", role: "" }],
    );
  }
  function removeTesti(i: number) {
    setTestimonials((list) => list.filter((_, idx) => idx !== i));
  }

  async function saveTestimonials() {
    setTestiSaving(true);
    setTestiMsg("");
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: {
          "x-admin-password": password,
          "content-type": "application/json",
        },
        body: JSON.stringify(testimonials),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Erro ${res.status}`);
      setTestiMsg(`Salvo! ${data.count} depoimento(s) no ar.`);
    } catch (e) {
      setTestiMsg(e instanceof Error ? e.message : "Falha ao salvar.");
    } finally {
      setTestiSaving(false);
    }
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-agua-profunda px-6">
        <div className="w-full max-w-sm rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md">
          <h1 className="font-heading text-2xl font-bold text-papel">
            Painel Aqualife
          </h1>
          <p className="mt-2 font-body text-sm text-papel/70">
            Digite a senha para gerenciar fotos e depoimentos.
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
            A senha é validada no envio. Configure-a na variável
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
              Painel Aqualife
            </h1>
            <p className="mt-1 font-body text-sm text-tinta/60">
              Gerencie as fotos e os depoimentos do site.
            </p>
          </div>
          <button
            onClick={() => setUnlocked(false)}
            className="rounded-full border border-tinta/15 px-4 py-2 font-body text-sm font-medium text-tinta/70 hover:bg-tinta/5"
          >
            Sair
          </button>
        </header>

        {/* ── DIAGNÓSTICO ───────────────────────────────────── */}
        {status && (!status.hasPassword || !status.hasBlob) && (
          <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <p className="font-body text-sm font-bold text-amber-900">
              ⚠ Configuração incompleta na Vercel — o upload não vai funcionar
              até resolver:
            </p>
            <ul className="mt-3 space-y-2 font-body text-sm text-amber-900">
              {!status.hasBlob && (
                <li>
                  <b>Blob store não conectado.</b> Vercel → seu projeto →{" "}
                  <b>Storage</b> → <b>Create Database → Blob</b> → dê um nome →{" "}
                  <b>Connect Project</b>. Isso cria a variável{" "}
                  <code className="rounded bg-amber-100 px-1">
                    BLOB_READ_WRITE_TOKEN
                  </code>{" "}
                  sozinho.
                </li>
              )}
              {!status.hasPassword && (
                <li>
                  <b>Senha não definida.</b> Vercel → <b>Settings → Environment
                  Variables</b> → adicione{" "}
                  <code className="rounded bg-amber-100 px-1">
                    ADMIN_PASSWORD
                  </code>{" "}
                  com uma senha forte.
                </li>
              )}
              <li className="pt-1">
                Depois de configurar, faça um <b>Redeploy</b> (Deployments → ⋯ →
                Redeploy) e recarregue esta página.
              </li>
            </ul>
          </div>
        )}
        {status && status.hasPassword && status.hasBlob && (
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-body text-sm font-medium text-emerald-800">
              ✓ Tudo configurado. Pode enviar as fotos.
            </p>
          </div>
        )}

        {/* ── FOTOS ─────────────────────────────────────────── */}
        <h2 className="mt-10 font-heading text-lg font-bold text-tinta">
          Fotos
        </h2>
        <div className="mt-4 space-y-4">
          {IMAGE_SLOTS.map((s) => (
            <SlotCard
              key={s.key}
              label={s.label}
              hint={s.hint}
              currentUrl={current[s.key]}
              state={slots[s.key]}
              onFile={(file) => uploadFile(s.key, file)}
            />
          ))}
        </div>
        <p className="mt-3 font-body text-xs text-tinta/50">
          As imagens são otimizadas automaticamente (leves e rápidas). Máx. 8 MB.
        </p>

        {/* ── DEPOIMENTOS ───────────────────────────────────── */}
        <div className="mt-14 flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold text-tinta">
            Depoimentos
          </h2>
          <button
            onClick={addTesti}
            disabled={testimonials.length >= MAX_TESTIMONIALS}
            className="rounded-full border border-azul-piscina/40 px-4 py-2 font-body text-sm font-semibold text-azul-piscina hover:bg-azul-piscina/10 disabled:opacity-40"
          >
            + Adicionar
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-4 ring-1 ring-tinta/5"
            >
              <textarea
                value={t.quote}
                onChange={(e) => updateTesti(i, "quote", e.target.value)}
                placeholder="Texto do depoimento…"
                rows={3}
                maxLength={400}
                className="w-full resize-none rounded-xl border border-tinta/15 bg-papel px-3 py-2 font-body text-sm text-tinta outline-none focus:border-azul-piscina"
              />
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  value={t.name}
                  onChange={(e) => updateTesti(i, "name", e.target.value)}
                  placeholder="Nome (ex: Síndico · Condomínio)"
                  maxLength={60}
                  className="flex-1 rounded-xl border border-tinta/15 bg-papel px-3 py-2 font-body text-sm text-tinta outline-none focus:border-azul-piscina"
                />
                <input
                  value={t.role}
                  onChange={(e) => updateTesti(i, "role", e.target.value)}
                  placeholder="Cidade / bairro"
                  maxLength={60}
                  className="flex-1 rounded-xl border border-tinta/15 bg-papel px-3 py-2 font-body text-sm text-tinta outline-none focus:border-azul-piscina"
                />
                <button
                  onClick={() => removeTesti(i)}
                  className="rounded-xl border border-red-200 px-3 py-2 font-body text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          {testimonials.length === 0 && (
            <p className="rounded-2xl bg-white p-6 text-center font-body text-sm text-tinta/50 ring-1 ring-tinta/5">
              Nenhum depoimento. Clique em “+ Adicionar”.
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={saveTestimonials}
            disabled={testiSaving}
            className="rounded-full bg-azul-piscina px-6 py-3 font-body text-sm font-semibold text-agua-profunda transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            {testiSaving ? "Salvando…" : "Salvar depoimentos"}
          </button>
          {testiMsg && (
            <span className="font-body text-sm text-tinta/70">{testiMsg}</span>
          )}
        </div>
      </div>
    </main>
  );
}

function SlotCard({
  label,
  hint,
  currentUrl,
  state,
  onFile,
}: {
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
            className="shrink-0 rounded-lg bg-azul-piscina px-3 py-1.5 font-body text-xs font-semibold text-agua-profunda transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
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
