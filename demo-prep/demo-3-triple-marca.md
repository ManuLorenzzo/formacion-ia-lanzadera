# Demo · Marca · Pawly anuncia "vet los domingos"

**Bloque:** Marca · ~minuto 50 a 56 de la charla
**Duración objetivo:** 6 min (2 demos encadenadas)
**Caso fijo:** Pawly — la novedad que descubrimos en la palanca 1 (research) y construimos en la palanca 2 (landing).
**Herramientas:**
- **Imagen del anuncio** → Nano Banana Pro (vía Gemini AI Pro o AI Studio)
- **4 variantes para redes** → Claude Design (incluido en Claude Pro/Max — versión beta)

---

## El caso (cierre narrativo de la charla)

Toda la charla converge aquí. Carlos, founder de Pawly, ya tiene:

- **Palanca 1 · Día a día** → descubrió en el research que "vet disponible los domingos" es el dolor más mencionado del sector pet (847 menciones, gravedad 4.6/5, nadie lo resuelve).
- **Palanca 2 · Producto** → construyó la landing de Pawly con la novedad incluida.
- **Palanca 3 · Marca (esta demo)** → toca anunciarlo en redes. Una imagen del anuncio + 4 variantes para todos los formatos.

El claim de la campaña es uno solo, en castellano natural:

> **"Tu perro no entiende de domingos. Nosotros sí."**

Lo cuelas en el guión sin enfatizar — la sala lo retiene porque es bueno.

---

## Setup pre-evento (la noche antes, ~1.5 horas)

### 1 · Imagen con Nano Banana Pro

**Prompt completo** (también en `../asset-pack/prompts-plantilla.md`):

```
SUJETO: Mujer joven, unos 30 años, pelo recogido en moño suelto, jersey
de punto crema, sentada en el sofá del salón un domingo por la tarde.
Su golden retriever tumbado a su lado, decaído pero ya más sereno: la
cabeza apoyada con confianza sobre la mano de la mujer, ojos
entreabiertos pero no vidriosos, respiración tranquila, una manta de
lana ligera cubriendo parte del cuerpo. El perro está mejor — la
tensión ya pasó.

La mujer mira al perro y le acaricia la cabeza con una mano, con
cariño visible. Con la otra mano sostiene un móvil ya bajado,
descansando contra su muslo. La pantalla del móvil NO es visible al
espectador (el móvil está de canto o ligeramente girado hacia la
mujer), pero un brillo sutil de pantalla activa ilumina los dedos de
ella — sugiriendo que la llamada acaba de terminar pero el dispositivo
sigue encendido.

Su expresión: alivio resuelto, ojos suaves hacia el perro, una media
sonrisa apenas visible, hombros completamente relajados. La sensación
es "ya está, todo va bien, ahora solo cuidar".

COMPOSICIÓN: medium shot, low angle, rule of thirds. Sujetos al
centro-izquierda. Cabeza del perro en foreground, mujer en mid-ground.
Single integrated frame, no splits, no seams.

ILUMINACIÓN: golden hour late afternoon, soft natural light from window
left, rim light suave en el pelo de la mujer y en el lomo del perro.
Sombras largas y suaves. No artificial light.

FONDO: salón hogareño con paleta crema y madera clara. Estantería de
libros desenfocada al fondo. Una taza de té sobre la mesa cercana.
Bokeh medio.

ESTILO: editorial cinematic photography, Apple/Airbnb campaign look.
Warm palette (cream, tan, soft brown). Subtle 35mm film grain.
Photorealism, not illustration. Shallow depth of field, f/2.8.

RESTRICCIONES TÉCNICAS: formato 9:16 vertical para Instagram Reel y
Story. Single integrated frame. No text generated in image. No logos
or watermarks. Natural hands without finger deformities. La mirada de
la mujer DEBE ir al perro, no al móvil. El móvil bajado, pantalla NO
visible al espectador. El perro debe verse mejor de lo que estaba —
sereno, no saludable del todo, pero claramente fuera de la zona de pánico.
```

