# Demo Datos · Decision Simulator de caja (artifact interactivo)

Mock para la **demo del bloque Datos** de la charla. Carlos (founder ficticio de Pawly) quiere una herramienta viva que le diga cuándo se rompe y cómo mover esa fecha con decisiones concretas. Claude Cowork lee los archivos de este directorio, calcula el forecast de caja y devuelve un **artifact interactivo** (React + Recharts + Tailwind) con toggles en vivo.

---

## Qué hay aquí

```
pawly-investor-update/
├── README.md                        · este archivo (prep + demo)
├── CLAUDE.md                        · contexto del negocio (Cowork lo lee al abrir)
├── prompt.md                        · el prompt a pegar en Cowork
├── data/
│   ├── 01-caja-actual.md            · saldo al 31-mar-2026
│   ├── 02-ingresos.csv              · revenue mensual (histórico + forecast)
│   ├── 03-gastos-recurrentes.csv    · gastos fijos mensuales
│   ├── 04-pagos-puntuales.csv       · one-offs próximos 6 meses
│   ├── 05-hiring-plan.csv           · hires previstos (condicionales a ronda)
│   └── 06-notas-founder.md          · notas del founder, decisiones pendientes
└── output/
    └── .gitkeep                     · aquí se guardan las alertas detectadas
```

---

## El momento wow

Cuando Cowork termine, el entregable **NO es un PDF ni un markdown aburrido**. Es un artifact interactivo tipo dashboard con:

- Número gigante arriba con los **días de runway actuales** (ej. `217 días de runway`).
- Gráfico central con **3 escenarios** de saldo de caja (pesimista/base/optimista) superpuestos.
- Línea vertical roja marcando el **mes crítico** donde el saldo cruza cero.
- **3 toggles/sliders** para simular decisiones en vivo:
  1. Retrasar 2 hires senior a septiembre.
  2. Recortar marketing 50 % tres meses.
  3. Subir take rate en paseos del 15 % al 20 %.

**Cada vez que tocas un toggle, la gráfica y el número recalculan al instante.** La línea roja se mueve — o desaparece si ya no te rompes.

---

## Cómo correr la demo (el día del evento)

### Preparación · la noche antes

1. Abre **Claude Cowork** (pestaña de Claude Desktop).
2. Crea un proyecto apuntando a esta carpeta: `demo-prep/pawly-investor-update/`.
3. Cowork leerá automáticamente `CLAUDE.md` y entenderá el contexto.
4. **Prueba el prompt**: pega `prompt.md` y deja que Cowork ejecute.
5. Verifica que:
   - Genera un **artifact React** interactivo (no un markdown).
   - Los tres toggles funcionan y recalculan el gráfico en vivo.
   - Las cifras cuadran con los CSVs (no inventa).
   - Hay una línea roja en el mes crítico que se mueve al tocar palancas.
6. Si el artifact se rompe o es pobre, ajusta el prompt y vuelve a correr.

> ⚠️ **Aviso**: Claude Cowork está en research preview. Si genera un artifact que falla al cargar o no es interactivo, como fallback puedes correr el mismo prompt en **claude.ai con los archivos adjuntos** — Claude estándar genera artifacts sin problema.

### En la sala · demo en vivo (~3 min)

1. **Alt-tab a Claude Cowork** con el proyecto ya abierto.
2. Enseña la estructura de `/data/` (6 archivos).
3. Pega el prompt de `prompt.md`. Cowork arranca.
4. Mientras genera (~60-90 seg), narra:
   - *"Está leyendo mis 6 archivos."*
   - *"Calculando forecast base + pesimista + optimista."*
   - *"Y me va a devolver algo interactivo."*
5. Cuando termine, abre el artifact.
6. **El momento wow**: toca los 3 toggles uno a uno.
   - Empieza con *"sin tocar nada, me rompo el 11 de octubre"*.
   - Activa palanca 1 (retrasar hires) → *"mira, ahora hasta enero."*
   - Activa palanca 2 (recortar marketing) → *"febrero."*
   - Activa palanca 3 (subir take rate) → *"no me rompo en todo el año."*
7. Cierre: *"Esto no es un informe. Es una herramienta de decisión en tiempo real. La he generado con un prompt."*

---

## Datos ficticios — todo es mock consistente con Pawly

- 1.200 dueños activos · 180 cuidadores · 8 meses operando.
- GMV mensual: ~42 k € · Revenue neto: ~6,3 k €/mes · Growth +28 % MoM.
- Caja al 31-mar-2026: **220.450 €**.
- Burn mensual neto: ~29-30 k €.
- Runway base sin ronda: ~7 meses (rompe aprox. oct-nov 2026).
- Ronda seed de 1,5 M € prevista cerrar Q2 2026 (junio).

Si algún dato te chirría, ajústalo antes del evento.

---

## Nota técnica sobre Cowork y artifacts

Claude Cowork (research preview) es el contexto correcto para esto — tiene acceso a los archivos locales y soporta artifacts. Pero si por cualquier razón falla el día del evento (crash, pérdida de conexión, limitación de artifacts), el fallback es claude.ai con los archivos subidos. Ambos caminos generan el mismo artifact.

**Cosa importante**: si Cowork devuelve solo texto/markdown en vez del artifact, reitera el prompt diciendo explícitamente *"genera un artifact React interactivo, no texto"*.
