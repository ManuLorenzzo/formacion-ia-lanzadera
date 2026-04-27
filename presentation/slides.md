---
theme: default
title: 'IA para producto · Manu Lorenzo · Lanzadera 2026'
info: |
  Formación de 90 min en Lanzadera (Valencia), abril 2026.
  Tres palancas, tres demos en vivo.
author: 'Manu Lorenzo — Mint ITV'
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
fonts:
  sans: 'IBM Plex Sans'
  serif: 'IBM Plex Serif'
  mono: 'IBM Plex Mono'
mdc: true
transition: fade
drawings:
  persist: false
download: true
exportFilename: 'ia-para-producto-lanzadera'
---

<span class="eyebrow">Lanzadera · Abril 2026</span>

# IA para producto, <br/>sin <mark class="highlight">humo</mark>.

<!--
GUIÓN:
(No te presentas aún. Te quedas unos 5-7 segundos en silencio mientras
la gente se acomoda. La ausencia de voz fuerza atención.)

NOTAS:
- Sin logo de empresa a propósito: refuerza el "esta charla no es un pitch"
- Cuando sientas a la sala asentada, avanza a la siguiente slide
-->

---
layout: default
---

<span class="eyebrow">quién os habla</span>

# Un dev, jugando con IA <br/>desde <mark class="highlight">el primer día</mark>.

<div class="grid-3" style="margin-top: 1.8rem; gap: 1.5rem;">

<div>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.7rem;">Antes</div>

<h3 style="margin-top: 0.4rem; font-size: 1.05rem; font-weight: 500;">Emprendedor, pre-IA.</h3>

<p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--ink-soft); line-height: 1.45;">
Años desarrollando <strong>Mint</strong>, mi SaaS principal. Años antes de que la IA fuera accesible desde código.
</p>

</div>

<div>

<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.7rem;">Marzo 2023</div>

<h3 style="margin-top: 0.4rem; font-size: 1.05rem; font-weight: 500;">La API de GPT-3.5 abre.</h3>

<p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--ink-soft); line-height: 1.45;">
<strong>FoldersAI</strong> como side project — sandbox para meter IA en producto: subes libros y apuntes, hace resúmenes, exámenes, profesor.
</p>

<p style="font-size: 0.92rem; margin-top: 0.5rem;">
<mark class="highlight">+40.000 registros</mark> en el primer mes.
</p>

</div>

<div>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.7rem;">Hoy</div>

<h3 style="margin-top: 0.4rem; font-size: 1.05rem; font-weight: 500;">IA en dos sitios.</h3>

<ul style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--ink-soft); line-height: 1.45;">
  <li style="margin-bottom: 0.4rem;"><strong>Dentro de Mint</strong> — columna vertebral de producto.</li>
  <li><strong>En cómo construimos</strong> — 3 personas entregando como un equipo de 10.</li>
</ul>

</div>

</div>

<div class="rule-top" style="margin-top: 2.4rem; padding-top: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem;">

<div>
<div class="text-mono text-caps text-mute" style="letter-spacing: 0.08em; font-size: 0.82rem;">
Manu Lorenzo · Mint ITV
</div>
<div class="text-mono text-mute" style="letter-spacing: 0.02em; font-size: 0.72rem; margin-top: 0.3rem;">
linkedin.com/in/manu-lorenzo
</div>
</div>

<div style="display: flex; align-items: center; gap: 1rem; padding-left: 1.5rem; border-left: 1px solid var(--rule);">
<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.68rem;">
conectemos →
</div>
<img src="/manu-linkedin-qr.png" alt="LinkedIn · Manu Lorenzo" style="width: 110px; height: 110px; display: block;" />
</div>

</div>

<!--
GUIÓN:
"Buenos días. Soy Manu.

Dos segundos para que sepáis quién os habla.

Llevo años desarrollando Mint — nuestro SaaS principal. Años antes
de que la IA fuera algo que un dev pudiera integrar de verdad desde
su código.

Marzo de 2023. Se abre la API de GPT-3.5-turbo — el primer modelo
al que un programador podía llamar desde su código. Y ahí lanzamos
FoldersAI como side project: un sandbox. Subías los libros de tu
carrera y los apuntes, y te hacía resúmenes, exámenes, te hacía de
profesor.

Cuarenta mil registros en el primer mes. No lo cuento por alardear —
lo cuento porque fue nuestro playground. Ahí aprendimos cómo se
mete IA en producto de verdad: qué funciona, qué no, dónde te traiciona.

Y todo eso ha vuelto a Mint. Hoy la IA la usamos en dos sitios. Uno
— dentro del producto, como columna vertebral, no como juguete. Y
dos — dentro de cómo lo construimos: somos 3 personas entregando
como un equipo de 10. Cómo llegamos a ese punto es el tema de los
próximos 80 minutos.

Lo que veréis hoy no sale de leer un paper. Sale de haber construido."

NOTAS:
- Presentación como máximo 75-90 segundos. No te recrees.
- "40k en primer mes" da credibilidad — dilo claro, sin modestia falsa.
- El dato "3 personas / equipo de 10" ya NO es una slide aparte —
  va integrado aquí en el bloque HOY. Dilo con peso.
- Transición: "Vale. Y esta charla no sale de un estudio de mercado.
  Os he oído cuatro problemas concretos" → siguiente slide (4 problemas).
-->

---
layout: default
---

<span class="eyebrow">pre-work · lo que habéis respondido</span>

# <mark class="highlight">He leído vuestras respuestas</mark>. <br/>Aquí hay patrones.

<div class="grid-2" style="margin-top: 2.5rem; gap: 2rem;">

<div class="card palanca-cliente">

### Pagáis (o no)

<strong>24 de 29</strong> pagáis al menos una IA al mes. <br/>
El patrón: **ChatGPT en todas las manos. 3 con Claude. 0 con Perplexity.**

</div>

<div class="card palanca-producto">

### Vuestro estado

<strong>5</strong> probando sin flujo. <br/>
<strong>19</strong> con flujo parcial. <br/>
<strong>4</strong> ya con sistema. <br/>
<strong>1</strong> apenas la usa.

</div>

<div class="card palanca-marca">

### El dolor #1

El que más se repite (<strong>14 de 29</strong>): <br/>
<strong>"Empieza bien y se rompe cuando la tarea es grande."</strong> <br/>
<em>Lo atacamos de frente en los próximos 60 minutos.</em>

</div>

<div class="card palanca-datos">

### La tarea que queréis delegar

Las 3 más repetidas: <br/>
<strong>Research de mercado</strong>, <strong>informes para inversores</strong>, <strong>emails de prospección</strong>. <br/>
<em>Vamos a resolverlas.</em>

</div>

</div>

<div class="text-mono text-small text-mute" style="margin-top: 2.5rem; border-top: 1px solid var(--rule); padding-top: 1rem;">
Gracias a quien respondió. Os menciono por nombre a lo largo de la charla.
</div>

<!--
GUIÓN:
"48 horas antes de esta sesión, Lanzadera os mandó una encuesta de
tres minutos. La mayoría respondisteis — gracias.

Me he leído cada respuesta. Y hay patrones claros.

[Ir comentando las 4 cards una a una:]

- Pagáis: 24 de 29. Pero todos en ChatGPT. 3 con Claude, ninguno con
  Perplexity. O sea, estáis todos en el mismo modelo. Eso tiene
  consecuencias — en rato hablamos.

- Estado: 19 en flujo parcial. La mayoría sabéis que funciona, pero no
  tenéis sistema. Esta charla está calibrada para ese punto exacto.

- Dolor #1: 'empieza bien y se rompe cuando la tarea es grande'. 14 de
  29 lo habéis marcado. Es exactamente el cuarto de los problemas que
  veréis en un momento. Lo resolvemos hoy.

- Tareas que queréis delegar: research de mercado, informes para
  inversores, emails de prospección. Las tres que mejor resuelve la IA
  hoy. Las vais a ver resueltas en demos concretas.

A lo largo de la charla voy a citar a algunos por nombre — los que
disteis permiso. No os asustéis cuando oigáis el nombre.

Los números ya los tenéis. La otra mitad — las conversaciones — ahora."

NOTAS:
- ANTES DEL EVENTO: sustituir las cifras mock (24/29, 14/29, etc.) y
  las 3 tareas con los datos REALES del pre-work
- Si hay una estadística sorprendente, subráyala a mano alzada
- Este momento transforma "masterclass" en "me has leído" — dale
  60 segundos de ritmo tranquilo, no corras
- Transición al slide de los 4 problemas (los mismos, con nombres
  de pasillo) — "los números ya los tenéis; ahora los nombres"
-->

---
layout: default
---

<span class="eyebrow">la otra mitad · lo que no cabe en la encuesta</span>

# Yo también estoy en Lanzadera. <br/>Y os oigo los <mark class="highlight">mismos cuatro problemas</mark> en pasillos.

<div style="margin-top: 2rem; font-size: 1.02rem; color: var(--ink-soft);">
La encuesta los asoma en números. Aquí están con los nombres que usáis en las comidas.
</div>

<ol style="margin-top: 2rem; font-size: 1.08rem; max-width: 72ch; counter-reset: olist;">
  <li style="margin-bottom: 1rem;"><strong>Hay demasiadas IAs.</strong> No sabéis cuál usar ni cuánto pagar.</li>
  <li style="margin-bottom: 1rem;"><strong>¿Cuál es la navaja suiza?</strong> La que resuelve el 80% de los casos sin pensarlo.</li>
  <li style="margin-bottom: 1rem;"><strong>Qué se puede hacer con IA — y qué no.</strong> Para saber dónde meterla y dónde no.</li>
  <li style="margin-bottom: 1rem;"><strong>Cuando la tarea es grande, sale regular.</strong> La IA no avisa de que es demasiado — lo intenta de una. ¿Cómo le pido que divida?</li>
</ol>

<p class="lead" style="margin-top: 2rem; max-width: 50ch;">
90 minutos. Los cuatro, resueltos.
</p>

<!--
GUIÓN:
"Vale. La encuesta ya os ha enseñado los números. Ahora la otra mitad:
las conversaciones. Esta charla tampoco sale de un estudio de mercado.

Yo también soy de Lanzadera. Llevo aquí desde marzo de 2024. He
comido, he tomado cafés, he hablado en pasillos con muchos de vosotros.

Y detrás de los números que acabáis de ver, os oigo repetir los
mismos cuatro problemas:

Uno. Hay demasiadas IAs. No sabéis cuál usar ni cuánto pagar.

Dos. Cuál es la navaja suiza. La que resuelve el 80% de los casos
sin tener que pensarlo cada vez.

Tres. Qué se puede hacer con IA y qué no. Para decidir dónde vale
la pena meterla — y dónde es perder el tiempo.

Cuatro. Cuando la tarea es grande, la IA lo intenta de una y sale
regular. No os dice "esto es demasiado, divídamelo". Y vosotros no
sabéis cómo pedirle que divida bien.

Noventa minutos. Los cuatro, resueltos. Empezamos."

NOTAS:
- Tono cercano, NO acusatorio — es un "estoy en el barro con vosotros"
- Enlaza con la encuesta del slide anterior: "los números ya los habéis
  visto, aquí van los nombres"
- Después de leer los 4 problemas, respira. Tres segundos.
- Transición: "Para resolverlos, lo primero es saber el terreno. Tres
  motores. Todo lo demás corre encima." → siguiente slide (operadores).
-->

---
layout: default
---

<span class="eyebrow">el terreno · quién juega hoy</span>

# Tres motores. <mark class="highlight">Todo lo demás corre encima</mark>.

<div class="grid-3" style="margin-top: 1.4rem; gap: 1.1rem;">

<div class="card">

<div style="display: flex; align-items: center; gap: 0.5rem; color: var(--brand-claude);">
  <span style="display: inline-block; width: 18px; height: 18px; background-color: currentColor; -webkit-mask: url('/logos/claude.svg') center/contain no-repeat; mask: url('/logos/claude.svg') center/contain no-repeat;"></span>
  <div class="text-mono text-caps" style="letter-spacing: 0.16em; font-size: 0.7rem; font-weight: 600;">Anthropic</div>
</div>
<h3 style="margin: 0.25rem 0 0 0; font-size: 1.9rem; font-weight: 600; line-height: 1; letter-spacing: -0.01em; color: var(--brand-claude);">Claude</h3>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.62rem; margin-top: 1rem;">modelos</div>
<div class="text-mono" style="font-size: 0.95rem; margin-top: 0.2rem;">
  Haiku · Sonnet · Opus
</div>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.62rem; margin-top: 0.85rem;">productos</div>
<div style="margin: 0.25rem 0 0 0; font-size: 0.84rem; line-height: 1.5;">
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline; margin-bottom: 0.3rem;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">código</span>
    <span><strong>Code</strong> · terminal CLI para devs</span>
  </div>
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline; margin-bottom: 0.3rem;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">agente</span>
    <span><strong>Cowork</strong> · agente de escritorio que ejecuta en tus archivos y apps</span>
  </div>
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">diseño</span>
    <span><strong>Design</strong> · UI, mockups, prototipos</span>
  </div>
</div>

<div class="text-small" style="margin-top: 0.8rem; font-size: 0.82rem;">
<span style="color: var(--palanca-cliente); font-weight: 600;">✓</span> ecosistema completo  ·  <span style="color: var(--ink-mute); font-weight: 600;">✗</span> planes se agotan rápido
</div>

<div class="text-mono text-small text-mute" style="margin-top: 0.7rem; border-top: 1px solid var(--rule); padding-top: 0.5rem;">
Pro <strong>20 €</strong> · Max <strong>100 €+</strong> (Code)
</div>

</div>

<div class="card">

<div style="display: flex; align-items: center; gap: 0.5rem; color: var(--brand-gemini);">
  <span style="display: inline-block; width: 18px; height: 18px; background-color: currentColor; -webkit-mask: url('/logos/googlegemini.svg') center/contain no-repeat; mask: url('/logos/googlegemini.svg') center/contain no-repeat;"></span>
  <div class="text-mono text-caps" style="letter-spacing: 0.16em; font-size: 0.7rem; font-weight: 600;">Google</div>
</div>
<h3 style="margin: 0.25rem 0 0 0; font-size: 1.9rem; font-weight: 600; line-height: 1; letter-spacing: -0.01em; color: var(--brand-gemini);">Gemini</h3>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.62rem; margin-top: 1rem;">modelos</div>
<div class="text-mono" style="font-size: 0.95rem; margin-top: 0.2rem;">
  Flash · Pro
</div>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.62rem; margin-top: 0.85rem;">productos</div>
<div style="margin: 0.25rem 0 0 0; font-size: 0.84rem; line-height: 1.5;">
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline; margin-bottom: 0.3rem;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">código</span>
    <span><strong>Antigravity</strong> · IDE gratis (Claude debajo)</span>
  </div>
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline; margin-bottom: 0.3rem;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">docs</span>
    <span><strong>NotebookLM</strong> · síntesis + podcasts desde tus documentos</span>
  </div>
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">multim.</span>
    <span><strong>Nano Banana + Veo</strong> · imagen + vídeo</span>
  </div>
</div>

<div class="text-small" style="margin-top: 0.8rem; font-size: 0.82rem;">
<span style="color: var(--palanca-datos); font-weight: 600;">✓</span> OCR + 1M tokens  ·  <span style="color: var(--ink-mute); font-weight: 600;">✗</span> no lidera en código como Claude o GPT
</div>

<div class="text-mono text-small text-mute" style="margin-top: 0.7rem; border-top: 1px solid var(--rule); padding-top: 0.5rem;">
AI Pro <strong>22 €</strong> · Gemini Pro <mark class="highlight">gratis</mark> en AI Studio
</div>

</div>

<div class="card">

<div style="display: flex; align-items: center; gap: 0.5rem; color: var(--brand-chatgpt);">
  <span style="display: inline-block; width: 18px; height: 18px; background-color: currentColor; -webkit-mask: url('/logos/openai.svg') center/contain no-repeat; mask: url('/logos/openai.svg') center/contain no-repeat;"></span>
  <div class="text-mono text-caps" style="letter-spacing: 0.16em; font-size: 0.7rem; font-weight: 600;">OpenAI</div>
</div>
<h3 style="margin: 0.25rem 0 0 0; font-size: 1.9rem; font-weight: 600; line-height: 1; letter-spacing: -0.01em; color: var(--brand-chatgpt);">ChatGPT</h3>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.62rem; margin-top: 1rem;">modelos</div>
<div class="text-mono" style="font-size: 0.95rem; margin-top: 0.2rem;">
  GPT · GPT Pro
</div>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.62rem; margin-top: 0.85rem;">productos</div>
<div style="margin: 0.25rem 0 0 0; font-size: 0.84rem; line-height: 1.5;">
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline; margin-bottom: 0.3rem;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">código</span>
    <span><strong>Codex</strong> · terminal CLI tipo Claude Code</span>
  </div>
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline; margin-bottom: 0.3rem;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">agente</span>
    <span><strong>ChatGPT Agent</strong> · navega y actúa por ti</span>
  </div>
  <div style="display: grid; grid-template-columns: 62px 1fr; gap: 0.6rem; align-items: baseline;">
    <span class="text-mono text-caps text-mute" style="font-size: 0.58rem; letter-spacing: 0.12em;">imagen</span>
    <span><strong>Images 2</strong> · generación de imagen nativa</span>
  </div>
</div>

<div class="text-small" style="margin-top: 0.8rem; font-size: 0.82rem;">
<span style="color: var(--palanca-marca); font-weight: 600;">✓</span> imagen nativa (Images 2)  ·  <span style="color: var(--ink-mute); font-weight: 600;">✗</span> Pro a <strong>200 €</strong> se dispara
</div>

<div class="text-mono text-small text-mute" style="margin-top: 0.7rem; border-top: 1px solid var(--rule); padding-top: 0.5rem;">
Plus <strong>23 €</strong> · Pro <strong>200 €</strong>
</div>

</div>

</div>

<!--
GUIÓN:
"Antes de opinar, el terreno. Tres motores en el mundo: Anthropic con
Claude, Google con Gemini, OpenAI con ChatGPT. Todo lo demás — que os
sonará — corre por dentro sobre uno de estos tres.

Cada uno con dos niveles de modelo — uno rápido, uno de razonamiento
pro. Haiku y Opus en Claude. Flash y Pro en Gemini. GPT y GPT Pro en
OpenAI. El lite para el día a día, el pro para lo complejo.

Anthropic — Claude. Tres productos que os tocan como founders: Claude
Code, terminal agente para devs. Claude Cowork, un agente de escritorio
que ejecuta tareas sobre vuestros archivos y apps — con permisos, no
se toca nada sin vuestro OK. Claude Design para UI y mockups.
Ecosistema completo — pero los planes base se agotan rápido si lo
usáis intenso. Veinte el Pro, cien o más el Max.

