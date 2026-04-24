# Matriz "Quiero X → usa Y"

## Stack de herramientas IA para founders (Free vs Pro)

> Decide rápido: tienes un problema concreto, busca el caso en la tabla y te digo qué herramienta usar. Dos versiones: sin presupuesto (Free Stack) y con presupuesto para tracción seria (Pro Stack).

---

## Free Stack

Todo lo que puedes tener operativo hoy con una cuenta Google + una cuenta Claude free. Cero tarjeta.

| Quiero | Tool recomendada | URL | Free limits | Nota |
|---|---|---|---|---|
| Asistente interno sobre mis docs | NotebookLM | https://notebooklm.google.com | Hasta 100 notebooks, 50 fuentes por notebook, 500k palabras por fuente | Mejor herramienta gratuita para RAG sobre PDFs, docs, webs. Cita pasajes exactos. |
| Landing + captura leads | Lovable (free tier) | https://lovable.dev | 5 mensajes/día, proyectos públicos | Tier free ajustado. Alternativa: Bolt (https://bolt.new) con tokens diarios. |
| MVP funcional | Bolt | https://bolt.new | Tokens diarios reseteables | Genera full-stack en browser. Para prototipos rápidos. |
| Research con citas | Gemini Deep Research (plan free) | https://gemini.google.com | Deep Research limitado en free, disponible completo con AI Pro | En free se puede probar; para uso intensivo pasar a Pro. |
| Analizar PDF/vídeo largo | Gemini 2.5 Pro (AI Studio) | https://aistudio.google.com | 1M tokens de contexto, gratis en browser | 1M de contexto = ~1500 páginas. Vídeo hasta ~2h. |
| Automatizar apps | n8n (self-hosted) | https://n8n.io | Ilimitado si lo levantas tú (Docker) | Cloud free tier muy restringido; self-host es la vía. |
| Generar imagen marketing | Nano Banana Pro (Gemini) | https://gemini.google.com | Generaciones limitadas/día en free | Modelo de imagen de Google. Para volumen, pasar a AI Pro. |
| Generar vídeo marketing | Veo 3.1 (free en vids.new) | https://vids.new | 10 vídeos/mes, 720p, 8 segundos, SIN audio sincronizado | Para audio sincronizado hay que ir a Veo 3.1 en AI Pro/Ultra. |
| Clonar voz | ElevenLabs (free) | https://elevenlabs.io | 10k caracteres/mes, voces pre-hechas | Clonación de voz propia requiere plan Starter ($5/mes). |
| Música/jingles | Suno (free) | https://suno.com | 10 créditos diarios (~10 canciones cortas) | Para uso comercial hay que pasar a Pro. |
| Código diario | Gemini CLI | https://github.com/google-gemini/gemini-cli | Gratis con cuenta Google, usa Gemini 2.5 Pro | Alternativa gratuita a Claude Code. Funciona en terminal. |
| Chat diario | Claude free + ChatGPT free + Gemini | — | Cuotas diarias moderadas en los 3 | Rotar entre los 3 cuando se agote el límite. |
| Contenido/copy | Claude free (Sonnet) | https://claude.ai | Cuota diaria reseteable | Sonnet free es suficiente para copy corto. |
| Agente autónomo web | Antigravity (free tier) | https://antigravity.google | En preview, tier free disponible | Agente de navegador de Google. [verificar cuotas exactas free] |
| UI/diseño rápido | Stitch (Google) | https://stitch.withgoogle.com | Free tier con créditos limitados | Genera UIs desde texto. Alternativa: v0 (https://v0.dev) con cuota free. |

---

## Pro Stack

Cuando el Free Stack se queda corto y el tiempo vale más que los 20-200€/mes. Precios referencia abril 2026.

