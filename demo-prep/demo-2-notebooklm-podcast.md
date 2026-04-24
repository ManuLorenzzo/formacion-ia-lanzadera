# NotebookLM Podcast (AHORA es bonus track, no demo principal)

> ⚠️ **Cambio importante**: tras la reestructura a "Producto", el momento wow principal
> pasó a **construir un MVP con Lovable** (ver `demo-2-mvp-lovable.md`).
> NotebookLM queda como **mini-demo / mención** de 30-60 segundos dentro del sub-bloque
> 02c (Asistente / Agente). Este archivo se conserva porque parte del contenido sigue
> siendo útil (setup, cómo funciona, backup plans).

**Uso actualizado:** mini-demo breve en el sub-bloque Asistente/Agente interno · ~1-2 min
**Tool:** NotebookLM (100% free con cuenta Google)

---

## Objetivo del momento

Que la audiencia vea (y escuche) cómo un informe denso de 200+ páginas se convierte en un podcast de 2 voces IA conversando sobre el contenido. Para no-devs esto es casi mágico. Para devs es un ejemplo de orquestación agentic real.

## Setup pre-demo (hacer 24h antes)

### 1. Elegir el informe
**Criterios:**
- **Público y descargable** (PDF o URL)
- **Largo** (200+ páginas ideal — refuerza el punto de "no queríais leerlo")
- **Relevante para la audiencia** pero no del sector de Mint
- **En español** si es posible, o en inglés con contenido universal

**Opciones recomendadas:**
1. **AI Index Report 2026** de Stanford HAI — https://aiindex.stanford.edu/
   - Pros: súper relevante, respetado, reciente
   - Contras: inglés (pero NotebookLM puede hacer podcast en español)

2. **State of AI Report 2025** de Air Street Capital — https://www.stateof.ai/
   - Pros: cult classic en el mundo VC/tech
   - Contras: inglés, puede haberse actualizado

3. **Informe sectorial público** relevante para Lanzadera (Red.es, Secretaría de Estado de Digitalización, etc.)

**Mi apuesta:** AI Index Report 2026 — es meta ("charla sobre IA usando IA para digerir un informe sobre IA") y académicamente sólido.

### 2. Pre-cargar el notebook
- Crea un notebook en https://notebooklm.google.com
- Sube el PDF del informe
- **Pre-ejecuta el "Audio Overview"** para tener un podcast generado como backup
- Configura idioma de output: **castellano**
- Guarda la URL del notebook — la abres en directo

### 3. Probar una pregunta específica
Piensa una pregunta cuya respuesta conozcas (la leíste en el informe). Algo como:
> *"¿Qué porcentaje de empresas Fortune 500 ha adoptado al menos una plataforma de vibe coding según este informe?"*

O una más citable:
> *"Dame la cita exacta sobre cuánto % del código en empresas grandes es generado por IA."*

## Script en directo

**Minuto 0 — Setup del momento**
> *"Momento especial. Vamos a hacer algo que, hace 6 meses, era imposible."*

**Minuto 0-1 — El problema**
- Muestra el notebook con el PDF cargado
- Haz zoom para mostrar: "200+ páginas"
- > *"¿Alguien ha leído esto? [pausa] Yo tampoco. Pero debería. Observad."*

**Minuto 1 — Lanzar el podcast**
- Click "Generate Audio Overview" (o el botón equivalente)
- **IMPORTANTE:** no esperes — dile a la audiencia que tarda 3-5 min, y sigue con contenido del bloque Equipo mientras genera

**Minuto 1-5 — Mientras genera**
- Cubre los casos de uso del bloque Equipo (ya están en slides)
- **No menciones el podcast hasta que haya terminado** (suspense)
- Si generas con antelación, puedes saltar esta espera y reproducir directamente

**Minuto 5 — Reproducir el podcast**
- Vuelve al notebook
- Click en el podcast generado
- **Conéctalo a los altavoces de la sala** (crítico — probarlo antes!)
- Reproduce 45-60 segundos
- Observa caras de la audiencia (casi todos sonrien o se quedan callados)
- Pausa

**Minuto 5-6 — C de Check en vivo**
- > *"Ahora una pregunta específica para verificar que el notebook entiende lo que cargué — no solo repite."*
- Escribe la pregunta preparada
- Lee la respuesta
- Subraya que **el notebook da la cita exacta del PDF**
- > *"Si hubiese inventado, descartaba todo. Confirma cita → confío."*

**Minuto 6-7 — Cierre del momento wow**
> *"Tenéis docs internos que nadie lee — pitch decks, manuales de producto, regulación sectorial, políticas. Mañana por la mañana lo tenéis en formato podcast. Onboarding de vuestro próximo hire escuchando el manual en el coche. 5 minutos de setup. Gratis."*

## Backup plans

### Si el Audio Overview no genera (raro pero pasa)
Tener el podcast pre-generado, guardado como MP3 local. Play desde el reproductor del sistema.
> *"En directo tarda 4 min. Os pongo el que dejé listo esta mañana — misma cosa."*

### Si el audio no suena en la sala
- **Probar altavoces 1h antes del evento** (¡crítico!)
- Tener bluetooth speaker portátil de backup con el MP3 pre-generado
- Última opción: reproducir desde el móvil con el volumen al máximo pegado al micro

### Si NotebookLM responde mal a la pregunta de verificación
Confiesa: *"Mirad, se ha ido. Esto pasa. C de Check es exactamente para esto — detectar estos momentos. En producción no aceptas esta respuesta."* → **Convierte el fallo en lección**.

### Si el informe es demasiado largo y NotebookLM rechaza
- **Pre-validarlo 24h antes**: el free tier acepta hasta 500K palabras por source
- Si rechaza: partir el PDF en capítulos clave antes de subir

## Métricas de éxito de la demo

- [ ] Al menos 45s de podcast reproducido en sala con audio claro
- [ ] Una pregunta específica respondida con cita verificable
- [ ] Audiencia reacciona visualmente (sonrisas, comentarios)
- [ ] Cierre con caso de uso concreto aplicable (onboarding, manual, pitch)

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Audio no sale por los altavoces de la sala | **Probar 1h antes con el técnico de la sala** |
| NotebookLM está lento | Pre-generar el podcast y tenerlo listo como MP3 |
| Pregunta técnica difícil del público | Respuestas canteadas: NotebookLM limita 50 sources, 500K palabras free tier; para más → Claude Projects (Pro) o pro tier |
| Audiencia pregunta "¿sube mis docs a Google?" | Respuesta honesta: sí, NotebookLM usa Google Cloud. Para docs muy sensibles → Claude Projects (mismo caso de uso, sin entrenamiento con tus datos) o setup local con Whisper + LLM |