Google — Gemini. NotebookLM, que es el killer: le metéis vuestros docs
y os hace research, síntesis, incluso un podcast de audio con vuestro
contenido. Antigravity, el IDE gratis con Claude por debajo. Y Nano
Banana más Veo para imagen y vídeo. La gran ventaja: OCR y un millón
de tokens de contexto — se come documentos gigantes sin despeinarse.
La pega: no lidera en código tan fuerte como Claude o GPT. Veintidós
euros el AI Pro. Pero Gemini Pro lo tenéis gratis en AI Studio con
vuestra cuenta Google.

OpenAI — ChatGPT. Codex como equivalente a Claude Code. ChatGPT Agent
para navegar y actuar por vosotros. Aquí la ventaja es la generación
de imagen nativa — Images 2, que salió la semana pasada. La pega es
que el plan Pro son doscientos euros, y el combo sube rápido si
queréis las funciones buenas. Veintitrés euros el Plus."

NOTAS:
- Recorrido rápido, 60-75 segundos. NO te extiendas en cada producto.
- La pregunta "si tuviera que pagar solo una, ¿cuál?" la respondes
  explícitamente AL FINAL de la charla (bloque truquitos) — aquí no
  adelantes nada.
- Pausa antes de pasar a la siguiente (modelo vs herramienta).
-->

---
layout: default
---

<span class="eyebrow">concepto · leed esto una vez y va fuera</span>

# Modelo <span style="color: var(--ink-mute);">≠</span> <mark class="highlight">herramienta</mark>.

<div style="margin-top: 1.2rem; max-width: 70ch;">
<p style="font-family: 'IBM Plex Serif', serif; font-size: 1.55rem; line-height: 1.35; font-weight: 400; margin: 0;">
El <strong>motor</strong> piensa. La <strong>herramienta</strong> es lo que abres.
</p>
<p style="font-family: 'IBM Plex Serif', serif; font-size: 1.55rem; line-height: 1.35; font-weight: 400; margin: 0.5rem 0 0 0;">
Cuando preguntas <em>"¿qué IA uso?"</em>, preguntas por la <mark class="highlight">herramienta</mark>.
</p>
</div>

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.18em; font-size: 0.64rem; margin-top: 2rem;">ejemplos</div>

<div style="margin-top: 0.7rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6rem;">

<div>
<div style="display: flex; align-items: center; gap: 0.45rem; color: var(--brand-claude); border-bottom: 1px solid var(--brand-claude); padding-bottom: 0.45rem; margin-bottom: 0.7rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: currentColor; -webkit-mask: url('/logos/claude.svg') center/contain no-repeat; mask: url('/logos/claude.svg') center/contain no-repeat;"></span>
  <div class="text-mono text-caps" style="letter-spacing: 0.16em; font-size: 0.62rem; font-weight: 600;">sobre Claude</div>
</div>
<div style="font-size: 0.92rem; line-height: 1.75;">
  <div>Perplexity<sup style="font-size: 0.62em; color: var(--ink-mute);">*</sup></div>
  <div>Lovable</div>
  <div>Bolt</div>
  <div>Replit Agent</div>
  <div>Linear AI</div>
  <div>Cursor<sup style="font-size: 0.62em; color: var(--ink-mute);">**</sup></div>
</div>
</div>

<div>
<div style="display: flex; align-items: center; gap: 0.45rem; color: var(--brand-gemini); border-bottom: 1px solid var(--brand-gemini); padding-bottom: 0.45rem; margin-bottom: 0.7rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: currentColor; -webkit-mask: url('/logos/googlegemini.svg') center/contain no-repeat; mask: url('/logos/googlegemini.svg') center/contain no-repeat;"></span>
  <div class="text-mono text-caps" style="letter-spacing: 0.16em; font-size: 0.62rem; font-weight: 600;">sobre Gemini</div>
</div>
<div style="font-size: 0.92rem; line-height: 1.75;">
  <div>NotebookLM</div>
  <div>Stitch</div>
  <div>Jules</div>
  <div>Gamma</div>
  <div>Firebase Studio</div>
</div>
</div>

<div>
<div style="display: flex; align-items: center; gap: 0.45rem; color: var(--brand-chatgpt); border-bottom: 1px solid var(--brand-chatgpt); padding-bottom: 0.45rem; margin-bottom: 0.7rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: currentColor; -webkit-mask: url('/logos/openai.svg') center/contain no-repeat; mask: url('/logos/openai.svg') center/contain no-repeat;"></span>
  <div class="text-mono text-caps" style="letter-spacing: 0.16em; font-size: 0.62rem; font-weight: 600;">sobre ChatGPT</div>
</div>
<div style="font-size: 0.92rem; line-height: 1.75;">
  <div>v0</div>
  <div>Canva AI</div>
  <div>Grammarly</div>
  <div>Jasper</div>
  <div>Copilot<sup style="font-size: 0.62em; color: var(--ink-mute);">**</sup></div>
</div>
</div>

</div>

<div class="text-mono text-mute" style="margin-top: 0.8rem; font-size: 0.64rem; letter-spacing: 0.02em; line-height: 1.6;">
<sup>*</sup> Perplexity usa su propio modelo Sonar por defecto · Claude / GPT / Gemini son seleccionables en el plan Pro<br/>
<sup>**</sup> Multi-modelo seleccionable · el indicado es el default o el más usado
</div>

<div class="text-mute" style="margin-top: 1.1rem; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 0.95rem;">
— y los que construyen las herramientas, mayoritariamente eligen Claude.
</div>

<!--
GUIÓN:
"Un concepto. Leedlo una vez y ya no lo repito.

El motor es la inteligencia pura — Claude Sonnet, Gemini Pro, GPT Pro.
No tiene UI. Vosotros no abrís 'Claude Sonnet' directamente. Lo abre
un programa por debajo.

La herramienta es lo que vosotros sí abrís. claude.ai, Cursor, Perplexity,
Lovable. La UI con la que trabajáis.

Ahora mirad la tabla. Lo importante de esta slide:

Muchas herramientas que usáis a diario — Perplexity, Cursor, Lovable,
Bolt, v0, NotebookLM — corren por DENTRO sobre uno de los tres motores
que acabamos de ver. Perplexity tiene su propio Sonar por defecto,
pero Claude, GPT y Gemini están como opciones en Pro. Lovable y Bolt
van sobre Claude. v0 sobre GPT. NotebookLM y Stitch sobre Gemini.
Cursor y Windsurf os dejan elegir.

Detalle que se ve de un vistazo y no os voy a forzar a creer — miradlo
vosotros: cuando los que CONSTRUYEN estas herramientas eligen motor,
eligen Claude mayoritariamente. No es casualidad — es la tasa de
alucinación más baja y el razonamiento más riguroso.

Lo que quiero que entendáis: cuando preguntáis '¿qué IA uso?',
preguntáis por la herramienta. Pero detrás hay siempre un motor."

NOTAS:
- Dilo rápido. Esta slide es un puente, no un destino.
- El asterisco de Perplexity es honestidad intelectual — mejor
  explicarlo que repetir el dato antiguo de "Perplexity → Claude Opus".
- Transición: "Con esto claro, vamos al siguiente punto."
-->

---
layout: center
class: text-center
---

<SlideBadge provider="claude" />

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.3em; font-size: 0.72rem; margin-bottom: 2.2rem;">Producto · la síntesis</div>

<h2 style="font-family: 'IBM Plex Serif', serif; font-size: 3.4rem; line-height: 1.12; max-width: 22ch; margin: 0 auto; font-weight: 500;">
Si solo pudieras pagar <mark class="highlight">una</mark>,<br/>
la respuesta hoy es <mark class="highlight">Claude</mark>.
</h2>

<p style="margin: 2.5rem auto 0; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 1.35rem; line-height: 1.45; color: var(--ink-soft); max-width: 44ch;">
No porque sea el mejor en todo. <br/>
Porque no es un modelo — es un <strong style="color: var(--ink);">ecosistema de cinco productos</strong> bajo la misma suscripción.
</p>

<div class="text-mono text-caps text-mute" style="margin-top: 3.5rem; letter-spacing: 0.22em; font-size: 0.68rem;">
↓ los cinco, ahora
</div>

<!--
GUIÓN:
"Antes de pasar a Marca — la síntesis de todo lo visto hoy en Producto.

Si solo pudierais pagar UNA suscripción de IA al mes, la respuesta
que os doy hoy — abril de 2026, esto puede cambiar — es Claude.

No porque sea el mejor en todo. No lo es. Gemini es mejor en contextos
gigantes. Nano Banana de Google es mejor en imagen de marketing. Para
chat diario, cualquiera vale.

Claude gana porque no es un modelo. Es un ecosistema. Cinco productos
bajo una misma suscripción. Os los desgloso ahora."

NOTAS:
- Slide editorial, dejar respirar — 10 segundos antes de avanzar
- Transición directa a "Cinco productos, dos precios"
-->

---
layout: default
---

<SlideBadge provider="claude" />

<span class="eyebrow">el ecosistema Claude</span>

# Cinco productos, <mark class="highlight">dos precios</mark>.

<div style="margin-top: 2rem; display: grid; grid-template-columns: 1fr 320px; gap: 2.4rem; align-items: start;">

<div>

<div style="display: grid; grid-template-columns: auto 1fr auto; gap: 1.1rem 1.6rem; align-items: baseline; font-size: 1.08rem;">

<div class="text-mono text-caps" style="color: var(--palanca-producto); letter-spacing: 0.1em; font-size: 0.82rem;">Chat</div>
<div><strong>Claude</strong> · conversacional, razonamiento profundo y API rica para picar prompts largos</div>
<div class="text-mono text-small" style="color: var(--accent-success); font-weight: 600;">PRO 20 €</div>

<div class="text-mono text-caps" style="color: var(--palanca-producto); letter-spacing: 0.1em; font-size: 0.82rem;">Projects</div>
<div><strong>Claude Projects</strong> · asistente sobre tus docs con memoria persistente — sustituye a NotebookLM</div>
<div class="text-mono text-small" style="color: var(--accent-success); font-weight: 600;">PRO 20 €</div>

<div class="text-mono text-caps" style="color: var(--palanca-producto); letter-spacing: 0.1em; font-size: 0.82rem;">Design</div>
<div><strong>Claude Design</strong> · prototipos interactivos que exportas a Canva o PPTX en un clic</div>
<div class="text-mono text-small" style="color: var(--accent-success); font-weight: 600;">PRO 20 €</div>

<div class="text-mono text-caps" style="color: var(--palanca-producto); letter-spacing: 0.1em; font-size: 0.82rem;">Cowork</div>
<div><strong>Claude Cowork</strong> · la navaja suiza — tu asistente en el ordenador: abre tus archivos, escribe tus mails, prepara tus documentos. Y lo mandas desde el móvil aunque no estés delante</div>
<div class="text-mono text-small" style="color: var(--accent-success); font-weight: 600;">PRO 20 €</div>

<div class="text-mono text-caps" style="color: var(--palanca-producto); letter-spacing: 0.1em; font-size: 0.82rem;">Code</div>
<div><strong>Claude Code</strong> · agente de desarrollo en terminal, VS Code o web para picar código en serio</div>
<div class="text-mono text-small" style="color: var(--accent-danger); font-weight: 600;">MAX 100 €+</div>

</div>

<div style="margin-top: 1.6rem; background: var(--paper-sunken); border-left: 2px solid var(--accent-danger); padding: 0.75rem 1.2rem; font-size: 0.88rem; line-height: 1.5;">
<strong>Aviso sobre Code.</strong> Situación fluida tras el 21-abr-2026 — hoy lo defensivo es asumir que <strong>para Code hace falta Max (~100 €/mes)</strong>. Con Pro tenéis los otros 4.
</div>

</div>

<div style="align-self: start;">
<img src="/claude-meme.jpeg" alt="Meme: el roadmap de Claude tras Code, Cowork y Design" style="width: 100%; display: block; border: 1px solid var(--rule); border-radius: 4px;" />
<div class="text-mono text-caps text-mute" style="margin-top: 0.6rem; letter-spacing: 0.14em; font-size: 0.62rem; text-align: center;">vía @Jatznarann</div>
</div>

</div>

<!--
GUIÓN:
"Cinco productos. Pero OJO — dos precios. Vais a ver la diferencia.

Los cuatro primeros — Chat, Projects, Design y Cowork —
vienen en el plan Pro de veinte euros al mes. Ese es el precio estable,
al menos a día de hoy.

El quinto — Code — es harina de otro costal. Anthropic lo movió fuera
del plan Pro el veintiuno de abril de este año. Lo pusieron en Max,
que son cien euros al mes desde ahí. Luego revirtieron parcialmente
el cambio en medio de un revuelo en Twitter. Situación fluida.

Así que cuando os digo 'Claude Pro te da todo', la verdad más honesta
es 'Claude Pro te da cuatro de cinco'. Para Code con uso intensivo hace
falta Max. Y ni aún así es ilimitado — gasta bastantes tokens.

Dicho esto: cuatro productos por veinte euros sigue siendo la mejor
relación del mercado. Chat, asistente sobre docs, diseño de prototipos
y Cowork — la app de escritorio que trabaja sobre VUESTROS archivos.

Cowork es la pieza que os importa a los no-devs. Por defecto os ignoran
cuando hablan de Claude Code porque es técnico. Cowork NO. Le dices
'analiza este contrato y escríbeme un resumen en Word', y lo hace.
De punta a punta. Yo la uso a diario.

Y mi recomendación práctica: si sois no-técnicos, Claude Pro de veinte
euros es la mejor compra IA de abril 2026. Si vais a picar código a
diario, sumad Max para Code — salen unos 100 euros al mes."

NOTAS:
- Si usas Cowork a diario, una micro-demo de 15 segundos aquí funciona:
  - Alt-tab a Claude Desktop con Cowork activo
  - "Claude, léeme este archivo y resúmeme los 3 puntos clave"
  - Vuelves a la slide mientras procesa
- Si no te ves cómodo, mención teórica vale
-->

---
layout: center
class: text-center
---

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.2em; margin-bottom: 1.8rem;">la tesis</div>

<h2 style="font-family: 'IBM Plex Serif', serif; font-size: 3.2rem; line-height: 1.1; margin: 0 auto 1rem; font-weight: 500; max-width: 20ch;">
Vuestro trabajo no es <br/>
<span style="text-decoration: line-through; color: var(--ink-mute);">el prompt perfecto</span>.
</h2>

<div style="margin-top: 1rem; font-family: 'IBM Plex Serif', serif; font-size: 2.4rem; font-style: italic; max-width: 24ch; margin-left: auto; margin-right: auto; line-height: 1.15;">
Es la <mark class="highlight">conversación</mark>.
</div>

<p class="lead" style="margin-top: 2.5rem; max-width: 52ch; margin-left: auto; margin-right: auto;">
La IA no es un becario al que le dictáis instrucciones.<br/>
Es un sparring — os pregunta, os contradice, os completa.
</p>

<p class="text-mute text-small" style="margin-top: 2rem; font-style: italic; max-width: 60ch; margin-left: auto; margin-right: auto;">
Dominar la IA no es <em>"promptear mejor"</em>. Es saber declararos, dejar que pregunte, y comprobar lo que entrega.
</p>

<!--
GUIÓN:
"La tesis de hoy. Una sola.

Vuestro trabajo no es el prompt perfecto. Tachado. Es la conversación.

La IA no es un becario al que le dictáis instrucciones perfectas y
espera en silencio a ejecutar. Es un sparring: os pregunta, os
contradice, os completa los huecos.

Dominar la IA hoy no es 'promptear mejor' — eso ya lo hace ella por
vosotros. Es saber declarar quién sois, dejar que os pregunte lo que
le falta, y comprobar lo que entrega.

(Pausa. Transición al siguiente slide.)

Los tres movimientos tácticos de la tesis — a continuación."

NOTAS:
- Dilo despacio. Esta es LA frase que van a retuitear.
- "Vuestro trabajo no es el prompt perfecto" → énfasis fuerte
- "Sparring" → si prefieres en tiempo real, di "copiloto" o "compañero
  de pizarra". Decide según la sala.
- Transición clara al siguiente slide (los 3 movimientos)
-->

---
layout: default
---

<span class="eyebrow">la tesis · los tres movimientos</span>

# <mark class="highlight">Declarar</mark>. Preguntar. Verificar.

<div class="grid-3" style="margin-top: 2rem; gap: 1.8rem;">

<div>

<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.72rem;">01 · Declarar</div>

<h3 style="margin-top: 0.4rem; font-size: 1.1rem; font-weight: 500;">Brief de humano.</h3>

<p style="font-size: 0.92rem; margin-top: 0.5rem; color: var(--ink-soft); line-height: 1.45;">
Quién eres. Qué sabes. Qué no sabes. La IA se adapta a tu nivel — no te trata como experto si no lo eres.
</p>

</div>

<div>

<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.72rem;">02 · Dejar preguntar</div>

<h3 style="margin-top: 0.4rem; font-size: 1.1rem; font-weight: 500;">Que pida antes de ejecutar.</h3>

<p style="font-size: 0.92rem; margin-top: 0.5rem; color: var(--ink-soft); line-height: 1.45;">
<em>"Hazme las preguntas que necesites antes de ponerte."</em> Ella detecta huecos, tú contestas, luego ejecuta con contexto real.
</p>

</div>

<div>

<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.72rem;">03 · Verificar</div>

<h3 style="margin-top: 0.4rem; font-size: 1.1rem; font-weight: 500;">Nunca aceptes a la primera.</h3>

<p style="font-size: 0.92rem; margin-top: 0.5rem; color: var(--ink-soft); line-height: 1.45;">
Sea texto, imagen, código o informe — léelo, pruébalo, ábrelo, míralo. Si no encaja, lo pides distinto. Si huele mal, no lo usas.
</p>

</div>

</div>

<div class="aside" style="margin-top: 1.8rem; font-size: 0.9rem; padding: 0.8rem 1.2rem;">

<strong>Atajo para cuando ni siquiera sabes declarar:</strong> abre un chat cualquiera y pide <em>"hazme el prompt para X tarea, pregúntame lo que necesites antes"</em>. Pegas el resultado en la tool de verdad. La IA especifica por ti.

</div>

<!--
GUIÓN:
"Los tres movimientos tácticos. Los vais a ver en CADA una de las
tres palancas.

Uno — declarar. No es un prompt de experto. Es un brief de humano:
quién soy, qué sé del tema, qué NO sé. La IA se adapta al nivel — si
no le dices que eres novato, asume que eres experta y te da un output
denso que no entiendes.

