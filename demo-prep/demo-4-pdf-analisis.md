# Demo 04 · PDF → insights (análisis financiero)

**Bloque:** Datos · minuto ~65 a ~69 de la charla
**Duración objetivo:** 4 min
**Tool:** Claude Pro (Opus 4.7 con upload file)
**Fall-back:** Gemini 2.5 Pro (mejor para PDFs muy grandes >500 páginas)

---

## Objetivo del momento

Demostrar extracción precisa de métricas de un PDF denso + insight no obvio + verificación con cita. Directamente aplicable al próximo pitch deck que los founders tengan que preparar.

## Setup pre-demo (hacer 24h antes)

### 1. Elegir el PDF
**Criterios:**
- **Público y accesible** (sin NDA)
- **Denso y numérico** (no narrativo)
- **Relevante** para la audiencia de Lanzadera pero no de Mint
- **En inglés o español** (la IA maneja ambos)

**Opciones recomendadas:**
1. **Informe sectorial español** de KPMG / Deloitte / BCG sobre B2B SaaS, adopción IA en empresas, o benchmarks de VC (buscar "informe sector startups España 2025 pdf")
2. **Informe de la SEC** (10-K de una empresa SaaS comparable) — muy denso, muy verificable
3. **European Scale-up Report** (Atomico, Dealroom) — tiene datos de España
4. **Reporte anual de Lanzadera** (si es público) — meta-relevante

**Mi apuesta:** el último **Atomico State of European Tech** — es denso, tiene secciones sobre España, y los founders lo deberían conocer.

### 2. Preparar el prompt
Está en `../asset-pack/prompts-plantilla.md`. Ejemplo:

```
Rol: founder de una startup SaaS B2B preparando ronda Seed/Serie A en
sector [SECTOR]. Quiero usar este informe para fortalecer mi pitch deck.

Tarea: del PDF adjunto, extrae:
1. Las 3 métricas MÁS relevantes para mi pitch (unit economics, tamaño
   de mercado, ratio de adopción, growth benchmarks, o similar según
   el contenido del informe)
2. UN insight NO OBVIO que ningún founder probablemente cite en su deck

Formato:
- Cada métrica: valor + página exacta del PDF donde aparece + cita
  literal entre comillas
- El insight: 2-3 frases + cómo lo vincularía a mi pitch

Constraint: si no encuentras suficiente material, dilo explícitamente.
NO inventes números. NO aproximes sin decir "~".
```

### 3. Ejecutar una vez antes
- Corre el prompt 24h antes
- Verifica que las citas dadas existen en la página indicada
- Guarda el output como backup

## Script en directo

**Minuto 0 — Arranque**
> *"Un PDF. Dense. Nadie va a leerlo entero. Queremos 3 métricas y algo que nadie cite."*
- Muestra el PDF abierto, scroll rápido por algunas páginas (enseña la densidad)

**Minuto 0-1 — Cargar + especificar**
- Abre Claude Pro
- Adjunta el PDF (drag & drop)
- Pega el prompt
- Subraya verbalmente el "rol + objetivo + formato + constraint"
- > *"Otra vez C1 + C3. Si le pido 'analiza el informe', me da un resumen de Wikipedia. Le digo exactamente qué busco."*
- Lanza

**Minuto 1-3 — Mientras responde**
- Claude tarda 1-3 min con un PDF denso
- Narra:
  > *"Está leyendo el PDF completo, extrayendo números, buscando cosas que ESTÉN CITADAS, no inferidas. Si miente, nos vamos a dar cuenta en el siguiente paso."*

**Minuto 3-4 — Verificación en vivo (C de Check)**
- Llega el output
- Lee en voz alta las 3 métricas
- **Abre el PDF en la página que Claude cita** para UNA de las 3 métricas
- Busca visualmente la cita entre comillas en esa página
- > *"Está. Numero exacto. Si hubiese inventado la página o la cita, descarto el output entero y cambio de modelo."*
- Lee el "insight no obvio" en voz alta

**Cierre del momento**
> *"Vuestro próximo pitch deck tiene 2 métricas más fuertes que las que tenía antes de esta charla. Esto son 3 minutos. Y la métrica es VERIFICABLE — cualquier inversor puede abrir el PDF, ir a la página, y confirmar."*

## Backup plans

### Si Claude tarda mucho o da error
Fallback inmediato: **Gemini 2.5 Pro** (acepta PDFs de hasta 1M tokens sin problema).
> *"Claude está ocupado, paso a Gemini — mismo ejercicio, para PDFs muy grandes es de hecho mejor."*

### Si no se puede adjuntar PDF en vivo (subida lenta)
Tener output pre-capturado abierto en una pestaña. Narración sin interrupciones.

### Si la cita no existe donde Claude dice
**CONVERTIR EN LECCIÓN**:
> *"Mirad, miente. La página es otra. Y ESTE es exactamente el momento donde C5 (Check) os salva el culo. En producción, descarto todo y cambio de modelo o reformulo."*
- Esto SE CONVIERTE en uno de los momentos más memorables de la charla (vulnerabilidad + enseñanza)

### Si el PDF es de un sector que no resuena
Tener **2-3 PDFs alternativos** listos por si cambia la composición del aula en el último momento.

## Métricas de éxito

- [ ] 3 métricas extraídas y mostradas en pantalla en <3 min
- [ ] 1 cita verificada abriendo el PDF en vivo
- [ ] 1 insight "no obvio" leído en voz alta y conectado con pitch
- [ ] Mención explícita de C5 (Check) como movimiento de disciplina

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| PDF demasiado grande (>1M tokens) | Pre-testar con Claude; si excede, cambiar a Gemini 2.5 Pro o partir el PDF |
| Claude cita páginas inexistentes | Pre-verificar 24h antes. En vivo, convertir fallo en lección |
| Audiencia pregunta "¿y si el PDF es confidencial?" | Respuesta: Claude Pro no entrena con tus conversaciones (opt-out default). Para datos muy sensibles → deployment local con Ollama + Llama |
| Pregunta "¿cuántas páginas soporta Claude?" | Claude Opus 4.7 = 1M tokens ≈ ~2000-3000 páginas de texto denso. Gemini 2.5 Pro igual |
