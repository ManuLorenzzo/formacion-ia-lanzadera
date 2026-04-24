# Formación "Flujo de trabajo con herramientas de IA para producto" — Lanzadera

**Spec de diseño v5.3** — 22 abril 2026

---

## Metadata

| Campo | Valor |
|-------|-------|
| **Ponente** | Manu Lorenzo (CEO Mint ITV, Lanzadera startup desde marzo 2024) |
| **Cliente** | Lanzadera — Marina de Empresas, Valencia |
| **Duración** | 90 minutos (+ Q&A opcional fuera de los 90 min) |
| **Audiencia** | ~30-80 personas del ecosistema Lanzadera (founders, PMs, pocos técnicos) |
| **Formato** | Presencial, con demos en vivo |
| **Idioma** | Castellano neutro |
| **Constraint clave** | Prohibido hacer publicidad propia ni de Mint ITV |
| **Asset obligatorio** | Material descargable aplicable el lunes siguiente |
| **Fecha del evento** | TBD (por confirmar con Lanzadera) |

---

## TL;DR de la formación

Formación-masterclass de 90 min donde Manu Lorenzo entrega a founders de Lanzadera **un criterio de decisión** para trabajar con IA de producto en abril 2026. No es intro a IA (la audiencia ya usa IA). No es tutorial de Claude Code (esa es otra formación). Es **filtrado de señal + método accionable + demos tangibles**.

**Frase portada (tweetable):**
> *"En Mint somos 2 devs senior + 1 en prácticas y construimos como un equipo de 10. No es magia: son 2 reglas. Os las voy a enseñar — y voy a demostrarlas en vivo en 4 bloques."*

---

## North Star

El asistente al día siguiente escribe por LinkedIn:
> *"Tío, ya sabía usar IA — lo que me has dado es el **criterio** para decidir qué usar, cuándo, y qué ignorar. Y encima sé exactamente qué hacer el lunes."*

Triple ángulo:
- **Método accionable** (primario) → "Especifica + Verifica"
- **Momentos wow** (vehículo) → 4 demos tangibles
- **Desbloqueo** (efecto secundario) → les quita parálisis por exceso de información

---

## Diagnóstico de audiencia (basado en research)

**Lanzadera 2026 NO es "gente que no sabe IA":**
- **120 startups** en convocatoria marzo 2026
- **80% ya facturan** antes de entrar
- Founders **senior, second-time, ex-corporate**
- Marta Nogueras (directora general) dixit: *"Su reto principal ahora es filtrar el exceso de información y entender qué herramientas son realmente útiles para su negocio."*
- Cultura Mercadona/MCT: anti-hype, datos > filosofía abstracta, ética del esfuerzo, cliente como "el Jefe"

**Sectores dominantes en la cohorte:**
Salud, Deporte, Educación, Sostenibilidad, RRHH. (No es cohorte dominada por food/Mercadona-adjacent aunque sea la imagen histórica.)

**Quiénes NO deben asistir** (según brief original):
> *"Tienes mucha experiencia y un flujo de trabajo propio adaptado a tu equipo y necesidades."*

---

## Tesis central

> **"El trabajo del founder con IA no es promptear mejor. Es especificar como un arquitecto y verificar como un QA. El prompting es un subproducto."**

Dos movimientos, no cinco. Opinionated. Memorable. Defendible.

---

## Promesa de la sesión (para el hook y el cierre)

> *"En 90 minutos os doy el criterio para decidir qué IA usar, cuándo usarla y qué ignorar — para que salgáis con **una tarea concreta que vais a hacer el lunes**, no con inspiración vacía."*

---

## Estructura general (90 minutos)

```
┌─────────────────────────────────────────────────────────────────┐
│ 0:00 – 0:04   HOOK (4 min)                                      │
│                Encuesta incómoda: ChatGPT Plus vs Claude Pro    │
├─────────────────────────────────────────────────────────────────┤
│ 0:04 – 0:12   TESIS + DATO ANCLA (8 min)                        │
│                "3 personas = equipo de 10" + las 2 reglas       │
├─────────────────────────────────────────────────────────────────┤
│ 0:12 – 0:28   🟢 IA PARA EL CLIENTE (16 min)                    │
│                Research + decisiones con Deep Research          │
│                DEMO 1: Gemini Deep Research en vivo             │
├─────────────────────────────────────────────────────────────────┤
│ 0:28 – 0:45   🟣 IA PARA EL EQUIPO (17 min)                     │
│                Productividad, docs, onboarding, código          │
│                DEMO 2: NotebookLM podcast ⭐ (momento wow)      │
├─────────────────────────────────────────────────────────────────┤
│ 0:45 – 1:00   🔴 IA PARA LA MARCA (15 min)                      │
│                Contenido, imagen, vídeo, diseño                 │
│                DEMO 3: Triple (Nano Banana + Veo + Claude Design)│
├─────────────────────────────────────────────────────────────────┤
│ 1:00 – 1:11   🔵 IA PARA LOS DATOS (11 min)                     │
│                Pitch, forecasting, unit economics               │
│                DEMO 4: PDF financiero → insights                │
├─────────────────────────────────────────────────────────────────┤
│ 1:11 – 1:18   💰 TRUQUITOS FREE & PERKS (7 min)                 │
│                Free Stack + Perks Lanzadera (AWS, GCP, Azure)   │
├─────────────────────────────────────────────────────────────────┤
│ 1:18 – 1:24   🔥 LAS 5 C's + CONTRARIAN + PREDICCIÓN (6 min)    │
│                Checklist de prompting + 2 opiniones + 1 bet     │
├─────────────────────────────────────────────────────────────────┤
│ 1:24 – 1:30   🎯 CIERRE ACTIVO (6 min)                          │
│                Compromiso público + pregunta + asset            │
└─────────────────────────────────────────────────────────────────┘
 Q&A opcional después (fuera de los 90 min oficiales)
```