Dos — dejar que pregunte. Literal: añades al final 'hazme las preguntas
que necesites antes de ponerte'. Ella detecta qué le falta. Tú
contestas desde lo que sabes. Y luego ejecuta con contexto REAL, no
con suposiciones. Este es el movimiento que cambia el juego.

Tres — verificar. Nunca aceptéis a la primera. Sea texto, imagen,
código o un informe — se lee, se prueba, se abre, se mira. Si no
encaja, lo pedís distinto. Si huele mal, no lo usáis. En cada palanca
veréis cómo se traduce — una cita en research, un número en análisis,
una URL en código, una imagen en marca.

Atajo final, que está en la nota de abajo y desarrollo al final de la
charla: si ni siquiera sabes cómo empezar a declarar, abres un chat y
pides 'hazme tú el prompt para esta tarea, y pregúntame lo que
necesites antes'. La IA te escribe el prompt. Tú lo pegas en la tool
de verdad. La IA especifica por ti — tú solo contestas preguntas y
verificas."

NOTAS:
- Los 3 movimientos los vas a repetir en CADA palanca — aquí los
  presentas, en cada palanca los aplicas.
- La aside del atajo (meta-prompting) es un anticipo — lo desarrollas
  con slide propia en el bloque Truquitos.
- No te extiendas en "Verificar" — cada palanca da su ejemplo concreto
  después.
-->

---
layout: default
---

<span class="eyebrow">el mapa · próximos 80 minutos</span>

# Tres frentes donde un founder <mark class="highlight">pierde tiempo</mark>.

<div class="grid-3" style="margin-top: 3rem; gap: 1.5rem;">

<div class="card palanca-cliente">

### <span style="color: var(--palanca-cliente);">01 · Día a día</span>
Investigar. Digerir. Ejecutar. <em>Sin equipo.</em>

</div>

<div class="card palanca-producto">

### <span style="color: var(--palanca-producto);">02 · Producto</span>
Landing. SaaS. Construir con IA.

</div>

<div class="card palanca-marca">

### <span style="color: var(--palanca-marca);">03 · Marca</span>
Contenido. Imagen. Vídeo. Diseño.

</div>

</div>

<!--
GUIÓN:
"Las tareas que queréis delegar, los dolores que tenéis — todos caen
en tres frentes.

Día a día. Producto. Marca.

En cada uno: un problema real, una tool concreta, una demo en vivo
y una acción que podéis hacer el lunes.

Empezamos por el día a día — lo que os come la mañana sin construir
producto."

NOTAS:
- Enumera los 3 con pausas cortas entre cada uno
- Transición directa a palanca 1 (Día a día)
-->

---
layout: section
class: text-center
---

<PalancaHeader
  color="cliente"
  numero="01"
  titulo="Día a día"
  duracion="20 min"
>

Investigar, digerir, ejecutar. <br/>
Lo que un founder hace cada mañana — <em>sin equipo, sin perder horas</em>.

</PalancaHeader>

<!--
GUIÓN:
"Palanca uno. Día a día.

Esto es lo que hacéis cada mañana — investigar, digerir documentos,
ejecutar tareas operativas. Lo que os come las primeras horas y os
deja sin tiempo para construir producto.

Tres asistentes para tres trabajos. Investigar lo que pasa ahí fuera.
Digerir documentos densos. Ejecutar encargos en vuestro ordenador.
Y todo cosido con un mismo caso real — Pawly, founder primerizo
preparando la versión 2.0."

NOTAS:
- 3 segundos de pausa en esta slide
- Avanza
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-cliente);">Día a día · el dolor</span>

# Tres horas operando, <br/><mark class="highlight">cero construyendo</mark>.

<p class="lead" style="margin-top: 2rem;">
Research de clientes y competencia. Leer manuales y regulación. <br/>
Escribir mails e informes. Preparar reuniones. Ordenar archivos.
</p>

<p class="lead" style="margin-top: 1rem; color: var(--ink);">
Todo eso ya tiene <mark class="highlight">quién lo haga por ti</mark>.
</p>

<!--
GUIÓN:
"Pregunta rápida a la sala — sin manos arriba, solo pensadlo:
¿a qué hora del día tocáis producto por primera vez?

Antes hacéis research. Leéis docs. Contestáis mails. Preparáis la
reunión de las 11. Ordenáis archivos. Y son las 13:00 y aún no habéis
escrito una línea de código ni hablado con un cliente.

Esas tres-cuatro horas de la mañana las pierde casi todo founder
que conozco. Y escala mal — cuanto más crece la startup, más
operación cae encima.

Todo eso ya tiene quién lo haga por vosotros. Empezamos por el
primer trabajo del día — investigar. Y la herramienta es Deep Research."

NOTAS:
- No pidas manos — es un momento reflexivo
- Enumera las 5 actividades lentamente con pausas
- La frase final es la transición directa a Deep Research
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-cliente);">Día a día · investigar · qué es</span>

# <mark class="highlight">Deep Research</mark> no es "búsqueda con IA".

<div class="cols-2" style="margin-top: 2rem; font-size: 1.05rem;">

<p>Es un <strong>agente autónomo</strong> que pasa 5–30 minutos navegando, lee cientos de páginas, cruza fuentes, detecta contradicciones, y devuelve un informe estructurado <strong>con citas verificables</strong>.</p>

<p>Lo que antes hacía un analista junior en media jornada, ahora llega en diez minutos. Tú solo revisas y decides.</p>

</div>

<div class="grid-2" style="margin-top: 2rem; gap: 1.8rem;">

<div style="border: 1px solid var(--rule); background: var(--paper-pure); padding: 1.2rem 1.4rem;">

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.14em; font-size: 0.72rem; margin-bottom: 0.6rem;">De pago · las 4 serias</div>

- **Claude Research** · en claude.ai. Integra Gmail, Calendar, Google Docs.
- **Gemini Deep Research** · en la app Gemini.
- **ChatGPT Deep Research** · en chatgpt.com. Basado en GPT-5.2.
- **Perplexity Deep Research** · la referencia del sector. <em>Corre sobre Claude Opus</em>.

</div>

<div style="border: 1px solid var(--palanca-cliente); background: var(--palanca-cliente-soft); padding: 1.2rem 1.4rem;">

<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.72rem; margin-bottom: 0.6rem;">Si no quieres pagar</div>

<p style="font-size: 1.08rem; margin: 0 0 0.6rem 0;"><strong>Gemini 3.1 Pro en AI Studio</strong></p>

<p style="font-size: 0.92rem; color: var(--ink-soft); margin: 0;">
Navegador. Cuenta Google. Gratis. No es Deep Research estricto, pero hace research profundo con citas verificables. Fallback digno el 80% de los casos.
</p>

</div>

</div>

<!--
GUIÓN:
"Deep Research no es Google con IA encima. Eso lo hace cualquier
chatbot.

Deep Research es un agente autónomo. Le das un brief, se va 5 a 30
minutos navegando por su cuenta, lee cientos de páginas, cruza
fuentes, detecta contradicciones, y vuelve con un informe estructurado
y CITAS verificables.

Lo que antes os hacía un analista junior en media jornada, ahora
llega en diez minutos. Vuestro trabajo no es hacer el informe — es
revisarlo y tomar la decisión.

Cuatro serias de pago — una por cada gigante más Perplexity. Dato
curioso: Perplexity, que es la referencia, corre sobre Claude Opus.
Cuando las mejores herramientas del mundo eligen motor, eligen Claude.

Y si no quieres pagar, siempre hay salida — Gemini 3.1 Pro en AI
Studio. Gratis, navegador, cuenta Google. No es Deep Research estricto
— no corre 30 minutos solo — pero hace research profundo con citas.
Os sirve para el 80% de los casos.

Esa es la regla: siempre os doy la opción gratis de fallback."

NOTAS:
- Precios los comenté en la slide de los 3 operadores — NO los repitas aquí
- El bloque VERDE es la opción gratis — si la sala tiene caras de
  "¿cuánto cuesta todo esto?", apunta a ese bloque
- El dato Perplexity → Claude es un micro-wow, dilo destacado
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-cliente);">Día a día · investigar · un prompt real · el flip</span>

# No le des instrucciones. <br/>Dile <mark class="highlight">quién eres</mark> y déjala preguntar.

<div style="background: var(--paper-sunken); padding: 1.1rem 1.5rem; border-left: 3px solid var(--palanca-cliente); font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; line-height: 1.6; margin-top: 1.4rem;">

**Quién soy**: Carlos, founder de <strong>Pawly</strong> — marketplace para dueños de perros en España. Llevamos 8 meses funcionando, vamos a sacar la <strong>versión 2.0</strong>.

**Mi nivel**: Vendí un veterinario hace 4 años — conozco el sector. Pero nunca he hecho discovery sistemático de clientes a escala.

**Qué necesito**: <strong>Voice of customer</strong> del sector pet en España y Portugal. Quiero los <strong>10 dolores más mencionados</strong> en reseñas de 1-2 estrellas de los marketplaces pet existentes (App Store, Google Play, Trustpilot, foros) en los últimos 6 meses. Para cada dolor: frecuencia aproximada, gravedad reportada, qué competidor lo resuelve (o nadie), 2 quotes literales.

**Antes de ejecutar**: hazme las preguntas que necesites (qué competidores priorizo, segmentos, idioma, ventana temporal). Y <strong>no inventes citas</strong> — si un dato no lo encuentras, dímelo.

</div>

<div class="text-mono text-small text-mute" style="margin-top: 1.2rem;">
Este prompt está en el asset descargable. Adaptadlo a vuestro sector y pegadlo.
</div>

<!--
GUIÓN:
"Antes de la demo, el prompt. Fijaos — es un prompt que podría haber
escrito cualquier founder de esta sala. Cuatro párrafos cortos.

Caso: Carlos, founder de Pawly. Llevamos 8 meses, vamos a sacar
la versión 2.0. Y antes de decidir QUÉ feature priorizar, queremos
oír a los clientes — no a los nuestros, a los de TODA la categoría.

Uno — quién soy. Dos líneas. 'Founder de Pawly, marketplace para
dueños de perros en España. Versión 2.0'.

Dos — mi nivel. Ésta es la clave. 'Vendí un veterinario hace 4 años,
conozco el sector. Pero nunca he hecho discovery sistemático'. Sin
esto la IA asume que soy consultor de McKinsey y me devuelve un
output denso que no puedo defender.

Tres — qué necesito. Aquí SÍ soy específico — porque como founder
sé qué quiero. Los 10 dolores más mencionados en reseñas de 1-2
estrellas. Frecuencia, gravedad, qué competidor lo resuelve, dos
quotes literales por dolor. Esto NO es un research de pitch deck
para inversores. Esto es discovery para decidir QUÉ construir.

Pero — y aquí viene el giro, cuarto — lo que NO sé es CÓMO. 'Hazme
las preguntas que necesites — qué competidores priorizo, qué
segmentos, qué idioma, qué ventana temporal'. Delego el CÓMO. La IA
me va a preguntar: ¿priorizamos marketplaces puros o también vets
online? ¿solo España y Portugal o también UK? Preguntas que yo SÍ
puedo contestar desde mi experiencia — pero que no sabía que tenía
que especificar.

Esto es DECLARAR y DEJAR PREGUNTAR. Vamos a la demo."

NOTAS:
- El matiz clave: el founder sabe el QUÉ (lista de dolores con quotes),
  la IA pregunta el CÓMO (competidores, segmentos, idioma, ventana).
- "Es un prompt que podría haber escrito cualquier founder" — es la
  liberación para la audiencia no-técnica.
- Transición limpia a la demo pre-ejecutada
-->

---
layout: center
class: demo-slide
---

<SlideBadge demo />

<div class="text-mono text-caps" style="letter-spacing: 0.3em; color: var(--palanca-cliente); margin-bottom: 2rem;">demo · Deep Research · voice of customer pet</div>

<h2 style="font-size: 2.8rem; line-height: 1.15; max-width: 30ch; margin: 0 auto; font-weight: 600;">
Los <mark class="highlight">10 dolores</mark> reales <br/>de los clientes de <em>Pawly</em>.
</h2>

<p class="text-mute" style="margin-top: 2.5rem; max-width: 56ch; margin-left: auto; margin-right: auto;">
Deep Research tarda 5–30 minutos. Lo corrí anoche con el prompt de la slide anterior.<br/>
Abrimos el informe real. Una cita al azar para verificar que no inventa.
</p>

<!--
GUIÓN:
"Deep Research tarda entre 5 y 30 minutos — no tiene sentido quemar
tiempo de sala esperando. Anoche corrí el prompt que acabáis de ver,
con Pawly como caso. Ahora abrimos el informe real.

[ALT-TAB a la app de Deep Research (Gemini / Claude Research / ChatGPT).
Informe generado la noche anterior ya cargado:]

- Scroll rápido de arriba abajo: enseña volumen — fuentes leídas,
  número de dolores identificados (típicamente 8-12), longitud.
- Leo en alto un dolor concreto: el más mencionado, con su quote
  literal, su frecuencia y qué competidor lo resuelve (o nadie).
- Señalo otra fila — un dolor sin solución actual, oportunidad clara.

Y ahora lo importante — la verificación. Clico en una cita al azar.

[CLICK en cita → abre URL en vivo]

Está. URL real. Contenido real. Dice lo que el informe resumió.
Si la URL no hubiese cargado, o el texto hubiese sido distinto,
descarto TODO el informe. C de Check — siempre.

Eso es Deep Research. Lo guardo en mi carpeta y paso a la siguiente
herramienta del día a día — Cowork."

NOTAS:
- ANTES DEL EVENTO:
  1. LA NOCHE ANTES correr Deep Research con el prompt de slide
     anterior con Pawly como caso. Abrir la app con el informe ya
     cargado en una pestaña.
  2. Revisar 2-3 citas del informe — identificar una que cargue bien
     en navegador, para abrirla en vivo durante la demo.
  3. Guardar el informe como archivo local — Cowork y NotebookLM lo
     van a usar como input en sus respectivas demos pre-grabadas.
- PASOS DE LA DEMO EN SALA (~2.5 MINUTOS):
  1. ALT-TAB a la app de Deep Research con el informe generado
  2. Scroll rápido arriba → enseñas volumen (fuentes, dolores listados)
  3. Lee EN ALTO 1-2 dolores con sus quotes y frecuencia
  4. CLICK en una cita → abrir URL en vivo
  5. "Real. Dice lo resumido. Verificado."
  6. Cierre: "guardo este archivo, lo váis a ver dos veces más"
- BACKUP si la app no carga en vivo: screenshots de la noche anterior
  (página principal del informe + 1 cita con URL abierta) en visor
  local.
- HILO NARRATIVO CLAVE: este informe es el INPUT de las dos demos
  siguientes (Cowork Pain Map + NotebookLM podcast). Asegúrate de
  enfatizarlo aquí para que el público vea la cadena.
- EJEMPLO ELEGIDO: Pawly. Caso ya conectado con la palanca Producto
  (donde la landing de Pawly ya está construida). Voice of Customer
  encaja con "Día a día" porque es research RECURRENTE — un founder
  lo hace cada 1-2 meses, no una vez antes del pitch.
-->

---
layout: default
---

<SlideBadge provider="claude" />

<span class="eyebrow" style="color: var(--palanca-cliente);">Día a día · ejecutar · qué es</span>

# Claude Cowork. <br/>La <mark class="highlight">navaja suiza</mark> que vive en tu ordenador.

<p style="margin: 0.9rem 0 0; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 1.28rem; line-height: 1.4; color: var(--ink-soft); max-width: 62ch;">
Claude, pero con llaves de tu ordenador. Abre tus archivos, usa tus apps, escribe tus mails. Chat normal — <em>sin consola, sin código</em>. Y si estás fuera de casa, se lo pides <strong>desde el móvil</strong>.
</p>

<div class="grid-3" style="margin-top: 2rem; gap: 1.8rem; align-items: start;">

<div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; margin-bottom: 0.7rem; color: var(--palanca-cliente);">qué hace por ti</div>

<ul style="margin: 0; font-size: 0.94rem; line-height: 1.55; padding-left: 1.1rem;">
  <li style="margin-bottom: 0.3rem;">Abre, lee y ordena tus archivos</li>
  <li style="margin-bottom: 0.3rem;">Escribe mails, documentos e informes</li>
  <li style="margin-bottom: 0.3rem;">Monta Excels desde PDFs o fotos</li>
  <li style="margin-bottom: 0.3rem;">Busca en tu Drive, Gmail, Notion</li>
  <li>Te pide permiso antes de borrar nada</li>
</ul>

</div>

<div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; margin-bottom: 0.7rem; color: var(--palanca-cliente);">cómo se lo pides</div>

<p style="margin: 0 0 0.7rem 0; font-size: 0.94rem; line-height: 1.55;">
<strong>Desde el ordenador,</strong> chat normal.
</p>

<p style="margin: 0 0 0.7rem 0; font-size: 0.94rem; line-height: 1.55;">
<strong>Desde el móvil,</strong> le escribes en el AVE — y cuando llegas a la oficina el trabajo ya está en tu carpeta.
</p>

<p style="margin: 0; font-size: 0.94rem; line-height: 1.55;">
<strong>En automático,</strong> cada lunes a las 9 — sin tener que acordarte.
</p>

</div>

<div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; margin-bottom: 0.7rem; color: var(--palanca-cliente);">ejemplos reales</div>

<ul style="margin: 0; font-size: 0.92rem; line-height: 1.55; padding-left: 1.1rem;">
  <li style="margin-bottom: 0.4rem;">"Ordena los 47 archivos del trimestre por proyecto"</li>
  <li style="margin-bottom: 0.4rem;">"Abre las facturas del mes y sácame las pendientes en Excel"</li>
  <li style="margin-bottom: 0.4rem;">"Coge el research que acabo de generar y montame un dashboard"</li>
  <li>"Cada lunes, resúmeme los mails sin leer por prioridad"</li>
</ul>

</div>

</div>

<div style="margin-top: 1.8rem; border-top: 1px solid var(--rule); padding-top: 0.9rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
<p style="font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 1.15rem; margin: 0;">
Claude Code es para programadores. <mark class="highlight">Cowork</mark> es para el resto.
</p>
<div class="text-mono text-small text-mute" style="letter-spacing: 0.04em;">
incluido en Claude Pro · Mac y Windows
</div>
</div>

<!--
GUIÓN:
"Esta es la que quiero que recordéis — si os lleváis un solo nombre
de la palanca Día a día, que sea éste. Claude Cowork.