**Pasos pre-evento:**
1. Genera 2-3 versiones la noche antes (Gemini app, modo imagen, mejor que vids.new)
2. Elige la mejor — guárdala como `pawly-anuncio-imagen.png`
3. **CRÍTICO**: genera también una versión con prompt vago para enseñar contraste:
   ```
   Imagen para un anuncio de Instagram de Pawly (marketplace para
   dueños de perros). Estamos lanzando un nuevo servicio: veterinario
   disponible los domingos. Quiero algo cálido y emocional, que
   transmita confianza, con un dueño y su perro.
   ```
   Guárdala como `pawly-anuncio-vago.png`. La enseñas en sala como contraste para reforzar la tesis "especificar > cambiar de herramienta".

### 2 · Variantes con Claude Design

**Prompt completo:**

```
Tengo la imagen del anuncio de Pawly (la generada con Nano Banana,
la adjunto).

Quiero adaptarla a 4 formatos para redes:
1. Instagram cuadrado (1:1, 1080×1080)
2. Instagram Story / Reel vertical (9:16, 1080×1920)
3. Facebook horizontal (1.91:1, 1200×630)
4. Banner web horizontal (16:9, 1920×1080)

Mismo titular en las 4: "Tu perro no entiende de domingos. Nosotros sí."
Subtítulo más pequeño: "Veterinario los 7 días. Solo en Pawly."
Logo de Pawly visible en una esquina (placeholder cuadrado verde con
la palabra Pawly en blanco, sans serif).

Reglas:
- Tipografía clara, jerarquía evidente entre titular y subtítulo
- El titular bien legible y en lugar visible en cada formato
- La imagen no se debe deformar — recorta o reposiciona sin estirar
- Paleta consistente con la imagen base, verde Pawly solo en el logo y CTA
- Estilo general: minimalista, editorial, NO publicidad agresiva
- CTA secundario en cada variante: "Descarga la app"

Mostrar las 4 variantes en una sola pantalla para comparar.
```

