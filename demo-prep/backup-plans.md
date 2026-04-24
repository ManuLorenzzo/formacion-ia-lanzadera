# Backup Plans — Qué hacer cuando algo falla en vivo

> Regla de oro: **toda demo en vivo debe tener un vídeo backup de 3-5 min grabado**.
> Si algo se cae, la narrativa sobrevive.

---

## Failure modes críticos (probabilidad × impacto alto)

### 1. Wifi de sala cae o va lento
**Mitigación:**
- Hotspot móvil testeado 1h antes en la sala real con tu operador habitual
- 5G si es posible, Wifi del móvil si no
- **NO confiar en el wifi de invitados de Lanzadera en un día con evento**

**Durante demo:** si wifi cae:
- Inmediatamente switch a hotspot (tenerlo ya conectado como red secundaria)
- Continuar sin mencionarlo si la transición es limpia
- Mencionar solo si la audiencia lo nota

### 2. Rate limit de Anthropic / Google en vivo
**Mitigación:**
- Tener **2 cuentas activas** de cada proveedor (personal + empresa) logeadas en browsers separados
- Probar ambas 1h antes

**Durante demo:** si aparece "rate limit" o "high demand":
- Switch al otro navegador/cuenta sin romper narrativa
- Si ambas fallan: output pre-capturado

### 3. Proyector baja resolución / ilegible
**Mitigación:**
- Probar proyector **real** al menos 1h antes del evento
- Terminal a 18-20pt, tema alto contraste
- Zoom navegador a 125% mínimo

**Durante demo:** si alguien del fondo dice "no se ve":
- Pausa, zoom navegador/terminal a 150%
- Agradece el comentario ("gracias, mejor así")

### 4. Demo en vivo falla críticamente
**Mitigación:**
- Cada demo tiene su pre-capturado (ver files por demo)
- Tenerlos abiertos en pestañas numeradas 1-4

**Durante demo:** si algo no funciona y llevas 30s:
- > *"Esto, en directo. Mientras se recupera, os enseño el que dejé listo esta mañana."*
- Reproduce el pre-grabado
- Opcional: convierte el fallo en lección ("esto es por qué C5 = Check es tan crítica")

---

## Failure modes medios

### 5. MCP server / integraciones con herramientas externas
**NO uses MCPs en vivo** en esta charla. Añaden fragilidad sin beneficio para esta audiencia (no-devs mayormente).

### 6. Modelo alucina en medio de la demo
**CONVERTIR EN LECCIÓN**. Es el mejor momento pedagógico de la charla:
> *"Mirad, acaba de mentir. Esto pasa. Y C5 = Check es EXACTAMENTE para detectar esto. En producción nunca aceptamos output sin verificar al menos una cita."*

### 7. Token / context overflow
**Mitigación:**
- Sesiones frescas antes de cada demo (no reutilizar contextos)
- Si hay overflow: abrir nueva conversación con el mismo prompt

### 8. Audiencia pregunta "¿cuánto cuesta esto?"
**Respuesta canteada (<20s):**
> *"Depende. El stack que os enseño hoy funciona en free tier para uso personal. Para producción profesional, Claude Pro a 20 € + una cuenta Google cubre el 80% de casos. Lo desglosamos al final en el bloque de truquitos."*

### 9. Audiencia pregunta "¿y con datos privados?"
**Respuesta canteada:**
> *"Claude Pro no entrena con tus conversaciones (opt-out por default). NotebookLM free sí se usa para training de Google. Para datos sensibles → Claude Projects (Pro) o Claude Team con opt-out comercial + Bedrock enterprise. Si es ultra-sensible → modelo local con Ollama + Llama 3.1."*

### 10. Pregunta fuera de guion en medio de demo
**Técnica del bookmark:**
> *"Gran pregunta. La guardo para el Q&A — te doy respuesta completa ahí. Si se me olvida, levanta la mano al final."*

---

## Failure modes técnicos sutiles

### 11. Notificaciones privadas aparecen en pantalla
**Mitigación:**
- Do Not Disturb activo **desde 1h antes**
- Slack cerrado completamente (no "silenciado")
- Mail cerrado
- Mensajes de Messages/WhatsApp desktop cerrados

### 12. Display mirror vs extended — desktop privado visible 10s
**Mitigación:**
- Probar **antes** cómo se ve el screen sharing
- Si extended: el desktop nunca se ve. Si mirror: cualquier cosa en pantalla se ve.
- Tener **solo lo necesario** en el desktop visible

### 13. Ventana tapada por Menu bar / Dock / Slack icon
**Mitigación:**
- Terminal maximizado (no fullscreen — fullscreen oculta el dock pero puede estar buggy)
- Dock en auto-hide
- Menu bar: nada relevante

### 14. Batería se agota en mal momento
**Mitigación:**
- Cable + cargador + adaptador **checklist antes de salir de casa**
- Batería al 100% cuando empiezas

---

## Checklist de backups a traer el día del evento

- [ ] Portátil principal con todo el setup
- [ ] **Móvil con hotspot configurado** + cable USB
- [ ] Cargador + cable + adaptador HDMI/USB-C
- [ ] Adaptador USB-A (por si el proyector no tiene USB-C)
- [ ] Pincho USB con:
  - PDF de la presentación
  - Pre-grabados de las 4 demos (MP4)
  - Pre-generados (imágenes, vídeo, output de DR)
- [ ] Bluetooth speaker portátil (para demo de NotebookLM si los altavoces de sala fallan)
- [ ] Segunda cuenta de Claude / Google logeada en browser separado
- [ ] Móvil con clicker / app para avance de slides

---

## Respuestas canteadas para preguntas típicas

| Pregunta | Respuesta corta (<20s) |
|----------|------------------------|
| ¿Cuánto cuesta al mes todo esto? | 0 € si usas free tier (AI Studio + Antigravity + NotebookLM). 20 € si quieres Claude Pro. Hasta 300 € si eres heavy user con todo Pro. |
| ¿Y mis datos? ¿Privacidad? | Depende de tier. Claude Pro no entrena. NotebookLM free sí. Datos ultra-sensibles → Bedrock enterprise o local con Ollama. |
| ¿Esto reemplaza a mi equipo? | No. Multiplica al equipo que ya tienes. El que lo use bien rinde por varios. El que no lo use se queda atrás. |
| ¿Cuál es MI primera tarea? | La tarea semanal que más odias y crees que solo tú puedes hacer. Esa. Siete días, una tarea. |
| ¿Merece la pena Claude Pro vs ChatGPT Plus? | Para código y rigor — Claude. Para ecosistema amplio (voz, imágenes, plugins) — ChatGPT. Para chat puro — cualquiera. |
| ¿Qué pasa si la IA evoluciona y todo esto cambia? | El método (especifica + verifica) no cambia. Las tools sí. Por eso os doy el método, no un tutorial de herramienta. |
| ¿Gemini no es mejor por el contexto gigante? | Para documentos > 500 páginas, sí. Para razonamiento riguroso en código o decisiones, Claude tiene menor alucinación. |
| ¿Vale la pena migrar de Bubble a Claude Code ahora? | Si lo que tienes funciona y hay tracción — no. Si estás empezando algo hoy — sí, el cálculo cambió. |

---

## Qué decir si TODO se cae simultáneamente (escenario catastrófico)

Es muy improbable, pero si pasa:

> *"Os voy a hacer un regalo — la charla sin demos. La tesis sigue: especifica como arquitecto, verifica como QA. Os enseño el método y os dejo las demos en vídeo al final vía el QR."*

Continúa solo con slides. El contenido soporta la charla sin demos. Y mostraste resiliencia — memorable.