Pensadlo así: Cowork es la navaja suiza. El asistente que vive DENTRO
de vuestro ordenador, con llaves de vuestros archivos, vuestras apps
y vuestro correo. No os advierte, no os aconseja — hace el trabajo.
Y la interfaz sigue siendo un chat normal, como el Claude de la web.
Sin terminal, sin código.

Lo que HACE por vosotros es bastante: abre, lee y ordena archivos
locales. Escribe mails, documentos e informes. Monta Excels partiendo
de PDFs o fotos de facturas. Busca en vuestro Drive, Gmail, Notion.
Y — esto es importante — os pide permiso antes de borrar nada.

Cómo se lo pedís. Tres modos:

Uno — desde el ordenador, chat normal. Obvio.

Dos — y esto es lo que me tiene enganchado — desde el MÓVIL. Se llama
Dispatch. Estáis en el AVE, os acordáis de una cosa, le escribís desde
el móvil, y Claude la ejecuta en vuestro Mac en casa. Cuando llegáis
a la oficina, el deliverable ya está en la carpeta.

Tres — en automático. Le decís 'cada lunes a las nueve resume los
mails del finde por prioridad', y se ejecuta solo. Sin tener que
acordarse.

Tercer ejemplo de la lista — fijaos — 'coge el research que acabo
de generar y montame un dashboard'. Eso es exactamente lo que vamos
a ver en la demo de aquí a dos slides.

Frase para llevarse: Claude Code es para programadores. Cowork es
para el resto. Y está incluido en Claude Pro. No cuesta un euro más."

NOTAS:
- NO hacer demo en vivo — hay partes en beta, puede fallar en directo
- Si preguntan por seguridad: honestidad — le das permiso TÚ, toca
  solo las carpetas que apruebes, pero es beta — no lo conectéis
  aún a cuentas sensibles sin probar antes en una carpeta sandbox.
- Dispatch requiere la app de Claude móvil + desktop emparejadas con QR
- Transición a slide Dispatch & Artifacts (zoom-in)
-->

---
layout: default
---

<SlideBadge provider="claude" />

<span class="eyebrow" style="color: var(--palanca-cliente);">Día a día · ejecutar · zoom dentro de Claude Cowork</span>

# Dispatch & Artifacts. <br/>Cuando <mark class="highlight">Cowork</mark> deja de ser un chat.

<p style="margin: 0.5rem 0 0; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 1.1rem; line-height: 1.4; color: var(--ink-soft); max-width: 64ch;">
Dos cosas dentro de <strong>Claude Cowork</strong> que merecen su propia slide. Una vive en tu bolsillo. La otra, en la ventana de al lado.
</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1.1rem; align-items: start;">
<div>
<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.72rem; margin-bottom: 0.6rem; border-bottom: 1px solid var(--rule); padding-bottom: 0.4rem;">Dispatch · desde el móvil</div>
<img src="/dispatch.png" alt="Dispatch — la app móvil de Claude que ejecuta encargos en tu ordenador" style="width: 100%; height: 200px; object-fit: contain; object-position: center; display: block; border: 1px solid var(--rule); background: var(--paper-pure); padding: 0.4rem;" />
<div class="text-mono text-caps text-mute" style="margin-top: 0.4rem; letter-spacing: 0.14em; font-size: 0.62rem;">app móvil · empareja con QR</div>
<p style="margin: 0.9rem 0 0; font-size: 0.98rem; line-height: 1.5;">Cowork ya tiene llaves de tus carpetas, conectores y apps. Desde el móvil le mandas el encargo y <strong>usa esa misma conexión</strong> para ejecutarlo en tu ordenador.</p>
<p style="margin: 0.6rem 0 0; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 0.95rem; line-height: 1.5; color: var(--ink-soft); border-left: 2px solid var(--palanca-cliente); padding-left: 0.8rem;">El móvil es el mando. El ordenador, el taller.</p>
</div>
<div>
<div class="text-mono text-caps" style="color: var(--palanca-cliente); letter-spacing: 0.14em; font-size: 0.72rem; margin-bottom: 0.6rem; border-bottom: 1px solid var(--rule); padding-bottom: 0.4rem;">Artifacts · mini-apps a medida</div>
<div style="border: 1px solid var(--rule); background: var(--paper-pure); height: 200px; display: flex; flex-direction: column; overflow: hidden;"><div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.45rem 0.7rem; border-bottom: 1px solid var(--rule); background: var(--paper-sunken);"><span style="width: 9px; height: 9px; border-radius: 50%; background: #e06b5b; display: inline-block;"></span><span style="width: 9px; height: 9px; border-radius: 50%; background: #e8b85b; display: inline-block;"></span><span style="width: 9px; height: 9px; border-radius: 50%; background: #6ba87a; display: inline-block;"></span><span class="text-mono text-mute" style="font-size: 0.65rem; margin-left: 0.4rem; letter-spacing: 0.04em;">pawly-pain-map · vivo</span></div><div style="padding: 0.95rem 1.1rem; flex: 1; display: flex; flex-direction: column; gap: 0.7rem;"><div><div class="text-mono text-caps text-mute" style="letter-spacing: 0.12em; font-size: 0.58rem;">top opportunity</div><div style="font-family: 'IBM Plex Serif', serif; font-size: 1.55rem; line-height: 1.05; margin-top: 0.2rem; color: var(--ink);">"vet disponible <br/>los domingos"</div></div><div><div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--ink-soft); margin-bottom: 0.25rem;"><span>frecuencia</span><span class="text-mono" style="color: var(--accent-success); font-weight: 600;">847 menciones</span></div><div style="position: relative; height: 4px; background: var(--paper-deep);"><div style="position: absolute; left: 0; top: 0; height: 100%; width: 88%; background: var(--palanca-cliente);"></div></div></div><div><div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--ink-soft); margin-bottom: 0.25rem;"><span>gravedad reportada</span><span class="text-mono" style="color: var(--ink-mute);">4.6 / 5</span></div><div style="position: relative; height: 4px; background: var(--paper-deep);"><div style="position: absolute; left: 0; top: 0; height: 100%; width: 92%; background: var(--palanca-cliente);"></div></div></div><div class="text-mono" style="font-size: 0.7rem; color: var(--accent-success); letter-spacing: 0.03em; margin-top: 0.1rem;">&#8627; nadie lo resuelve · gap claro</div></div></div>
<div class="text-mono text-caps text-mute" style="margin-top: 0.4rem; letter-spacing: 0.14em; font-size: 0.62rem;">pawly pain map · ejemplo</div>
<p style="margin: 0.9rem 0 0; font-size: 0.98rem; line-height: 1.5;">Claude no te devuelve texto: te monta una <strong>herramienta a medida</strong> — calculadora, simulador, dashboard — que se alimenta de tus PDFs, tu Drive, tus conectores. Y la usas tú.</p>
<p style="margin: 0.6rem 0 0; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 0.95rem; line-height: 1.5; color: var(--ink-soft); border-left: 2px solid var(--palanca-cliente); padding-left: 0.8rem;">No software para vender. Software para tu mesa.</p>
</div>
</div>

<div style="margin-top: 1rem; border-top: 1px solid var(--rule); padding-top: 0.6rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
<p style="font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 1.05rem; margin: 0;">
<mark class="highlight">Dispatch</mark> hace el trabajo. <mark class="highlight">Artifacts</mark> te hace la herramienta.
</p>
<div class="text-mono text-small text-mute" style="letter-spacing: 0.04em;">
ambos · incluidos en Claude Pro
</div>
</div>

<!--
GUIÓN:
"Zoom rápido en dos cosas de Cowork que merecen su propia slide
porque cambian la forma en que os vais a relacionar con la IA.

A la izquierda, Dispatch. Lo que veis en pantalla es la app del móvil.
La clave: como Cowork ya está instalado en vuestro ordenador con
permisos sobre vuestras carpetas, vuestro Drive y vuestros conectores,
desde el móvil aprovecháis ESA misma conexión. Le escribís un encargo
— en el AVE, en la cola del médico, lo que sea — y Claude lo ejecuta
en VUESTRO ordenador (Mac o Windows). Cuando llegáis a la oficina, el
deliverable ya está en la carpeta. El móvil es el mando. El ordenador,
el taller. O dicho de otra forma: un becario que vive dentro de vuestro
ordenador y recibe órdenes por WhatsApp.

A la derecha, Artifacts. Esto es la otra mitad. Cuando le pedís a
Claude algo que es más que un texto — un dashboard, un simulador, un
mapa de dolores — no os lo explica: os lo MONTA. Una mini-app personal,
viva, en una ventana al lado del chat. Y aquí está la magia: se
alimenta de VUESTRAS cosas — vuestros PDFs, vuestro Drive, vuestros
conectores. Lo veis ahí: el ejemplo es el Pawly Pain Map. Cogéis el
research que generó Deep Research, y Claude os monta un dashboard
interactivo: top opportunity, frecuencia, gravedad. Y eso es justo
lo que vamos a ver en la siguiente slide, en vivo.

La frase para llevarse: Dispatch hace el trabajo. Artifacts te hace
la herramienta. Las dos vienen incluidas en Claude Pro."

NOTAS:
- 90 segundos máximo en esta slide. Es zoom-in, no presentación nueva.
- Si preguntan "¿esto es Cowork también?" → matiz: Dispatch nace en
  Cowork (móvil ↔ desktop emparejados); Artifacts también aparece en
  claude.ai web. Pero en el discurso para founders, ambos son "Claude
  ejecutando, no Claude respondiendo".
- El mock-up del Artifact es ilustrativo del Pain Map de la demo
  siguiente — los datos coinciden con los que enseñamos en vivo.
- Transición a la demo del Pain Map (slide siguiente)
-->

---
layout: center
class: demo-slide
---

<SlideBadge demo />

<div class="text-mono text-caps" style="letter-spacing: 0.3em; color: var(--palanca-cliente); margin-bottom: 2rem;">demo · cowork + artifact · pawly pain map</div>

<h2 style="font-size: 2.6rem; line-height: 1.15; max-width: 32ch; margin: 0 auto; font-weight: 600;">
El research <mark class="highlight">se vuelve herramienta</mark>. <br/>En la mesa de Carlos, no en un PDF.
</h2>

<p class="text-mute" style="margin-top: 2.5rem; max-width: 56ch; margin-left: auto; margin-right: auto;">
Cowork leyó el resultado del research anoche y montó un Pain Map interactivo.<br/>
Lo abrimos. Movemos el slider de segmento. Leemos el top opportunity en vivo.
</p>

<!--
GUIÓN:
"Demo dos. Pawly Pain Map. Esto es lo que Cowork hizo anoche cogiendo
el research que acabamos de ver — el voice of customer en markdown.

[ALT-TAB a Claude Cowork con la conversación de anoche ya abierta.
El Artifact 'pawly-pain-map' debe estar renderizado en la ventana
lateral del chat.]

Tres cosas mostrar, ~90 segundos:

Uno — el setup. Le pedí a Cowork: 'lee el research que acabo de
generar y montame una mini-app interactiva: cuadrante 2D con frecuencia x
gravedad, color por gap competitivo, slider de segmento, y un big
number arriba con la top opportunity'. Una frase. Tarda unos minutos.

Dos — el resultado. Lo veis ahí. Cuadrante con los 10 dolores como
puntos. Verde = nadie lo resuelve. Rojo = bien resuelto por un
competidor. Big number arriba: 'vet disponible los domingos · 847
menciones · gravedad 4.6'. Eso es la decisión de feature de Pawly.

Tres — manipulación. Muevo el slider de segmento de 'todos' a 'urbano
Madrid+Barcelona'. Los puntos se reordenan. Ahora la top opportunity
cambia: 'guardería de fin de semana'. Founder de Pawly tiene en 30
segundos lo que un PM con un Excel haría en una semana.

Y fijaos — esto NO es un PDF, no es un report. Es software vivo en
la mesa de Carlos. Para él. No para vender."

NOTAS:
- ANTES DEL EVENTO (la noche antes, ~3-4h):
  1. Generar el research con Deep Research (paso de la demo anterior).
  2. Pasarle a Cowork el archivo + prompt detallado para construir
     el Artifact (ver demo-prep/demo-cowork-pawly-pain-map.md).
  3. Iterar 2-3 veces hasta que el Pain Map quede bien (slider
     funciona, datos coherentes con el research).
  4. DEJAR la conversación de Cowork abierta. NO cerrar Claude
     desktop la noche antes.
- PASOS DE LA DEMO EN SALA (~90 SEGUNDOS):
  1. ALT-TAB a Claude Cowork → conversación previa
  2. Scroll hasta el último mensaje donde está el Artifact
  3. Mostrar el Pain Map renderizado
  4. Leer el big number en alto + 1-2 puntos del cuadrante
  5. Mover el slider de segmento → leer cómo cambia la top opportunity
  6. Cierre: "software vivo en la mesa de Carlos, no un PDF"
- BACKUP si Cowork falla / Artifact no renderiza:
  Screenshot estático del Pain Map en una slide local. Narrar igual,
  enseñando el screenshot. La frase de cierre funciona igual.
- CRÍTICO: NO pedirle nada nuevo a Cowork en sala. Cowork está en
  beta, llamadas en vivo pueden romper. Solo manipulación local del
  Artifact ya cargado (slider).
-->

---
layout: default
---

<SlideBadge provider="gemini" />

<span class="eyebrow" style="color: var(--palanca-cliente);">Día a día · digerir · qué es</span>

# Google NotebookLM. <br/>Un <mark class="highlight">centro documental</mark> con IA.

<p class="lead" style="margin-top: 0.8rem; max-width: 70ch; font-size: 1.02rem;">
No ejecuta tareas en tu ordenador como Cowork. Le cargas hasta <strong>50 fuentes</strong> — PDFs, enlaces, vídeos, audios — y te las transforma en <strong>podcast, vídeo, mapa mental</strong> o chat con citas. En la web, cuenta Google, gratis.
</p>

<div class="text-mono text-caps text-mute" style="margin-top: 1.3rem; letter-spacing: 0.14em; font-size: 0.7rem; border-bottom: 1px solid var(--rule); padding-bottom: 0.4rem;">casos reales para un founder</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem 1.6rem; margin-top: 0.8rem;">

<div style="border-left: 3px solid var(--palanca-cliente); padding: 0.4rem 0.9rem;">
<div style="font-weight: 500; font-size: 0.98rem;">Onboarding del nuevo empleado</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.15rem;">Podcast del manual — lo escucha en el coche el primer día</div>
</div>

<div style="border-left: 3px solid var(--palanca-cliente); padding: 0.4rem 0.9rem;">
<div style="font-weight: 500; font-size: 0.98rem;">Inversor con 3 minutos</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.15rem;">Audio ejecutivo del pitch deck — por WhatsApp</div>
</div>

<div style="border-left: 3px solid var(--palanca-cliente); padding: 0.4rem 0.9rem;">
<div style="font-weight: 500; font-size: 0.98rem;">Cliente que no lee</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.15rem;">Vídeo explicativo desde la doc de producto</div>
</div>

<div style="border-left: 3px solid var(--palanca-cliente); padding: 0.4rem 0.9rem;">
<div style="font-weight: 500; font-size: 0.98rem;">El research que generaste</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.15rem;">Podcast de 10 min para escuchar mientras conduces</div>
</div>

</div>

<!--
GUIÓN:
"Última pieza del trío: NotebookLM, de Google. Y aquí la palabra
'asistente' se queda corta. Esto es otra cosa: un centro documental
con IA.

Cowork vive en tu ordenador y ejecuta tareas. NotebookLM vive en la
web y no toca nada de tu máquina. Le cargas documentación y te la
devuelve transformada.

Tres líneas, qué es: Está en la web. Subes archivos — PDFs, enlaces,
vídeos, audios, lo que sea, hasta 50 fuentes. Y te genera podcasts,
vídeos, mapas mentales y resúmenes con el contenido de esos archivos.

Para qué lo usa un founder — cuatro casos concretos, fijaos en el
último:

- Onboarding. Nuevo empleado. Cargáis el manual de la empresa, os
  devuelve un podcast de diez minutos con dos voces explicándolo.
  El empleado lo escucha en el coche el primer día.

- Inversor con prisa. Cargáis el pitch deck, os devuelve un resumen
  en audio de tres minutos. Se lo mandas por WhatsApp.

- Cliente que no lee documentación. Cargáis la doc de vuestra API,
  os genera un vídeo explicativo. Se lo pasáis al account manager.

- Y el cuarto — que es lo que vamos a hacer en directo en la
  siguiente slide. Cargáis EL RESEARCH QUE GENERASTEIS hace 10
  minutos. Y os devuelve un podcast de dos voces hablando de los
  dolores reales de los clientes. Para escuchar mientras conducís
  el lunes por la mañana.

Gratis con cuenta Google. Cinco minutos de setup."

NOTAS:
- ~1.5 min en esta slide. Es setup para la demo siguiente.
- Énfasis en el cuarto caso → conecta con la demo en vivo.
-->

---
layout: center
class: demo-slide
---

<SlideBadge demo />

<div class="text-mono text-caps" style="letter-spacing: 0.3em; color: var(--palanca-cliente); margin-bottom: 2rem;">demo · notebooklm · el research, ahora en audio</div>

<h2 style="font-size: 2.6rem; line-height: 1.15; max-width: 32ch; margin: 0 auto; font-weight: 600; text-align: center;">
El mismo research, ahora en <mark class="highlight">audio</mark>. <br/>Para escuchar el lunes en el coche.
</h2>

<p class="text-mute" style="margin-top: 2.5rem; max-width: 60ch; margin-left: auto; margin-right: auto; text-align: center;">
Subo el resultado del research como source. NotebookLM genera el Audio Overview.<br/>
Reproducimos. Dos voces hablando de los dolores reales de los clientes pet.
</p>

<!--
GUIÓN:
"Demo tres. Y cierre de la palanca. El mismo research, una salida más.

[ALT-TAB a NotebookLM con el notebook ya creado y el research como
source. El Audio Overview ya generado anoche.]

Tres pasos, ~90 segundos:

Uno — enseño el source. Es el mismo research que generamos antes,
ahora cargado en NotebookLM.

Dos — click en el Audio Overview ya generado.

Tres — reproduzco un fragmento. Dos voces conversacionales, en
español, hablando de los dolores top de Pawly. La sala oye los
nombres reales de los competidores citados, las frecuencias, alguna
quote literal.

Frase de cierre — y aquí es donde quiero que se les quede la palanca:

'Tres herramientas, tres trabajos del día a día. Cada una hace una
cosa muy bien — y la podéis tener funcionando el lunes, gratis o por
veinte euros. Vamos a la siguiente palanca: Producto.'"