| Quiero | Tool recomendada | URL | Precio | Cuándo compensa |
|---|---|---|---|---|
| Asistente interno sobre mis docs | Claude Projects (Claude Pro) | https://claude.ai | $20/mes | Cuando quieres el conocimiento en el mismo sitio donde chateas y produces. NotebookLM Pro si lo prefieres en ecosistema Google. |
| Landing + captura leads | Lovable Pro | https://lovable.dev | $25/mes | Cuando iteras landings cada semana. Lovable llegó a $10M ARR en 2 meses por algo. |
| MVP funcional | Lovable Pro / Bolt Pro / v0 | — | $20-25/mes | Lovable para full-stack end-to-end. v0 si ya estás en ecosistema Vercel/Next. |
| Research con citas | Perplexity Pro | https://perplexity.ai | $20/mes | Deep Research ilimitado (corre sobre Claude Opus por debajo). Si ya tienes Claude Pro, es redundancia parcial. |
| Analizar PDF/vídeo largo | Gemini AI Pro | https://gemini.google.com | $20/mes | Acceso completo a Gemini 2.5 Pro (1M contexto), Deep Research, Veo 3.1 con audio. |
| Automatizar apps | Zapier / Make / n8n Cloud | — | Zapier desde $20/mes, Make desde $9/mes, n8n Cloud desde $20/mes | Make tiene mejor relación calidad/precio. Zapier es el más fácil. n8n self-host sigue siendo gratis. |
| Generar imagen marketing | Midjourney / Nano Banana Pro (AI Pro) | https://midjourney.com | MJ $10-60/mes | MJ para calidad artística alta. Nano Banana dentro de Gemini AI Pro para integración con el resto del stack Google. |
| Generar vídeo marketing | Veo 3.1 (Gemini AI Pro/Ultra) / Sora 2 / Runway | — | AI Pro $20/mes, AI Ultra $250/mes, Sora incluido en ChatGPT Plus $20/mes, Runway desde $15/mes | Veo 3.1 en AI Pro tiene audio sincronizado. Ultra desbloquea más cuota y 1080p. Runway para edición más fina. |
| Clonar voz | ElevenLabs Creator/Pro | https://elevenlabs.io | Desde $22/mes (Creator) | Instant Voice Cloning a partir de Starter ($5). Creator para uso comercial serio. |
| Música/jingles | Suno Pro | https://suno.com | $10/mes | Licencia comercial + más créditos. |
| Código diario | Claude Code (Claude Pro/Max) / Cursor | https://claude.com/claude-code https://cursor.com | Claude Pro $20/mes, Claude Max $100-200/mes, Cursor desde $20/mes | Cursor tiene 2M+ usuarios, 1M+ de pago, $2B ARR — es el estándar de facto. Claude Code en terminal para founders técnicos que viven en CLI. |
| Chat diario | Claude Pro + ChatGPT Plus | — | $20 + $20/mes | Si tienes que elegir UNO, Claude Pro. Si puedes pagar dos, tienes ambos universos. |
| Contenido/copy | Claude Pro (Opus 4.7) | https://claude.ai | $20/mes | Opus es el mejor modelo para escritura larga con voz propia. |
| Agente autónomo web | Antigravity Pro | https://antigravity.google | [verificar precio] | Para automatizar flujos de navegador recurrentes. |
| UI/diseño rápido | Claude Design / Gemini Design / Stitch | — | Incluidos en Claude Pro / Gemini AI Pro | Usa el que ya pagas. Para production-grade, combinar con Cursor/Claude Code. |

---

## Mi recomendación bootstrap

Founder que empieza, caja justa, necesita moverse ya. **Stack de 0€/mes** que cubre el 80% de los casos:

1. **Cuenta Google** → NotebookLM + Gemini 2.5 Pro (1M contexto) en AI Studio + Gemini CLI + ImageFX + Veo 3.1 free en vids.new
2. **Cuenta Claude free** → Sonnet para copy y chat
3. **Cuenta ChatGPT free** → GPT para segundo cerebro cuando Claude se atasca
4. **n8n self-hosted** (Docker, una tarde) → todas las automatizaciones que quieras
5. **Lovable o Bolt free** → una landing, un MVP mensual

Cuando empieces a facturar o se te quede corto, el **primer upgrade** es **Claude Pro ($20/mes)**. Desbloquea Opus 4.7, Claude Projects y Claude Code con cuota decente. Si tu día es research intenso, cambia ese upgrade por **Gemini AI Pro ($20/mes)** por Deep Research + Veo 3.1 con audio.

Segundo upgrade cuando tu pipeline lo justifique: **Cursor ($20/mes)** si desarrollas producto, o **Perplexity Pro ($20/mes)** si tu core es research competitivo.

Total stack Pro realista para founder activo: **$40-60/mes**. Por debajo de una comida de negocios al mes.

---

última actualización: 22 abril 2026
versión 1.0
