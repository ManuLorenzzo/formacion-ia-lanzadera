# Demo 02 · Construir MVP para [founder_B] en vivo (Lovable)

**Bloque:** Producto (sub-bloque 02b SaaS) · minuto ~35 a ~43 de la charla
**Duración objetivo:** 7-8 min
**Tool:** Lovable Pro (cuenta pagada de Manu)
**Criticidad:** ⭐⭐⭐ este es EL momento wow principal de la sesión — sustituye al anterior NotebookLM

---

## Objetivo del momento

Que [founder_B] — y toda la sala — vea cómo se construye un **MVP real con captura de leads y backend funcional** en menos de 8 minutos, en vivo, para una startup REAL de la cohorte. No un prototipo. Una URL que funciona, captura datos, y [founder_B] se la lleva al salir.

## Setup pre-demo (hacer 24-48h antes)

### 1. Tener elegido a [founder_B]
Ver `pre-work-survey.md` sección 3 · criterios:
- Opt-in marcado
- Sector entre los top 3 de la cohorte
- Concepto de producto **visualizable** (no ultra-nicho técnico)
- Distinto del sector de [founder_A]

### 2. Extraer del pre-work
De la respuesta de [founder_B] a la Pregunta 5:
- Nombre real de la startup
- Descripción de 1-2 líneas del concepto
- Email de contacto (para enviar la URL después)

### 3. Preparar el prompt maestro
Guárdalo en un `.txt` en el escritorio para copy-paste rápido:

```
Crea una landing page mobile-first + captura de leads para [STARTUP_B],
una startup de [SECTOR] cuya propuesta es: [PROPUESTA EN UNA LÍNEA].

Estructura:
- Hero con titular potente + subtitular + CTA primario "Solicita acceso"
- Sección "Por qué [STARTUP_B]" con 3 features en cards
- Sección de testimonios (3 placeholders)
- Formulario de captura con campos: nombre, email, empresa, mensaje
  breve opcional. Validación básica. Botón de submit.
- Footer con enlace a WhatsApp contact

Backend:
- Conectar a Supabase
- Tabla "leads" con los campos anteriores
- Confirmación al usuario al enviar

Estilo:
- Paleta sobria profesional apropiada para sector [SECTOR]
- Tipografía moderna, legible
- Sin stock photos genéricas (usar iconos o ilustraciones abstractas)
- Mobile-first responsive
```

### 4. Pre-construir el "resultado final" (CRÍTICO)
**Ejecuta la demo completa 24h antes**. Guarda la URL funcionando como backup. Si en vivo falla algo, saltas al pre-generado.

Eso te garantiza que:
- Sabes cuánto tarda realmente (benchmark real ~5-7 min)
- Ya tienes la URL funcionando — si la demo fracasa, muestras el pre-generado
- [founder_B] recibe ALGO sí o sí

### 5. Verificar Supabase
- Cuenta activa y proyecto creado
- Tabla `leads` lista para recibir
- Lovable integrado con las credentials

## Script minuto a minuto (~7-8 min)

### Minuto 0 — Arranque ("Cambio de ventana")
- Alt-tab a Lovable Pro logeado
- New Project
- Di en alto: *"[Founder_B] — tu turno. Siete minutos. Al final tenéis una URL que captura leads real. Es vuestra."*

### Minuto 0-1 — Prompt inicial (C1 · Especificar)
- Pega el prompt maestro preparado
- **Lee en voz alta las 4 secciones**: estructura, backend, estilo, cualquier constraint
- > *"Fijaos — esto es C1, especificar. Si le dijera 'hazme una landing', me saca algo genérico."*
- Envía

### Minuto 1-4 — Primera generación
- Lovable genera estructura inicial (~90-180 seg)
- Mientras sale, **narra**:
  - *"Está montando el hero ahora"*
  - *"Aquí añade las features"*
  - *"El formulario con validación"*
  - *"Conexión a Supabase"*
- Cuando termine, echa un vistazo al resultado. Identifica 1-2 cosas a pulir.

### Minuto 4-5 — Iteración (C5 · Check + refinamiento)
- Pide una mejora concreta. Ejemplo:
  > *"Cambia el tono del hero — más directo al dolor. Y el CTA en lugar de 'Solicita acceso' que sea '[algo más específico del sector]'."*
- Lovable itera.

### Minuto 5-6 — Deploy
- Click en "Deploy" / "Publish"
- Lovable genera URL pública
- **URL EN PANTALLA GRANDE**. Léela en alto.
- Captura el momento de silencio cuando aparece — es el "wow".