---

## Bloque por bloque — contenido detallado

### 🎬 Hook — "La encuesta que incomoda" (4 min)

**Apertura** (sin presentación formal):

> *"Levantad la mano si habéis pagado ChatGPT Plus en los últimos 3 meses."* [pausa — levantarán muchas manos]
> 
> *"Mantenedla arriba si además pagáis Claude Pro."* [pausa — bajarán el 70-80% de las manos]
> 
> *"Vale. Los que tenéis la mano abajo: en mi opinión, habéis tomado una mala decisión financiera. Y esta charla trata exactamente de eso — de las decisiones que estáis tomando con IA ahora mismo sin el criterio para tomarlas."*

[Pausa. Silencio deliberado 2 segundos.]

> *"Buenos días. Soy Manu. En 90 minutos os voy a dar ese criterio."*

**Por qué funciona:**
- Diagnóstico público sin ofender personalmente
- Rompe expectativa (no hay "hola, trabajo en X")
- Anuncia postura fuerte sin necesidad de justificarla aún
- Encaja con cultura Mercadona (datos > florituras)

**Tono:** seguro, sin arrogancia. Las palabras clave son "en mi opinión" + "criterio" — no "habéis tirado el dinero".

---

### 🧭 Tesis + Dato Ancla (8 min)

**Estructura interna (minuto a minuto):**

**0:00-0:02** — El dato ancla
> *"Antes de nada, un dato para contextualizar quién os habla. En mi empresa somos 2 desarrolladores senior y 1 persona en prácticas. Producimos, de verdad, como un equipo de 10. Sin humo ni épica — lo que hacemos los 3 sería el output razonable de un equipo de 10 hace 2 años. Ese factor 3x-4x es el tema de hoy."*

**0:02-0:05** — La tesis
> *"Todos los cursos de IA que habéis visto os han contado que la clave es 'prompt engineering'. Yo os vengo a decir que eso es ruido. La clave — lo que hacemos los 3 en Mint todos los días — son dos cosas, y solo dos:"*
> 
> **1. Especificar como un arquitecto** — antes de tocar nada, saber exactamente qué quieres.
> **2. Verificar como un QA** — antes de aceptar nada, comprobar que la IA no te ha mentido.
> 
> *"Todo lo demás — qué modelo, qué herramienta, qué prompt exacto — es subproducto de esas dos reglas."*

**0:05-0:07** — La promesa
> *"En los próximos 80 minutos os voy a demostrar esto en 4 frentes donde un founder pierde tiempo: Cliente, Equipo, Marca y Datos. Cuatro demos en vivo. Cuatro momentos donde vais a ver exactamente qué significa especificar y verificar en la práctica."*

**0:07-0:08** — Transición al bloque 1
> *"Empezamos por el frente más importante — el Jefe. En Lanzadera ya sabéis quién es El Jefe. No vuestro inversor, no vuestro equipo. **El cliente**. Vamos."*

**Nota de diseño:** la mención "El Jefe" es un guiño al MCT sin enmarcarla como MCT explícito. Funciona con founders que lo conocen sin alienar a los escépticos.

---

### 🟢 BLOQUE 1 — IA PARA EL CLIENTE (16 min)

**Objetivo del bloque:** que al salir, cada asistente sepa qué hacer el lunes para conocer mejor a su cliente/usuario usando IA.

**Estructura interna:**

**0:00-0:02** — El dolor universal
> *"¿Cuánto tiempo pasáis cada semana haciendo research — competencia, opinión de clientes, tendencias de mercado? Entre 2 y 10 horas seguro. Vamos a convertir eso en 20 minutos."*

**0:02-0:06** — El mapa de la categoría
Explicación de **Deep Research** como capacidad:
- **Qué es**: no es "una búsqueda en Google con IA". Es un agente que pasa 5-30 min navegando, lee cientos de páginas, cruza datos, te devuelve un informe con citas.
- **Los 3 que existen y valen la pena**:
  - **Claude Research** (en claude.ai si tenéis Pro/Max) — integra Gmail, Calendar, Docs
  - **Gemini Deep Research** (en Gemini si tenéis Pro o AI Studio browser) — con charts nativos (update abril 2026)
  - **ChatGPT Deep Research** (si tenéis Plus) — basado en GPT-5.2
- **Mención**: Perplexity Deep Research es la referencia pero **sus Deep Research corren sobre Claude Opus** — dato poderoso de que Claude lidera el sector.

**0:06-0:12** — DEMO 1: Gemini Deep Research en vivo
Ver sección "Demos" más abajo para guion detallado.

**0:12-0:14** — Aplicar la tesis
> *"Mirad qué hice ahí. No fue magia. **Especifiqué** claramente: quién soy, a quién le vendo, qué competidor, qué pregunta concreta. Y luego **verifiqué** — revisé las citas, no me fié a ciegas. Esas son las 2 reglas en acción."*