NOTAS:
- ANTES DEL EVENTO:
  1. Crear notebook en NotebookLM, subir el resultado del research
  2. Generar Audio Overview en castellano (~5 min)
  3. Descargar el .mp3 como BACKUP local
  4. Verificar audio sale por altavoces de la sala (1h antes)
- PASOS DE LA DEMO EN SALA (~90 SEGUNDOS):
  1. ALT-TAB al notebook
  2. Apuntar al source: "es el mismo research que generamos antes"
  3. Click en Audio Overview pregenerado
  4. Play del fragmento (juega de oído según la sala)
  5. Pausa
  6. Frase de cierre que enlaza directo con Producto
- BACKUP si NotebookLM no carga / audio no sale: reproducir el .mp3
  local desde el reproductor del sistema. Mismo discurso.
- ESTE ES EL CIERRE DE LA PALANCA — la transición a Producto es
  hablada (no hay slide puente). Asegúrate de decir "Vamos a la
  siguiente palanca: Producto" antes de avanzar al PalancaHeader.
-->

---
layout: section
class: text-center
---

<PalancaHeader
  color="producto"
  numero="02"
  titulo="Producto"
>

Quiero construir sin contratar. <br/>
Sin saber programar demasiado. Sin quemar cash.

</PalancaHeader>

<!--
GUIÓN:
"Palanca dos. Producto.

Y aquí está el corazón de la charla — porque esto es lo que de verdad
queréis. Construir vuestro producto sin contratar a medio equipo,
sin saber programar demasiado, sin quemar cash antes de tener tracción."

NOTAS:
- Pausa. Énfasis en "esto es lo que de verdad queréis".
- Avanza.
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-producto);">Producto · dos tipos, dos stacks</span>

# ¿Qué es <mark class="highlight">"producto"</mark> <br/>en tu cabeza ahora mismo?

<div class="grid-2" style="margin-top: 2.5rem; gap: 2rem;">

<div class="card palanca-producto">

### Una landing
Página bonita + captura de leads. El MVP de marketing.

</div>

<div class="card palanca-producto">

### Un SaaS / MVP
Usuarios, auth, base de datos, pagos. El producto de verdad.

</div>

</div>

<p class="lead" style="margin-top: 2.5rem;">
Dos tipos. Dos stacks. Dos decisiones distintas.
</p>

<p class="text-mute" style="margin-top: 0.6rem; font-size: 0.92rem; max-width: 64ch;">
<em>Asistentes para tu día a día — Cowork, NotebookLM, Deep Research — ya los vimos en la palanca anterior. Aquí construimos lo que vendéis.</em>
</p>

<!--
GUIÓN:
"Antes de recomendaciones, algo importante: cuando oís 'producto',
cada uno piensa en una cosa distinta.

Unos pensáis en una landing — página que vende y captura emails.
Otros en un SaaS de verdad — usuarios, login, base de datos, pagos.

Los dos se construyen con IA hoy. Pero con herramientas distintas
y con precios muy distintos.

Y antes de seguir — un disclaimer rápido. Asistentes para vuestro día
a día — Cowork, NotebookLM, Deep Research — los vimos en la palanca
anterior. Eso NO es producto vendible. Es apalancamiento personal
para vosotros, los founders. Aquí, en Producto, construimos lo que
vendéis a vuestros clientes."

NOTAS:
- Transición al primer quadrant
- Subraya "dos stacks distintos" — es el insight clave del bloque
- El disclaimer asistente vs. producto evita confusión con la palanca
  anterior. Importante decirlo.
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-producto);">Producto · 02a</span>

# Quiero una <mark class="highlight">landing</mark>.

<div style="margin-top: 1rem; border: 1px solid var(--rule); background: var(--paper-pure); padding: 0.8rem 1.1rem;">

<div style="display: grid; grid-template-columns: auto 1fr; gap: 0.6rem 1.2rem; align-items: baseline; font-size: 0.9rem;">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--ink-mute);">Free</div>
<div>Lovable free · Bolt free · AI Studio · Antigravity</div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--ink-mute);">De pago</div>
<div>Lovable Pro · Bolt Pro · Framer · Replit Agent</div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--ink-mute);">Producción</div>
<div>Claude Code (Max) · Codex (OpenAI) · + Vercel</div>

</div>

</div>

<div class="text-mono text-caps text-mute" style="margin-top: 1.1rem; letter-spacing: 0.14em; font-size: 0.68rem;">según tu perfil</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; margin-top: 0.4rem;">

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">FREE</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· NO-TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Lovable free <span style="color: var(--ink-mute); font-weight: 400;">(o Bolt free)</span></div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">30 generaciones/mes. Para landing + alguna iteración.</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">$</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· NO-TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Lovable Pro <span style="color: var(--ink-mute); font-weight: 400;">(o Bolt Pro, Framer)</span></div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">Sin límite de generaciones, Supabase integrado, deploy en un click.</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">FREE</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">AI Studio <span style="color: var(--ink-mute); font-weight: 400;">/</span> Antigravity</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">De Google, todo gratis. En el navegador. Deploy en Vercel.</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">$$</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Claude Code + Vercel</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">Control total, techo de producción. ~90 €/mes (Claude Max).</div>
</div>

</div>

<div style="margin-top: 1rem; border: 1px solid var(--palanca-producto); border-left: 3px solid var(--palanca-producto); background: var(--paper-sunken); padding: 0.75rem 1.1rem;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--palanca-producto);">Matiz · para landings</div>
<div style="font-size: 0.9rem; margin-top: 0.3rem; line-height: 1.5;">
Una landing <strong>no pide expertise técnico alto</strong>. Si vas a gastar el <strong>$</strong>, hoy <mark class="highlight">Claude</mark> te lleva más lejos que Lovable Pro, incluso sin ser técnico.
</div>
</div>

<div class="text-mono text-small text-mute" style="margin-top: 0.9rem; font-style: italic;">
$ · ~25 €/mes &nbsp;|&nbsp; $$ · ~90 €/mes
</div>

<!--
GUIÓN:
"Primer tipo. Quiero una landing. Landing real — para que nos
entendamos — página que captura leads, con deploy funcionando. No
un mockup.

Primero os pongo el mapa del mercado. Free — Lovable, Bolt, AI
Studio, Antigravity, v0 (este solo hace frontend). De pago — Lovable
Pro, Bolt Pro, Replit Agent. Producción — Claude Code Max más Vercel.
Todo lo que hay hoy, ahí.

Ahora, según tu perfil:

Sin presupuesto, no-técnico → Lovable free o Bolt free. Treinta
generaciones al mes. Suficiente para una landing con alguna iteración.

25 euros al mes, no-técnico → Lovable Pro o Bolt Pro. Sin límite de
generaciones, Supabase ya integrado, deploy en un click. El camino
estándar hoy para founders no-técnicos que van en serio.

Técnico sin presupuesto → AI Studio Build de Google más Antigravity,
el IDE gratis de Google con Claude debajo. Todo gratis, vive en el
navegador, deploy en Vercel.

Técnico con presupuesto — unos 90 euros al mes — Claude Code más
Vercel. Control total, techo de producción. Aviso importante: Claude
Code ya NO está en el plan Pro de 20 euros, lo movieron al Max que
son 90-100 euros.

Matiz importante — y esta es mi opinión, lo veis marcado bajo el
mapa. Una landing NO pide expertise técnico alto. Si vais a gastar
los 20-25 euros del $, mi apuesta hoy es Claude por encima de Lovable
Pro, incluso para perfiles no-técnicos. Os llevará más lejos.

Y para los que pensaban 'y si solo quiero diseño, no código' — slide
siguiente."

NOTAS:
- Primero mapa (panorámica), luego decisión por perfil
- Tono neutral: "el camino estándar", no "mi pick"
- Si se ve que la sala se está perdiendo, para y pide "levantad la
  mano los que entienden en qué perfil estáis" — diagnóstico en vivo
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-producto);">Producto · paréntesis</span>

# ¿Solo <mark class="highlight">diseño</mark>? Slide, mockup o prototipo.

<p style="margin-top: 0.8rem; font-size: 1rem; color: var(--ink-soft); max-width: 72ch;">
Pitch deck, mockup para el inversor, prototipo navegable. Sin deploy, sin código.
</p>

<div class="grid-3" style="margin-top: 1.2rem; gap: 0.9rem;">

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<h3 style="margin: 0; font-size: 1.05rem;">Claude Design</h3>
<p style="font-size: 0.88rem; color: var(--ink-soft); margin: 0.4rem 0 0; line-height: 1.45;">
<strong>Decks, mockups, prototipos</strong>, landing pages, dashboards. Chat, vídeo, 3D embebidos. Export <strong>PPTX · Canva · PDF · HTML</strong>. Handoff a Claude Code.
</p>
<div class="text-mono text-small text-mute" style="margin-top: 0.5rem;">Incluido en Claude Pro / Max</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<h3 style="margin: 0; font-size: 1.05rem;">Google Stitch</h3>
<p style="font-size: 0.88rem; color: var(--ink-soft); margin: 0.4rem 0 0; line-height: 1.45;">
Canvas con IA para explorar varias direcciones de diseño en paralelo. Free con cuenta Google.
</p>
<div class="text-mono text-small text-mute" style="margin-top: 0.5rem;">stitch.withgoogle.com</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<h3 style="margin: 0; font-size: 1.05rem;">Figma + IA</h3>
<p style="font-size: 0.88rem; color: var(--ink-soft); margin: 0.4rem 0 0; line-height: 1.45;">
El estándar clásico con IA integrada. Para equipos con diseñador ya en plantilla.
</p>
<div class="text-mono text-small text-mute" style="margin-top: 0.5rem;">figma.com</div>
</div>

</div>

<p style="margin-top: 1.1rem; font-size: 0.9rem; line-height: 1.55;">
<strong>Con diseñador</strong> → Figma. &nbsp; <strong>Ya pagas Claude</strong> → Claude Design. &nbsp; <strong>Sin pagar</strong> → Stitch.
<br/>
<span class="text-mono text-small text-mute">Ninguna genera código real — solo diseño o presentación.</span>
</p>

<!--
GUIÓN:
"Antes de pasar al segundo tipo — un paréntesis importante.

Todo lo que os he enseñado construye producto ejecutable — landing
con formulario que funciona. Pero muchas veces NO queréis eso. A veces
queréis un pitch deck para un inversor. Un mockup para el cofundador.
Un prototipo navegable para enseñar al primer cliente. Sin deploy, sin
código, sin complicaciones.

Para ESO, las tools son distintas. Tres que funcionan hoy:

Claude Design — se lanzó hace muy pocos días, el 17 de abril. Esto es
importante, porque la mayoría pensáis que Claude Design es solo para
mockups de producto. No. Hace pitch decks, prototipos interactivos
con chat y vídeo dentro, landing pages, dashboards, marketing assets.
Y exporta a PowerPoint, PDF, Canva, HTML. Y tiene handoff directo a
Claude Code si luego queréis pasar a ejecutable. Viene incluido en
Claude Pro y Max — sin coste extra.

Google Stitch — gratis. Canvas con IA nativa, genera varias direcciones
de diseño a la vez para que escojáis. Perfecto para explorar.

Y Figma con IA — el clásico, si ya tenéis diseñador en plantilla.

Regla simple para decidir. Si tenéis diseñador, Figma. Si no tenéis
diseñador pero ya pagáis Claude, Claude Design — cubre pitch deck,
mockup y prototipo con un solo producto. Si no pagáis nada, Stitch
de Google.

Importante — ninguna de las tres genera código real ni deja una app
funcionando. Son diseño, presentación o prototipo. Si queréis pasar
a producto real, el handoff está en Claude Design → Claude Code, o
volvéis al quadrant anterior.

Pasamos al segundo tipo — SaaS, el que probablemente más os interesa."

NOTAS:
- Este slide cura el vacío: "no confundáis diseño con producto"
- Dato clave nuevo: Claude Design NO es solo para mockups — también
  hace decks de presentación. Menciónalo EXPLÍCITAMENTE porque la
  audiencia va a pensar que es solo UI.
- Si alguien pregunta "¿Claude Design → Claude Code?" — sí, handoff
  directo, pasa el design system al dev con un comando.
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-producto);">Producto · 02b</span>

# Quiero mi <mark class="highlight">SaaS</mark> / MVP.

<div style="margin-top: 1rem; border: 1px solid var(--rule); background: var(--paper-pure); padding: 0.8rem 1.1rem;">

<div style="display: grid; grid-template-columns: auto 1fr; gap: 0.6rem 1.2rem; align-items: baseline; font-size: 0.9rem;">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--ink-mute);">Free</div>
<div>Lovable free · Bolt free · Antigravity · AI Studio</div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--ink-mute);">De pago</div>
<div>Lovable Pro + Supabase · Bolt Pro · Replit Agent · Cursor Pro <em style="color: var(--ink-mute);">(20 €)</em> · Windsurf</div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--ink-mute);">Producción</div>
<div>Claude Code (Max) · Codex (OpenAI) <em style="color: var(--ink-mute);">solos o con Cursor</em></div>

</div>

</div>

<div class="text-mono text-caps text-mute" style="margin-top: 1.1rem; letter-spacing: 0.14em; font-size: 0.68rem;">según tu perfil</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; margin-top: 0.4rem;">

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">FREE</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· NO-TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Lovable free <span style="color: var(--ink-mute); font-weight: 400;">(o Bolt free)</span></div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">Solo prototipo. Validas con 10 usuarios. Si funciona, pagas.</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">$</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· NO-TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Lovable Pro + Supabase</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">MVP real, escalable. Auth, base de datos, pagos. Stack estándar hoy.</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">FREE</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· TÉCNICO</span>
</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Antigravity <span style="color: var(--ink-mute); font-weight: 400;">/</span> AI Studio</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">Stack gratis más completo de hoy, con Claude y Gemini por debajo.</div>
</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-producto); padding: 0.8rem 1rem; background: var(--paper-pure);">
<div style="display: flex; align-items: baseline; gap: 0.5rem;">
  <span style="color: var(--palanca-producto); font-weight: 700; font-size: 1.1rem; letter-spacing: 0.03em;">$$</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.78rem; color: var(--ink);">· TÉCNICO</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.35rem;">
  <span style="font-weight: 600; font-size: 1.05rem;">Claude Code</span>
  <span style="background: var(--accent-highlight); color: var(--ink); font-family: 'IBM Plex Mono', monospace; font-size: 0.64rem; font-weight: 600; letter-spacing: 0.12em; padding: 0.12rem 0.45rem; text-transform: uppercase;">mejor resultado</span>
</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.45;">Plan Max (~90 €/mes). El que da mejores resultados hoy en código real de producción.</div>
</div>

</div>

<div class="text-mono text-small text-mute" style="margin-top: 0.9rem; font-style: italic;">
$ · ~25 €/mes &nbsp;|&nbsp; $$ · ~90 €/mes
</div>

<!--
GUIÓN:
"Segundo tipo. Quiero mi MVP de verdad — SaaS con usuarios, login,
base de datos, pagos. Todo el pack.

Primero el mapa completo. Free — Lovable, Bolt, Antigravity, AI
Studio (solo prototipo). De pago — Lovable Pro más Supabase, Bolt
Pro, Replit Agent, Cursor Pro, Windsurf. Producción — Claude Code
Max, solo o con Cursor encima.

Ahora según perfil:

Sin presupuesto, no-técnico → Lovable free o Bolt free, SOLO para
prototipar. Validas la idea con diez usuarios. Si funciona, pagas.

25 euros al mes, no-técnico → Lovable Pro más Supabase. MVP real,
escalable. Conozco un founder que llegó a 500 usuarios de pago solo
con este stack.

Técnico sin presupuesto → Antigravity o AI Studio. Stack gratis
más completo que hay hoy, con Claude y Gemini por debajo. Tiene
sus límites de estabilidad, pero funciona.

Técnico en producción → Cursor Pro, 20 euros al mes para el día a
día, más Claude Code en Max para refactors complejos. En total unos
120 euros al mes. No os vendo que es barato — es lo que cuesta
cuando un producto importa y queréis control de verdad.

Aviso que repito: Claude Code ya NO está en el plan Pro de 20 euros
— lo movieron al Max de 90-100.

Y viene la demo — la más grande de la charla. Construimos un MVP
real en vivo."

NOTAS:
- Primero mapa (panorámica), luego decisión por perfil
- Tono neutral: guías, no dictas
- La mención a "500 usuarios" es plausible y universal (no es de Mint)
- Transición a la demo
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-producto);">demo · landing para Pawly · Claude Code orquestado</span>

# La landing de <em>Pawly</em>. <mark class="highlight">Construida por partes</mark>, no de una.

<div style="margin-top: 0.55rem; display: grid; grid-template-columns: auto 1fr; gap: 0.25rem 1.2rem; align-items: baseline; font-size: 0.84rem;">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.64rem; color: var(--palanca-datos);">Problema</div>
<div>La IA no te avisa de que una tarea es demasiado grande — lo intenta de una y sale regular.</div>

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.64rem; color: var(--palanca-cliente);">Solución</div>
<div>Le pides que <strong>divida</strong> la tarea en sub-prompts. Ella crea la estructura. Tú decides cuándo ejecutar cada uno.</div>

</div>

<div style="background: var(--paper-sunken); padding: 0.7rem 1.15rem; border-left: 3px solid var(--palanca-producto); font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; line-height: 1.42; margin-top: 0.6rem;">

<p style="margin: 0 0 0.35rem 0;"><strong>Quién soy</strong>: Carlos, founder primerizo de <strong>Pawly</strong> — marketplace para dueños de perros en España, expandiendo a Portugal.</p>

<p style="margin: 0 0 0.35rem 0;"><strong>Mi nivel</strong>: Conozco el sector. No soy diseñador ni marketero.</p>

<p style="margin: 0 0 0.35rem 0;"><strong>Qué necesito</strong>: La landing principal. <strong>No quiero que parezca generada por IA</strong> — nada de gradients lilas, cards genéricas, CTAs gigantes. Referencias: <em>Rover, Barkyn, Linear</em>.</p>

<p style="margin: 0 0 0.35rem 0;"><strong>Antes de hacer nada</strong>: hazme todas las preguntas que necesites (stack, referencias, fotos, copy, deploy). Con mis respuestas, crea <strong>/prompts</strong> con tantos sub-prompts como consideres (estructura, copy, diseño, componentes, SEO, deploy).</p>

<p style="margin: 0;"><strong>Cuando los tengas listos</strong>: orquesta la ejecución — lanza cada sub-prompt con un <strong>subagente</strong> propio, en orden. Usa <strong>@informe-mercado</strong> si viene bien.</p>

</div>

