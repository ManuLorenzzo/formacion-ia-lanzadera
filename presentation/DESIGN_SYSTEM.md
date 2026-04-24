# Design System — Formación IA Lanzadera

> Sistema visual para la presentación de Manu Lorenzo (Mint ITV) en Lanzadera, abril 2026.
> Referencias: Pragmatic Engineer, The Economist, Stripe, Linear, Vercel.
> Meta: que al abrir un draft se sienta editorial tech, no AI-generic.

---

## 1 · Filosofía

| Principio | Traducción práctica |
|---|---|
| Tipografía pesa más que color | Jerarquía por tamaño + peso, no por saturación |
| Densidad editorial | Más data por slide que en Gamma. Legible desde la última fila |
| Color con propósito | Los 4 tonos de palanca no decoran, marcan contexto |
| Ornamento mínimo | Hairlines, subrayados editoriales, square bullets. Cero gradientes |
| Print feel | Tinta + papel con matiz cálido, no blanco puro (#f6f4ef) |

---

## 2 · Paleta

### Tintes base (papel + tinta)

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#f6f4ef` | Fondo default de slide (matiz papel) |
| `--paper-pure` | `#ffffff` | Cards, tablas densas, callouts |
| `--paper-sunken` | `#ece8df` | Code bloque inline, aside, hover |
| `--ink` | `#15161a` | Texto principal |
| `--ink-soft` | `#35373d` | Texto secundario, leads |
| `--ink-mute` | `#6e7079` | Captions, metadata, monospace |
| `--ink-faint` | `#a7a9b0` | Dividers, placeholders |
| `--rule` | `#d5d0c3` | Hairline de tabla y divider sutil |

### Colores de palanca (sobrios, desaturados)

| Palanca | Token | Hex | Por qué |
|---|---|---|---|
| **Cliente** | `--palanca-cliente` | `#2f5d4b` | Verde profundo "bosque". Confianza, relación larga |
| **Equipo** | `--palanca-equipo` | `#5b4a7a` | Morado eclesiástico desaturado, no neón |
| **Marca** | `--palanca-marca` | `#a84a32` | Terracota tipo salmón del Financial Times |
| **Datos** | `--palanca-datos` | `#1e3a5f` | Azul Economist profundo |

Cada uno tiene variante `-soft` (tinte 8% para background suave).

### Acentos funcionales

| Token | Hex | Uso |
|---|---|---|
| `--accent-highlight` | `#f4d35e` | Marcador amarillo editorial (subrayado bajo texto) |
| `--accent-success` | `#3a6b4a` | Delta positivo |
| `--accent-danger` | `#8a2a2a` | Delta negativo |

---

## 3 · Tipografía

| Rol | Familia |
|---|---|
| Sans (UI + headings) | **IBM Plex Sans** (300/400/500/600/700 + italic) |
| Serif (énfasis, quotes, números editoriales) | **IBM Plex Serif** |
| Mono (code, metadata, eyebrows, captions) | **IBM Plex Mono** |

**¿Por qué IBM Plex?** Es una superfamily diseñada por Bold Monolith para IBM. Las tres familias se leen claramente como hermanas, tiene versión mono muy competente para code, y se siente técnica-sin-ser-Inter. Se usa en docs serias (IBM, algunos editoriales tech), así que evita el look "LinkedIn / startup landing".

### Escala

| Token | Tamaño | Uso |
|---|---|---|
| `--fs-mega` | 7.2rem | Hero / portada / DatoAncla XL |
| `--fs-display` | 5rem | Números dominantes |
| `--fs-h1` | 3.18rem | Título slide |
| `--fs-h2` | 2.52rem | Sección |
| `--fs-h3` | 2rem | Subsección |
| `--fs-h4` | 1.58rem | Título de bloque |
| `--fs-lead` | 1.26rem (italic serif) | Párrafo intro |
| `--fs-body` | 1rem (18px) | Texto base |
| `--fs-small` | 0.82rem | Tablas, metadata |
| `--fs-caption` | 0.72rem (mono) | Fuente, fecha, leyenda |

---

## 4 · Componentes disponibles

Están registrados automáticamente por Slidev al vivir en `/presentation/components/`.

### `<PalancaHeader>`

Abre cada una de las 4 secciones del cuerpo. Número enorme en Serif italic, título en Sans bold con barra editorial inferior, accent bar vertical en color de palanca.

```
Props:
  color:    'cliente' | 'equipo' | 'marca' | 'datos'   (required)
  numero:   string                                     (required, ej: "01")
  titulo:   string                                     (required)
  duracion: string                                     (opcional, ej: "20 min")
  kicker:   string                                     (opcional, default "Palanca")
  slot default: subtítulo / teaser (serif italic)
```

### `<DatoAncla>`

Bloque para un dato impactante único. Número dominante, contexto a la derecha/debajo, fuente en caption.

```
Props:
  numero:    string                   (required, "3" / "240%" / "€1.2M")
  unidad:    string                   (opcional, "personas", "%", etc.)
  contexto:  string                   (required)
  fuente:    string                   (opcional)
  size:      'sm' | 'lg' | 'xl'       (default 'lg')
  align:     'left' | 'center'        (default 'left')
  palanca:   cliente | equipo | ...   (opcional, tinte el número)
  delta:     string                   (ej. "+240%")
  deltaTone: positive|negative|neutral
```

### `<MatrizComparativa>`

Tabla editorial "Quiero X → usa Y". Numerada, hover sutil, viñetas diferenciadoras premium vs free.

```
Props:
  rows:     Row[]                      declarativo (ver abajo)
  titulo:   string
  kicker:   string
  headers:  [string, string, string, string]   (override cabeceras)
  palanca:  cliente | equipo | ...     (tinte eyebrow + dot premium)
  numbered: boolean (default true)

Row = { quiero, premium, free, nota? }

Slots:
  rows    → tr libres si el modo declarativo se queda corto
  footer  → nota al pie (monospace, caption)
```

---

## 5 · Cómo usar desde `slides.md`

Registra el CSS y los shortcuts en `slides.md`:

```markdown
---
theme: default
title: 'IA para Producto · Manu Lorenzo · Lanzadera 2026'
fonts:
  sans: 'IBM Plex Sans'
  serif: 'IBM Plex Serif'
  mono: 'IBM Plex Mono'
css: unocss
addons:
  - ./style.css
colorSchema: light
aspectRatio: 16/9
---
```

> Nota: `style.css` se carga con `<link>` desde el layout o añadiendo `import './style.css'` en un `setup/main.ts`. El config exacto depende de cómo tengas estructurado Slidev. Si usas el scaffold estándar, basta con importar el CSS desde `setup/main.ts` o referenciarlo en un layout custom.

### 5.1 · Portada con eyebrow editorial

```markdown
---
layout: cover
class: cover
---

<span class="eyebrow">Lanzadera · Abril 2026</span>

# IA para producto, sin <mark class="highlight">humo</mark>

<p class="lead">
Cuatro palancas, cero publi, demos en vivo.
</p>

<div class="rule-top text-mono text-caps text-mute" style="margin-top: 4rem;">
Manu Lorenzo · Mint ITV · 90 min
</div>
```

### 5.2 · Abrir una palanca

```markdown
---
layout: default
---

<PalancaHeader
  color="cliente"
  numero="01"
  titulo="Cliente"
  duracion="20 min"
>

Dejar de escribir copias de producto desde cero
y empezar a responder al cliente en su propio lenguaje.

</PalancaHeader>
```

### 5.3 · Dato ancla dentro de una slide

```markdown
# El equipo de 10

<DatoAncla
  numero="3"
  unidad="personas"
  contexto="Equipo efectivo con IA entregando lo que antes hacían diez."
  fuente="Mint ITV · Q1 2026"
  palanca="equipo"
  size="xl"
/>
```

Variante con delta:

```markdown
<DatoAncla
  numero="240"
  unidad="%"
  contexto="Velocidad de producción de copy con Claude + reviser humano."
  fuente="Caso interno Mint"
  palanca="marca"
  delta="+240%"
  deltaTone="positive"
/>
```

### 5.4 · Matriz comparativa declarativa

```markdown
<MatrizComparativa
  kicker="Herramientas · Palanca 3"
  titulo="Quiero X → usa Y"
  palanca="marca"
  :rows="[
    { quiero: 'Redactar emails comerciales', premium: 'Claude 3.7 Sonnet',  free: 'Mistral Le Chat',    nota: 'EU-hosted' },
    { quiero: 'Generar imágenes de marca',   premium: 'Midjourney v7',      free: 'Flux Schnell',       nota: 'Control de marca limitado en free' },
    { quiero: 'Transcribir entrevistas',     premium: 'Descript / Fireflies', free: 'Whisper large-v3', nota: 'Whisper local = privacy OK' },
    { quiero: 'Resumir docs largos',         premium: 'Claude 3.7 1M ctx',   free: 'Gemini 2.0 Flash',   nota: 'Free tier ≈ 1M tokens/día' },
  ]"
/>
```

### 5.5 · Matriz con slot (si necesitas ricos markup)

```markdown
<MatrizComparativa kicker="Stack · Equipo" titulo="Workflows diarios">
  <template #rows>
    <tr>
      <td>Pair programming</td>
      <td>Cursor + Claude</td>
      <td>Cline + Ollama</td>
      <td><em>Revisar diffs siempre.</em></td>
    </tr>
    <tr>
      <td>Notas de reunión</td>
      <td>Granola</td>
      <td>Whisper + LLM local</td>
      <td>—</td>
    </tr>
  </template>
  <template #footer>
    Actualizado · Abril 2026
  </template>
</MatrizComparativa>
```

### 5.6 · Cita directa

```markdown
> La IA no reemplaza al equipo. Reemplaza al equipo que no usa IA.
>
> <footer>Anon, aprox. 2024</footer>
```

### 5.7 · Tabla editorial genérica

```markdown
| Herramienta | Coste / mes | Ratio valor |
|:--|--:|--:|
| Claude Pro | 20 € | 9.2 |
| Cursor | 20 € | 8.7 |
| Midjourney | 10 € | 7.1 |
```

Las tablas reciben automáticamente el estilo editorial (thead con border-top fuerte, hairlines, número tabular).

### 5.8 · Layout 2 columnas editorial (con column rule)

```markdown
<div class="cols-2">

Este es un párrafo largo que se leerá en dos columnas como un periódico. Útil cuando tienes mucho texto de contexto y quieres densidad. El column-rule es un hairline sutil del mismo color que los dividers.

Segundo párrafo que continuará en la misma columna. Cuando se acabe, el texto saltará automáticamente a la segunda columna. Es perfecto para la diapositiva de "qué es la IA generativa" donde hay más texto que de costumbre.

</div>
```

### 5.9 · Grid de cards por palanca

```markdown
<div class="grid-2">

<div class="card palanca-cliente">

### Soporte proactivo
Contexto del cliente unificado en un sistema.

</div>

<div class="card palanca-equipo">

### Pair programming
Revisar diffs, no escribir desde cero.

</div>

</div>
```

### 5.10 · Aside / nota lateral

```markdown
<div class="aside">

**Nota operativa.** Para la demo en vivo usamos Claude 3.7 Sonnet sobre nuestro propio MCP server. Si falla la red, el fallback es un screencast grabado.

</div>
```

---

## 6 · Utilidades CSS disponibles

| Clase | Qué hace |
|---|---|
| `.eyebrow` | Kicker monospace con underline, estilo Pragmatic Engineer |
| `.lead` | Párrafo intro en serif italic |
| `.highlight` / `<mark>` | Marcador amarillo bajo el texto |
| `.text-mono` · `.text-serif` · `.text-caps` | Switch de familia / caps |
| `.text-mute` · `.text-soft` | Tintado de ink |
| `.text-tnum` · `.text-balance` | Números tabulares / text-wrap balance |
| `.rule-top` · `.rule-bottom` · `.rule-hair-top` | Bordes editoriales |
| `.cols-2` | Dos columnas con column-rule |
| `.grid-2` · `.grid-3` · `.grid-4` | Grids simples |
| `.card` · `.card.palanca-*` | Card hairline con accent-bar superior |
| `.aside` | Bloque sunken con border-left |

---

## 7 · Atajos de teclado (shortcuts.ts)

| Tecla | Acción |
|---|---|
| `Shift + 0` | Ir a portada |
| `Shift + 1` | Palanca Cliente |
| `Shift + 2` | Palanca Equipo |
| `Shift + 3` | Palanca Marca |
| `Shift + 4` | Palanca Datos |
| `Shift + Q` | Slide final / Q&A |
| `Shift + D` | Modo demo (oscurece UI) |
| `Shift + B` | Blackout (pantalla negra) |
| `Shift + N` | Toggle notas visibles en slide |
| `T` | Reinicia timer |

Para activar los saltos por palanca, rellena los números de slide reales en `setup/shortcuts.ts` → `getAnchorSlide()`.

---

## 8 · Dark mode (opcional)

La tecla `D` (default de Slidev) alterna modo oscuro. El CSS respeta la alternancia vía `html.dark`: invierte paper/ink, aclara los tonos de palanca, mantiene el acento amarillo. Diseñado por si Manu quiere ensayar de noche o algún bloque se beneficia del contraste invertido. La charla default es light mode.

---

## 9 · Qué **no** vas a ver aquí

- Gradientes (nada diagonal morado-rosa)
- Glass-morphism
- Iconos redondeados genéricos tipo Heroicons
- Emojis como jerarquía visual
- Drop shadows marcadas
- Border radius > 6px
- Paleta saturada "AI startup"

Si una propuesta visual pide algo de esta lista, reconsidera antes de añadirlo.