**0:14-0:16** — Cierre del bloque
Checklist visible:
- ¿Qué puedes delegar a Deep Research mañana? (competencia, reseñas, tendencia, legal)
- ¿Qué herramienta vas a usar? (si pagáis Claude Pro → Research; si no, AI Studio browser free)
- ¿Cuánto tiempo te ahorrarías? (founder típico: 3-5 h/semana)

**Transición:**
> *"Conocido el Jefe, vamos al siguiente frente: **vuestro equipo**. Cómo multiplicarlo."*

---

### 🟣 BLOQUE 2 — IA PARA EL EQUIPO (17 min)

**Objetivo:** que cada asistente se lleve 2-3 ideas concretas de cómo usar IA para multiplicar a su equipo (pair coding, docs, onboarding, productividad interna).

**Estructura interna:**

**0:00-0:02** — El dolor
> *"Founders no-técnicos: seguramente vuestro equipo técnico está saturado. Founders técnicos: sabéis exactamente lo que es tener 14 cosas que hacer el mismo día. Esto va de multiplicar al equipo sin contratar."*

**0:02-0:06** — Casos de uso por rol
- **Para desarrolladores**: pair coding (Cursor, Claude Code, **Antigravity free**), revisión de código, migraciones, tests
- **Para operaciones**: automatizar tareas repetitivas (Zapier/Make con IA)
- **Para onboarding/docs**: asistentes sobre documentación interna (NotebookLM, Claude Projects)
- **Para research interno**: Deep Research aplicado a decisiones internas

**Mención breve Claude Code** (sin tutorial, solo "existe"):
> *"Mención breve para los técnicos de la sala: Claude Code es la herramienta que uso yo en Mint. Plan Max de Anthropic. Merece formación propia — no es el tema de hoy."*

**0:06-0:13** — DEMO 2: NotebookLM podcast ⭐ MOMENTO WOW PRINCIPAL
Ver sección "Demos" para guion detallado.

Resumen: cargamos un informe denso de IA (ej. "State of AI Report 2025" o "AI Index Report 2026"), NotebookLM genera en vivo un podcast de 2 voces de ~10 min hablando del contenido. Se reproducen 30-60 segundos en vivo. Audiencia flipa.

**0:13-0:15** — Aplicar la tesis
> *"Otra vez, mirad. **Especifiqué** qué documentos cargar y con qué objetivo. **Verifiqué** haciéndole una pregunta concreta cuya respuesta conozco. No me fío, compruebo."*

**0:15-0:17** — Cierre del bloque
Checklist:
- ¿Tienes docs internos que nadie lee? → NotebookLM podcast
- ¿Onboarding de nuevos? → NotebookLM asistente
- ¿Proceso repetitivo? → automatización con IA
- ¿Dev saturado? → **Antigravity gratis** o Cursor/Claude Code de pago

**Transición:**
> *"Equipo multiplicado. Siguiente frente: marca. Porque un buen producto sin marca es un secreto."*

---

### 🔴 BLOQUE 3 — IA PARA LA MARCA (15 min)

**Objetivo:** que cada asistente sepa producir assets de marca (imagen, vídeo, diseño) a nivel profesional con IA en 2026.

**Estructura interna:**

**0:00-0:02** — El dolor + update 2026
> *"El tópico que más ha cambiado en los últimos 6 meses. Si la última vez que intentasteis generar imagen/vídeo con IA fue hace 1 año, olvidad lo que visteis — es otra liga."*

**0:02-0:04** — Mapa actualizado
- **Imagen**: Nano Banana Pro (Google, mejor que Midjourney en marketing en 3 de 4 categorías), Midjourney V8, GPT Image
- **Vídeo**: Sora 2 (25s con audio Pro), **Veo 3.1 (FREE 10 vídeos/mes)**, Runway, Kling
- **Diseño/prototipo**: **Claude Design** (lanzado hace 5 días, abril 17), Figma, Stitch (free)
- **Voz/audio**: ElevenLabs, Suno

**0:04-0:11** — DEMO 3: Triple de marca
Ver sección "Demos". Tres demos cortas encadenadas:
- **Nano Banana Pro**: imagen promocional (~2-3 min)
- **Veo 3.1**: vídeo corto (~2-3 min, mientras se genera explico Claude Design)
- **Claude Design**: prototipo interactivo (~2 min)

**0:11-0:13** — Aplicar la tesis
> *"En la demo de imagen, mirad el prompt que usé. Especificaba: sujeto exacto, pose, composición, iluminación, espacio para copy, marca. Nada vago. Y luego verifiqué — si la primera sale regular, ajustas. No aceptas la primera si no es buena."*

**0:13-0:15** — Cierre del bloque
Checklist por rol:
- **Founder solo con marketing**: Veo 3.1 free + Nano Banana free en AI Studio → contenido pro
- **Con equipo de diseño**: Claude Design para prototipado rápido antes de Figma
- **Para redes/contenido**: mix Nano Banana + ElevenLabs para voiceover

**Transición:**
> *"Marca construida. Último frente: **datos**. Porque si no mides, no decides."*

---

### 🔵 BLOQUE 4 — IA PARA LOS DATOS (11 min)

**Objetivo:** founder sabe usar IA para análisis financiero, preparación de ronda, unit economics, reportes.

**Estructura interna:**

**0:00-0:02** — El dolor
> *"Cuando preparáis una ronda o un board: cuánto tiempo pasáis en spreadsheets? Vamos a comprimirlo."*

