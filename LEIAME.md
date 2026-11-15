# Fluxo de edição de vídeo

## Pastas
- `material bruto/` – solte aqui o vídeo gravado.
- `referencias/` – vídeos de referência baixados (só para estudo, nunca reaproveitar).
- `videos prontos/` – vídeos finais (`data_tema.mp4`, `_v2`, `_v3`...).
- `estilo/` – `meu-estilo.md` com as regras do seu estilo.
- `prompts/` – textos/instruções reutilizáveis.
- `remotion/` – projeto Remotion que monta o vídeo.

## Etapas
1. **Estrutura** – pastas e este arquivo.
2. **Ferramentas** – Node.js, Python, FFmpeg, yt-dlp, faster-whisper (modelo "small"), Remotion, Hyperframes.
3. **Aprender o estilo** – baixar 3 a 5 referências, analisar (ritmo, gancho, legenda, zooms, motion, música, transições, 9:16, duração) e escrever `estilo/meu-estilo.md`. Regra: se inspira, não copia.
4. **Editar** (cada vídeo novo em `material bruto/`):
   1. Cortar silêncios e gaguejadas longas, mantendo a fala natural.
   2. Legenda com Whisper em português, corrigindo nomes e termos técnicos.
   3. Montar no Remotion seguindo `estilo/meu-estilo.md`: gancho forte nos 3 primeiros segundos, legenda grande, motion graphics nos pontos-chave.
   4. Exportar com FFmpeg: 1080x1920, MP4 H.264, em `videos prontos/`, nome `data_tema.mp4`.
   5. Entregar caminho, duração e lista do que foi feito.
5. **Ajustes** – juntar todos os pedidos numa rodada só, reexportar como `_v2`, `_v3`... e manter a versão anterior.

Ao final de cada etapa: **Feito** e **Pendente do Edu**.
