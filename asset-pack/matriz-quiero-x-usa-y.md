---
title: Matriz Quiero X → usa Y
subtitle: Stack de herramientas IA para founders, ordenado por palancas
eyebrow: Material 01
---

Decide rápido: tienes un problema concreto, busca el caso en la tabla y te digo qué herramienta usar. Dos versiones: **Free Stack** (sin tarjeta) y **Pro Stack** (con presupuesto, 20-200 €/mes).

> **Cómo está organizado.** Las tres palancas de la charla son la columna vertebral del pack: **Día a día** (asistentes para investigar, digerir y ejecutar), **Producto** (construir lo que vendes) y **Marca** (contenido visual y sonoro). La tabla sigue ese orden.

> **Aviso sobre el bloque Producto.** Las recomendaciones de MVP/SaaS están pensadas **principalmente para founders no técnicos o técnicos con poco tiempo**. Si eres dev senior con horas para invertir, existen rutas más potentes (Claude Code en Claude Max, Codex API) pero con más fricción y curva de aprendizaje.

---

## Free Stack

Todo lo que puedes tener operativo hoy con una cuenta Google + una cuenta Claude free. Cero tarjeta.

### Día a día

| Quiero | Tool | URL | Free limits | Nota |
|---|---|---|---|---|
| **Investigar** con citas verificables | Gemini Deep Research (free) | gemini.google.com | Deep Research limitado en free, completo con AI Pro | Para un research serio al mes, suficiente. Para uso intensivo, pasar a Pro. |
| **Digerir** docs largos en podcast / mapa mental | NotebookLM | notebooklm.google.com | 100 notebooks · 50 fuentes/notebook · 500K palabras/fuente | El mejor RAG gratuito sobre PDFs, docs y webs. Cita pasajes exactos. Audio Overview en castellano. |
| **Ejecutar** tareas en mi ordenador | — | — | — | Cowork no tiene tier free real. Ver Pro Stack. |
| **Analizar** PDF/vídeo largo | Gemini 2.5 Pro (AI Studio) | aistudio.google.com | 1M tokens de contexto, gratis en navegador | 1M de contexto = ~1.500 páginas. Vídeo hasta ~2 h. |
| **Chat diario** | Claude free + ChatGPT free + Gemini | — | Cuotas diarias moderadas en los 3 | Rotar entre los 3 cuando se agota la cuota. |
| **Copy / contenido** | Claude free (Sonnet) | claude.ai | Cuota diaria reseteable | Sonnet free es suficiente para copy corto. |

### Producto

| Quiero | Tool | URL | Free limits | Nota |
|---|---|---|---|---|
| **Landing** + captura de leads | Lovable (free) | lovable.dev | 5 mensajes/día, proyectos públicos | Tier free ajustado. Alternativa: Bolt con tokens diarios reseteables. |
| **MVP / SaaS** funcional | Bolt | bolt.new | Tokens diarios reseteables | Genera full-stack en navegador. Para prototipos rápidos sin código. |
| **Diseño** rápido (UI / mockup) | Stitch (Google) | stitch.withgoogle.com | Free tier con créditos limitados | Genera UIs desde texto. Alternativa: v0 con cuota free. |
| **Automatizar** apps | n8n (self-hosted) | n8n.io | Ilimitado si lo levantas tú con Docker | Cloud free está muy restringido — el self-host es la vía. Una tarde de setup. |
| **Código** diario | Gemini CLI | github.com/google-gemini/gemini-cli | Gratis con cuenta Google, usa Gemini 2.5 Pro | Alternativa gratuita a Claude Code. Funciona en terminal. |

### Marca

