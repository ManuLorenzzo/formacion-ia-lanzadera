# Demo · NotebookLM · El research convertido en podcast (caso Pawly)

**Bloque:** Día a día · digerir · cierre de la palanca, ~minuto 30 a 32 de la charla
**Duración objetivo:** ~90 segundos en sala
**Tool:** NotebookLM (100% free con cuenta Google)
**Backup:** archivo `.mp3` local del Audio Overview pregenerado

---

## Objetivo del momento

Cerrar la palanca Día a día con la **tercera salida** del mismo research. La sala oye, en vivo, dos voces conversacionales (en castellano) hablando de los dolores reales de los clientes pet — el mismo `voice-of-customer-pet.md` que Carlos generó hace 10 minutos.

Mensaje implícito: **"una entrada, tres salidas"**. El stack del founder no es UNA herramienta, es tres en cadena.

## Setup pre-demo (la noche antes, ~10 min)

### 1. Crear el notebook

- Ir a https://notebooklm.google.com con cuenta Google logeada
- "New notebook" → nombrarlo: `Pawly · Voice of Customer · Abril 2026`
- Configurar idioma de output: **castellano**

### 2. Cargar el source

- Subir `voice-of-customer-pet.md` (el output del Deep Research del demo anterior)
- Esperar indexado (~1–2 min)
- Verificar que aparece como source con el título correcto

### 3. Generar el Audio Overview

- Click en "Generate Audio Overview" (botón principal)
- Configurar idioma castellano si pregunta
- Esperar ~3–5 min (puede tardar más en hora pico)
- Reproducir 30s y verificar que:
  - El audio menciona Pawly como contexto
  - Cita 2–3 dolores específicos del research con detalle
  - Las dos voces suenan naturales y conversan, no recitan
  - Si suena muy genérico, regenerar pidiendo "más específico al contexto pet, mencionar competidores y quotes"

### 4. Backup local

- Descargar el `.mp3` (botón download del Audio Overview)
- Guardar en `~/pawly-investigacion/audio-overview-backup.mp3`
- Probar reproducción desde el reproductor del sistema (QuickTime / VLC)

### 5. Verificar audio en sala (1h antes del evento)

- Conectar portátil a altavoces de la sala
- Reproducir el `.mp3` de backup
- Ajustar volumen — apuntar el nivel correcto

## Script en directo (~90 segundos)

**Minuto 0 — Setup del momento (5s)**
> *"Demo tres. Y cierre de la palanca."*

**Minuto 0–0.5 — Enseñar el source es el MISMO archivo**
- ALT-TAB al notebook ya abierto
- Apuntar al panel de sources con el dedo (físico) o cursor
- > *"Mismo archivo de hace 10 minutos. voice-of-customer-pet.md. El que generó Deep Research. El que Cowork leyó para construir el Pain Map. Y ahora el source de NotebookLM."*

**Minuto 0.5–1 — Click en el Audio Overview**
- Botón Audio Overview pregenerado
- Click play

**Minuto 1–1.5 — Reproducir 30 segundos**
- Sube el volumen
- 30 segundos de las dos voces
- Pausa con espacio o click

**Minuto 1.5 — Frase de cierre · MORALEJA DE LA PALANCA**
> *"Una entrada — el research. Tres salidas — informe verificable, mapa de dolores interactivo, podcast para conducir. El stack del founder no es UNA herramienta. Es tres herramientas en cadena. Y el lunes, mañana, lo podéis tener funcionando vosotros."*

→ Transición al puente "del pain map a las features" (siguiente slide)

## Backup plans

### Si NotebookLM no carga / la sesión expiró
- Plan A: cerrar y reabrir en pestaña nueva, login rápido
- Plan B: reproducir el `.mp3` local desde reproductor del sistema. Mismo discurso. Pierdes el "veis el source en pantalla" pero el wow del audio se mantiene.

### Si el audio no sale por los altavoces de la sala
- Bluetooth speaker portátil con el `.mp3` ya cargado
- Última opción: reproducir desde el móvil con volumen al máximo pegado al micro

### Si el Audio Overview suena raro / genérico
- Tener una segunda versión generada (regenerada con prompt más específico)
- Si ambas fallan: leer en alto 2–3 dolores del research desde la app de NotebookLM en formato chat

## Métricas de éxito

- [ ] Al menos 30s de audio reproducido con calidad clara en sala
- [ ] Audiencia reacciona (sonrisas, ojos abiertos — el wow auditivo es muy visible)
- [ ] Frase "una entrada, tres salidas" dicha en alto
- [ ] Total <2 min — si te pasas de 2.5 min recortas la reproducción

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| Audio no sale por altavoces | Probar 1h antes con técnico de sala |
| NotebookLM lento al generar | Pre-generado la noche antes; jamás generar en vivo |
| Audiencia pregunta "¿sube mis docs a Google?" | Sí, NotebookLM usa Google Cloud. Para docs sensibles → Claude Projects (Pro) o setup local con Whisper + LLM |
| Audiencia pregunta por límites | Free tier: 100 notebooks, 50 sources/notebook, 500K palabras/source. Más que suficiente para 99% de founders |
