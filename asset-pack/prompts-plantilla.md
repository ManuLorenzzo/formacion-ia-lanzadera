---
title: Prompts plantilla de las demos
subtitle: Copy-paste, sustituye los placeholders y produce
eyebrow: Material 04
---

Plantillas de los prompts demo de la charla. Copy-paste, reemplaza `{{placeholders}}` por tu caso real, y a producir.

> Cada prompt está anotado con qué C de las 5 aplica. Las etiquetas son: `[CABEZA]` `[CAJA]` `[CONTEXTO]` `[CORTAR]` `[CHECK]`. Todos los prompts están pensados para ser iterativos: el primer output se refina con prompts de follow-up, no de una sola tirada.

---

## Demo 1 — Deep Research: voice of customer del sector (bloque Día a día · investigar)

**Tool:** Gemini Deep Research / Claude Research / ChatGPT Deep Research / Perplexity Pro. `[CAJA]` — elegimos Deep Research porque navega y cruza decenas de páginas en 5–30 minutos y devuelve un informe con citas verificables, no un resumen rápido.

**Por qué funciona:** Voice of customer "a mano" implica leer 200+ reseñas, foros y posts. Deep Research lo hace en 10 minutos y te entrega los dolores top con quotes literales y URLs. Es el research RECURRENTE — un founder lo hace cada 1–2 meses, no una vez antes del pitch.

### Prompt — plantilla genérica

```
[CONTEXTO]
Soy founder de {{startup}}, {{descripción 1 frase, ej: "marketplace para dueños de perros en España"}}. 
Llevamos {{tiempo}} funcionando, vamos a sacar la versión {{X.0}} a {{N}} semanas vista.

[CABEZA]
Mi nivel: {{experiencia previa relevante, ej: "Vendí un veterinario hace 4 años — conozco el sector"}}. 
Pero {{lo que NO sabes hacer, ej: "nunca he hecho discovery sistemático de clientes a escala"}}.

Quiero VOICE OF CUSTOMER del sector — no de mi producto, de TODA la categoría.

[CORTAR]
Necesito los 10 dolores más mencionados en reseñas de 1–2 estrellas de los principales {{tipo de productos, ej: "marketplaces y apps pet"}} en {{geografía}} en los últimos 6 meses.

Para cada dolor, dame:
1. Frecuencia aproximada (cuántas menciones encontraste)
2. Gravedad reportada (1–5, según el tono de la queja)
3. Qué competidor lo resuelve (o nadie)
4. 2 quotes literales de reseñas, con URL de la fuente

Fuentes a cubrir: App Store, Google Play, Trustpilot, foros relevantes (Reddit, foros de nicho), redes sociales si aplica.

[CHECK]
- No inventes citas. Si un dato no lo encuentras, escribe [no encontrado].
- Toda quote debe tener URL clicable.
- Si la URL no carga o el contenido fue editado, márcalo [URL inestable].
- Antes de ejecutar, hazme las preguntas que necesites: qué competidores priorizo, qué segmentos, qué idioma, qué ventana temporal exacta.
```

**Follow-ups típicos:**
- "Profundiza solo en el dolor #3. Dame 10 quotes adicionales con fecha y fuente."
- "Cruza los 3 dolores top con la oferta actual de mi producto: ¿cuáles ya resolvemos parcialmente y dónde está el gap real?"
- "A partir del informe, genera un brief de 5 ideas de feature priorizadas para la versión {{X.0}}."

---

## Demo 2 — NotebookLM: digerir docs en podcast/mapa mental (bloque Día a día · digerir)

**Tool:** NotebookLM (free, cuenta Google). `[CAJA]` — elegimos NotebookLM porque transforma documentos en podcast, vídeo y mapa mental, cita pasajes exactos y no alucina sobre fuentes que no le has dado.

**Por qué funciona:** NotebookLM solo responde con info de las fuentes que subes. Si no está, te dice "no está". Perfecto para: convertir el research que acabas de generar en un podcast para escuchar conduciendo, onboarding del nuevo hire, búsqueda en docs legales.

### Tres casos típicos de un founder