| Quiero | Tool | URL | Free limits | Nota |
|---|---|---|---|---|
| **Imagen** marketing | Nano Banana Pro (Gemini) | gemini.google.com | Generaciones limitadas/día en free | Modelo de imagen de Google. Para volumen, AI Pro. |
| **Vídeo** corto para redes | Veo 3.1 (Google Vids / Flow) | vids.new · flow.google.com | Vids: 10 vídeos/mes · Flow: 12 vídeos/día. 720p, 8s, sin audio sincronizado, watermark "Made with Veo" | **Cambio importante de abril 2026:** Veo 3.1 ahora es gratis directo desde cuenta Google. Flow es más generoso para iterar. |
| **Vídeo** alta calidad (alternativa) | Kling 3.0 (free tier) | klingai.com | 66 créditos/día, 360–540p, watermark, sin uso comercial | **#1 mundial en realismo de movimiento**. Para uso comercial, ir a Standard ($5,99/mes). |
| **Clonar voz** | ElevenLabs (free) | elevenlabs.io | 10K caracteres/mes, voces pre-hechas | Clonación de voz propia desde Starter ($5/mes). |
| **Música / jingles** | Suno (free) | suno.com | 10 créditos diarios (~10 canciones cortas) | Para uso comercial, Suno Pro ($10/mes). |

---

## Pro Stack

Cuando el Free Stack se queda corto y el tiempo vale más que los 20-200 €/mes. Precios referencia abril 2026.

### Día a día

| Quiero | Tool | URL | Precio | Cuándo compensa |
|---|---|---|---|---|
| **Asistente que ejecuta** en mi ordenador | Claude Cowork (Claude Pro) | claude.ai | $20/mes | Abre archivos, escribe mails, monta Excels, construye Artifacts a partir de tus PDFs. Y desde el móvil con Dispatch. **La pieza estrella de la palanca Día a día.** |
| **Chat sobre mis docs** | Claude Projects (Claude Pro) | claude.ai | $20/mes | Conocimiento en el mismo sitio donde chateas. Alternativa: NotebookLM Pro si prefieres el ecosistema Google. |
| **Research con citas** ilimitado | Perplexity Pro | perplexity.ai | $20/mes | Deep Research ilimitado (corre sobre Claude Opus). Si ya tienes Claude Pro, redundancia parcial — elige uno. |
| **Analizar PDF / vídeo largo** | Gemini AI Pro | gemini.google.com | $20/mes | Acceso completo a Gemini 2.5 Pro (1M contexto), Deep Research full, Veo 3.1 con audio. |

### Producto

| Quiero | Tool | URL | Precio | Cuándo compensa |
|---|---|---|---|---|
| **Landing** profesional iterable | Lovable Pro | lovable.dev | $25/mes | Cuando iteras landings cada semana. La opción estándar para founders no técnicos. |
| **MVP / SaaS** funcional | Lovable Pro · Bolt Pro · v0 | — | $20-25/mes | Lovable para full-stack end-to-end. v0 si ya estás en ecosistema Vercel/Next. |
| **Diseño** rápido | Claude Design · Gemini Design · Stitch | — | Incluidos en Claude Pro / Gemini AI Pro | Usa el que ya pagas. |
| **Automatizar** apps | Make · Zapier · n8n Cloud | — | Make $9 · Zapier $20 · n8n $20/mes | Make tiene mejor relación calidad/precio. Zapier es el más fácil. n8n self-host sigue siendo gratis. |
| **Código** diario (founder técnico) | Claude Code (Claude Max) | claude.com/claude-code | $90-200/mes | Estándar para founders técnicos que viven en CLI. **Importante:** Claude Code ya no está en el plan Pro de $20 — se movió a Max. |

### Marca