**Pasos pre-evento:**
1. Verifica que tu cuenta tiene acceso a Claude Design ([claude.ai/design](https://claude.ai/design))
2. Genera las 4 variantes una vez la noche antes — captura screenshot
3. Guarda screenshot como `pawly-anuncio-variantes.png` (backup)

---

## Script en directo (~6 min)

**Minuto 0 · Apertura**

> *"Última demo. Y enlaza con todo. Recordáis — la palanca 1, el research dijo: 'vet disponible los domingos', ochocientas cuarenta y siete menciones, gravedad cuatro coma seis. Nadie lo resolvía. La palanca 2, construimos la landing. Carlos ahora tiene la novedad lista. Toca anunciarla en redes. Dos piezas: la imagen del anuncio y las variantes para todos los formatos."*

**Minuto 1-3 · IMAGEN — Nano Banana**

- Alt-tab a Gemini con Nano Banana Pro
- Pega el prompt visible para la sala
- Lee en alto los 7 campos del prompt (sujeto, composición, iluminación, fondo, espacio para titular, estilo, restricciones)
- > *"Misma tesis de toda la charla. DECLARAR. Le cuento la escena, no le digo 'haz algo guay'. La IA no es un mago — es un becario muy capaz que necesita brief."*
- Click Generate. Tarda 30-90 segundos.
- **Mientras genera**, abre en pestaña vecina la versión con prompt vago.
- > *"Esto es lo que sale si le pides el anuncio en una frase normal de founder no técnico. Genérico. Stock. Cualquier marca."*
- Vuelve a la pestaña principal. Cuando termine, pantalla completa.
- > *"Y esto es lo que sale con el brief detallado. Cinemática. Domingo en casa. La cara de alivio de la madre. Material de campaña."*

**Minuto 3-6 · VARIANTES — Claude Design**

- Alt-tab a [claude.ai/design](https://claude.ai/design)
- Adjunta la imagen recién generada (o el backup pre-generado)
- Pega el prompt de las 4 variantes
- Click Generate (~2-3 minutos)
- **Mientras genera**, narra:
  > *"Claude Design salió hace dos semanas. Lo que antes hacíais en Figma con un diseñador y dos días, ahora os lo monta Claude en cinco minutos. Y la clave: si ya pagáis Claude Pro, esto está incluido. No os cuesta nada extra."*
- Cuando termine, muestra las 4 variantes en pantalla.
- > *"Mismo anuncio, cuatro formatos. Cuadrado para Instagram feed, vertical para Stories y Reels, horizontal para Facebook, banner para web. Mismo titular: 'Tu perro no entiende de domingos. Nosotros sí.' Cuatro piezas listas para subir."*

**Minuto 6 · Cierre**

Si puedes, pon los 2 outputs juntos en pantalla (imagen + variantes).

> *"Lo que tenéis aquí: imagen de campaña y cuatro variantes para todos los formatos. Para anunciar la novedad de Pawly. Cero euros si tiráis de versiones gratis (AI Studio + Stitch de Google). Veinte euros al mes si ya pagáis Gemini AI Pro o Claude Pro."*

> *"Antes de la IA: fotógrafo, dos semanas, quinientos euros. Diseñador, cuatro días, trescientos euros. Un mes y ochocientos para anunciar UNA novedad. Hoy lo habéis visto delante."*

→ Transición a la siguiente slide ("El prompt no lo escribes tú. Te lo escribe Claude.").

---

## Backup plans

### Si Nano Banana falla en sala
Ya tienes `pawly-anuncio-imagen.png` y `pawly-anuncio-vago.png` pre-generados. Los abres en visor de imágenes a pantalla completa. La narrativa funciona igual.

### Si Claude Design no carga / cuenta sin acceso
- Plan A: usa la screenshot pre-generada `pawly-anuncio-variantes.png`
- Plan B: usa Google Stitch ([stitch.withgoogle.com](https://stitch.withgoogle.com)) en vez de Claude Design — gratis, mismo tipo de demo

### Si el output de Nano Banana sale raro (perros con manos extrañas, ojos mal)
La IA falla más con animales y manos. Si el output bueno de la noche anterior es OK pero el de sala sale mal, di la verdad: *"Esto pasa — perros y manos son los puntos débiles. La buena fue la de anoche. Os la enseño."* — y abres `pawly-anuncio-imagen.png`.

---

## Si alguien pregunta por vídeo

> *"El meta-prompt para vídeo está en el asset descargable. Mismo patrón: declaras la escena en castellano normal, Claude te hace el guion técnico para Veo 3.1 (gratis directo desde Google) o para Kling 3.0 (los chinos, líderes en calidad pura, 5,99 $/mes). No lo demostramos hoy en sala porque queríamos centrarnos en imagen y variantes con tiempo. El flujo es idéntico."*

---

## Métricas de éxito

- [ ] Las 2 herramientas mostradas en sala (imagen + variantes)
- [ ] Mínimo una de las dos ejecutada en vivo (no solo backup)
- [ ] Contraste prompt vago vs prompt detallado mostrado en imagen
- [ ] El claim "Tu perro no entiende de domingos. Nosotros sí." dicho en alto al menos una vez
- [ ] La sala oye que el research → la novedad → el anuncio es el mismo Pawly de toda la charla
- [ ] Total <7 min — si te pasas de 7.5 min, recortas el cierre

---

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Cuenta de Claude Design sin acceso a la versión beta | Verifica 24h antes. Si no está, sustituye por Google Stitch |
| El prompt de imagen genera algo culturalmente raro o triste de más | Pre-genera la noche antes con 2-3 versiones, elige la buena |
| Audiencia pregunta por privacidad | "Nano Banana sube tu imagen a Google. Claude Design sube tu prompt a Anthropic. Para campañas de anuncios públicos no hay problema. Si trabajáis con datos sensibles, mirad las políticas — Anthropic no entrena con tus datos en plan Pro" |
| Audiencia pregunta por qué no demostraste vídeo | "Para no saturar. Veo 3.1 lo enseñé como gratis en la slide del estado del arte; Kling 3.0 también está ahí como líder de calidad. El meta-prompt para vídeo está en el asset descargable" |