1. **Cargar el voice-of-customer del Demo 1 → Audio Overview en castellano**. Lo escuchas el lunes en el coche y te quedan grabados los 3 dolores top sin haber leído el informe.
2. **Onboarding del nuevo hire**. Cargas handbook + procesos + transcripts de meetings clave. Generas Audio Overview de 15 min. Lo escucha en el coche el primer día.
3. **Consulta legal/compliance**. Cargas políticas internas, contratos, normativa. Preguntas con citas verificables.

### Setup (3 minutos)

1. Ir a https://notebooklm.google.com
2. Crear notebook llamado por ejemplo "{{Equipo - Handbook Interno 2026}}"
3. Añadir fuentes (max 50 por notebook, max 500k palabras c/u):
   - Handbook PDF
   - Docs de procesos en Google Docs (selección masiva)
   - URLs de políticas internas
   - Transcripts de reuniones clave (exporta de Google Meet)
4. Esperar indexado (~1-2 min)
5. Opcional: generar "Audio Overview" para onboarding de nuevos empleados (podcast de ~15 min sobre todo lo subido)

### Prompts template para el notebook

**Para onboarding:**
```
Actúa como un buddy de onboarding. 
Soy un empleado nuevo que acaba de unirse como {{rol, ej: "Account Executive Junior"}}.
[CONTEXTO] Solo tengo acceso a los documentos de este notebook.
[CORTAR] Dame en este orden:
1. Los 5 procesos CLAVE que debo aprender en mi primera semana.
2. Los 3 stakeholders internos con los que debo reunirme y por qué.
3. Las 2-3 cosas que OBVIAMENTE no están documentadas y debería preguntar en vivo.
[CHECK] Para cada punto, cita el documento y sección específica.
```

**Para consulta legal/compliance:**
```
[CONTEXTO] Necesito saber qué dice nuestra documentación interna sobre {{tema, ej: "uso de IA generativa con datos de clientes"}}.
[CORTAR]
1. ¿Existe una política escrita? Cita el documento y párrafo.
2. ¿Qué dice exactamente?
3. ¿Hay contradicciones entre distintos documentos del notebook?
4. Si no hay política, responde literalmente "No hay política documentada sobre X" — no inventes.
```

**Para research sobre decisiones pasadas:**
```
[CABEZA] Estoy a punto de tomar una decisión sobre {{tema}}. 
[CONTEXTO] Quiero saber si ya se discutió antes en el equipo.
[CORTAR]
1. Busca en todas las fuentes menciones previas a este tema.
2. Resume qué se decidió y cuándo.
3. Identifica quién lo lideró (para hablar con esa persona antes de decidir de nuevo).
[CHECK] Cita fecha y fuente de cada mención.
```

---

## Demo 2bis — Cowork + Artifact: del research a la herramienta (bloque Día a día · ejecutar)

**Tool:** Claude Cowork (incluido en Claude Pro, Mac/Windows). `[CAJA]` — elegimos Cowork porque puede leer archivos locales, navegar conectores y construir Artifacts (mini-apps interactivas) que viven al lado del chat.

**Por qué funciona:** un research en markdown es texto muerto. Un Artifact es software vivo en tu mesa — un dashboard, un simulador, un mapa. Cowork hace ambas cosas en una conversación: lee el markdown, te monta la herramienta a medida y te la deja abierta para que la uses.

### Prompt — del Voice of Customer al Pain Map

```
[CONTEXTO]
Adjunto voice-of-customer.md — el research que acabo de generar con Deep Research.
Contiene los 10 dolores top del sector {{sector}} con frecuencia, gravedad, gap competitivo y quotes.

[CABEZA]
Soy founder de {{startup}}. Quiero VER los dolores como una herramienta interactiva — no leerlos en markdown.
Esto vive en mi escritorio, lo uso yo, no es para vender.

[CORTAR]
Construye un Artifact (HTML + JS standalone, sin frameworks externos) que:
1. Muestre los 10 dolores como puntos en un cuadrante 2D — eje X frecuencia, eje Y gravedad
2. Coloree cada punto según gap competitivo: verde (nadie lo resuelve), ámbar (parcial), rojo (resuelto bien)
3. Big number arriba: "TOP OPPORTUNITY" — el dolor con mayor frecuencia × gravedad y color verde
4. Slider de segmento (urbano/rural, edad, raza, etc. según el research) — los puntos se reordenan
5. Click en cualquier punto → tarjeta lateral con quote literal y URL de fuente

[CHECK]
- Todos los datos deben venir del adjunto. NO inventes dolores.
- Si una dimensión (ej: segmento) no está en el research, márcala "no diferenciado por segmento" en lugar de inventarla.
- El Artifact debe funcionar standalone — abrible sin internet en cualquier navegador.
```