**0:02-0:05** — Casos de uso
- Análisis de PDF financiero / pitch deck / informes denso → extraer métricas y narrativa
- Unit economics — Claude/GPT con Code Interpreter
- Pricing strategy — GPT y Claude para modelado
- Preparación ronda — IA para feedback del deck, matizar mensajes
- **Mención especial: Gemini 2.5** (contexto 1M) es el rey para documentos > 500 páginas

**0:05-0:09** — DEMO 4: PDF → insights
Ver sección "Demos". Cargar un PDF público (informe sector, estudio mercado) → Claude o Gemini extrae KPIs clave + detecta algo no obvio.

**0:09-0:11** — Cierre del bloque + tesis aplicada
> *"Otra vez las 2 reglas. Especifiqué qué métricas buscaba. Verifiqué cruzando con los números del documento. No es magia, es disciplina."*

**Transición:**
> *"Cuatro frentes cubiertos. Pero me falta un tema que en Lanzadera os importa mucho: **cómo hacer esto sin quemar dinero**."*

---

### 💰 BLOQUE 5 — TRUQUITOS FREE & PERKS (7 min)

**Objetivo:** audiencia sale sabiendo que todo lo demostrado se puede hacer con 0€ o con perks que ya tienen.

**Estructura interna:**

**0:00-0:02** — El Free Stack puro
Slide con tabla:

| Necesidad | La joya free | Qué obtienes |
|-----------|--------------|--------------|
| Chat con modelos Pro | **AI Studio (aistudio.google.com)** | Gemini 3.1 Pro sin límites en browser |
| Build mini-apps | **AI Studio Build mode** | Construye apps conversacionalmente |
| Código con modelos top | **Google Antigravity** ⭐ | Claude Opus 4.6 + Sonnet 4.6 + Gemini 3.1 Pro gratis |
| Asistente sobre docs | NotebookLM | Free con Google account |
| UI/diseño | Google Stitch | Free 100% |
| Imagen | ImageFX (Imagen 4) · Nano Banana en AI Studio | Free con Google |
| Vídeo | Veo 3.1 en vids.new | 10 vídeos/mes free (sin audio sincronizado en free) |
| Terminal CLI code | Gemini CLI | 1000 requests/día free |

**Frase killer:**
> *"Hay dos herramientas gratis que casi nadie conoce: **AI Studio + Antigravity**. Juntas dan acceso a Gemini 3.1 Pro, Claude Opus 4.6 y Sonnet 4.6 — los 3 mejores modelos del mundo — por 0€. Literalmente el stack que yo pago, vosotros lo tenéis gratis si sabéis dónde mirar."*

**Warning honesto sobre Antigravity:**
> *"Ojo: Antigravity tiene issues de estabilidad a día de hoy (abril 2026). No lo recomendaría como daily driver para cosas críticas. Pero como entrada gratuita a la liga del Claude Code / Cursor — sin tarjeta, con modelos Pro por debajo — no hay nada mejor."*

**0:02-0:05** — Los perks que ya tenéis (EL ORO)

Tres caminos, ordenados por relevancia:

**🟢 Google Cloud (vía Lanzadera):**
- Lanzadera reparte aprox **$25k en créditos GCP** a sus startups
- Con eso: Gemini API production, Nano Banana Pro, Veo 3.1 pro sin límites del free
- Sin partner: $300 gratis trial (90 días) + Google for Startups (hasta $350k)

**🟠 AWS Activate + Amazon Bedrock (vía Lanzadera):**
- Lanzadera reparte aprox **$10-11k en créditos AWS**
- **Amazon Bedrock** = "supermercado de modelos" de AWS. Claude Sonnet 4.6, Opus 4.6 (y probablemente 4.7 pronto), Llama, Mistral
- Pagas por uso → tus créditos AWS financian Claude a escala

**🔵 Microsoft for Startups Founders Hub (independiente, cualquiera puede aplicar):**
- Programa separado de Lanzadera — se aplica aunque no estés
- Hasta **$150k Azure credits** (tier por funding: básico $1k, enhanced $5k, investor-affiliated $100k+)
- Con Azure → Azure OpenAI Service (GPT-5.4, GPT-5.2, DALL-E, Whisper)

**Mensaje clave:**
> *"Entre los perks que ya tenéis, estáis sentados en $35k–$150k en créditos IA que probablemente no estáis usando para IA."*

**0:05-0:06** — El truco enterprise
> *"Cuando vuestro equipo crece y Claude Pro individual se queda corto, tenéis 2 caminos: Claude Team a $25/user (escala por cabeza) o **Bedrock con vuestros créditos AWS** (pay-per-use, escala con uso real). Lo mismo con GPT vía Azure si tenéis créditos Microsoft."*

**0:06-0:07** — El warning
> *"Ojo: Bedrock / Azure OpenAI es **por uso**, no suscripción. Si sois un equipo con uso intensivo, haced cálculo antes. Regla rápida: menos de 100 llamadas/día por persona → pay-per-use compensa. Más → mejor Team plan."*

**Transición:**
> *"Stack gratis aclarado. Antes del cierre, os doy una checklist de 5 letras que uso yo todos los días cuando promptheo — el último ingrediente."*

---

### 🔥 BLOQUE 6 — LAS 5 C's + CONTRARIAN + PREDICCIÓN (6 min)

**Objetivo:** entregar una checklist mental de prompting + 2 opiniones que cabreen un poco + 1 apuesta pública.

**Estructura interna:**

**0:00-0:02** — Las 5 C's como checklist de prompting
> *"Las 2 reglas (especifica + verifica) son el marco mental. Cuando voy a escribir un prompt concreto, uso esta checklist de 5 letras. Os la llevo en el PDF:"*