<div style="margin-top: 0.55rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; flex-wrap: wrap; font-family: 'IBM Plex Mono', monospace; font-size: 0.74rem; color: var(--ink-mute); letter-spacing: 0.04em;">
  <span>pregunta</span>
  <span>→</span>
  <span>crea sub-prompts</span>
  <span>→</span>
  <span>orquesta subagentes en orden</span>
  <span>→</span>
  <span>landing desplegada</span>
</div>

<!--
GUIÓN:
"Segunda demo del bloque Producto. Y aquí viene la clave de cómo construimos
con IA cuando queremos algo que NO parezca generado por IA.

Este prompt es el que corrí anoche en Claude Code. Mismo caso — Pawly. Y
fijaos en el giro importante: no le digo a Claude Code 'hazme la landing'
directamente. Le digo 'piensa qué prompts necesitas para hacer la landing
bien — créalos en /prompts, y luego orquéstalos'.

Claude Code se toma su tiempo, genera seis o siete sub-prompts — uno de
estructura, otro de copy, otro de paleta tipográfica, otro de SEO, otro
de deploy. Me pregunta lo que le falta: URLs de referencia, si tenemos
fotos, qué precios reales. Yo contesto. Y luego va ejecutando sub-prompts
en orden.

Resultado: landing deployada que NO parece IA — tipografía con carácter,
paleta contenida, copy real basado en el market research que ya teníamos,
foto cuidada. La misma disciplina de 'declarar + dejar preguntar + verificar'
pero escalada a un proyecto entero.

[ALT-TAB al navegador con la landing de Pawly ya desplegada]

Esto es lo que salió anoche. Scroll. Fijaos en los detalles — nada de
iconitos rocket-shield-lightning, cero gradients, copy que parece escrito
por alguien que sabe del sector.

Y — el mismo principio — esta presentación está construida igual. Claude
Code, sub-prompts orquestados, Slidev. No agencia, no Keynote."

NOTAS:
- ANTES DEL EVENTO (la noche antes):
  1. Correr el prompt en Claude Code real, dejando que cree /prompts
  2. Contestar las preguntas que haga
  3. Deployar la landing en Vercel (URL pública)
  4. Tener tab con la landing abierta para alt-tab rápido
  5. Guardar el árbol /prompts/ — es parte del "wow" visual si alguien pregunta
- PASOS DE LA DEMO EN SALA (~3-4 min):
  1. Leer el prompt en voz alta (está en la slide)
  2. ALT-TAB a Claude Code — mostrar el árbol /prompts/ generado anoche
  3. Abrir 1-2 sub-prompts para enseñar que son concretos, no lorem
  4. ALT-TAB a la landing desplegada — scroll de arriba abajo
  5. "Esta presentación también. Mismo patrón."
- BACKUP si la URL no carga: screenshots de la landing + /prompts/
- ESTE PROMPT ES ASSET DESCARGABLE — mismo nivel que el prompt del
  Deep Research. Manu lo incluye en el asset-pack.
-->

---
layout: section
class: text-center
---

<PalancaHeader
  color="marca"
  numero="03"
  titulo="Marca"
>

El frente que más ha cambiado en los últimos seis meses. <br/>
Si la última vez que intentasteis generar imagen o vídeo con IA <br/>
fue hace un año, olvidadlo. Es otra liga.

</PalancaHeader>

<!--
GUIÓN:
"Palanca tres. Marca.

De las tres palancas, esta es la que más ha cambiado en los últimos
seis meses. Si la última vez que intentasteis generar imagen o vídeo
con IA fue hace un año, olvidad lo que visteis. Es otra liga."

NOTAS:
- Enfatiza "OTRA LIGA"
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-marca);">Marca · el mapa · abril 2026</span>

# El estado del arte, <mark class="highlight">hoy</mark>.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-top: 1.3rem;">

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-marca); padding: 0.85rem 1.1rem; background: var(--paper-pure);">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; color: var(--palanca-marca); margin-bottom: 0.5rem;">Imagen</div>

<div style="font-weight: 600; font-size: 1rem; display: flex; align-items: center; gap: 0.45rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: var(--brand-chatgpt); -webkit-mask: url('/logos/openai.svg') center/contain no-repeat; mask: url('/logos/openai.svg') center/contain no-repeat; flex-shrink: 0;"></span>
  <span>ChatGPT Images 2.0 <span style="color: var(--ink-mute); font-weight: 400; font-size: 0.85rem;">· OpenAI</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">20 $/m</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0;">LÍDER</span>
</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">Texto perfecto en imágenes (anuncios, pósters con copy).</div>

<div style="margin-top: 0.55rem; font-size: 0.82rem; color: var(--ink-soft); line-height: 1.85;">
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span style="display: inline-block; width: 13px; height: 13px; background-color: var(--brand-gemini); -webkit-mask: url('/logos/googlegemini.svg') center/contain no-repeat; mask: url('/logos/googlegemini.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <span><strong>Nano Banana Pro</strong> · Google <em>· AI Studio + créditos GCP</em></span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">20 $/m</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span style="display: inline-block; width: 13px; height: 13px; background-color: var(--palanca-marca); -webkit-mask: url('/logos/midjourney.svg') center/contain no-repeat; mask: url('/logos/midjourney.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <span><strong>Midjourney v8</strong> · estética artística pura</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">30 $/m</span>
  </div>
</div>

</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-marca); padding: 0.85rem 1.1rem; background: var(--paper-pure);">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; color: var(--palanca-marca); margin-bottom: 0.5rem;">Vídeo</div>

<div style="font-weight: 600; font-size: 1rem; display: flex; align-items: center; gap: 0.45rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: var(--brand-gemini); -webkit-mask: url('/logos/googlegemini.svg') center/contain no-repeat; mask: url('/logos/googlegemini.svg') center/contain no-repeat; flex-shrink: 0;"></span>
  <span>Veo 3.1 <span style="color: var(--ink-mute); font-weight: 400; font-size: 0.85rem;">· Google · Vids + Flow</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">20 $/m</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0;">PRÁCTICO</span>
</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">Audio nativo + gratis directo desde cuenta Google (Vids: 10/mes · Flow: 12/día).</div>

<div style="margin-top: 0.55rem; font-size: 0.82rem; color: var(--ink-soft); line-height: 1.85;">
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span style="display: inline-block; width: 13px; height: 13px; background-color: var(--palanca-marca); -webkit-mask: url('/logos/kling.svg') center/contain no-repeat; mask: url('/logos/kling.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <span><strong>Kling 3.0</strong> · Kuaishou · <strong>#1 calidad</strong> · free 66 cr/día</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">5,99 $/m</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span><strong>Hailuo 2.3</strong> · Minimax · más rápido + mejor en humanos</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">~10 $/m</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span style="display: inline-block; width: 13px; height: 13px; background-color: var(--palanca-marca); -webkit-mask: url('/logos/runway.svg') center/contain no-repeat; mask: url('/logos/runway.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <span><strong>Runway Gen-4.5</strong> · suite editorial pro</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">12 $/m</span>
  </div>
</div>

</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-marca); padding: 0.85rem 1.1rem; background: var(--paper-pure);">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; color: var(--palanca-marca); margin-bottom: 0.5rem;">Voz</div>

<div style="font-weight: 600; font-size: 1rem; display: flex; align-items: center; gap: 0.45rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: var(--palanca-marca); -webkit-mask: url('/logos/elevenlabs.svg') center/contain no-repeat; mask: url('/logos/elevenlabs.svg') center/contain no-repeat; flex-shrink: 0;"></span>
  <span>ElevenLabs v3 <span style="color: var(--ink-mute); font-weight: 400; font-size: 0.85rem;">· 74 idiomas</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">22 $/m</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0;">LÍDER</span>
</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">Imbatible en voice cloning y narración larga.</div>

<div style="margin-top: 0.55rem; font-size: 0.82rem; color: var(--ink-soft); line-height: 1.85;">
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span style="display: inline-block; width: 13px; height: 13px; background-color: var(--brand-gemini); -webkit-mask: url('/logos/googlegemini.svg') center/contain no-repeat; mask: url('/logos/googlegemini.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <span><strong>Veo 3.1</strong> · audio + vídeo en la misma pasada</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">20 $/m</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span><strong>Cartesia Sonic 3</strong> · real-time 90 ms (agentes de voz)</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">API</span>
  </div>
</div>

</div>

<div style="border: 1px solid var(--rule); border-top: 3px solid var(--palanca-marca); padding: 0.85rem 1.1rem; background: var(--paper-pure);">

<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.68rem; color: var(--palanca-marca); margin-bottom: 0.5rem;">Música</div>

<div style="font-weight: 600; font-size: 1rem; display: flex; align-items: center; gap: 0.45rem;">
  <span style="display: inline-block; width: 15px; height: 15px; background-color: var(--palanca-marca); -webkit-mask: url('/logos/suno.svg') center/contain no-repeat; mask: url('/logos/suno.svg') center/contain no-repeat; flex-shrink: 0;"></span>
  <span>Suno v5 <span style="color: var(--ink-mute); font-weight: 400; font-size: 0.85rem;">· derechos comerciales</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">8 $/m anual</span>
  <span class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.56rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.14rem 0.4rem; font-weight: 700; line-height: 1; flex-shrink: 0;">LÍDER</span>
</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">Jingles, música de fondo, cualquier género. 2.500 créditos/mes.</div>

<div style="margin-top: 0.55rem; font-size: 0.82rem; color: var(--ink-soft); line-height: 1.85;">
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span>Free · 50 créditos/día <em>sin uso comercial</em></span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">0 $/m</span>
  </div>
  <div style="display: flex; align-items: center; gap: 0.45rem;">
    <span>Premier · incluye Suno Studio (DAW)</span>
    <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.54rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.12rem 0.35rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">24 $/m anual</span>
  </div>
</div>

</div>

</div>

<div style="margin-top: 0.55rem; border: 1px solid var(--rule); border-top: 3px solid var(--palanca-marca); padding: 0.65rem 0.95rem; background: var(--paper-pure);">

<div style="display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: 0.45rem;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--palanca-marca);">Agregadores · una suscripción → 15+ modelos en uno · sin código</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.95rem;">

<div>
<div style="font-weight: 600; font-size: 0.92rem; display: flex; align-items: baseline; gap: 0.45rem;">
  <span>Higgsfield <span class="text-mono text-caps" style="font-weight: 400; letter-spacing: 0.1em; font-size: 0.52rem; color: var(--palanca-marca);">· cinematográfico</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.52rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.1rem 0.32rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">15-99 $/m</span>
</div>
<div style="font-size: 0.76rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">15+ modelos (Sora 2, Veo 3.1, Kling 3.0, Seedance). <strong>Cinema Studio</strong>: control real de cámara, lente y focal.</div>
</div>

<div>
<div style="font-weight: 600; font-size: 0.92rem; display: flex; align-items: baseline; gap: 0.45rem;">
  <span>Krea <span class="text-mono text-caps" style="font-weight: 400; letter-spacing: 0.1em; font-size: 0.52rem; color: var(--palanca-marca);">· iterar rápido</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.52rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.1rem 0.32rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">9-200 $/m · free</span>
</div>
<div style="font-size: 0.76rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">64 modelos (Flux, Veo 3, Runway) + Krea 1 propio. <strong>Real-time 50 ms</strong> en imagen — iteras viendo el cambio.</div>
</div>

<div>
<div style="font-weight: 600; font-size: 0.92rem; display: flex; align-items: baseline; gap: 0.45rem;">
  <span>Leonardo <span class="text-mono text-caps" style="font-weight: 400; letter-spacing: 0.1em; font-size: 0.52rem; color: var(--palanca-marca);">· consistencia de marca</span></span>
  <span class="text-mono text-caps" style="margin-left: auto; letter-spacing: 0.1em; font-size: 0.52rem; color: var(--palanca-marca); border: 1px solid var(--palanca-marca); padding: 0.1rem 0.32rem; font-weight: 700; line-height: 1; flex-shrink: 0; white-space: nowrap;">12-48 $/m · free</span>
</div>
<div style="font-size: 0.76rem; color: var(--ink-soft); margin-top: 0.2rem; line-height: 1.4;">20+ modelos (Flux, Veo, Kling, Sora, Nano Banana). <strong>Fine-tuning</strong>: subes 10 fotos y entrena tu estilo de marca.</div>
</div>

</div>

</div>

<div style="margin-top: 0.55rem; background: var(--paper-sunken); border-left: 2px solid var(--palanca-marca); padding: 0.45rem 0.95rem; font-size: 0.78rem; line-height: 1.45;">
<strong>Dato útil.</strong> ChatGPT Images 2.0 llegó el 21 de abril y en 12 h ya era #1 en Image Arena (+242 puntos, récord histórico). Para marketing con texto, ha pasado a ser la opción por defecto por delante de Midjourney.
</div>

<!--
GUIÓN:
"Os enseño el mapa del estado del arte en marca, rápido. Para que
tengáis referencias cuando lleguéis a casa.

Imagen. La semana pasada OpenAI lanzó ChatGPT Images 2.0. Ya es
número uno del ranking. Su diferenciador: genera texto PERFECTO
dentro de la imagen, algo que ninguna otra hacía bien. Ads con copy
de verdad, pósters, mockups — directo.

Nano Banana Pro de Google sigue siendo imbatible en coste y velocidad.
Y un truco importante para vosotros: es gratis en AI Studio dentro
de ciertos límites, y con los créditos de Google Cloud que os da
Lanzadera podéis tirar prácticamente sin coste. Anotádlo.

Midjourney, solo si buscáis arte puro.

Vídeo. Marqué Veo 3.1 como 'lo más práctico', no como 'el mejor'.
Y os explico la diferencia. El líder en calidad pura es Kling 3.0,
de los chinos de Kuaishou — los hermanos de TikTok. Supera a Veo en
realismo de movimiento, es el número uno mundial en este momento.
Cinco euros al mes y tiene tier free de 66 créditos al día. Pero
para vosotros, founders no técnicos, Veo gana por dos cosas: audio
nativo y que ya viene gratis con vuestra cuenta Google. Diez vídeos
al mes en Google Vids, doce al día en Google Flow. Sin instalar
nada, sin tarjeta. Si la calidad visual es vuestra obsesión, dad el
salto a Kling. Si queréis algo que ya tenéis, Veo. Hailuo y Runway
son alternativas — Hailuo es el más rápido y mejor con humanos,
Runway es la suite editorial más completa.

Voz. ElevenLabs v3, 74 idiomas, líder sin discusión. Si hacéis vídeo
corporativo o doblaje, el estándar. Y Veo 3 ya genera audio sincronizado
en el propio vídeo — importante saberlo.

Música. Suno v5, ocho euros al mes incluye derechos comerciales.
Jingles, música de fondo, lo que queráis.

Y abajo del todo, transversal a todas las categorías — los AGREGADORES.
Una suscripción y os dan acceso a quince o más modelos. Tres que
merecen la pena para un founder.

Higgsfield. Para vídeo cinematográfico. Lo fundó el ex-Head of
Generative AI de Snap. Ciento treinta millones de funding, valoración
de mil trescientos millones en enero. Su Cinema Studio simula física
óptica real — eliges cuerpo de cámara, lente, focal. No es filtro,
es modelado de óptica.

Krea. Para iterar rápido. Dos founders españoles — uno ex-Runway,
otro ex-Perplexity. Series B de cuarenta y siete millones, valoración
quinientos millones. Usuarios LEGO, Samsung, Nike, Pixar. Su Real-Time
genera en cincuenta milisegundos mientras escribís. Cambia el flujo.

Leonardo. Para consistencia de marca. El menos hype de los tres pero
el más útil para producto: subes diez fotos de vuestro logo o de
vuestro producto y os entrena un modelo que SIEMPRE genera en vuestro
estilo. Indispensable si tenéis e-commerce o app con cientos de
imágenes que tienen que mantener un look.

Si vais a cero euros, mejor directo a la fuente — Veo gratis de Google,
Kling free. Si tenéis presupuesto y queréis probar todo el mercado,
agregador.

El dato importante: OpenAI sacó ChatGPT Images 2.0 anteayer y ya
desplazó a Midjourney para marketing. Esto cambia cada semana — por
eso os doy el mapa de abril 2026."

NOTAS:
- Enfatiza "hace 2 días" en ChatGPT Images — la audiencia va a alucinar
- "Gratis" en Veo 3.1 es el otro dato bomba — ahora directo desde
  Google Vids y Google Flow, no solo vids.new
- Si la charla es después del 26-abr-2026, Sora ya está muerto — no lo menciones
- AGREGADORES: si preguntan por Freepik, dilo: "es buen agregador
  pero solo entra al podio si ya usabais Freepik para banco de stock"
- AGREGADORES: si preguntan por fal.ai o Replicate: "son APIs para
  developers, pago por uso, no van por suscripción. Si tenéis técnico
  en el equipo, miradlas; si no, los tres de la slide son el camino"
- Diseño y prototipos NO va aquí — ya están cubiertos en la slide
  "¿Solo diseño?" del bloque Producto
-->


---
layout: center
class: demo-slide
---

<SlideBadge demo />

<div class="text-mono text-caps" style="letter-spacing: 0.3em; color: var(--palanca-marca); margin-bottom: 2rem;">demo · pawly anuncia su novedad · imagen + variantes</div>

<h2 style="font-size: 2.4rem; line-height: 1.18; max-width: 32ch; margin: 0 auto; font-weight: 600;">
<em>Pawly</em> tiene <mark class="highlight">vet los domingos</mark>. <br/>
Toca anunciarlo en redes.
</h2>

<div style="margin-top: 2.6rem; max-width: 42rem; margin-left: auto; margin-right: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 1.4rem; text-align: left;">

<div style="border-top: 3px solid var(--palanca-marca); padding-top: 0.7rem;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--palanca-marca);">01 · imagen del anuncio</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Nano Banana Pro</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.3rem; line-height: 1.45;">El frame protagonista de la campaña. Con espacio para el titular.</div>
</div>

<div style="border-top: 3px solid var(--palanca-marca); padding-top: 0.7rem;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.66rem; color: var(--palanca-marca);">02 · 4 formatos para redes</div>
<div style="font-weight: 600; font-size: 1.05rem; margin-top: 0.35rem;">Claude Design</div>
<div style="font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.3rem; line-height: 1.45;">Misma imagen, cuatro recortes: feed, Story, Reel, Facebook.</div>
</div>

</div>

<p class="text-mute" style="margin-top: 1.8rem; max-width: 62ch; margin-left: auto; margin-right: auto; font-size: 0.88rem;">
La novedad salió del research de la palanca 1. La app la construimos en la palanca 2. <br/>
Ahora la contamos al mundo.
</p>

