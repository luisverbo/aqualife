# Painel de fotos (`/admin`)

Painel para trocar as fotos do site **sem mexer em código** e **sem Supabase**.
As imagens ficam no **Vercel Blob** (armazenamento nativo da Vercel).

## Como funciona

- Você acessa `https://SEU-SITE.vercel.app/admin`, digita a senha e envia as fotos.
- Cada foto vai para o Vercel Blob e **aparece no site na hora**.
- Enquanto uma seção não tiver foto, o site mostra um gráfico da marca (nunca fica quebrado).

## Configuração (uma vez só) — 3 passos

### 1. Criar o Blob store

1. Acesse o projeto na **Vercel** → aba **Storage**.
2. Clique em **Create Database** → **Blob** → dê um nome → **Create**.
3. Conecte ao projeto (**Connect Project**). Isso cria a variável
   `BLOB_READ_WRITE_TOKEN` automaticamente. Não precisa copiar nada.

### 2. Definir a senha do painel

1. Na Vercel → projeto → **Settings** → **Environment Variables**.
2. Adicione:
   - **Name:** `ADMIN_PASSWORD`
   - **Value:** uma senha forte à sua escolha
   - **Environments:** marque Production (e Preview, se quiser).
3. Salve.

### 3. Redeploy

Faça um **Redeploy** (ou dê um novo push) para as variáveis entrarem em vigor.

Pronto. Acesse `/admin`, entre com a senha e envie as fotos.

## Seções gerenciáveis

| Seção no painel                 | Onde aparece no site               | Dimensão sugerida |
| ------------------------------- | ---------------------------------- | ----------------- |
| Guardião de Piscina             | 1º card de serviços                | 800 × 600         |
| Tratamento de Água              | 2º card de serviços                | 800 × 600         |
| Vigilância e Manutenção         | 3º card de serviços                | 800 × 600         |
| Compartilhamento (WhatsApp)     | preview do link em redes           | 1200 × 630        |

## Segurança

- O envio só funciona com a senha correta (`ADMIN_PASSWORD`).
- A página `/admin` não é indexada por buscadores (`noindex`).
- Use uma senha forte e não compartilhe o link publicamente.

## Rodar/testar localmente (opcional)

```bash
vercel env pull .env.local   # baixa BLOB_READ_WRITE_TOKEN e ADMIN_PASSWORD
npm run dev                  # abra http://localhost:3000/admin
```

Sem o `BLOB_READ_WRITE_TOKEN`, o site funciona normalmente usando os
gráficos da marca — só o envio de fotos fica indisponível.

## Alternativa sem painel

Você também pode commitar os arquivos direto em `public/images/` com os nomes
`servico-guardiao.jpg`, `servico-tratamento.jpg`, `servico-manutencao.jpg`,
`og.jpg` — eles têm prioridade menor que o Blob, mas funcionam como fallback.