| # | C | Qué | Ejemplo |
|---|---|-----|---------|
| 1 | **Cabeza** | Piensa antes de prompting | "¿Qué quiero exactamente?" antes de abrir el chat |
| 2 | **Caja** | Elige la tool adecuada | Research → Perplexity/DR. Código → Claude Code. No mezcles |
| 3 | **Contexto** | Dale todo lo que necesita | Rol, audiencia, constraints, ejemplos, estilo |
| 4 | **Cortar** | En pasos pequeños | "Hazme la app" ❌ · "Primero el esquema de datos" ✅ |
| 5 | **Check** | Verifica cada paso | Ejecuta, lee, desafía. No aceptes primera respuesta |

**0:02-0:04** — Contrarian 1: ChatGPT Plus
> *"Opinión 1 que puede cabrear al 40% de esta sala: **pagar ChatGPT Plus en abril 2026 es, para la mayoría de vosotros, quemar dinero**. Dos razones:*
> *(1) El free tier de Claude + AI Studio + Gemini Flash cubre el 80% de casos de uso personal.*
> *(2) Si vais a pagar 20€/mes por algo, Claude Pro tiene menor tasa de alucinación (3-4% vs 6%), mejor coding, y está construido sobre el modelo que usa Perplexity, que usa Manus, que usa Cursor Pro. Vosotros sabréis."*

**0:04-0:05** — Contrarian 2: no-code + IA
> *"Opinión 2, con más matiz: **el combo 'no-code + IA' como filosofía es una trampa en 2026 para muchos founders no-técnicos**. Antes era el camino obvio. Hoy, herramientas como Lovable (que usa IA bajo el capó) o directamente Claude Code te saltan la capa no-code. Matiz importante: si ya tenéis un Bubble o Webflow corriendo en producción con tracción, no rompáis lo que funciona. Pero si vais a empezar algo hoy, el cálculo ha cambiado."*

**0:05-0:06** — Predicción + wink MCT opcional
> *"Os dejo una apuesta verificable: **para 2027, la mitad de las no-code platforms que hoy conocéis habrán desaparecido o pivotado a ser wrappers de IA**. Anotadlo, me lo recordáis en el próximo Demo Day."*
> 
> [Opcional, si hay tiempo]: *"Y por cierto, si os fijáis, los 4 bloques que hemos visto — Cliente, Equipo, Marca, Datos — son el Modelo de Calidad Total que ya conocéis, traducido a palancas IA. No lo enmarqué así desde el minuto uno porque el marco importa menos que las decisiones que toméis el lunes."*

**Transición:**
> *"Y hablando del lunes — cierre."*

---

### 🎯 BLOQUE 7 — CIERRE ACTIVO (6 min)

**Objetivo:** cada asistente sale con una tarea concreta para el lunes + el asset en la mano.

**Estructura interna:**

**0:00-0:02** — La pregunta que se llevan
> *"Cerramos con una pregunta. La he guardado para el final porque quiero que os la llevéis en la cabeza toda la semana:*
> 
> ***¿Cuál es la tarea de vuestra semana que más odiáis, que creéis que solo vosotros podéis hacer, y que probablemente una IA bien configurada hace mejor?***
> 
> *La respuesta honesta a esa pregunta es vuestro primer proyecto."*

**0:02-0:04** — El compromiso público
> *"Quiero que ahora mismo, en la nota del móvil, escribáis vuestra respuesta. 30 segundos."* [cuenta atrás]
> 
> *"Ahora — dos personas que levanten la mano y la lean en alto."* [elige 2]

**0:04-0:05** — Síntesis y north star del lunes
> *"Recordad las 2 reglas: especifica, verifica. Y en 7 días — el reto es este: sustituid una tarea recurrente que os coma 30+ minutos por un flujo IA. Una. No diez. Una que sustituís completamente. Esa es la semilla."*

**0:05-0:06** — Asset y cierre formal
> *"El QR en pantalla lleva al pack que os habéis ganado:*
> *- Matriz 'Quiero X → usa Y' (Free Stack y Pro Stack separados)*
> *- Cheat sheet de las 5 C's*
> *- Lista completa de perks: AWS Bedrock, GCP, Azure OpenAI, Microsoft for Startups con URLs*
> *- Prompts de plantilla para cada demo que habéis visto*
> 
> *Gracias."*

[Fin de los 90 min oficiales. Q&A opcional después.]

---

## Demos — guiones detallados

### DEMO 1 — Gemini Deep Research (Bloque Cliente, ~6 min)

**Setup pre-demo:**
- Browser con AI Studio abierto en Gemini 3.1 Pro
- Pregunta preparada: investigar competidor real (alguien conocido del sector de la audiencia)
- Ejemplo: "Quiero identificar los 3 dolores más comunes que los clientes de [competidor valenciano conocido] reportan en sus reseñas de 1-2 estrellas en los últimos 6 meses. Dame un informe con citas."

**Script:**
1. (30s) Muestro la pregunta y el prompt estructurado — **aplicando C1 y C3**: rol (founder que quiere pitchear), contexto (sector concreto), acción (identificar dolores).
2. (4 min) Lanzo Deep Research. Mientras corre, narro: "Fijaos que está navegando, leyendo reseñas, cruzando fuentes — esto son 3-5 horas de trabajo manual".
3. (1 min) Llega el output. Leo en voz alta 2 insights concretos. **Aplico C5**: cliqueo en una cita al azar para verificar que la fuente existe y dice lo que dice.
4. (30s) Cierre: *"Mañana por la mañana tenéis 3 insights accionables para vuestro pitch. Con 4 minutos de trabajo."*