<!--
GUIÓN:
"Última demo. Y enlaza con todo lo que hemos hecho hoy.

Recordáis. En la palanca 1, Día a día, descubrimos un dolor real
del sector pet — el research dijo: 'vet disponible los domingos',
ochocientas cuarenta y siete menciones, gravedad cuatro coma seis,
NADIE lo resolvía. En la palanca 2 acabamos de construir la landing
de Pawly con la novedad incluida. Ahora Carlos tiene el servicio
listo: un veterinario disponible los domingos.

Pero si la novedad solo está en la app, no se entera nadie. Hay que
contarlo en redes. Y para eso necesitamos dos piezas: la imagen del
anuncio y las variantes para todos los formatos.

Antes de la IA: fotógrafo (quinientos euros), dos semanas. Diseñador
(trescientos euros), cuatro días más. Un mes y ochocientos euros para
anunciar UNA novedad.

Hoy, en esta sala, con dos herramientas. Vamos."

NOTAS:
- ESTE ES EL CIERRE NARRATIVO de toda la charla. Pawly atravesado
  por las tres palancas: descubrir, construir, anunciar.
- Énfasis en el quote del Pain Map ("847 menciones, 4.6 gravedad").
  La sala se acordará — fue la TOP OPPORTUNITY del Artifact.
- DEMO 1 · NANO BANANA (~3 min):
  1. Alt-tab a Gemini con Nano Banana Pro
  2. Pega el prompt visible para la sala (está en asset-pack)
  3. LEE en alto los 7 campos del prompt: sujeto, composición,
     iluminación, fondo, espacio para titular, estilo, formato.
     "Misma tesis: especificar más que el modelo."
  4. Genera. Tarda 30-90s. Mientras sale, muestra un pre-capturado
     con prompt vago ("imagen para anuncio de Pawly") al lado para
     contrastar.
  5. Pantalla completa con el output bueno.
- DEMO 2 · CLAUDE DESIGN (~3 min):
  1. Alt-tab a Claude Design (claude.ai/design)
  2. Adjuntas la imagen recién generada (o el backup pre-generado)
  3. Pega el prompt: 4 variantes del mismo anuncio
     (Instagram cuadrado, Story vertical, Reel vertical, Facebook horizontal)
     con el titular "Tu perro no entiende de domingos. Nosotros sí."
  4. Genera (~2-3 min)
  5. Mientras genera, narra: "Claude Design salió hace dos semanas.
     Lo que antes hacías en Figma — un diseñador, dos días — ahora
     en cinco minutos. Y está incluido en Claude Pro: ya lo pagas."
  6. Cuando termine, enseña los 4 formatos en pantalla.
- CIERRE: muestra los 2 outputs juntos en pantalla si se puede.
  "Imagen y cuatro variantes para anunciar la novedad de Pawly. Cero
  euros si tiráis de versiones gratis (AI Studio + Stitch de Google).
  Veinte euros al mes si ya pagáis Gemini AI Pro o Claude Pro."
- BACKUPS: pre-generados de los 2 en pestañas separadas, listos
  para alt-tab si algo falla.
- TRANSICIÓN AL SLIDE SIGUIENTE (el truquito de los prompts):
  "Y antes del cierre, una cosa que habéis visto sin que os la
  contara explícitamente. El prompt que pegué para Nano Banana —
  el largo con los siete campos — NO lo escribí yo."
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-marca);">marca · el truquito que no os he contado</span>

# El prompt no lo escribes tú. <br/><mark class="highlight">Te lo escribe Claude</mark>.

<p class="lead" style="margin-top: 1rem; max-width: 72ch; font-size: 1.02rem;">
Un prompt detallado pesa <mark class="highlight">más que cambiar de herramienta</mark>. Pero pide ser experto en composición, encuadre, luz y paleta — <strong>eso no es vuestro trabajo</strong>. Le declaráis a Claude la escena en castellano normal y él os <mark class="highlight">escribe el prompt experto</mark>.
</p>

<div style="margin-top: 1.4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; max-width: 56rem; margin-left: auto; margin-right: auto;">

<div>
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.62rem; color: var(--palanca-marca); margin-bottom: 0.4rem;">para Nano Banana · imagen del anuncio</div>
<div style="background: var(--paper-sunken); padding: 0.85rem 1rem; border-left: 3px solid var(--palanca-marca); font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; line-height: 1.55;">
Anuncio en imagen para Instagram. Caso: <strong>Pawly anuncia "vet los domingos"</strong>. Escena en mi cabeza: domingo en casa, dueño con perro decaído, alivio al ver al vet en el móvil. <mark class="highlight">Hazme tú el prompt</mark> para Nano Banana con sujeto, composición, luz, fondo, espacio para titular, estilo y formato. <em>Pregúntame antes lo que necesites.</em>
</div>
</div>

<div>
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.62rem; color: var(--palanca-marca); margin-bottom: 0.4rem;">para Claude Design · 4 variantes</div>
<div style="background: var(--paper-sunken); padding: 0.85rem 1rem; border-left: 3px solid var(--palanca-marca); font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; line-height: 1.55;">
<strong>4 variantes</strong> del mismo anuncio. Imagen base: la del anuncio Pawly. Titular: <em>"Tu perro no entiende de domingos. Nosotros sí."</em> <mark class="highlight">Hazme tú el prompt</mark> para Claude Design con los 4 formatos (cuadrado, Story, Reel, Facebook), tipografía, logo y posición del titular.
</div>
</div>

</div>

<div style="margin-top: 2rem; padding: 1.2rem 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 1.2rem; align-items: center;">

<div style="text-align: center;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.62rem; color: var(--ink-mute); margin-bottom: 0.35rem;">01 · tú</div>
<div style="font-size: 0.98rem; line-height: 1.3;">Declaras la escena <br/><em style="color: var(--ink-soft); font-size: 0.86rem;">en castellano normal</em></div>
</div>

<div style="font-family: 'IBM Plex Serif', serif; font-size: 1.6rem; color: var(--palanca-marca); line-height: 1;">→</div>

<div style="text-align: center;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.62rem; color: var(--ink-mute); margin-bottom: 0.35rem;">02 · Claude</div>
<div style="font-size: 0.98rem; line-height: 1.3;">Te escribe <br/><mark class="highlight">el prompt experto</mark></div>
</div>

<div style="font-family: 'IBM Plex Serif', serif; font-size: 1.6rem; color: var(--palanca-marca); line-height: 1;">→</div>

<div style="text-align: center;">
<div class="text-mono text-caps" style="letter-spacing: 0.14em; font-size: 0.62rem; color: var(--ink-mute); margin-bottom: 0.35rem;">03 · pegas en</div>
<div style="font-size: 0.98rem; line-height: 1.3;"><strong>Nano Banana · Claude Design</strong></div>
</div>

</div>

<p class="text-mono text-small text-mute" style="margin-top: 0.9rem; letter-spacing: 0.04em; font-size: 0.7rem; text-align: center;">
Los meta-prompts completos, en el asset descargable.
</p>

<!--
GUIÓN:
"Hay un truquito que habéis visto sin que os lo contara. Los dos
prompts que pegué en sala — para Nano Banana y Claude Design —
NO los escribí yo.

Los escribió Claude por mí.

Y antes de explicaros cómo, una cosa importante. En imagen, la
diferencia entre un anuncio mediocre y uno bueno NO es la herramienta.
No es Nano Banana versus Midjourney. Es cuánto detalle metéis en el
prompt. Un prompt vago en la mejor herramienta del mundo os da algo
plano. Un prompt muy específico en una herramienta normalita os da
algo bueno.

¿Y por qué los pongo entonces juntos? Porque para hacer un prompt
muy específico de imagen hay que ser experto en composición.
'Plano americano regla de tercios hora dorada bokeh suave'. Eso no
lo sabéis vosotros. Yo tampoco. Pero la IA SÍ.

El truco. Le declaráis a Claude la escena que tenéis en la cabeza,
en castellano normal: 'domingo en casa, dueño preocupado, perro
decaído, vet en el móvil, alivio'. Y le pedís: hazme tú el prompt
experto para Nano Banana. Que os pregunte lo que necesite —
'¿qué paleta?', '¿qué raza de perro?', '¿más alegre o más íntimo?'.
Le contestáis, y os devuelve el brief listo para pegar.

Dos meta-prompts, uno por herramienta. Los tenéis en el asset
descargable. Copiáis, pegáis en Claude, Claude os devuelve el prompt
experto, copiáis ESE en Nano Banana o en Claude Design. Listo.

Esto es DECLARAR y DEJAR PREGUNTAR aplicados a Marca. Misma tesis de
toda la charla. Pero aquí — sin esto, ni el primer anuncio os sale.

Y antes del cierre, un tema que en Lanzadera os importa mucho: cómo
hacer todo esto sin quemar cash."

NOTAS:
- Este es EL truco práctico que la sala recordará el lunes
- Si alguien pregunta por el meta-prompt de Veo: existe en el asset
  descargable. Mismo patrón: declaras la escena, Claude te hace el
  guion técnico de vídeo. No lo demostramos en sala porque elegimos
  centrarnos en imagen + variantes
- Si alguien pregunta para audio (ElevenLabs, Suno): mismo patrón —
  declaras la canción en castellano normal, Claude te hace el prompt
  técnico
- Transición directa al bloque "todo esto se puede hacer por cero euros"
-->

---
layout: center
class: text-center
---

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.3em; margin-bottom: 2rem;">truquitos</div>

# Todo esto se puede hacer por <mark class="highlight">cero euros</mark>.

<p class="lead" style="margin-top: 2rem; max-width: 36ch; margin-left: auto; margin-right: auto;">
Si sabéis dónde mirar. <br/>
Y si no, tenéis <strong>perks sentados</strong> en Lanzadera sin usar.
</p>

<!--
GUIÓN:
"Antes del cierre, un regalo. Cinco minutos sobre cómo hacer todo
lo que hemos visto hoy sin pagar.

Porque la charla sería incompleta si os dejo con la idea de que
necesitáis pagar 200 euros al mes para hacer esto. No es verdad.

Sed que sabéis dónde mirar — o si no, tenéis perks de Lanzadera sentados
que probablemente no estáis usando para IA. Vamos."

NOTAS:
- Energía alta en este bloque. Es el "regalo" de la charla.
-->

---
layout: default
---

<SlideBadge provider="gemini" />

<span class="eyebrow">el Free Stack — con una sola cuenta Google</span>

# Google no es el mejor. <br/>Es el <mark class="highlight">más generoso</mark>.

| Necesidad | Herramienta gratis | Qué obtenéis |
|---|---|---|
| Chatear con los modelos top | <strong>AI Studio</strong> <span class="text-mono text-small text-mute">aistudio.google.com</span> | Gemini en el navegador <span class="text-mono text-small text-mute">(Pro puede requerir API key)</span> |
| Crear mini-apps hablando | AI Studio — modo Build | Apps que montas conversando |
| Programar con los mejores modelos | <strong>Antigravity</strong> <span class="text-mono text-small text-mute">antigravity.google</span> | Claude Opus 4.6, Sonnet 4.6 y Gemini 3.1 Pro |
| Asistente sobre tus documentos | NotebookLM | 50 fuentes, 500K palabras cada una |
| Imagen | ImageFX · Nano Banana 2 en AI Studio | Imagen 4 y Nano Banana 2 |
| Vídeo | Veo 3.1 en <code>vids.new</code> | 10 vídeos al mes, 720p, 8 segundos |
| Programar desde la terminal | Gemini CLI | 1000 consultas al día |
| Diseñar interfaces | Google Stitch | Lienzo visual gratis |

<!--
GUIÓN:
"Con UNA sola cuenta de Google, gratis, tenéis esto.

Chat con modelos Pro — AI Studio. aistudio.google.com. Gemini 3.1 Pro
sin límites si usáis el browser — si conectáis una app vuestra a la
API sí hay límites, pero para uso personal o pruebas no.

Build mini-apps — AI Studio tiene un modo que se llama Build. Construye
apps conversacionalmente. Mini-apps útiles, no producción, pero útiles.

Código — Antigravity. Esto lo voy a destacar en la siguiente slide.

Asistente sobre docs — NotebookLM. Lo que hemos usado en la demo.

Imagen — ImageFX y Nano Banana dentro de AI Studio, ambos gratis con
límites de uso suficientes para empezar.

Vídeo — Veo 3.1 en vids.new. Diez por mes. Gratis. Ya lo dije.

Código por terminal — Gemini CLI. Mil requests diarios.

Diseño UI — Google Stitch. Canvas completo. Gratis.

Todo con una cuenta de Google. Sin tarjeta. Sin truco."

NOTAS:
- Enumera cada fila pero no te detengas — el detalle está en el asset
-->

---
layout: center
class: text-center
---

<SlideBadge provider="gemini" />

<h2 style="font-size: 2.4rem; line-height: 1.2; max-width: 36ch; margin: 0 auto; font-weight: 500;">
Para hacer producto, <br/>
a coste <mark class="highlight">cero</mark>:
</h2>

<div style="margin-top: 3rem; font-family: 'IBM Plex Serif', serif; font-size: 3.2rem; font-weight: 600;">
<mark class="highlight">AI Studio</mark> + <mark class="highlight">Antigravity</mark>
</div>

<p class="lead" style="margin-top: 2.5rem; max-width: 42ch; margin-left: auto; margin-right: auto;">
Juntas os dan Gemini 3.1 Pro, Claude Opus 4.6 y Sonnet 4.6. <br/>
El stack que yo pago — por <strong>0 €</strong>.
</p>

<div class="text-mono text-small text-mute" style="margin-top: 3rem;">
Aviso honesto: Antigravity se cuelga más de la cuenta, y Google le está recortando lo gratis mes a mes. <br/>Para tu día a día, no. Para empezar sin pagar, lo mejor que hay.
</div>

<!--
GUIÓN:
"Dos herramientas gratis que casi nadie en esta sala está usando.
Apuntadlas.

AI Studio y Antigravity.

AI Studio es de Google — os da el modelo top de Gemini en el browser,
sin límites prácticos para vuestro uso. Antigravity, también de Google,
es un editor de código — un IDE — que soporta Claude Opus, Claude
Sonnet y Gemini. Gratis. Literalmente los mejores modelos del mundo
por cero euros, si sabes que existe.

Aviso honesto y os lo digo porque quiero que me creáis lo que digo:
Antigravity a día de hoy, abril de 2026, tiene inestabilidades. No
es lo que usaría yo para cosas críticas en producción. Pero como
entrada gratis a esa liga, no hay nada mejor. Para probar, para
experimentar, para pequeños proyectos — perfecto."

NOTAS:
- La honestidad del warning te da credibilidad
-->

---
layout: default
---

<span class="eyebrow">los créditos que ya tenéis y no usáis</span>

# Perks + <mark class="highlight">créditos</mark>

<div class="text-mono text-small text-mute" style="margin-top: 1.6rem; letter-spacing: 0.08em; text-transform: uppercase;">Perks de Lanzadera</div>

<div class="grid-2" style="margin-top: 0.8rem; gap: 2rem;">

<div class="card palanca-cliente">

### Google Cloud · Lanzadera
Aprox <strong>$25k</strong> en créditos GCP <span class="text-mono text-small text-mute">[confirmar cifra exacta]</span>.

Con esto: Gemini API en producción, Nano Banana Pro, Veo 3.1 Pro sin límites del free tier.

</div>

<div class="card palanca-marca">

### AWS Activate · Lanzadera
Aprox <strong>$10–11k</strong> en créditos AWS <span class="text-mono text-small text-mute">[confirmar]</span>.

Portfolio Package general llega a <strong>$100k</strong>. Todo redimible en <strong>Amazon Bedrock</strong> → Claude Opus 4.7, Sonnet 4.6, pay-per-use.

</div>

</div>

<div class="text-mono text-small text-mute" style="margin-top: 1.8rem; letter-spacing: 0.08em; text-transform: uppercase;">Créditos abiertos a cualquiera</div>

<div class="grid-2" style="margin-top: 0.8rem; gap: 2rem;">

<div class="card palanca-datos">

### Microsoft for Startups
Básico $1k · Enhanced $5k · Investor-affiliated hasta <strong>$150k</strong> Azure.

Con Azure → Azure OpenAI Service (GPT-5, 5.2, 5.4).

</div>

<div class="card palanca-producto">

### Google Cloud · registro gratis
<strong>$300</strong> en créditos por crear una cuenta nueva. Válidos <strong>90 días</strong>.

Suficiente para probar Gemini API en producción, Nano Banana Pro o Veo 3.1 Pro de verdad.

</div>

</div>

<!--
GUIÓN:
"Creéis que el regalo gratis de antes era grande. Mirad esto.

Los perks de Lanzadera que probablemente no estáis usando para IA.

Google Cloud — del acuerdo que tiene Lanzadera con Google España,
aproximadamente 25 mil dólares en créditos para usar el tiempo que
dure vuestra aceleración. Confirmad la cifra exacta con vuestro
Director de Proyecto — no es pública, pero ahí la tenéis.

AWS — aproximadamente 10 u 11 mil dólares. Todo redimible en
Amazon Bedrock, donde podéis pagar Claude Opus o Sonnet por uso
contra esos créditos, sin comprar licencias individuales.

Microsoft for Startups — este no es de Lanzadera, es independiente.
Cualquier founder puede aplicar, estéis en Lanzadera o no. Va de
mil hasta ciento cincuenta mil dólares según vuestro funding. Y da
acceso a Azure OpenAI — GPT por detrás.

Y si aún no tenéis cuenta de Google Cloud — al registraros, 300
dólares en créditos gratis, 90 días. Sin tarjeta que se cobra.
Suficiente para probar Gemini API en producción, Nano Banana Pro
o Veo 3.1 Pro de verdad, no solo el free tier del navegador.

Sumadlo. Estáis sentados entre 35 mil y 200 mil dólares en créditos
para IA. Que probablemente no estáis gastando en IA."

NOTAS:
- Cifras marcadas "[confirmar]" — preguntar al equipo Lanzadera
  antes del evento y actualizar si se sabe
- El "probablemente no estáis gastando" es provocación honesta
-->

---
layout: default
---

<span class="eyebrow" style="color: var(--palanca-producto);">truquito · meta-prompting</span>

# El mejor prompt no es tuyo. <br/>Es el que <mark class="highlight">te escribe ella</mark>.

<p style="margin: 0.8rem 0 0; font-family: 'IBM Plex Serif', serif; font-style: italic; font-size: 1.22rem; color: var(--ink-soft);">
Dos pasos. <strong style="color: var(--ink);">El primero es el que importa.</strong>
</p>

