# Prompt · Decision Simulator de caja

**Quién soy**: Carlos, founder de Pawly. Quiero ver mi caja como una
herramienta de decisión, no como un PDF muerto.

**Mi nivel**: Sé leer los números. No soy analista, no voy a mantener
un Excel con sliders.

**Qué necesito**: un **simulador interactivo de decisiones**. Un
artifact que pueda abrir, tocar tres toggles en vivo y ver cómo se
mueve la fecha en la que me rompo.

---

## Lo que tienes en el proyecto (carpeta `/data/`)

- `01-caja-actual.md` — saldo a 31-mar-2026.
- `02-ingresos.csv` — revenue mensual (3 meses históricos + 6 forecast).
- `03-gastos-recurrentes.csv` — gastos fijos mensuales.
- `04-pagos-puntuales.csv` — pagos one-off próximos 6 meses.
- `05-hiring-plan.csv` — hires previstos (3 de 4 condicionales a ronda).
- `06-notas-founder.md` — mis notas, decisiones en la mesa, pregunta
  concreta que quiero responder.

Lee los seis antes de generar nada.

---

## Lo que quiero ver — un artifact React interactivo

### 1 · Hero superior
Un número **muy grande** con los días de runway del escenario base
(ej. `217 días de runway`). Debajo, en pequeño, la fecha estimada en
que la caja cruza cero (ej. *"se rompe el 11 de octubre"*).

### 2 · Gráfico central
Líneas del saldo de caja de los próximos **9 meses** (abr → dic 2026),
con **3 escenarios superpuestos**: pesimista, base, optimista.

- Eje X: meses. Eje Y: € en caja.
- Línea vertical roja en el mes del escenario base donde el saldo
  cruza cero.
- Cuando con los toggles el escenario base ya no cruza cero en los
  9 meses, la línea roja desaparece y aparece un badge
  *"sin riesgo en el horizonte simulado"*.

### 3 · Tres palancas interactivas

Cards con toggles/sliders que **recalculan la gráfica y el hero
en vivo**:

- **Palanca 1 · Retrasar hires senior** — toggle on/off. Retrasa a
  septiembre los dos hires marcados como condicionales en
  `05-hiring-plan.csv` (Senior Backend + Growth Lead).
- **Palanca 2 · Recortar marketing 50 %** — toggle on/off. Reduce a
  la mitad el gasto de marketing (ambas líneas del CSV) durante
  abril-junio.
- **Palanca 3 · Subir take rate paseos** — slider del 15 % al 20 %.
  Afecta al revenue neto del vertical `paseos` de `02-ingresos.csv`.

Cada palanca debe mostrar, al activarse, cuántos **días extra de
runway** aporta.

### 4 · Footer
Un bloque colapsable `Cómo están calculados estos números` con las
fórmulas que has usado (burn mensual, revenue neto, runway en días,
cálculos de growth por escenario).

---

## Cómo debe verse · muy importante

Diseño **editorial**, no SaaS genérico. Referencias: The Economist,
Stripe dashboard minimalista, Linear.

- Fondo **crema / off-white**.
- Tinta **negra** para texto, **granate sobrio** como único acento
  (rojo alerta en la línea crítica, nada más).
- Tipografía: **IBM Plex Sans + IBM Plex Serif** (si no están
  disponibles, elige un serif editorial + sans geométrica similar).
- **Prohibido**: gradients, emojis, iconos rocket/shield/lightning,
  sombras pesadas, border-radius grande, CTAs morados gigantes.
- Formato **16:9** pensado para proyector — no mobile.

---

## Stack técnico

- **React** (componente único, artifact de Claude).
- **Recharts** para la gráfica de líneas.
- **Tailwind** para los estilos.
- Cálculos reales, nada hardcodeado. Hazlos en el componente
  leyendo los datos que te he pasado.

---

## Reglas duras

- **No inventes cifras.** Si falta un dato, dímelo.
- Burn mensual = gastos recurrentes totales + prorrateo del mes de
  los pagos puntuales + coste mensual de los hires ya incorporados
  (según su fecha de entrada) − revenue neto del mes.
- Runway en **días** (no en meses) — más preciso para la demo.
- El escenario **base** asume growth **+15 %** MoM y ronda cerrando
  en junio (la ronda añade 1,5 M € a la caja en junio).
- El escenario **pesimista** asume growth plano (0 %), ronda NO
  cierra, todos los pagos puntuales incluidos.
- El escenario **optimista** asume growth +28 % MoM, ronda cierra en
  mayo (no junio), todos los pagos puntuales incluidos.

---

## Antes de hacer nada

Si algo no cuadra o necesitas asunción, **pregúntame antes**. En
particular:

- ¿Cómo trato los hires condicionales cuando la ronda no cierra
  (escenario pesimista)?
- ¿Cómo separo gastos puntuales "condicionales a ronda" de los que
  son fijos?
- ¿Qué hago con el salario del Country Manager Portugal si la
  expansión se cancela?

---

## Output

1. **El artifact React interactivo** directamente en la conversación.
   Lo voy a abrir y tocar toggles.
2. En `output/forecast-notas.md`, un **archivo breve** con alertas
   que hayas detectado cruzando los datos (un gasto que no cuadra,
   un supuesto que parece agresivo).

No me generes PDFs, markdowns largos ni gráficos estáticos. El
artifact es el entregable.