**Backup plan:**
- Si Gemini falla o se demora: tener **output pre-capturado** de una ejecución previa, abierto en otra pestaña. Narrar la misma historia con output "pre-cocinado" explicado honestamente: *"Esto tardó 4 min hace 2 horas, os ahorro la espera".*

---

### DEMO 2 — NotebookLM podcast ⭐ (Bloque Equipo, ~7 min)

**Setup pre-demo:**
- NotebookLM abierto con **un informe denso pre-cargado** (State of AI Report 2025 u otro reciente y público)
- Audio de podcast generado con antelación (backup)

**Script:**
1. (1 min) Muestro el notebook con el informe cargado (200+ páginas). *"¿Alguien ha leído esto? [pausa] Yo tampoco. Observad."*
2. (30s) Click en "Generate podcast" o similar. Explico: *"NotebookLM va a crear ahora mismo un podcast de 2 voces IA hablando sobre este informe, como si fuera una conversación entre analistas".*
3. (3 min) Mientras genera (~3-5 min), sigo con contenido del bloque (casos de uso por rol), no me quedo esperando.
4. (1 min) Reproduzco 60 segundos del podcast en directo (audio a la sala).
5. (30s) **C5 aplicado**: hago una pregunta al notebook sobre algo específico del informe, verifica que la respuesta tiene la cita exacta.
6. (1 min) Cierre del wow: *"Tenéis docs internos que nadie lee — pitch deck, manual, regulación sectorial. Podéis tenerlo en formato podcast mañana. Gratis. 5 minutos de setup."*

**Backup plan:**
- Si falla la generación en vivo: reproducir el podcast pre-generado. Honestidad: *"En directo tarda 4 min, os pongo uno que dejé listo esta mañana".*

---

### DEMO 3 — Triple de Marca (Bloque Marca, ~7 min)

**Setup pre-demo:**
- Nano Banana Pro abierto (via Gemini Pro o AI Studio)
- Veo 3.1 abierto en vids.new
- Claude Design abierto (Pro account)
- Una "startup ficticia con guiño local" pre-pensada — ej: **"Paellabox S.L."** (food delivery valenciano) o **"Horchata Analytics"** (SaaS B2B inventado)

**Script:**

**Demo 3a — Nano Banana Pro (2-3 min):**
1. Prompt preparado (visible para la sala): *"Fotografía publicitaria de tipo hero shot: caja de paella para delivery, vista cenital 3/4, iluminación suave de estudio, fondo mostaza warm, espacio negativo a la izquierda para copy de campaña, mockup producto nítido, estilo editorial food, 4K"*
2. Genero en vivo. Mientras sale:
   > *"Fijaos el prompt — sujeto, composición, iluminación, fondo, espacio copy, estilo. Nada vago. **Eso es especificar como arquitecto**. Si hubiese dicho 'foto de paella', me saca algo genérico."*
3. Sale imagen. Comparo brevemente si da tiempo con uno que generé sin especificar tanto → diferencia abismal.

**Demo 3b — Veo 3.1 (2-3 min, lanzado mientras se explica Claude Design):**
1. Prompt visible: *"Vídeo de 8 segundos, panorámica de una terraza valenciana a la hora dorada, familia comiendo una paella Paellabox, camarero llevando horchata, primer plano del logo, cámara lenta cinematográfica 24fps"*
2. Lanzo generación. **Explicación clave**: *"En Veo free tier, 10 vídeos/mes gratis, sin audio sincronizado — tengo que añadir música después."*
3. Sigue con demo 3c mientras genera.

**Demo 3c — Claude Design (2 min):**
1. Prompt visible: *"Prototipo interactivo de landing para Paellabox: hero con imagen y CTA 'Pide ya', 3 productos en cards, sección de opiniones, footer con pedido por WhatsApp"*
2. Claude Design genera un prototipo. Click en elementos → se comportan interactivamente.
3. Killer: *"Y si vuestro equipo técnico va a programar esto, el botón 'handoff to Claude Code' te pasa el design system directo al desarrollador."*

**Al final, si Veo ha terminado:** reproducir los 8 segundos generados. Aplausos probables.

**Backup plan:**
- Si Veo falla (muy probable, servicio nuevo): tener **vídeo ya generado** listo en pestaña. Honestidad: *"Lo genere esta mañana, os ahorro la espera".*
- Si Claude Design falla: tener **screenshot** del prototipo previo.

---

### DEMO 4 — PDF → insights (Bloque Datos, ~4 min)

**Setup pre-demo:**
- PDF pre-cargado: un informe público denso (informe sector, estudio mercado de una consultora, reporte de fondos) — ideal: algo del sector de la audiencia
- Claude Pro (con web file upload) o Gemini Pro

**Script:**
1. (30s) Cargo PDF de 100+ páginas. *"No quiero leerlo. Quiero las 3 métricas clave y algo que nadie haya mencionado en mi pitch deck aún."*
2. (2 min) Prompt específico: rol (founder de X sector preparando ronda seed), objetivo (unit economics comparables), pregunta (3 métricas + 1 insight no obvio).
3. (1 min) Claude/Gemini responde. **C5 aplicado**: pido que cite exactamente la página donde saca cada número. Verifico en 10 segundos 1 de las citas.
4. (30s) Cierre: *"Vuestro próximo pitch deck tiene 2 métricas más fuertes que las que tenía antes de esta demo. Esto son 3 minutos."*