**Follow-ups típicos:**
- "Añade un export a PNG del cuadrante para meter en el siguiente sprint planning."
- "Cambia el cuadrante por una matriz 2x2 — fácil/difícil de resolver vs. alta/baja frecuencia."
- "Genera la versión móvil del Artifact — para enseñárselo al cofounder en el AVE."

---

## Demo 2ter — Del Pain Map a las features priorizadas (puente Día a día → Producto)

**Tool:** Claude Chat / Cowork (no técnico) o Claude Code (control total). `[CAJA]` — Chat/Cowork para sacar el brief en 5 minutos; Code para versionarlo como PRD en repo.

### Prompt — ruta no técnica

```
[CONTEXTO]
Adjunto voice-of-customer.md (el research) y pawly-pain-map (el Artifact que construyó Cowork).

Soy founder de {{startup}}. Versión {{X.0}} a {{N}} semanas vista, equipo de {{tamaño}}.

[CABEZA + CORTAR]
Quiero 5 ideas de feature priorizadas. Para cada una:
1. El dolor que resuelve — cita literal del research
2. Por qué {{startup}} puede ganarlo (vs. competidores)
3. Esfuerzo estimado: S (días), M (semanas), L (meses)
4. Gap competitivo que abre

[CHECK]
- Toda cita literal debe existir en el research adjunto.
- Si una feature requiere validación adicional con clientes, márcala "validar antes de construir".
- Antes de ejecutar, hazme las preguntas que necesites: segmento prioritario, restricciones técnicas, ventana de timing.
```

---

## Demo 3 — Marca: imagen + vídeo + variantes (bloque Marca)

**Caso fijo:** Pawly anuncia su novedad "vet disponible los domingos" en redes.
**Herramientas:** Nano Banana Pro (imagen) + Veo 3.1 (vídeo) + Claude Design (variantes).

### El truco principal · te ahorra ser experto en composición

Para imagen y vídeo el prompt técnico es muy específico — composición, encuadre, lentes, iluminación, paleta, formato. **No hace falta que sepáis esto**. Le pedís a Claude que os escriba el prompt experto. Vosotros declaráis la escena en castellano normal, Claude os devuelve el brief técnico, lo copiáis y lo pegáis en la herramienta correspondiente.

A esto se le llama **meta-prompting**: un prompt para que la IA escriba el prompt.

---

### Meta-prompt 1 · para Nano Banana (imagen)

Pega esto en Claude (chat normal). Recibirás un prompt con los 7 campos estructurados, listo para Nano Banana.

```
Quiero un anuncio en imagen para Instagram.

Caso: Pawly (marketplace para dueños de perros) anuncia una novedad — un servicio de veterinario disponible los domingos. El claim de la campaña es: "Tu perro no entiende de domingos. Nosotros sí."

Escena que tengo en la cabeza: un domingo por la tarde en el salón de casa. Una mujer joven en el sofá con su perro decaído al lado. Mira el móvil con cara de alivio — en la pantalla del móvil aparece un veterinario en videollamada. Luz cálida, tranquila, ambiente de hogar.

Hazme tú el prompt técnico para Nano Banana Pro con los 7 campos clásicos:
1. Sujeto (qué aparece, en detalle)
2. Composición (encuadre, regla, ángulo)
3. Iluminación (tipo de luz, hora, sombras)
4. Fondo (qué hay detrás, nivel de detalle)
5. Espacio para titular (dónde dejar el frame limpio)
6. Estilo (referencia visual, paleta, grano)
7. Restricciones técnicas (formato, manos naturales, sin texto generado, sin logos)

Antes de redactar, hazme las preguntas que necesites para clavarlo: paleta exacta, raza concreta del perro, edad y look de la mujer, tono más alegre o más íntimo, formato cuadrado o vertical para Instagram.
```

