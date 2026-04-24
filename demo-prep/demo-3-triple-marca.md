# Demo 03 · Triple de Marca (Nano Banana + Veo 3.1 + Claude Design)

**Bloque:** Marca · minuto ~50 a ~57 de la charla
**Duración objetivo:** 7 min (3 demos encadenadas)
**Tools:**
- Nano Banana Pro (Google, via Gemini AI Pro o AI Studio)
- Veo 3.1 (free en https://vids.new)
- Claude Design (Anthropic, incluido en Claude Pro/Max — research preview)

---

## Objetivo del momento

Mostrar en 7 minutos que imagen, vídeo y prototipo visual se pueden producir a nivel profesional con IA en 2026. Aplicable al lunes siguiente para cualquier founder que necesite marketing, landing, o prototipo.

## Concepto: startup ficticia "Paellabox S.L."

Food delivery valenciano inventado. Usado transversalmente en las 3 demos para coherencia. Opcional: si se te ocurre algo más "Lanzadera-style" con humor local, adáptalo (ej. "Horchata Analytics" SaaS, "Trinitat Mobility" apps transporte, etc.).

## Setup pre-demo (hacer 24h antes)

### Demo 3a · Nano Banana Pro (imagen)

**Prompt preparado** (está en `../asset-pack/prompts-plantilla.md`):

```
Hero shot publicitario cenital 3/4, caja de paella valenciana para
delivery, iluminación suave de estudio tipo editorial food magazine,
fondo terracota warm con textura sutil de mantel de lino, espacio
negativo a la izquierda para copy de campaña, mockup de producto
nítido con packaging kraft visible, tipografía prescindible, estilo
editorial tipo Kinfolk + Cereal Magazine, ratio 16:9, 4K.
```

**Pre-testar:**
- Genera 1-2 veces 24h antes
- Guarda el mejor output como PNG
- **Guarda también un output con prompt vago** ("foto de paella") para el contraste lado-a-lado

**Acceso:**
- Via Gemini AI Pro ($20/mes) — Manu ya paga
- O en AI Studio browser (Imagen/Nano Banana free con límites)

### Demo 3b · Veo 3.1 (vídeo)

**Prompt preparado:**

```
Vídeo de 8 segundos, panorámica horizontal suave de derecha a izquierda
de una terraza valenciana a la hora dorada, familia comiendo una paella
Paellabox en primer plano, camarero llevando horchata al fondo, cierre
en primer plano del packaging con logo visible, cámara lenta
cinematográfica 24fps, estilo comercial tipo anuncio Damm, grading
cálido warm golden hour.
```

**Acceso:**
- https://vids.new con cualquier cuenta Google (free 10/mes, 720p, 8s)
- **IMPORTANTE:** free tier **sin audio sincronizado** (Lyria 3 no incluido)
- Si quieres vídeo con audio → Google AI Ultra ($249.99/mes) o Veo API paid

**Pre-generar:**
- Genera 1 vídeo 24h antes (gastará 1 de tus 10 mensuales — vale la pena)
- Guárdalo como MP4
- Si gasta varios para obtener uno bueno — lo mismo, gastas hasta 3-4 del mes

### Demo 3c · Claude Design (prototipo)

**Prompt preparado:**

```
Crea un prototipo interactivo de landing page mobile-first para
"Paellabox" (food delivery valenciano):
- Hero con imagen generada + CTA primario "Pide ya"
- Sección de 3 productos con cards (paella valenciana, paella de
  marisco, arroz del senyoret)
- Sección de testimonios con 3 reseñas (5 estrellas)
- Footer con CTA secundario a pedido por WhatsApp
- Estilo: editorial food, paleta terracota + mostaza, tipografía
  serif para headlines + sans para body
- Interactivo: botones que reaccionan, scroll suave
```

**Acceso:**
- https://claude.ai/design (requiere Claude Pro/Max)
- Research preview desde 17 abril 2026

**Pre-testar:**
- Ejecuta 24h antes para ver cuánto tarda (típicamente 2-4 min)
- Guarda screenshot del prototipo final como backup

## Script en directo (~7 min)

**Minuto 0 — Arranque**
> *"Tres demos. 7 minutos. Una startup inventada que se llama **Paellabox S.L.**. Vamos."*

**Minuto 0-3 · NANO BANANA (imagen)**

- Abre el prompt en pantalla (visible para la sala)
- > *"Fijaos el prompt. Sujeto, composición, iluminación, espacio copy, estilo, ratio técnico. Nada vago. Esto es C1 y C3 aplicadas."*
- Genera
- **Mientras sale (~30-90s)**, si tienes tiempo, muestra el contraste:
  - Prompt vago → output genérico (pre-capturado)
  - Prompt C1-aplicado → el output actual
- Cuando termine, muestra el resultado a pantalla completa
- > *"Eso es imagen profesional de marketing. No ha tocado Midjourney, no ha tocado Photoshop. 90 segundos."*

**Minuto 3-5 · VEO 3.1 (vídeo) — lanzar y dejar corriendo**

- > *"Mientras la siguiente genera, lanzo el vídeo."*
- Abre vids.new
- Pega el prompt de vídeo
- Click Generate
- > *"Esto tarda ~3 minutos. Lo dejo corriendo y paso al último — diseño."*
- **NO esperes el vídeo. Avanza a la demo 3c.**

**Minuto 3-5 · CLAUDE DESIGN (prototipo) — en paralelo con Veo**

- Abre Claude Design
- Pega el prompt
- Genera (tarda ~2-3 min)
- Mientras genera, narra:
  > *"Claude Design se lanzó hace 5 días. Competidor directo de Figma. Y está INCLUIDO en Claude Pro si ya pagas 20€/mes."*
- Cuando termine, muestra el prototipo
- **Interactúa en vivo:** haz click en botones, scrollea, muestra hover states
- > *"Esto es un prototipo interactivo real. Si tu dev va a programarlo, hay un botón 'Export to Claude Code' que pasa el design system completo."*

**Minuto 5-6 · Volver a Veo — reproducir vídeo**

- Alt-tab a la pestaña de vids.new
- **Si ha terminado** (con suerte): reproduce los 8s en sala
  - > *"8 segundos, 720p, en Veo 3.1. Gratis. Diez de estos al mes."*
  - (Audio nota: free tier sin audio sincronizado — mencionar honestamente)
- **Si no ha terminado**: muestra el pre-generado
  > *"Veo sigue pensando. Os pongo el que generé esta mañana — misma idea."*

**Minuto 6-7 · Cierre del triple**

- Los 3 outputs visibles simultáneamente en pantalla (si se puede)
- > *"Nano Banana para marca. Veo 3.1 para social. Claude Design para prototipos. Los 3 pueden ser gratis. Los 3 son mejores hoy que hace 3 meses. Si la última vez que intentasteis esto fue hace un año, olvidad lo que visteis."*

## Backup plans

### Si Nano Banana falla
Pre-generados listos en pestañas. Honestidad verbal: *"Lo hice esta mañana con el mismo prompt, os lo enseño."*

### Si Veo 3.1 tarda >4 min o falla
Skip. Pasa directamente al pre-generado sin avisar (fluidez) o con transparencia verbal.

### Si Claude Design no responde
- Screenshot del prototipo + recorrido visual en voz
- Backup extremo: Google Stitch (free) en vez de Claude Design, mismo tipo de demo

### Si el audio de Veo genera expectativa (alguien pregunta)
> *"Free tier es sin audio sincronizado — Lyria 3 para música/voz no está en free. Google AI Ultra a 249€/mes sí lo incluye. Para los 8 segundos que acabáis de ver — le añadís un track de ElevenLabs o Suno después, son 2 minutos."*

## Métricas de éxito

- [ ] Al menos 2 de 3 demos completadas en vivo
- [ ] Contraste "prompt vago vs C1-aplicado" ejecutado al menos para Nano Banana
- [ ] Mención explícita de "Veo 3.1 = free, 10/mes"
- [ ] Mención explícita de "Claude Design ya está en Pro/Max"

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Las 3 demos no caben en 7 min | Priorizar Nano Banana y Veo; Claude Design puede ser screenshot si hace falta |
| Cuenta Claude Design no activada aún (research preview no rolled out) | Verificar 24h antes — si no está, sustituir por Stitch |
| Prompt de imagen genera algo culturalmente inapropiado | Pre-testar bien; tener 2-3 outputs aprobados listos para usar |
| Audiencia pide verlo con su propia startup | Respuesta: "hazlo tú en el asset descargable — tiene el prompt exacto, cambias el nombre" |
| Veo free tier rechaza por política contenido | Prompt pre-aprobado (nada de marcas reales, nada de personas identificables) |