<div style="margin-top: 1.8rem; border-left: 3px solid var(--palanca-producto); padding: 0.2rem 0 0.2rem 1.4rem;">

<div style="display: flex; align-items: baseline; gap: 0.9rem; margin-bottom: 0.7rem; flex-wrap: wrap;">
  <span class="text-mono text-caps" style="color: var(--palanca-producto); letter-spacing: 0.14em; font-size: 0.68rem; font-weight: 700;">Paso 1</span>
  <span style="font-size: 1.15rem; font-weight: 500;">Abre un chat cualquiera — Claude, ChatGPT, Gemini — y pega esto:</span>
</div>

<div style="background: var(--paper-sunken); border-left: 2px solid var(--palanca-producto); padding: 1.05rem 1.4rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.98rem; line-height: 1.65; color: var(--ink);">
Necesito un buen prompt para: <strong style="background: var(--accent-highlight); padding: 0 0.25rem;">[lo que quiero hacer]</strong>.<br/>
Contexto: <strong style="background: var(--accent-highlight); padding: 0 0.25rem;">[quién soy y qué hago]</strong>.<br/>
Antes de escribirlo, hazme 3-5 preguntas clave.<br/>
Luego devuélveme solo el prompt final.
</div>

</div>

<div style="margin-top: 1.3rem; border-left: 3px solid var(--ink-faint); padding: 0.2rem 0 0.2rem 1.4rem;">

<div style="display: flex; align-items: baseline; gap: 0.9rem; margin-bottom: 0.55rem; flex-wrap: wrap;">
  <span class="text-mono text-caps" style="color: var(--ink-mute); letter-spacing: 0.14em; font-size: 0.68rem; font-weight: 700;">Paso 2</span>
  <span style="font-size: 1rem; color: var(--ink-soft);">Coges el prompt que te devuelve y lo pegas en la herramienta que toca:</span>
</div>

<ul style="margin: 0.5rem 0 0; padding: 0; list-style: none; font-size: 0.95rem; line-height: 2;">
  <li style="display: flex; align-items: center; gap: 0.7rem;">
    <span class="text-mono text-caps" style="color: var(--ink-mute); letter-spacing: 0.14em; font-size: 0.62rem; min-width: 6.5ch;">Landing</span>
    <span style="color: var(--ink-faint);">→</span>
    <span style="display: inline-block; width: 14px; height: 14px; background-color: var(--palanca-producto); -webkit-mask: url('/logos/lovable.svg') center/contain no-repeat; mask: url('/logos/lovable.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <strong>Lovable</strong>
  </li>
  <li style="display: flex; align-items: center; gap: 0.7rem;">
    <span class="text-mono text-caps" style="color: var(--ink-mute); letter-spacing: 0.14em; font-size: 0.62rem; min-width: 6.5ch;">Imagen</span>
    <span style="color: var(--ink-faint);">→</span>
    <span style="display: inline-block; width: 14px; height: 14px; background-color: var(--brand-gemini); -webkit-mask: url('/logos/googlegemini.svg') center/contain no-repeat; mask: url('/logos/googlegemini.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <strong>Nano Banana</strong>
  </li>
  <li style="display: flex; align-items: center; gap: 0.7rem;">
    <span class="text-mono text-caps" style="color: var(--ink-mute); letter-spacing: 0.14em; font-size: 0.62rem; min-width: 6.5ch;">Código</span>
    <span style="color: var(--ink-faint);">→</span>
    <span style="display: inline-block; width: 14px; height: 14px; background-color: var(--brand-claude); -webkit-mask: url('/logos/claude.svg') center/contain no-repeat; mask: url('/logos/claude.svg') center/contain no-repeat; flex-shrink: 0;"></span>
    <strong>Claude Code</strong>
  </li>
</ul>

</div>

<!--
GUIÓN:
"Último truquito antes del cierre. El más importante.

El mejor prompt no es tuyo. Es el que te escribe la IA.

Dos pasos.

Paso uno — abres un chat cualquiera. Claude, ChatGPT, Gemini, el que
tengáis a mano. Y le pedís literal: 'Hazme el prompt ideal para X
tarea. Soy Y persona con Z nivel. Pregúntame todo lo que necesites
— formato, constraints, fuentes, nivel — antes de escribir el prompt'.

La IA os pregunta. Vosotros contestáis desde lo que sabéis. Ella
genera el prompt.

Paso dos — cogéis el prompt resultante y lo pegáis donde toca. Si es
research, en Deep Research. Si es landing, en Lovable. Si es código,
en Claude Code. Si es imagen, en Nano Banana.

Y ahí la IA ejecuta con un prompt que vosotros nunca habríais escrito
— porque no sabíais cómo.

Este truquito es la consecuencia lógica de la tesis: si vuestro
trabajo no es el prompt perfecto, delegádselo. A otra IA."

NOTAS:
- Este es el "trick" más empoderador de toda la charla — los no-técnicos
  se lo llevan aplicable desde el minuto 1.
- Cuando lo expliques, mira al no-técnico de la sala.
- Transición: "Y con esto, os doy la checklist de cinco letras que uso
  yo cuando escribo prompts a mano" → 5 C's.
-->

---
layout: default
---

<span class="eyebrow">último ingrediente · checklist de prompting</span>

# Las <mark class="highlight">5 C's</mark> del prompting

<p class="text-small text-mute" style="margin-top: 0.6rem; max-width: 58ch;">
Los tres movimientos son el marco. Esta checklist es su versión táctica para escribir un prompt concreto. Están en el asset descargable.
</p>

<div style="margin-top: 1.4rem; display: grid; grid-template-columns: auto auto 1fr; gap: 0.8rem 1.5rem; align-items: start; font-size: 0.95rem;">

<div class="text-mono text-caps text-mute" style="font-size: 0.7rem; letter-spacing: 0.14em; padding-top: 0.7rem;">01 · Declarar</div>
<div class="text-mono" style="font-size: 1.55rem; color: var(--palanca-cliente); font-weight: 600;">Cabeza</div>
<div style="padding-top: 0.55rem;">Piensa antes de escribir. Qué quieres, para quién, con qué formato.</div>

<div class="text-mono text-caps text-mute" style="font-size: 0.7rem; letter-spacing: 0.14em; padding-top: 0.7rem;">01 · Declarar</div>
<div class="text-mono" style="font-size: 1.55rem; color: var(--palanca-cliente); font-weight: 600;">Contexto</div>
<div style="padding-top: 0.55rem;">Quién eres, qué sabes, qué no sabes. Rol, audiencia, constraints. Todo lo que un becario listo pero ajeno necesitaría.</div>

<div class="text-mono text-caps text-mute" style="font-size: 0.7rem; letter-spacing: 0.14em; padding-top: 0.7rem;">02 · Preguntar</div>
<div class="text-mono" style="font-size: 1.55rem; color: var(--palanca-marca); font-weight: 600;">Consultar</div>
<div style="padding-top: 0.55rem;"><em>"Hazme las preguntas que necesites antes de ejecutar."</em> Ella detecta huecos. Tú respondes desde lo que sabes.</div>

<div class="text-mono text-caps text-mute" style="font-size: 0.7rem; letter-spacing: 0.14em; padding-top: 0.7rem;">03 · Verificar</div>
<div class="text-mono" style="font-size: 1.55rem; color: var(--ink); font-weight: 600;">Check</div>
<div style="padding-top: 0.55rem;">Abre una cita al azar. Que exista. Que diga lo resumido. Si falla una, descartas todo.</div>

<div class="text-mono text-caps text-mute" style="font-size: 0.7rem; letter-spacing: 0.14em; padding-top: 0.7rem;">03 · Verificar</div>
<div class="text-mono" style="font-size: 1.55rem; color: var(--ink); font-weight: 600;">Cortar</div>
<div style="padding-top: 0.55rem;"><em>"Hazme la app"</em> no funciona. Corta el problema: <em>"primero el esquema de datos"</em>. Verificas en cada paso.</div>

</div>

<div class="text-mono text-small text-mute" style="margin-top: 1.2rem; border-top: 1px solid var(--rule); padding-top: 0.9rem;">
Tip meta — en prompts exploratorios de bajo riesgo, podéis saltar Cabeza y Contexto. Ganáis iteraciones, perdéis rigor.
</div>

<!--
GUIÓN:
"Antes del cierre, os doy una checklist táctica que uso yo.

Los tres movimientos — declarar, dejar preguntar, verificar — son el
marco mental. Cuando vais a escribir un prompt concreto, esta checklist
de cinco letras los convierte en acción. Las tenéis en el asset
descargable — os las cuento para que las reconozcáis.

Cinco C's. Cinco letras que caben en una tarjeta de visita. Y cada
una mapea a uno de los tres movimientos:

Declarar — dos letras. Cabeza: piensa antes de escribir qué quieres.
Contexto: quién eres, qué sabes, qué no, para quién, constraints.

Preguntar — una letra. Consultar: le pedís explícitamente 'hazme
preguntas antes de ejecutar'. Y luego contestáis.

Verificar — dos letras. Check: abrís una cita al azar, la comprobáis.
Cortar: no pidáis 'hazme la app' — cortad el problema en pasos y
verificad cada uno.

Tip meta: en prompts exploratorios de bajo riesgo — pruebas, brain-
storming — podéis saltaros Cabeza y Contexto. Iteráis rápido, perdéis
rigor. Pero en producción siempre las cinco."

NOTAS:
- Dilas rápido — están en el asset para consulta
- Subraya el mapeo 2+1+2 a los tres movimientos
-->

---
layout: center
class: text-center
---

<div class="text-mono text-caps" style="letter-spacing: 0.3em; color: var(--accent-danger); margin-bottom: 1.6rem;">lectura del sector · abril 2026</div>

<h2 style="font-size: 2.3rem; line-height: 1.15; max-width: 36ch; margin: 0 auto; font-weight: 600; text-align: center;">
El <em>no-code</em> ya se está <br/>
<mark class="highlight">comiendo a sí mismo</mark>.
</h2>

<div style="margin-top: 1.8rem; max-width: 46ch; margin-left: auto; margin-right: auto;">

<div class="grid-2" style="gap: 0.5rem; font-size: 0.95rem;">

<div style="border-left: 3px solid var(--accent-danger); padding: 0.4rem 1rem;">
<strong>Bubble</strong> → AI Agent Builder
</div>
<div style="border-left: 3px solid var(--accent-danger); padding: 0.4rem 1rem;">
<strong>Webflow</strong> → Webflow AI
</div>
<div style="border-left: 3px solid var(--accent-danger); padding: 0.4rem 1rem;">
<strong>Zapier</strong> → Zapier Agents
</div>
<div style="border-left: 3px solid var(--accent-danger); padding: 0.4rem 1rem;">
<strong>Airtable</strong> → Cobuilder
</div>

</div>

</div>

<p style="margin-top: 1.6rem; max-width: 48ch; margin-left: auto; margin-right: auto; font-size: 1rem; text-align: center;">
Todas corriendo a reconvertirse en <em>wrappers de IA</em>. <strong>Las que no lleguen a tiempo — desaparecen.</strong>
</p>

<div style="margin-top: 2rem; border-top: 1px solid var(--rule); padding-top: 1.4rem; max-width: 48rem; margin-left: auto; margin-right: auto;">

<p style="font-size: 1.3rem; line-height: 1.3; max-width: 34ch; margin: 0 auto; font-weight: 500;">
Para <mark class="highlight">2027</mark>, la mitad de las <em>no-code platforms</em> que hoy conocéis habrán desaparecido o pivotado a ser wrappers de IA.
</p>

</div>

<!--
GUIÓN:
"Antes de cerrar, una lectura del sector. Esto lo quiero que lo veáis.

El no-code se está comiendo a sí mismo.

Bubble ha lanzado AI Agent Builder. Webflow, Webflow AI. Zapier
Agents. Airtable Cobuilder.

Las cuatro plataformas que sostienen todo el ecosistema no-code están
corriendo a convertirse en wrappers de IA. ¿Por qué? Porque saben lo
que se viene. Lovable, Claude Code, v0 hacen ese mismo atajo con
código tuyo, sin jaula. Las que no lleguen a tiempo, desaparecen.

Y una apuesta pública. Anotadla.

Para dos mil veintisiete — un año a partir de hoy — la mitad de las
no-code platforms que hoy conocéis habrán desaparecido o pivotado a
ser wrappers de IA. No todas. La mitad. La otra mitad sobrevivirá
pero muy distinta a como es hoy.

Me lo recordáis en el próximo Demo Day. Si me equivoco, aceptaré la
crítica en público."

NOTAS:
- Enumera las cuatro plataformas con ritmo — no te detengas en cada una
- Pausa después de "desaparecen" antes de la apuesta
- Tono ligero en la apuesta — posicionamiento intelectual honesto
-->

---
layout: center
class: text-center
---

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.3em; margin-bottom: 2.5rem;">cierre · una pregunta</div>

<h2 style="font-size: 2.4rem; line-height: 1.3; max-width: 46ch; margin: 0 auto; font-weight: 500; font-family: 'IBM Plex Serif', serif; font-style: italic; text-align: center;">
¿Cuál es la tarea de tu semana <br/>
que más odias, <br/>
que crees que <em>solo tú</em> puedes hacer, <br/>
y que probablemente una IA bien configurada <br/>
hace mejor?
</h2>

<p class="lead" style="margin: 3rem auto 0; max-width: 46ch; text-align: center;">
La respuesta honesta es vuestro primer proyecto.
</p>

<!--
GUIÓN:
"Cerramos. Con una pregunta. La he dejado para el final porque quiero
que os la llevéis — que la tengáis en la cabeza los próximos siete
días.

Cuál es la tarea de tu semana que más odias, que crees que solo tú
puedes hacer, y que probablemente una IA bien configurada hace mejor.

Pensad la respuesta en silencio. Tres segundos.

Uno.
Dos.
Tres.

La respuesta honesta a esa pregunta es vuestro primer proyecto de IA.
No uno que leísteis en LinkedIn. No uno que os recomiendo yo. El
vuestro."

NOTAS:
- Pausa en los "uno, dos, tres"
- La pregunta debería doler un poco a cada uno
-->

---
layout: center
class: text-center
---

<div class="text-mono text-caps text-mute" style="letter-spacing: 0.3em; margin-bottom: 2rem;">el pack descargable</div>

<h2 style="font-size: 2.4rem; line-height: 1.2; font-weight: 600;">
Lo que os habéis ganado.
</h2>

<div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 52rem; margin-left: auto; margin-right: auto; text-align: left;">

<div>

**Incluye:**
- Matriz <em>"Quiero X → usa Y"</em> — Free Stack y Pro Stack
- Cheat sheet de las 5 C's — imprimible
- Guía de perks: Bedrock, GCP, Azure, Microsoft for Startups con URLs
- Prompts plantilla de las 4 demos de hoy

</div>

<div>

<div style="width: 14rem; height: 14rem; background: var(--paper-sunken); border: 2px solid var(--ink); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
<span class="text-mono text-caps text-mute" style="font-size: 0.8rem;">[QR aquí]</span>
</div>
<div class="text-mono text-small text-mute" style="text-align: center; margin-top: 1rem;">[URL corta del pack]</div>

</div>

</div>

<!--
GUIÓN:
"Lo prometido. El pack que os habéis ganado.

Scaneáis el QR y tenéis: la matriz de qué IA usar para qué — con
versión free y versión pro; la cheat sheet de las cinco C's, que
cabe en una hoja A4; la guía de perks con URLs exactas — Bedrock,
GCP, Azure, Microsoft for Startups; y las plantillas de prompts de
las cuatro demos de hoy.

Los prompts son copy-paste. Cambiáis lo que está entre llaves por
vuestros datos y los ejecutáis. Con eso replicáis exactamente lo
que habéis visto hoy."

NOTAS:
- Antes del evento: sustituir los marcadores {QR real} y {URL corta}
  por la imagen/URL real del pack
-->

---
layout: center
class: text-center valoration-slide
---

<style>
.valoration-slide {
  background: #5c5c5c !important;
}
.valoration-slide * {
  color: #ffffff;
}
.valoration-slide h1 {
  color: #ffffff !important;
}
</style>

<h1 style="font-size: 4.2rem; line-height: 1; font-weight: 500; margin: 0 0 2.5rem 0;">
¡Muchas gracias!
</h1>

<div style="display: flex; align-items: center; justify-content: center; gap: 2.5rem; margin-bottom: 0.8rem;">

<svg width="110" height="110" viewBox="0 0 100 100" fill="none" stroke="#ffffff" stroke-width="4">
  <circle cx="50" cy="50" r="42"/>
  <circle cx="35" cy="42" r="4.5" fill="#ffffff" stroke="none"/>
  <circle cx="65" cy="42" r="4.5" fill="#ffffff" stroke="none"/>
  <path d="M32 72 Q50 58 68 72" stroke-linecap="round"/>
</svg>

<div style="font-size: 2rem; font-weight: 500; letter-spacing: 0.01em;">2 mins en la plataforma</div>

<svg width="110" height="110" viewBox="0 0 100 100" fill="none" stroke="#ffffff" stroke-width="4">
  <circle cx="50" cy="50" r="42"/>
  <circle cx="35" cy="42" r="4.5" fill="#ffffff" stroke="none"/>
  <circle cx="65" cy="42" r="4.5" fill="#ffffff" stroke="none"/>
  <path d="M32 60 Q50 78 68 60" stroke-linecap="round"/>
</svg>

</div>

<div style="display: flex; gap: 0.65rem; justify-content: center; margin: 1rem 0 2.2rem 0;">
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; background: #CC7963;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; background: #CC7963;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; background: #CC7963;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; background: #CC7963;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
  <div style="width: 1.8rem; height: 1.8rem; border-radius: 50%; border: 2px solid #ffffff; box-sizing: border-box;"></div>
</div>

<div style="font-size: 1.35rem; line-height: 1.65; max-width: 60ch; margin: 0 auto;">
Los que valoraron en la última convocatoria mejoraron lo que hoy has visto.<br/>
Ahora <strong style="font-size: 1.55rem; font-weight: 700; color: #ffffff;">te toca a ti</strong> mejorar lo que viene.<br/>
<span style="font-size: 1.55rem;">📩🥰</span>
</div>

<!--
GUIÓN:
"Gracias por el tiempo.

Dos minutos en la plataforma. Los que valoraron en la última
convocatoria mejoraron lo que hoy habéis visto. Ahora os toca a
vosotros mejorar lo que viene.

Estoy abierto a preguntas. Y tenéis el pack con todo el detalle en
el QR."

NOTAS:
- Cierre breve, sin alargarlo
- La valoración es el último gesto — recordadla antes de abrir Q&A
-->