**Backup plan:**
- Si hay fallo: tener output pre-capturado. Misma honestidad.

---

## Asset descargable — contenido del pack

URL corta con QR en la slide del cierre. Contiene:

### 1. **Matriz PDF "Quiero X → usa Y"**
Dos páginas: Free Stack y Pro Stack separados.

- **Free Stack**: AI Studio, Antigravity, NotebookLM, Veo 3.1 en vids.new, ImageFX, Gemini CLI, Google Stitch, Claude Haiku free, ChatGPT free
- **Pro Stack**: Claude Pro/Max, Gemini Pro, ChatGPT Plus, Cursor, Claude Code, Lovable, Perplexity Pro, ElevenLabs, Midjourney

Columnas: Quiero... / Tool recomendada / Alternativa free / Nota.

### 2. **Cheat sheet 5 C's**
1-pager con las 5 C's + ejemplo concreto de cada una + frases ganadoras.

### 3. **Lista de perks startup con URLs**
- AWS Activate (Bedrock): url y cómo activar
- GCP Startup Program / Lanzadera perk
- Microsoft for Startups Founders Hub (Azure OpenAI)
- Notas: cuándo compensa cada uno

### 4. **Prompts plantilla de las demos**
Copy-paste para replicar las 4 demos. Cada uno con placeholder para adaptarlo.

### 5. **Links directos**
- aistudio.google.com
- antigravity.google
- notebooklm.google.com
- vids.new
- labs.google/fx (ImageFX)
- stitch.google

### Hosting
Decisión pendiente: GitHub repo público O Notion público O link en plataforma Lanzadera. **Decisión del ponente al implementar** — lo importante es que NO lleve a Mint (constraint de Lanzadera).

---

## Contrarian opinions (recap)

**Opinion 1 — "ChatGPT Plus es quemar dinero para el 80%"**
Defensa:
- Free tier Claude + AI Studio cubre 80% de casos personales
- Tasa de alucinación Claude 3-4% vs GPT 6%
- Claude Pro es mejor inversión por 20€: mejor coding, Research feature, Claude Design incluido, mejor razonamiento largo
- Dato colateral: Perplexity, Manus, Cursor Pro usan Claude por debajo

**Opinion 2 — "No-code + IA es trampa para founders"**
Defensa:
- Herramientas como Lovable (IA interna) saltan la capa no-code
- Claude Code / Cursor son más potentes y versátiles
- Matiz respetuoso: si ya tienes Bubble/Webflow funcionando, no rompas lo que funciona

**Predicción (apuesta pública)**
> *"Para 2027, la mitad de las no-code platforms que hoy conocéis habrán desaparecido o pivotado a ser wrappers de IA."*

---

## Decisiones finales registradas

| # | Decisión | Status |
|---|----------|--------|
| Estructura | 4 palancas (Cliente, Equipo, Marca, Datos) + Truquitos + 5 C's + Cierre | ✅ |
| Frame MCT | Guiño ligero al final, no espina dorsal | ✅ |
| Tesis | "Especifica como arquitecto, verifica como QA" | ✅ |
| Dato ancla | "2 devs senior + 1 en prácticas = equipo de 10" | ✅ |
| Hook | Opción C — encuesta ChatGPT Plus vs Claude Pro | ✅ |
| Demo 1 (Cliente) | Gemini Deep Research en vivo | ✅ |
| Demo 2 (Equipo) | NotebookLM podcast ⭐ WOW | ✅ |
| Demo 3 (Marca) | Triple: Nano Banana + Veo 3.1 + Claude Design | ✅ |
| Demo 4 (Datos) | PDF → insights con Claude/Gemini | ✅ |
| Claude Code | Mención breve, no tutorial | ✅ |
| Failure story | Descartada | ✅ |
| Contrarians | 2 — ChatGPT Plus + no-code trap | ✅ |
| Predicción | No-code platforms 2027 | ✅ |
| Truquitos | AI Studio + Antigravity + perks Lanzadera | ✅ |
| Asset | PDF matriz + cheat sheet + perks + prompts | ✅ |
| 5 C's | Checklist de prompting al final | ✅ |

---

## 🚨 Checklist de fact-check OBLIGATORIO 24h antes del directo

Los siguientes datos cambian rápido o tienen imprecisiones. **Reverificar el día antes**:

| # | Claim | Dónde verificar |
|---|-------|-----------------|
| 1 | Gemini 2.5 Pro context = 1M (no 2M) | ai.google.dev |
| 2 | Perplexity DR corre sobre Claude Opus 4.5 (NO 4.6) | perplexity.ai/changelog |
| 3 | Cursor 2M+ users, 1M+ paying, $2B ARR | última noticia TechCrunch |
| 4 | Lovable $10M ARR en 2 meses (NO $20M; ese es Bolt) | lovable.dev/blog |
| 5 | Veo 3.1 free = sin audio sincronizado | Google Vids FAQ |
| 6 | Claude Opus 4.7 en Bedrock | aws.amazon.com/bedrock/anthropic |
| 7 | Claude Design sigue en research preview | claude.com |
| 8 | Antigravity sigue gratis y estable enough | antigravity.google |
| 9 | AI Studio sigue permitiendo Gemini 3.1 Pro en browser | aistudio.google.com |
| 10 | Lanzadera credits actuales (AWS $10-11k, GCP $25k) | confirmar con equipo Lanzadera |

