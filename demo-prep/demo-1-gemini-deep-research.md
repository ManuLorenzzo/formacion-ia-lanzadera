# Demo 01 · Voice of Customer con Deep Research (caso Pawly)

**Bloque:** Día a día · investigar · minuto ~12 a ~17 de la charla
**Duración objetivo:** 5 min (incluyendo verificación)
**Tool:** Gemini Deep Research (Google AI Pro) — alternativa: Claude Research (Claude Pro), ChatGPT Deep Research, Perplexity Pro
**Fall-back tool:** AI Studio con Gemini 3.1 Pro (gratis, sin Deep Research estricto pero hace research profundo)

---

## Objetivo del momento

Mostrar que en 5–10 minutos de ejecución autónoma, la IA entrega lo que un junior haría en media jornada: un informe de Voice of Customer con los 10 dolores top del sector pet (España + Portugal), con quotes literales y URLs verificables. Y que ese informe es el INPUT de las dos demos siguientes (Cowork Pain Map + NotebookLM podcast).

## Setup pre-demo (hacer 24h antes)

### 1. El caso es fijo: Pawly

No se elige otro caso. Pawly es el hilo conductor de toda la charla — la landing existe en demo-prep/, y el research alimenta las dos demos siguientes.

**Pawly resumido:**
- Marketplace para dueños de perros en España
- 8 meses funcionando, va a sacar versión 2.0
- Founder Carlos, vendió un veterinario hace 4 años
- Decisión que necesita: qué feature priorizar en V2

### 2. Preparar el prompt

Está en `../asset-pack/prompts-plantilla.md` (Demo 1 · Voice of Customer). Personalizado para Pawly:

```
[CONTEXTO]
Soy founder de Pawly, marketplace para dueños de perros en España.
Llevamos 8 meses funcionando, vamos a sacar la versión 2.0 a 8 semanas vista.

[CABEZA]
Mi nivel: vendí un veterinario hace 4 años — conozco el sector. Pero nunca he hecho discovery sistemático de clientes a escala.

Quiero VOICE OF CUSTOMER del sector — no de Pawly, de TODA la categoría.

[CORTAR]
Necesito los 10 dolores más mencionados en reseñas de 1–2 estrellas de los principales marketplaces y apps pet en España y Portugal en los últimos 6 meses.

Para cada dolor, dame:
1. Frecuencia aproximada (cuántas menciones encontraste)
2. Gravedad reportada (1–5)
3. Qué competidor lo resuelve (o nadie)
4. 2 quotes literales con URL clicable

Fuentes a cubrir: App Store, Google Play, Trustpilot, foros (Reddit r/dogs, foros pet ES/PT), redes si aplica.

Competidores a priorizar (orientativo): Tiendanimal, Kiwoko, BarkBox, Wamiz, Petlovers, Maskokotas.

[CHECK]
- No inventes citas.
- Toda quote debe tener URL clicable.
- Antes de ejecutar, hazme las preguntas que necesites: qué segmentos priorizo, qué idioma, qué ventana temporal exacta.
```

Guarda el prompt en un `.txt` en el desktop para copy-paste rápido.

### 3. Ejecutar la noche antes

- Lanza el prompt 24h antes (Deep Research tarda 5–30 min)
- Cuando termine, **GUARDA EL OUTPUT como `voice-of-customer-pet.md` en `~/pawly-investigacion/`** — este archivo lo va a leer Cowork y NotebookLM en las dos demos siguientes
- Revisa 2–3 citas — identifica una que cargue bien en navegador, para abrirla en vivo
- Verifica que hay 5+ dolores listados con frecuencia, gravedad y al menos 1 quote por cada uno

## Script en directo (~5 min total)

**Minuto 0 — Apertura del momento demo**
> *"Demo uno. Investigar. Voy a abrir Deep Research de Gemini, mi prompt, fijaos en la estructura — esto NO es un googleo."*

**Minuto 0–1.5 — El prompt visible (slide previa)**
- Subraya verbalmente las 4 partes: contexto, cabeza/nivel, qué necesito, check
- > *"Esto es Declarar y Dejar Preguntar. Yo declaro mi nivel — soy founder, conozco el sector pero no he hecho discovery formal. Y le dejo preguntarme el cómo."*

**Minuto 1.5 — ALT-TAB a Deep Research**
- App ya abierta con el informe pregenerado
- > *"Esto lo lancé anoche. Tarda 10 minutos. Ya está aquí."*

**Minuto 1.5–3 — Recorrido del informe**
- Scroll arriba — enseña volumen (fuentes leídas, dolores listados)
- Lee EN ALTO 1 dolor con su quote, frecuencia, gap competitivo
- Apunta a otro dolor sin solución actual — *"oportunidad clara"*

**Minuto 3–4 — La verificación · C de Check**
- > *"Ahora la C de Check. Voy a pinchar una cita al azar."*
- CLICK en una URL → abre el origen (App Store, Reddit, foro)
- > *"Real. La quote dice exactamente lo que el informe resumió. Si hubiese mentido, descarto todo."*

**Minuto 4–5 — Cierre y transición · UNA ENTRADA, TRES SALIDAS**
- > *"Y guardo este archivo, fijaos en el nombre — voice-of-customer-pet.md. Lo dejo en mi carpeta. Y aquí viene la magia: lo váis a ver DOS VECES MÁS antes del final de esta palanca."*
- > *"Una entrada — este research. Tres salidas — informe verificable, mapa de dolores interactivo, podcast para conducir. Vamos a la primera salida — Cowork."*

## Backup plans

### Si Deep Research no abre / la sesión expiró
- Tener el informe `voice-of-customer-pet.md` abierto en VS Code o un visor markdown
- Mismo recorrido, sin la app

### Si la URL de una cita no carga
- Tener 2–3 URLs probadas la noche antes — usar la siguiente
- Si ninguna carga: convertir el fallo en lección — *"esto pasa, por eso C de Check antes de usar el dato en una decisión"*

### Si falla la conexión completa
- Screenshot completo del informe en una slide guardada
- Recorre el output como si hubiese pasado en vivo

## Métricas de éxito

- [ ] Output abierto en <2 min desde inicio del momento demo
- [ ] Audiencia ve AL MENOS una cita clicada y verificada en navegador
- [ ] Se enuncia explícitamente "una entrada, tres salidas"
- [ ] El archivo `voice-of-customer-pet.md` queda visible en pantalla (nombre del archivo)
- [ ] Total <5 min — si te pasas de 6 min, recorta el recorrido del informe

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Cuenta Google AI Pro sin sesión activa | Logear 1h antes; tener Claude Research como fallback |
| El sector pet en EU/PT no tiene reseñas suficientes en los marketplaces elegidos | Ampliar a Reddit r/dogs internacional + foros US grandes — válido para discovery aunque no sea solo ES |
| Audiencia pregunta cuánto cuesta Gemini AI Pro | Respuesta canteada: "20 €/mes; el Deep Research existe también en versión limitada en plan free, y Gemini 3.1 Pro en AI Studio gratis hace research profundo (no Deep Research estricto pero el 80% de los casos)" |
| Audiencia pregunta por qué Pawly y no otro caso | "Es el caso fijo de toda la charla — vais a verlo también en Producto, donde construimos la landing" |