### Meta-prompt 2 · para Veo 3.1 (vídeo)

Pega esto en Claude. Recibirás un guion de 8 segundos con planos detallados, listo para Veo.

```
Mismo caso anterior — Pawly anuncia "vet los domingos", claim "Tu perro no entiende de domingos. Nosotros sí."

Ahora quiero un vídeo de 8 segundos para Reel y Story de Instagram (formato vertical 9:16).

La escena emocional: el dueño nota que su perro está decaído un domingo, coge el móvil, abre Pawly, contacta con un veterinario, alivio.

Hazme tú el prompt técnico para Veo 3.1 con:
- Guion plano por plano (4 planos en 8 segundos: 2s + 2s + 2s + 2s)
- Encuadre y movimiento de cámara para cada plano
- Iluminación y paleta consistentes en los 4
- Ritmo cinematográfico, sin diálogo
- Cierre con foco en el perro (no en el logo)

Antes de redactar, pregúntame lo que necesites: estilo más cinematográfico o más cotidiano de móvil, presencia o no de música implícita en la descripción, edad y look de los personajes, tono final más esperanzador o más sereno.
```

### Meta-prompt 3 · para Claude Design (variantes de anuncio)

Pega esto en Claude. Recibirás un prompt detallado para Claude Design que monte las 4 variantes.

```
Tengo la imagen del anuncio de Pawly (la generada con Nano Banana, la adjunto).

Quiero adaptarla a 4 formatos para redes:
1. Instagram cuadrado (1:1)
2. Story / Reel vertical (9:16)
3. Facebook horizontal (1.91:1)
4. Banner web horizontal (16:9)

Mismo titular en las 4: "Tu perro no entiende de domingos. Nosotros sí."
Subtítulo más pequeño: "Veterinario los 7 días, también domingos. Solo en Pawly."
Logo de Pawly visible en una esquina (placeholder cuadrado verde con la palabra Pawly en blanco, sans serif).

Hazme tú el prompt técnico para Claude Design con:
- Reglas de tipografía (qué fuente para titular, qué fuente para subtítulo, jerarquía clara)
- Posición exacta del titular en cada formato (no se debe cortar nunca, siempre legible)
- Posición del logo en cada formato
- Tratamiento de la imagen base (cómo recortar para que no se deforme en cada relación de aspecto)
- Paleta, contraste, espaciados

Antes de redactar, pregúntame lo que necesites: jerarquía visual (titular dominante o equilibrado con la imagen), si quiero un CTA visible o solo claim, paleta extra fuera del verde Pawly.
```

---

### Por qué el meta-prompting funciona aquí

Imagen y vídeo son los dos casos donde **el founder NO sabe especificar bien**. Composición fotográfica, encuadre cinematográfico, lentes, lighting setups — son disciplinas en sí mismas. Pero Claude sí lo sabe (ha leído manuales de fotografía, scripts de cine, briefs de campaña). Si tú le declaras la escena emocional y le dejas preguntar lo que necesite, te devuelve un brief que un director de arte humano cobraría.

El asset descargable contiene los 3 meta-prompts arriba + el ejemplo de output esperado debajo (los 7 campos rellenados) por si quieres ir directo sin pasar por Claude.

---

### Template estructurado (los 7 campos · output esperado del meta-prompt 1)

