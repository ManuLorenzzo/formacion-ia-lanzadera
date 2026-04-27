# Demo · Cowork + Artifact · Pawly Pain Map (caso Pawly)

**Bloque:** Día a día · ejecutar · ~minuto 25 a 27 de la charla
**Duración objetivo:** ~90 segundos en sala
**Tool:** Claude Cowork (Claude Pro, Mac/Windows desktop)
**Backup:** Screenshot estático del Artifact en una slide local

---

## Objetivo del momento

Mostrar la **segunda salida** del mismo research generado con Deep Research: una herramienta interactiva en la mesa de Carlos. No un PDF. Cowork lee el `voice-of-customer-pet.md` y construye un Pain Map manipulable: cuadrante 2D de dolores, color por gap competitivo, slider de segmento, big number con la "top opportunity".

Mensaje implícito: **el research no se queda en texto — se vuelve software vivo.**

## Setup pre-demo (la noche antes, ~3–4 horas)

### 1. Prerrequisito

Tener `voice-of-customer-pet.md` ya generado (output del Demo 1). Sin eso, Cowork no tiene input. Ver `demo-1-gemini-deep-research.md`.

### 2. Abrir Claude Cowork

- Asegurarse de que Claude desktop está actualizado a la última versión (Cowork sigue en beta — versiones cambian rápido)
- Login con cuenta Claude Pro
- Verificar que Cowork está activo (icono en menú o conector visible)

### 3. Conversación nueva

Crear conversación dedicada: `Pawly · Pain Map · Abril 2026`

### 4. Prompt inicial para construir el Artifact

Pega este prompt en Cowork (también está en `../asset-pack/prompts-plantilla.md` Demo 2bis):

```
Adjunto voice-of-customer-pet.md — el research que acabo de generar con Deep Research.
Contiene 10 dolores top del sector marketplaces pet en España y Portugal, con frecuencia, gravedad, gap competitivo y quotes.

Soy founder de Pawly. Quiero VER los dolores como una herramienta interactiva — no leerlos en markdown. Esto vive en mi escritorio, lo uso yo, no es para vender.

Construye un Artifact (HTML + JS standalone, sin frameworks externos) que:
1. Muestre los 10 dolores como puntos en un cuadrante 2D — eje X frecuencia (bajo/medio/alto), eje Y gravedad (1-5)
2. Coloree cada punto según gap competitivo: verde (nadie lo resuelve), ámbar (parcial), rojo (resuelto bien por algún competidor)
3. Big number arriba: "TOP OPPORTUNITY" — el dolor con mayor frecuencia × gravedad y color verde. Mostrar la quote literal abajo
4. Slider de segmento (urbano/rural según el research, o "todos" por defecto) — los puntos se reordenan
5. Click en cualquier punto → tarjeta lateral con quote literal, frecuencia exacta, URL de fuente

Estilo: minimalista, tipografía sans-serif (system-ui), paleta sobria. No frameworks.

CHECK:
- Todos los datos vienen del adjunto. NO inventes dolores.
- Si un eje (segmento) no está diferenciado en el research, márcalo "no segmentado" en lugar de inventarlo.
- El Artifact debe funcionar standalone — abrible sin internet.
```

Adjuntar el archivo `voice-of-customer-pet.md` (drag & drop o "+ Add files" según la versión de Cowork).

### 5. Iterar 2–3 veces

El primer Artifact rara vez sale perfecto. Itera con prompts cortos:

- *"El slider no recalcula los puntos. Hazlo reactivo."*
- *"El big number no se actualiza al cambiar segmento. Recalcula la top opportunity dentro del filtro."*
- *"Los colores son confusos. Verde solo cuando 'nadie lo resuelve' literal. Ámbar si solo 1 competidor parcial. Rojo si 2+ lo resuelven bien."*
- *"Añade un export a PNG del cuadrante para meter en el sprint planning."*

Tiempo realista: 3–4 horas la noche antes con iteración.

### 6. Verificar funciona

- El Artifact se renderiza en la ventana lateral de Cowork
- El slider mueve los puntos
- El big number cambia según segmento
- Los colores son consistentes con el research
- Click en un punto muestra la quote y URL

### 7. CRÍTICO: NO cerrar Claude desktop la noche antes

