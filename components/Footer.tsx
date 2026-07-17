import { WHATSAPP_URL } from "@/lib/constants";
import Logo from "./Logo";
import { IconWhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-oceano">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 font-body text-sm leading-relaxed text-papel/70">
              Manutenção de piscinas e guardiões salva-vidas certificados para
              condomínios, clubes e parques aquáticos no Rio de Janeiro.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-azul-piscina">
              GMAR · FEEMA · CBMERJ-GMar
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-papel/50">
              Contato
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-body text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp
            </a>
            <p className="font-body text-sm text-papel/70">
              Rio de Janeiro · RJ
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-body text-xs text-papel/50">
            © {2026} Aqualife Piscinas · 23 anos de mercado. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