```
[CONTEXTO + CORTAR — estructura de 7 campos, en este orden]

SUJETO: {{qué aparece. Ej: "Una founder de unos 35 años, camiseta blanca oversize, mirando una pantalla con gráficos"}}

COMPOSICIÓN: {{encuadre y regla. Ej: "Plano americano desde ligeramente abajo, regla de tercios, sujeto a la izquierda del frame"}}

ILUMINACIÓN: {{tipo de luz. Ej: "Luz natural de ventana lateral izquierda, soft shadows, hora dorada tardía"}}

FONDO: {{qué hay detrás. Ej: "Oficina minimalista desenfocada, tonos crema y madera clara, bokeh suave"}}

ESPACIO PARA COPY: {{dónde y cuánto espacio libre. Ej: "Dejar tercio derecho del frame limpio y con poca textura para colocar headline en post-producción"}}

ESTILO: {{referencia visual. Ej: "Fotografía editorial tipo Monocle, paleta cálida, grano sutil de película 35mm"}}

CONSTRAINT TÉCNICO: {{formato y restricciones. Ej: "Aspect ratio 16:9 para hero de landing. Sin texto superpuesto generado. Sin watermarks ni logos visibles. Realismo fotográfico, no ilustración"}}
```

### Ejemplo completo rellenado · imagen de anuncio para Pawly (caso de la charla)

```
SUJETO: Mujer joven, unos 30 años, sentada en el sofá del salón un domingo por la tarde. A su lado, su golden retriever decaído tumbado. Ella sostiene el móvil con la otra mano y mira la pantalla con una expresión clara de alivio. En la pantalla del móvil se ve una videollamada con un veterinario sonriendo (ligeramente desenfocado, sugerido).

COMPOSICIÓN: Plano medio desde un ángulo ligeramente bajo. Regla de tercios. La mujer y el perro alineados a la izquierda del frame. La mirada de ella dirigida al móvil. Espacio claro y limpio en la mitad derecha para colocar después el titular del anuncio.

ILUMINACIÓN: Luz natural cálida de ventana grande a la izquierda. Hora dorada de domingo de tarde. Sombras suaves, ambiente de calma doméstica. Sin luces artificiales.

FONDO: Salón con paleta crema y madera clara, plantas, cojines. Desenfocado en bokeh suave. Sensación de hogar tranquilo, no estudio.

ESPACIO PARA COPY: Mitad derecha del frame con muy poco contraste, casi vacía visualmente, para poder colocar el titular del anuncio en blanco o crema oscuro sin retoque adicional.

ESTILO: Fotografía editorial cinematográfica tipo campaña de Apple o de Airbnb. Paleta cálida (crema, tostado, marrón claro). Grano muy sutil de película 35mm. Realismo fotográfico, no ilustración.

RESTRICCIONES TÉCNICAS: Formato 4:5 (vertical Instagram). Sin texto generado dentro de la imagen. Sin logos ni marcas de agua. Las manos de la mujer naturales, no deformadas. La cara del perro debe transmitir decaimiento sin ser dramática. La cara de la mujer debe transmitir alivio sin ser teatral.
```

> **Por qué este ejemplo funciona como brief de campaña.** El research de Pawly (palanca 1 de la charla) identificó "vet disponible los domingos" como el dolor número uno del sector pet (847 menciones, gravedad 4.6/5, sin solución actual). El anuncio cuenta exactamente ese momento: el dolor (perro decaído un domingo) y la solución (vet en pantalla, madre aliviada). La emoción reconocible mueve más clics que un plano de producto.

### `[CHECK]` — qué mirar antes de usar la imagen

- ¿Las manos están bien? (punto débil clásico de los modelos)
- ¿Hay texto alucinado dentro de la imagen que no pediste?
- ¿La luz del sujeto concuerda con la dirección del fondo?
- ¿Hay espacio real libre donde pensabas poner el copy?

Si falla algún check → ajustar solo el campo relevante (no reescribir todo el prompt) y regenerar.

---

## Demo 4 — Claude/Gemini: análisis de PDF financiero (bloque Datos)

**Tool:** Claude Opus 4.7 (Claude Pro) o Gemini 2.5 Pro (AI Studio free, 1M contexto). `[CAJA]` — Claude Opus para análisis profundo y razonamiento financiero; Gemini 2.5 Pro si el PDF es muy largo (>500 páginas) y necesitas el 1M de contexto.

**Por qué funciona:** el LLM no va a sustituir a tu CFO, pero sí puede hacer un pase inicial en 3 minutos que te ahorra 2 horas de Excel.

### Prompt