**Si cambia algo grande (ej. precio, disponibilidad), adaptar slide correspondiente.**

---

## ⚠️ Errores factuales detectados en research y NO cometerlos

1. NO decir "NotebookLM no alucina" → decir "reduce drásticamente la alucinación"
2. NO decir "Perplexity Deep Research genera PPTs/Excels" → eso es **Perplexity Labs**
3. NO decir "87% Fortune 500 usa vibe coding" → stat sin fuente primaria
4. NO decir "92% devs US usan IA a diario" → mejor 84% (Stack Overflow 2025, verificable)
5. NO decir "63% tardan más debugeando IA" → es 67% (Harness) o 45% (SO)
6. NO decir "Claude 1 licencia por organización" → decir "Claude Team es $25/user o Bedrock pay-per-use"

---

## Risk register + backup plans

### Riesgos técnicos

| Riesgo | Prob | Impact | Backup |
|--------|------|--------|--------|
| Wifi sala cae | Alta | Crítico | Hotspot móvil testeado 1h antes en la sala real |
| Rate limit Anthropic/Google | Media | Alto | Tener 2 cuentas de cada uno |
| Demo falla en vivo | Alta | Medio-Alto | Pre-generado + pre-grabado + "resultado final listo" |
| Proyector baja resolución | Media | Alto | Terminal 18-20pt, alto contraste, probar proyector real 1h antes |
| MCP server no arranca (si aplica) | Media | Alto | NO usar MCPs en vivo (añade frágil). Si hay que mostrarlo, prerender. |
| Gemini Deep Research lento (>5 min) | Alta | Medio | Seguir con contenido mientras genera, o output precached |
| Veo 3.1 falla (servicio nuevo) | Alta | Medio | Vídeo pre-generado en pestaña |
| Claude Design falla (research preview) | Alta | Bajo-Medio | Screenshot pre-capturado |

### Riesgos narrativos

| Riesgo | Backup |
|--------|--------|
| Asistente ofendido por opinión contrarian | Reformular con "en mi opinión", ofrecer matiz en Q&A |
| Pregunta fuera de guion en mitad de demo | 3 respuestas cortas (<20s) preparadas para preguntas típicas (precio, privacidad, escala) |
| Ejemplo sectorial no aterriza | Tener 1 ejemplo por sector dominante (salud, deporte, educación, sostenibilidad, RRHH) |

### Pre-event checklist (24h antes)

- [ ] Fact-check completo de los 10 items
- [ ] Demo completa ensayada end-to-end 2 veces, <85 min
- [ ] Hotspot móvil testeado en sala real a la hora real
- [ ] Vídeo backup 3-5 min grabado y accesible offline
- [ ] "Resultado final" de cada demo pre-generado
- [ ] Terminal en 18-20pt, tema alto contraste
- [ ] Do Not Disturb, Slack/Mail/Discord cerrados
- [ ] 3 preguntas-trampa con respuesta preparadas
- [ ] Asset (PDF/repo/Notion) publicado y URL corta con QR lista
- [ ] Dos cuentas Anthropic y Google por si hay rate limits
- [ ] Batería + cargador + adaptador HDMI/USB-C

---

## Open items / TBDs

1. **Herramienta de slides** — Gamma vs Claude Code genera HTML vs Keynote vs Figma Slides. **Decidir en fase de implementación**.
2. **Hosting del asset** — GitHub repo público / Notion público / plataforma Lanzadera. **Confirmar con Lanzadera equipo** antes.
3. **PDF real para Demo 4** — elegir informe público denso del sector dominante.
4. **Informe para NotebookLM** — State of AI Report 2025 u otro informe denso público.
5. **Nombre de la startup ficticia** — "Paellabox S.L." propuesto, validar con Manu.
6. **Fecha del evento** — por confirmar con Lanzadera.
7. **Número de asistentes esperado** — por confirmar.
8. **Ejemplos sectoriales concretos** — preparar 1 caso real por sector dominante (salud, deporte, educación, sostenibilidad, RRHH).

---

## Change log

- **v1**: Estructura inicial — Hook + Mapa + 5 C's + Cierre. Demo monolítica Claude Code.
- **v2**: Añadido Free Stack con Google tools (Nano Banana, Veo, Gemini CLI).
- **v3**: Postura "Claude es el jefe" matizada a "cada gigante reina en algo".
- **v4**: Matriz "Quiero X → usa Y" con columnas free/premium.
- **v5**: Pivot masivo tras audit de 4 subagentes:
  - Estructura MCT (4 palancas) en lugar de Mapa + 5 C's
  - Tesis "Especifica + Verifica" reemplaza las 5 C's como espina
  - 5 C's relegadas a checklist de prompting (6 min)
  - Dato-ancla "3 personas = equipo de 10"
  - Hook C decidido
  - Demo reformulada: 4 lightning demos (no 1 monolítica)
  - Fact-check crítico de 11 claims corregidos
- **v5.1**: MCT como "palancas" (no literal), Sociedad renombrado a Marca, Operaciones disuelto en Equipo.
- **v5.2**: Añadido bloque Truquitos Free & Perks (7 min).
- **v5.3** (este doc): AI Studio + Antigravity + Claude Design integrados. Triple demo en Marca.

---

## Firma

Spec preparado tras brainstorming con Manu Lorenzo durante sesión de diseño del 22 de abril de 2026. Próximo paso: implementación (plan detallado con writing-plans skill).
