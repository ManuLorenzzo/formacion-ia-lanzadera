# Prompts Plantilla — Las 4 demos de la charla

## Copy-paste, reemplaza `{{placeholders}}`, y a producir

> Cada prompt está anotado con qué C de las 5 aplica. Las etiquetas son: `[CABEZA]` `[CAJA]` `[CONTEXTO]` `[CORTAR]` `[CHECK]`. Todos los prompts están pensados para ser iterativos: el primer output se refina con prompts de follow-up, no de una sola tirada.

---

## Demo 1 — Gemini Deep Research: análisis de competidor (bloque Cliente)

**Tool:** Gemini (AI Pro) → Deep Research. `[CAJA]` — elegimos Deep Research porque genera un informe navegado con decenas de fuentes citadas, no un resumen rápido.

**Por qué funciona:** Deep Research hace búsqueda iterativa (~30-60 min), cita fuentes y produce un dossier tipo analyst. Para competitor research es superior a un chat normal porque explora múltiples ángulos sin que se lo tengas que pedir.

### Prompt

```
Actúa como un analista senior especializado en {{sector, ej: "SaaS B2B de retail operations"}}.

[CONTEXTO]
Soy founder de una startup que compite directamente con {{nombre_competidor}}. 
Mi producto se diferencia en {{diferenciador_principal, ej: "integración nativa con SAP y pricing por tienda, no por usuario"}}.
Mi mercado objetivo son {{ICP, ej: "cadenas de retail de 10-100 tiendas en España y Portugal"}}.

[CABEZA] 
Necesito tomar decisiones concretas en los próximos 30 días sobre posicionamiento y pricing.
NO busco un resumen de su web. Busco insights accionables.

[CORTAR] Estructura el informe en estas 5 secciones EXACTAS, cada una con evidencia citada:

1. **Traction y momentum (últimos 12 meses)**: funding, hires clave, lanzamientos de producto, menciones en prensa tier-1, cambios en el equipo ejecutivo.

2. **Pricing real**: qué cobran de verdad (no la web), por qué variables, descuentos observados en casos reportados, quién son sus 3 clientes más grandes públicamente.

3. **Posicionamiento y messaging**: cómo se venden ellos mismos, qué dolores atacan en su copy, qué NO mencionan (gaps).

4. **Debilidades reportadas**: reviews en G2/Capterra/Reddit, complaints recurrentes, churn signals públicos (perfiles de LinkedIn de ex-clientes que se fueron).

5. **3 ángulos concretos de ataque para mi startup**: basados en todo lo anterior, qué 3 movimientos específicos haría yo (posicionamiento, producto, pricing) para ganar cuentas ante ellos.

[CHECK]
Cita fuentes URL para cada afirmación factual. Si algo es opinión o inferencia, márcalo [inferencia]. Si un dato no lo encuentras, escribe [no encontrado] en vez de inventarlo.
```

**Follow-ups típicos:**
- "Profundiza solo en la sección 4. Dame 10 quotes literales de reviews negativas con fecha y fuente."
- "Del ángulo #2 del punto 5, redacta un pitch deck outline de 10 slides."

---

## Demo 2 — NotebookLM: asistente sobre docs internos (bloque Equipo)

**Tool:** NotebookLM (free). `[CAJA]` — elegimos NotebookLM porque es el mejor RAG gratuito, cita pasajes exactos y no alucina sobre fuentes que no le has dado.

**Por qué funciona:** NotebookLM solo responde con info de las fuentes que subes. Si no está, te dice "no está". Perfecto para onboarding, handbook interno, búsqueda en docs legales.

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

## Demo 3 — Nano Banana Pro: imagen marketing (bloque Marca)

**Tool:** Nano Banana Pro (dentro de Gemini). `[CAJA]` — buen equilibrio calidad/control de texto. Para dirección artística más artística, Midjourney; para iteración rápida e integrada en el flujo Google, Nano Banana.

**Por qué funciona:** los generadores de imagen son literales con la estructura del prompt. Un template con 7 campos fijos produce resultados 10x más consistentes que un párrafo suelto.

### Template estructurado (los 7 campos)

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

### Ejemplo completo rellenado

```
SUJETO: Una founder de unos 35 años, pelo castaño recogido, sudadera gris, sosteniendo un portátil abierto mientras señala algo en la pantalla con expresión concentrada pero relajada.

COMPOSICIÓN: Plano medio desde un ángulo ligeramente bajo, regla de tercios, sujeto alineado a la izquierda, mirada dirigida fuera del frame hacia la derecha.

ILUMINACIÓN: Luz natural de ventana grande a la izquierda del sujeto, contraluz suave, hora dorada de media tarde, sombras largas pero difusas.

FONDO: Coworking minimalista desenfocado, paredes de ladrillo visto desaturado, plantas verdes puntuales, bokeh fuerte en el fondo.

ESPACIO PARA COPY: Dejar mitad derecha del frame visualmente limpia y con bajo contraste para poder superponer headline en blanco sin post-producción compleja.

ESTILO: Fotografía editorial contemporánea tipo Kinfolk / Monocle, paleta cálida (crema, tostado, verde oliva), grano muy sutil de película 35mm, color grading cinemático.

CONSTRAINT TÉCNICO: Aspect ratio 16:9 para hero de landing. Realismo fotográfico puro, no ilustración. Sin texto generado dentro de la imagen. Sin logos ni watermarks. Sin manos deformadas (priorizar que las manos salgan naturalmente).
```

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

---

última actualización: 22 abril 2026
versión 1.0