```
[CONTEXTO]
Soy founder-CEO de una startup {{B2B/B2C}} en {{sector, ej: "fintech de pagos para PYMES"}}, fase {{fase, ej: "Seed, post-MVP, €40k MRR, equipo de 6"}}.

Te adjunto {{tipo_documento, ej: "la memoria anual 2025 de {{nombre_competidor}}" / "el P&L de los últimos 24 meses de mi empresa" / "el deck de inversión que me envió un competidor que compite por la misma ronda"}}.

Mi objetivo concreto: {{objetivo_concreto, ej: 
  - "preparar mi pitch de Series A y necesito saber si mis métricas están en rango de mercado"
  - "defender mi valoración en una negociación con un VC la semana que viene"
  - "hacer benchmark honesto: ¿soy mejor, peor, o parecido a este competidor?"
}}.

[CABEZA + CORTAR] Estructura el análisis en ESTAS 4 partes, en este orden:

1. **Extracción numérica limpia** (tabla): 
   Métricas clave del documento: ARR, MRR, crecimiento MoM/YoY, CAC, LTV, payback, burn, runway, gross margin, net revenue retention, headcount. 
   Si una métrica NO aparece explícita en el documento, márcala "[no reportada]" — no la infieras.

2. **Red flags y señales positivas**:
   - 3 cosas que me preocuparían si fuera inversor.
   - 3 cosas que son genuinamente buenas.
   Para cada una, cita la página/sección del documento.

3. **Benchmark vs mercado** (rango típico para mi fase/sector):
   Para cada métrica del punto 1, dame el rango típico de mercado en {{fase + sector}} y dónde cae este documento (top quartile / median / bottom quartile / [no benchmark disponible]).

4. **Qué hacer con esto** (accionable, para mí, founder):
   Dada mi situación ({{objetivo_concreto}}), 3 movimientos concretos que debería hacer en las próximas 2 semanas.

[CHECK]
- Cita página o sección para cada dato factual del punto 1 y 2.
- Si un cálculo requiere asunciones (ej: estimar CAC cuando no viene explícito), muestra la asunción: "Asumo X porque Y. Si la asunción es falsa, el resultado cambia a Z."
- Al final: lista de 3-5 preguntas que deberíamos hacerle al CFO del documento en una conversación real (lo que el documento NO responde).
```

**Follow-ups útiles:**
- "Recalcula el punto 3 asumiendo que estamos en fase {{fase_X}} en vez de {{fase_Y}}."
- "Del punto 4, desarrolla solo el movimiento #2 como plan de 2 semanas con hitos semanales."

---

## Meta: cómo pedirle a Claude Code que te genere tus propios prompts siguiendo las 5 C's

Este es el prompt que usas cuando tienes un caso nuevo y no quieres partir de cero.

```
Actúa como un senior prompt engineer con foco en founders no técnicos.

[CONTEXTO]
Voy a darte un caso de uso concreto de mi día a día. 
Tu tarea es generarme un prompt optimizado siguiendo las 5 C's del prompting:
- Cabeza: el prompt debe reflejar un objetivo concreto y medible
- Caja: el prompt debe declarar qué tool/modelo conviene (y por qué)
- Contexto: debe incluir rol, audiencia, empresa, restricciones, formato esperado
- Cortar: si el caso es complejo, descomponlo en 2-4 pasos encadenables
- Check: debe terminar con instrucciones explícitas de verificación y citación

[CORTAR]
Pregúntame ANTES de generar nada:
1. ¿Cuál es el caso de uso en 1 frase?
2. ¿Qué tool voy a usar (o cuál recomiendas)?
3. ¿Qué output tangible necesito al final?
4. ¿Qué contexto de mi empresa/situación es relevante?
5. ¿Cuánto margen de error puedo permitirme? (alto stakes / bajo stakes)

Con esas respuestas, genera:
- El prompt copy-paste-able
- Placeholders entre {{}} donde aplique
- Marcado explícito de qué parte del prompt corresponde a cada C
- 2-3 prompts de follow-up probables
- 1 checklist de verificación post-output

[CHECK]
Si alguna de mis respuestas es ambigua, pregunta de nuevo antes de generar. No generes un prompt mediocre con contexto incompleto.
```

