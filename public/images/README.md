# Imagens do site

Como adicionar as fotos reais da Aqualife. **Não precisa mexer em código:**
basta colocar cada arquivo nesta pasta (`public/images/`) com o **nome exato**
abaixo. Assim que o arquivo existir, ele aparece sozinho no site (enquanto não
existir, o site mostra um gráfico da marca no lugar — nunca fica quebrado).

## Arquivos usados hoje

| Arquivo                         | Onde aparece                         | Sugestão de dimensão | Formato |
| ------------------------------- | ------------------------------------ | -------------------- | ------- |
| `servico-guardiao.jpg`          | Card "Guardião de Piscina"           | 800 × 600 (4:3)      | JPG/WebP |
| `servico-tratamento.jpg`        | Card "Tratamento de Água"            | 800 × 600 (4:3)      | JPG/WebP |
| `servico-manutencao.jpg`        | Card "Vigilância e Manutenção"       | 800 × 600 (4:3)      | JPG/WebP |
| `og.jpg`                        | Compartilhamento no WhatsApp/redes   | 1200 × 630           | JPG      |

## Dicas para não pesar o site

- Prefira **WebP** (ou JPG com qualidade ~80). Cada foto idealmente < 300 KB.
- Se usar `.webp`, renomeie a referência no componente correspondente
  (`components/Services.tsx`) OU me peça que eu troco.
- Ferramenta rápida de compressão: https://squoosh.app

## Foto de fundo do topo (hero) — opcional

Hoje o topo usa um fundo gráfico animado (sem imagem, carrega instantâneo).
Se quiser trocar por uma foto/vídeo real, coloque `hero.jpg` (1920 × 1080)
aqui e me peça para plugar — deixei o ponto marcado com comentário em
`components/Hero.tsx`.