Deja la conversación abierta con el Artifact renderizado. Si Claude desktop se reinicia o cierras, Cowork puede pedir login y el Artifact puede no recargar igual.

### 8. Backup screenshot

- Screenshot del Artifact con el slider en posición "todos" — top opportunity claro
- Screenshot del Artifact con slider en posición "urbano" — la top opportunity diferente
- Guardar como `pain-map-screenshot-1.png` y `pain-map-screenshot-2.png`
- Estos screenshots irán en una slide local oculta como fallback

## Script en directo (~90 segundos)

**Minuto 0 — Setup del momento (10s)**
> *"Demo dos. Pawly Pain Map. Lo que Cowork hizo anoche cogiendo el research que acabamos de ver."*

**Minuto 0–0.5 — ALT-TAB a Claude Cowork**
- Conversación previa ya abierta
- Scroll hasta el último mensaje donde está el Artifact renderizado

**Minuto 0.5–1 — Mostrar el Artifact (~30s)**
- Apunta al cuadrante: *"10 dolores reales, cada punto un dolor. Verde = nadie lo resuelve. Rojo = ya bien resuelto."*
- Apunta al big number arriba: *"Top opportunity: 'vet disponible los domingos' — 847 menciones, gravedad 4.6, NADIE lo resuelve. Eso es la decisión de feature de Pawly V2 si Carlos hace caso al research."*

**Minuto 1–1.5 — Manipulación en vivo (~30s) · EL WOW**
- Mueve el slider de segmento de "todos" a "urbano Madrid+Barcelona"
- Los puntos se reordenan
- Big number cambia: *"Ahora la top opportunity es 'guardería de fin de semana'. Mismo research, segmento distinto, decisión distinta."*

**Minuto 1.5 — Frase de cierre (~10s)**
> *"Esto NO es un PDF. No es un report. Es software vivo en la mesa de Carlos. Para él. No para vender. Y enlazamos con la última herramienta de la palanca — NotebookLM."*

## Backup plans

### Si Cowork no abre / sesión caducada
- Plan A: relogin rápido (tener credenciales a mano)
- Plan B: usar los screenshots pregenerados en una slide local. Cuenta lo mismo, perdiendo solo la manipulación en vivo del slider. Frase de cierre funciona igual.

### Si el Artifact no renderiza al abrir la conversación
- Plan A: hacer scroll hacia arriba en la conversación → typically Cowork re-renderiza Artifacts al volver a verlos
- Plan B: pedirle a Cowork "muéstrame el Artifact otra vez" — puede regenerarlo
- Plan C: screenshots backup

### Si el slider no funciona en vivo (bug de render)
- No te frustres en directo. Cuenta solo el cuadrante estático, lee el big number, y pasa a NotebookLM. La sala no nota lo que falta si tú no lo enuncias.

### Si Cowork está down o en mantenimiento
- Screenshots como única vía. La narrativa funciona igual.

## Reglas de oro

1. **NO pedir nada nuevo a Cowork en sala.** Cowork está en beta, llamadas en vivo pueden romper. Solo manipulación local del Artifact ya cargado (slider).
2. **NO cerrar Claude desktop entre la noche y la sala.** Pone en riesgo el render del Artifact.
3. **Tener los screenshots backup probados** en una slide local oculta antes del evento.
4. **No te enrolles.** 90 segundos máximo. La demo del NotebookLM viene justo después.

## Métricas de éxito

- [ ] Artifact visible en sala con cuadrante + big number renderizados
- [ ] Slider movido al menos una vez con respuesta visible (puntos reordenan, big number cambia)
- [ ] Frase "software vivo en su mesa, no un PDF" dicha en alto
- [ ] Total <2 min — si te pasas de 2.5 min ya estás en mal sitio

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Cowork beta cambia UI entre versiones | Reverificar setup la mañana del evento. Tener screenshots por si acaso |
| Artifact construido la noche antes no carga al día siguiente | Conversación abierta + Claude desktop sin reiniciar; screenshots como red de seguridad |
| Audiencia pregunta "¿esto está disponible para mí?" | Honestidad: "Cowork está en beta, incluido en Claude Pro ($20/mes). Algunas features cambian de mes a mes" |
| Audiencia pregunta por seguridad | "Tú das permiso. Toca solo carpetas que apruebes. Pero es beta — no lo conectéis aún a cuentas sensibles sin probar antes en un sandbox" |
