# Pre-Work — Encuesta 48h antes del evento

El pre-work es el movimiento que transforma la charla de "masterclass" a *"me has leído a cada uno"*. Este documento contiene todo lo necesario para ejecutarlo.

---

## Flujo temporal

```
T-7 días  →  Enviar este doc a Marta Nogueras (o tu contacto Lanzadera)
              para que acuerde el envío de la encuesta
T-4 días  →  Lanzadera envía la encuesta a la cohorte
T-48h    →  Cierre de respuestas
T-24h    →  Tú lees TODAS las respuestas y:
              · eliges founder_A (demo Cliente)
              · eliges founder_B (demo Marca)
              · agregas estadísticas para la slide "pre-work reveal"
              · pre-ejecutas las demos con los datos reales
T-6h     →  Última llamada a founder_A y founder_B: confirmar opt-in,
              avisar de que van a ser mencionados
T-0      →  Evento
T+24h    →  Email de follow-up a founder_A y founder_B con sus outputs reales
```

---

## 1 · Email para Lanzadera (solicitar envío)

**Destinatario:** Marta Nogueras / Directores de Proyecto / equipo de formación
**Asunto:** Pre-work · Formación IA · [fecha]

```
Hola [nombre],

Para la formación del [fecha], me gustaría enviar a la cohorte una
encuesta de 3 minutos (5 preguntas), idealmente con 4 días de
antelación al evento. La uso para:

1. Calibrar el nivel de la sala (herramientas que usan, estado de
   adopción) y ajustar el contenido al perfil real.
2. Elegir 2 founders de la cohorte cuyas respuestas servirán para
   construir en vivo durante las demos. Esto genera un momento muy
   diferenciador — que la charla no sea genérica, sino que hable
   de gente concreta de la sala.

No incluye publi de Mint ni de ninguna otra empresa. Respetamos el
constraint de Lanzadera al 100%.

¿Podríais enviar esta encuesta por [plataforma Lanzadera / email /
Slack cohorte] el [fecha T-4]?

La encuesta está abajo. Puedo daros el link directo a un Google
Form si preferís, o podéis usar vuestro formulario estándar.

Gracias,
Manu
```

---

## 2 · La encuesta · 5 preguntas · 3 minutos

**Título:** IA para producto · preparación sesión Manu Lorenzo · [fecha]

**Intro para el asistente:**

> Hola. Estás apuntado a la sesión *"IA para producto"* del [fecha].
> Esta encuesta de 3 minutos me ayuda a calibrar el contenido al perfil
> real de la cohorte, y a construir algunos ejemplos con vuestros
> casos reales durante la charla.
>
> Todas las respuestas son opcionales excepto la última. Al final hay
> una pregunta de opt-in si queréis que pueda mencionaros por nombre.

### Pregunta 1 · Herramientas

**¿Por qué herramientas de IA pagas actualmente?** (marca todas las que apliquen)

- [ ] ChatGPT Plus / Pro / Pro Max
- [ ] Claude Pro / Max
- [ ] Google AI Pro / Ultra
- [ ] Perplexity Pro / Max
- [ ] Cursor
- [ ] Lovable / v0 / Bolt
- [ ] GitHub Copilot
- [ ] ElevenLabs / Suno / Midjourney / Runway
- [ ] Otras (texto libre)
- [ ] No pago por ninguna

### Pregunta 2 · Estado

**¿En qué punto estás con IA?** (elige uno)

- [ ] Acabo de empezar a probar, sin flujo consolidado
- [ ] Uso IA en 1-2 tareas, sin sistema
- [ ] Tengo flujo establecido en 3+ tareas recurrentes
- [ ] Sistema maduro, mide el ROI en horas ahorradas

### Pregunta 3 · La tarea que quieres delegar

**En una frase: ¿cuál es la tarea de tu semana que pagarías por delegar a IA?**

[texto libre · máx 200 caracteres]

### Pregunta 4 · Sector

**¿En qué sector está tu startup?** (elige uno)

- [ ] Salud / Wellness
- [ ] Deporte / Fitness
- [ ] Educación / Edtech
- [ ] Sostenibilidad / Economía circular
- [ ] RRHH / HR tech
- [ ] Fintech
- [ ] SaaS B2B vertical
- [ ] Marketplace
- [ ] Industria / Hardware
- [ ] Consumer
- [ ] Otro (texto libre)

### Pregunta 5 · Opt-in + competidor

**¿Quieres que Manu pueda citarte por nombre durante la charla?**

- [ ] Sí, puede mencionar mi nombre y el de mi startup
- [ ] No, prefiero quedarme en el anonimato

**Si dijiste SÍ · ¿Cuál es tu competidor principal y tu startup?**

- Mi startup: [texto libre]
- Mi competidor principal: [texto libre]
- Tu email para que te mande los outputs si usamos tu caso: [email]

---

## 3 · Cómo elegir founder_A y founder_B

### Criterios founder_A · demo Cliente (Deep Research sobre competidor)

De quienes marcaron **opt-in** + especificaron competidor:

1. **Competidor con presencia digital verificable** (Google reviews / Trustpilot / G2 / App Store). Descarta startups cuyo competidor sea muy nicho o no tenga presencia pública.
2. **Sector representado en la cohorte** — idealmente uno de los 3 más votados en Pregunta 4.
3. **Pre-test la query 24h antes**: ejecuta el prompt de Deep Research con ese competidor. Si no encuentra 3 dolores con citas, descarta y pasa al siguiente candidato.

### Criterios founder_B · demo Marca (Nano Banana + Veo + Claude Design)

De quienes marcaron **opt-in** + distinto a founder_A:

1. **Startup con propuesta visualizable** — preferiblemente B2C, consumer, marketplace, o cualquiera con cara pública (landing, producto físico).
2. **Nombre y concepto fácil de prompt-ear** (evita nombres muy genéricos o corporativos secos).
3. **Sector distinto al de founder_A** — para que la sala vea variedad.

### Si nadie marca opt-in (escenario peor)

Vuelve a ejemplos neutros:
- Demo 1: competidor real del sector MÁS votado (sin mencionar founder por nombre). Di: "he elegido este porque es el competidor típico del sector más representado en vuestra cohorte".
- Demo 3: startup ficticia local (p.ej. "Paellabox S.L." o similar).

La charla NO se cae sin opt-ins. Solo pierde el 20% de emoción del momento personal.

---

## 4 · Cómo construir la slide "pre-work reveal"

Abre `presentation/slides.md` y busca el bloque:

```
<span class="eyebrow">pre-work · lo que habéis respondido</span>

# He leído vuestras respuestas. Aquí hay patrones.
```

Sustituye las variables entre `{}` con los datos agregados de las respuestas:

| Variable | Qué poner | Ejemplo |
|---|---|---|
| `[N de M]` | N respondieron al menos 1 tool / M total | "14 de 18" |
| `[patrón de pricing]` | Patrón más llamativo del Q1 | "casi todos tenéis Claude Pro, la mitad ChatGPT, ninguno Perplexity" |
| `[X]`, `[Y]`, `[Z]` | Distribución del estado (Q2) | "6 probando · 9 parcial · 3 con sistema" |
| `[sector 1-3]` | Los 3 sectores más votados (Q4) | "SaaS B2B · Salud · RRHH" |
| `[tarea 1-3]` | Las 3 tareas más repetidas (Q3, clustering manual) | "redactar emails comerciales · análisis de competencia · reporting semanal" |

**Si sale algún dato sorprendente** (ej. "el 80% no mide") — subráyalo verbalmente en vivo. El contraste con tu diagnóstico del hook (*"pagáis por lo que no medís"*) lo refuerza.

---

## 5 · Post-evento · cumplir la promesa

A founder_A y founder_B les prometiste los outputs:

- **founder_A**: el informe completo del Deep Research sobre su competidor
- **founder_B**: las 3 piezas (imagen, vídeo, prototipo) para su startup

**Enviáselos por email en las 24h siguientes al evento.** Esto:
- Cumple tu palabra
- Les das algo de valor real
- Genera conversaciones en la cohorte ("oye, a mí Manu me ha mandado esto")
- Te abre la puerta a colaboraciones futuras (seguimiento natural, no publi)

Sin mencionar Mint en el email. Solo el contenido que prometiste.

---

## 6 · Contingencias

### ¿Y si llegan pocas respuestas?
Si hay menos de 8 respuestas de un aula de 18-25, el agregado estadístico queda flojo. En ese caso:
- La slide "pre-work reveal" sigue funcionando con menos datos ("ocho de vosotros respondisteis — gracias")
- La parte de founders mencionados por nombre funciona igual
- **Evita** citar porcentajes ("el 50%") y usa conteos ("4 de los 8").

### ¿Y si se cuela un troll con respuesta ofensiva?
Muy improbable en Lanzadera pero por si acaso: filtra en el agregado, no lo menciones. No respondas en público.

### ¿Y si founder_A / founder_B cancela en el último momento?
Ten uno de cada como backup. Si los 4 candidatos se caen, vuelves a ejemplos neutros. La charla NO se cae.

### ¿Y si descubres en el pre-ensayo que el competidor de founder_A no tiene reseñas?
Cambia a otro competidor del MISMO founder si menciona varios, o salta al siguiente candidato.

---

## 7 · Checklist antes del evento

- [ ] Email a Lanzadera enviado · T-7
- [ ] Encuesta enviada a la cohorte · T-4
- [ ] Recordatorio a cohorte · T-48h
- [ ] Cierre respuestas · T-48h
- [ ] Lectura completa de respuestas · T-24h
- [ ] founder_A elegido + pre-test de Deep Research con su competidor · T-24h
- [ ] founder_B elegido + pre-generación de assets (imagen, vídeo, prototipo) · T-24h
- [ ] Agregados estadísticos insertados en slide "pre-work reveal" · T-24h
- [ ] Última llamada a founder_A y founder_B · T-6h
- [ ] Email post-evento a founder_A y founder_B · T+24h