### Minuto 6-7 — Test real en vivo (C5 · Check real)
- Abre la URL en una pestaña nueva del navegador
- **Rellena el formulario en vivo**:
  - Nombre: "Manu Lorenzo"
  - Email: tu email real
  - Empresa: "Asistente de [startup_B]"
  - Mensaje: "Probando el formulario en directo, gracias [founder_B]"
- Click submit. Espera confirmación.
- **Alt-tab a Supabase** en otra pestaña.
- Refresca la tabla `leads`. **Muestra la fila recién creada**.
- > *"El formulario guardó el lead en la base de datos. En directo. No es mock — es producto funcional."*

### Minuto 7-8 — Cierre personal a [founder_B]
> *"[Founder_B]. La URL es tuya. Te la mando al email esta noche. Si quieres, la publicas mañana. Si quieres iterarla más — lo haces tú desde tu cuenta de Lovable Pro en 20 minutos. Este es el camino 🟡 del quadrant. Replicable por cualquiera en esta sala."*

## Backup plans

### Si Lovable Pro va lento / no responde en los primeros 3 min
**Transición honesta**:
> *"Lovable está pensando. Os pongo el que construí esta mañana con el mismo prompt — misma startup, mismo resultado."*
Carga la URL pre-construida. Narra los mismos pasos.

### Si Lovable genera algo inapropiado (raro pero posible)
- No lo ocultes. Comenta: *"Fijaos, esto no ha quedado bien — c5 de check en acción. Vamos a corregirlo."*
- Pide un refinamiento concreto
- Convierte el fallo en lección (es el mejor momento pedagógico posible)

### Si el formulario no guarda en Supabase en vivo
- Muestra el pre-generado funcionando
- Explica: *"El ejemplo de hace dos horas sí grabó — en directo a veces Supabase tarda unos segundos en propagar. No cambia el mensaje."*

### Si [founder_B] no está presente o cancela
- Sustituir por startup ficticia del sector top de la cohorte
- Narración: *"No tenemos a [founder_B] hoy, pero uso el brief que nos mandó en el pre-work — así que sigue siendo un caso real."*

### Si falla internet por completo
- Tener la URL pre-construida abierta OFFLINE
- Screenshots del proceso Lovable
- Narración sin demo en vivo: *"Lo construí esta mañana — dejo la URL como QR para que la abráis vosotros desde el móvil ahora."*

## Momentos wow específicos

1. **Aparición de la URL** (min 5-6) → silencio de 2-3 seg, dejar que se asimile
2. **Formulario enviado → fila en Supabase** (min 7) → confirmación visual de que NO es mock, es producto real
3. **Cierre personal a [founder_B]** → "la URL es tuya" = momento emocional

## Métricas de éxito

- [ ] URL funcional visible en pantalla antes del minuto 6
- [ ] Formulario probado en vivo (al menos 1 submit)
- [ ] Fila en Supabase mostrada (confirma backend real)
- [ ] Cierre personal a [founder_B] + compromiso de enviar email

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Lovable tarda más de 8 min total | Pre-construido obligatorio como backup |
| Sector de [founder_B] muy nicho (el prompt no genera bien) | Pre-testar 24h antes. Si falla, cambiar a [founder_C] o ficticio |
| Audiencia pregunta "¿qué pasa si no soy técnico?" | Respuesta: "Acabas de ver que no lo soy YO durante la demo — no escribo ni una línea de código. Tú tampoco." |
| "¿Cuánto cuesta Lovable?" | 25€/mes Pro. Free tier 30 generaciones/mes |
| "¿Y si quiero hostear en mi propio servidor?" | Lovable exporta a GitHub. Desde ahí Vercel, Netlify, lo que prefieras |
| "¿Y la seguridad del formulario?" | Lovable + Supabase vienen con auth básica. Rate limiting y validación. Para algo sensible → auditar antes de ir a prod |

## Cumplimiento post-evento (T+24h)

**Enviar email a [founder_B]** con:
- URL del MVP funcionando
- Credenciales para acceder a su proyecto en Lovable (invitación)
- Credenciales para ver el Supabase (si aplica)
- Sin mención de Mint. Firma simple.

```
Asunto: La landing de [startup_B] que construimos en directo

Hola [founder_B],

Como prometí, aquí tienes:

- URL del MVP: [link]
- Acceso a Lovable para iterar: [invitación]
- Tabla Supabase: [link]

Si te sirve, síguelo desde ahí. Si no, nada.

Gracias por prestarnos el caso real — quedó mejor de lo que esperaba.

Manu
```