| Quiero | Tool | URL | Precio | Cuándo compensa |
|---|---|---|---|---|
| **Imagen** marketing premium | Nano Banana Pro (Gemini AI Pro) · Midjourney v8 | — | Gemini AI Pro $20/mes · MJ $10-60/mes | Nano Banana para integración con stack Google. Midjourney para calidad artística pura. |
| **Vídeo** con audio sincronizado | Veo 3.1 (Gemini AI Pro / Ultra) | gemini.google.com | AI Pro $20 · AI Ultra $250/mes | Veo en AI Pro tiene audio nativo sincronizado. Ultra desbloquea más cuota y 1080p. |
| **Vídeo** mejor calidad de movimiento | Kling 3.0 Standard | klingai.com | $5,99/mes | #1 mundial en realismo, supera a Veo en motion. Sin audio sincronizado en Standard — añade voz con ElevenLabs después. |
| **Vídeo** humanos y velocidad | Hailuo 2.3 (Minimax) | hailuoai.video | ~$10/mes | El más rápido del lote. Mejor en humanos y microexpresiones que sus competidores chinos. |
| **Vídeo** edición profesional | Runway Gen-4.5 | runwayml.com | $12-95/mes | Suite editorial completa. Para post-producción seria. |
| **Clonar voz** comercial | ElevenLabs Creator/Pro | elevenlabs.io | Desde $22/mes | Instant Voice Cloning desde Starter ($5). Creator para uso comercial serio. |
| **Música / jingles** comercial | Suno Pro | suno.com | $10/mes | Licencia comercial + más créditos. |
| **Chat diario** | Claude Pro + ChatGPT Plus | — | $20 + $20/mes | Si tienes que elegir uno: Claude Pro. Si puedes pagar dos, tienes ambos universos. |
| **Copy / contenido** | Claude Pro (Opus 4.7) | claude.ai | $20/mes | Opus es el mejor modelo para escritura larga con voz propia. |

---

## Agregadores · una suscripción, varios modelos

Si dudas qué herramienta encaja con tu estética y quieres comparar varias sin pagar 4 suscripciones distintas:

| Plataforma | Precio | Diferenciador | Cuándo elegirlo |
|---|---|---|---|
| **Higgsfield** | $15-99/mes (sin free) | 15+ modelos (Sora 2, Veo 3.1, Kling 3.0, Seedance, WAN). Cinema Studio: control real de cámara, lente y focal. | Vídeo cinematográfico, anuncios de marca con look de cine. |
| **Krea** | $9-200/mes · free 100 cr/día | 64 modelos (Flux, Veo 3, Runway) + Krea 1 propio. Generación en tiempo real (50 ms) en imagen. | Iterar visualmente rápido, diseñadores y founders que prueban mucho. |
| **Leonardo** | $12-48/mes · free 150 cr/día | 20+ modelos (Flux, Veo, Kling, Sora, Nano Banana) + Phoenix y Motion propios. Fine-tuning custom: subes 10 fotos y entrena tu estilo de marca. | Consistencia visual a escala (e-commerce, app con cientos de imágenes en el mismo look). |

Si vas a cero euros, mejor directo a la fuente — Veo gratis (Google Vids/Flow) + Kling free. Los agregadores compensan cuando ya tienes presupuesto y quieres comparar varios modelos en un solo flujo.

---

## Mi recomendación bootstrap

**Stack 0 €/mes** que cubre el 80% de los casos para un founder que empieza:

1. **Cuenta Google** → NotebookLM + Gemini 2.5 Pro (1M contexto) en AI Studio + Gemini CLI + ImageFX + Veo 3.1 free en Vids/Flow
2. **Cuenta Claude free** → Sonnet para copy y chat
3. **Cuenta ChatGPT free** → segundo cerebro cuando Claude se atasca
4. **n8n self-hosted** (Docker, una tarde) → todas las automatizaciones
5. **Lovable o Bolt free** → una landing, un MVP rápido al mes

Cuando empieces a facturar o se te quede corto, el **primer upgrade** es **Claude Pro ($20/mes)**: desbloquea Opus 4.7, Claude Projects, Claude Cowork (la pieza estrella) y Dispatch. Si tu día es research intenso, cambia ese upgrade por **Gemini AI Pro ($20/mes)** por Deep Research full + Veo 3.1 con audio.

**Segundo upgrade** cuando el pipeline lo justifique:
- **Lovable Pro ($25/mes)** si iteras producto cada semana
- **Perplexity Pro ($20/mes)** si tu core es research competitivo
- **ElevenLabs Creator ($22/mes)** si haces vídeo / podcast con voz clonada

**Total realista para founder activo: $40-60/mes.** Por debajo de una comida de negocios.

---

*Última actualización: 28 abril 2026 · v1.1*
