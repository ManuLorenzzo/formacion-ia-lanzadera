# Demo 01 · Gemini Deep Research (en vivo)

**Bloque:** Cliente · minuto ~12 a ~18 de la charla
**Duración objetivo:** 5-6 min
**Tool:** Gemini Deep Research (vía Google AI Pro que Manu paga) — alternativa: browser de AI Studio con Gemini 3.1 Pro
**Fall-back tool:** Claude Research (Claude Pro)

---

## Objetivo del momento

Mostrar que en 4 minutos de ejecución autónoma, la IA entrega lo que a un analista junior le costaría 3-4 horas: un informe con citas verificables sobre los dolores reales de un competidor.

## Setup pre-demo (hacer 24h antes)

### 1. Elegir el competidor
**Criterios:**
- Producto conocido por la audiencia de Lanzadera
- Con reseñas públicas accesibles (Trustpilot, Google, App Store, G2)
- Idealmente del sector dominante (salud, deporte, educación, sostenibilidad, RRHH)
- Evita empresas de Mint ITV directa o indirectamente

**Opciones por sector:**
- Salud: competidor de aplicaciones de wellbeing con reseñas públicas
- Deporte: Playtomic, Wuolah, competidor local de reserva deportiva
- Educación: Platzi, ISDI, alguna edtech con reseñas activas
- RRHH: Factorial, Personio, Kenjo
- Consumer amplio: Wallapop, Glovo, Cabify

### 2. Preparar el prompt
Está en `../asset-pack/prompts-plantilla.md`. Guárdalo en un `.txt` visible en el desktop para copy-paste rápido.

**Estructura ejemplo:**
```
Rol: founder de una startup SaaS B2B en sector [SECTOR] preparando ronda seed.

Tarea: identifica los 3 dolores más comunes que los clientes de [COMPETIDOR] reportan en reseñas de 1-2 estrellas en los últimos 6 meses.

Formato de salida:
- 3 dolores numerados, por frecuencia
- Cada uno con 2 citas literales (entre comillas) de reseñas
- URL exacta de cada fuente
- 1 insight accionable por dolor (cómo lo convertiríamos en diferenciador de producto)

Constraint: no inventes citas. Si no hay suficientes datos, dilo explícitamente.
```

### 3. Ejecutar una vez antes (ensayo)
- Lánzalo 24h antes y guarda el output
- Mide el tiempo real (típicamente 3-7 min)
- Revisa 1-2 citas para confirmar que existen
- Guarda el output como **backup**

## Script en directo

**Minuto 0 — Apertura del momento demo**
> *"Vamos con la demo. Abro Gemini Deep Research. Mi prompt, visible en pantalla. Fijaos en la estructura — esto NO es un googleo."*

**Minuto 0-2 — Especificar visible**
- Pega el prompt
- Subraya verbalmente las 4 partes: rol, tarea, formato, constraint
- > *"Esto es la C de Cabeza y la C de Contexto aplicadas. Si le dijera 'háblame de la competencia', me saca algo genérico."*
- Dale a Run

**Minuto 2-5 — Mientras corre**
- Alt-tab a una pestaña con una vista del log/progreso
- Narra lo que hace:
  > *"Está visitando páginas... ya ha leído 40. Cruza datos entre ellas. Lo que estáis viendo son 3-4 horas comprimidas en 3 minutos."*
- Si se hace largo (>5 min), pivota a **plan B** (ver abajo)

**Minuto 5-6 — Llega output · verificar en vivo**
- Lee en voz alta 2 insights concretos
- > *"Ahora la C de Check. Voy a pinchar una cita al azar."*
- Click en una URL
- Confirma que la cita existe y dice lo que Gemini resumió
- > *"Funciona. Si hubiese mentido, descartaba todo."*

**Cierre**
> *"Tres insights accionables para vuestro pitch. Con 4 minutos de trabajo. Esa es la C de Cliente en producción."*

## Backup plans

### Si Deep Research tarda >5 min
Tener output pre-capturado abierto en otra pestaña. Transición:
> *"Mientras termina, os ahorro la espera — este output es el mismo prompt de hace 2 horas. La narrativa es la misma."*

### Si falla la conexión
Screenshot completo del output en una slide guardada. Recorre el output como si hubiese pasado en vivo.

### Si Gemini no responde / rate limit
Switch a Claude Research (cuenta Claude Pro alternativa). Mismo prompt, mismo formato. Diferencia verbal:
> *"Gemini está ocupado — cambio a Claude Research. Mismo tipo de agente."*

## Métricas de éxito de la demo

- [ ] Output termina en <6 min total (incluyendo verificación)
- [ ] Audiencia ve AL MENOS una cita clickada y verificada
- [ ] Cierre con un insight concreto y aplicable dicho en voz alta
- [ ] Se menciona explícitamente la C de Cabeza, Contexto y Check

## Riesgos específicos

| Riesgo | Mitigación |
|--------|------------|
| El competidor elegido no tiene reseñas públicas suficientes | Pre-testar el prompt con ese competidor 24h antes |
| Deep Research da información desactualizada | El prompt especifica "últimos 6 meses"; verificar que las citas sean de ese rango |
| Audiencia pregunta cuánto cuesta Gemini Pro | Respuesta canteada: "$20/mes, pero el Deep Research existe también en free tier de AI Studio con Gemini 3.1 Pro en browser" |
| Gemini cita una fuente en inglés en charla española | Traduce en vivo el insight, no pasa nada |
