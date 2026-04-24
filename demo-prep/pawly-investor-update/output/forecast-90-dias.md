# Forecast de caja · 6 meses · Pawly
_Fecha de cálculo: 24-abr-2026. Caja base: 220.450 € al 31-mar-2026._

---

## 1 · Resumen ejecutivo

- **Pesimista (ronda no cierra)**: te rompes a **mediados de octubre 2026** (~13-oct). Runway desde hoy: **~5,7 meses**.
- **Base (ronda junio, +15% MoM)**: no te rompes en los 6 meses. Saldo a fin de septiembre ≈ **1,47 M €**. Runway post-ronda: **>24 meses**.
- **Optimista (ronda mayo, +28% MoM)**: no te rompes. Saldo a fin de septiembre ≈ **1,50 M €**.

**Traducción directa**: sin ronda te quedan ~5,7 meses. Con ronda en junio o antes, el problema desaparece. El mes que importa vigilar es **agosto**, cuando en pesimista el colchón cae por debajo de 60 k € y ya no hay margen para imprevistos.

---

## 2 · Tabla de escenarios · saldo a fin de mes (€)

| Mes     | Pesimista   | Base          | Optimista     |
|---------|-------------|---------------|---------------|
| Mar-26  | 220.450     | 220.450       | 220.450       |
| Abr-26  | 182.906     | 183.947       | 184.865       |
| May-26  | 158.342     | 161.633       | **1.664.767** |
| Jun-26  | 127.758     | **1.620.176** | 1.627.358     |
| Jul-26  | 84.874      | 1.570.162     | 1.583.907     |
| Ago-26  | 58.490      | 1.520.754     | 1.544.484     |
| Sep-26  | **11.606**  | 1.465.213     | 1.503.561     |
| Oct-26  | **-14.778** | —             | —             |

(Negritas = entrada de ronda o mes crítico.)

**Detalle del burn mensual (sin one-offs):**

| Mes      | Ingreso base | Burn recurrente pesimista | Burn recurrente base/optimista |
|----------|--------------|---------------------------|--------------------------------|
| Abr      | 6.996 / 8.037 / 8.955 | 29.740 | 29.740 |
| May      | 6.996 / 9.246 / 11.462 | 29.740 + 1.820 (Cuidador Ops mid) | ídem |
| Jun      | 6.996 / 10.623 / 14.671 | 33.380 | 33.380 + 6.500 (Backend Eng) = 39.880 |
| Jul      | 6.996 / 12.216 / 18.779 | 33.380 | 39.880 + 5.850 (Growth) = 45.730 |
| Ago      | 6.996 / 14.052 / 24.037 | 33.380 | 45.730 + 2.730 (CM PT mid) = 48.460 |
| Sep      | 6.996 / 16.149 / 30.767 | 33.380 | 45.730 + 5.460 = 51.190 |

**One-offs aplicados (no condicionales en pesimista):**

- Abr-20: 14.800 € impuestos Q1 → los 3 escenarios.
- Jun-15: 4.200 € seguro RC anual → los 3 escenarios.
- Jun-30: 8.000 € legales ronda → sólo base/optimista.
- Jul-10: 16.500 € IRPF Q2 → los 3.
- Ago-15: 15.000 € campaña Portugal → sólo base/optimista.
- Sep-01: 3.500 € offsite → los 3.
- Sep-30: 17.000 € IRPF Q3 → los 3.

---

## 3 · Mes crítico y runway

| Escenario  | ¿Se rompe? | Mes crítico | Runway desde hoy (24-abr-26) |
|------------|------------|-------------|------------------------------|
| Pesimista  | Sí         | Octubre 2026 (~13-oct) | **~5,7 meses** |
| Base       | No         | — | >24 meses post-ronda |
| Optimista  | No         | — | >27 meses post-ronda |

En **base**, si la ronda entra en junio como previsto, el colchón pasa de 161 k € a 1,62 M € en un solo mes. En **optimista** lo mismo pero un mes antes.

En **pesimista**, el colchón cae por debajo de **60 k €** en agosto. Ese es el momento operativo de decisión: o hay term sheet firmado, o activas el plan B (congelar Portugal, pedir puente, etc.).

---

## 4 · Simulación de palancas (sobre escenario pesimista)

El **mes crítico sólo existe en pesimista**, así que las palancas se evalúan ahí.

### Palanca 1 · Retrasar Backend Engineer y Growth Lead a septiembre

- **Qué cambia**: mover ambos hires condicionales (Backend 6.500 €/mes + Growth 5.850 €/mes) a septiembre.
- **Impacto sobre runway en pesimista**: **0 días**.
- **Por qué**: en pesimista la ronda no cierra, así que los dos hires ni siquiera arrancan (son condicionales). La palanca no cambia la trayectoria de caja en el escenario donde importa.
- **Dónde sí ayuda**: en base/optimista ahorras ~31.200 € (3 meses de Backend jun-ago + 2 meses de Growth jul-ago). Extiende runway post-ronda ~17 días. Útil si quieres amortiguar en caso de que crecimiento post-ronda sea más lento.
- **Trade-off**: 3-4 meses menos de ejecución técnica y de growth. Backend era "clave para escalado + Portugal".

### Palanca 2 · Recortar marketing 50% durante abril-junio

- **Qué cambia**: Google Ads 4.800 → 2.400 € y Contenido 1.200 → 600 €. Total: 3.000 €/mes menos durante 3 meses = **-9.000 € de gasto**.
- **Impacto sobre runway en pesimista**: **+10 días** (~1,5 semanas).
  - Cálculo: 9.000 € / burn neto oct (26.384 €/mes) * 30 = 10,2 días.
- **Trade-off**: el +28% MoM histórico sale en gran parte de marketing. Recortar 50% muy probablemente frena el growth, lo que compromete el propio forecast pesimista (que ya asume ingresos planos). En la práctica, el ahorro se queda pero el upside de recuperación también.

### Palanca 3 · Subir take rate paseos 15% → 17% desde abril

- **Qué cambia**: comisión en vertical paseos pasa de 15% a 17% sobre GMV paseos.
- **Impacto sobre runway en pesimista**: **+4 días** (~0,5 semanas).
  - Cálculo (GMV paseos plano en 28.200 €/mes): 2% * 28.200 = **+564 €/mes** extra de revenue neto.
  - 6 meses = 3.384 €. / 26.384 burn = ~3,8 días.
- **Ojo**: en tus notas decías "~4.200 €/mes extra". **Esa cifra no cuadra con los CSVs** (el GMV paseos tendría que multiplicarse por 7 para llegar ahí). Ver alerta #1.
- **Trade-off**: bajo. Rover cobra 20% y no has recibido quejas. Riesgo de que cuidadores con más demanda se irriten si se implementa sin comunicación.

### Combo respondiendo a tu pregunta del punto 5 de notas

> _"¿Cuánto runway gano si retraso los 2 hires senior + subo take rate, sin tocar marketing? ¿Me da margen para que la ronda cierre en septiembre?"_

- Palanca 1 + Palanca 3 en pesimista: **+4 días** (palanca 1 no aporta nada en pesimista).
- Saldo a fin de septiembre con combo: ~14.990 € en vez de 11.606 €.
- **Respuesta directa: no te da margen cómodo.** Llegas a final de septiembre casi en cero. Si la ronda firma el 30-sep pero la entrada del dinero tarda 2 semanas (normal en seed), te rompes en octubre igual.
- **Qué sí te da margen suficiente**: palanca 2 (recorte marketing) + palanca 3. Ahorras 12.384 €, llegas a fin de sep con ~24 k €. Sigues muy tenso. Para cubrir ronda en septiembre sin puente, necesitas además **congelar Portugal** (palanca D de tus notas): ahorras 15.000 € de campaña agosto (no aplica en pesimista porque es condicional, ya no se hace) y 5.460 €/mes del Country Manager (tampoco aplica, condicional). Aquí la palanca D realmente no aporta extra en pesimista: ya estaba fuera del forecast.

**Conclusión limpia**: si crees que la ronda se retrasa a septiembre, las palancas internas te dan margen simbólico (~2 semanas máximo combinando todo). La decisión real es **term sheet antes de finales de julio** o **activar puente** (6 semanas de cushion cuesta ~170-180 k €).

---

## 5 · Alertas detectadas

1. **Take rate paseos: tu cifra de +4.200 €/mes no cuadra con los datos.**  
   GMV paseos marzo = 28.200 €. Subir 2 p.p. = **564 €/mes extra**, no 4.200. Para llegar a +4.200 €/mes tendrías que tener GMV paseos de ~210.000 €/mes (nivel de diciembre en escenario optimista, no "ritmo actual"). Revísalo antes de venderlo a inversores.

2. **Stripe fees probablemente infraestimadas.**  
   03-gastos-recurrentes.csv pone Stripe = 180 €/mes fijo, pero el CSV mismo dice "aprox 2.9% + 0,25 sobre GMV". Con GMV marzo 45.700 € y 2.459 bookings: 2,9% * 45.700 + 0,25 * 2.459 ≈ **1.940 €/mes**. Infraestimación de ~1.760 €/mes = ~10.600 € en 6 meses. En pesimista eso te come 12 días más de runway.

3. **Seguro RC de cuidadores aparece dos veces.**  
   - 03-gastos-recurrentes: 500 €/mes ("prorrateo del anual") = 6.000 €/año.
   - 04-pagos-puntuales: 4.200 € anuales en junio ("renovación seguro RC anual").  
   Si el prorrateo ya es el anual, el lump de junio es double-counting (+4.200 € fantasma). Si son dos seguros distintos (ej. RC + accidentes), queda reflejado pero hay que clarificarlo. Impacto potencial: ~2 días de runway en pesimista.

4. **Cuidador Ops Specialist no aparece en tus notas.**  
   Está en 05-hiring-plan.csv como no condicional (entra 15-may, 3.640 €/mes). En tus notas del founder sólo mencionas hires condicionales. Asegúrate de que este sí está confirmado y presupuestado — ya está en el forecast, pero es un compromiso de 3.640 €/mes que en pesimista cuesta ~25.500 € en abr-sep.

5. **Portugal revenue en escenario optimista no tiene cifra.**  
   El prompt pide "Portugal genera primer revenue en septiembre", pero ningún CSV cuantifica. Lo modelé a **0 €**. Si quieres reflejar un arranque conservador (ej. 10% de Madrid+Barcelona en mes 1), dímelo y recalculo. Los costes asociados (CM Portugal desde 15-ago = 5.460 €/mes + campaña pre-launch 15.000 € en agosto) sí están modelados en base/optimista.

6. **+15% MoM "conservador" en base parece optimista si la ronda se retrasa.**  
   El histórico es +28% MoM con el marketing actual. Si en abril-junio tienes que recortar caja (palanca 2), el +15% MoM ya no es conservador, es improbable. En un escenario "ronda se retrasa + recorte marketing", el forecast realista se parece más al pesimista que al base.

7. **El revenue neto de marzo (6.996 €) supera ligeramente el "~6.300 €/mes" de tus notas.**  
   No es problema — probablemente tus notas son del cierre de febrero. Sólo para que esté claro: estás un pelín mejor de lo que creías.

8. **Marketing hoy son 6.000 €, no 4.800 €.**  
   En 03-gastos-recurrentes hay dos líneas de marketing: Google Ads 4.800 + Contenido/social 1.200 = 6.000 €/mes (coincide con tus notas). La palanca 2 al 50% ahorra 3.000 €/mes, no 2.400 €. Ya modelado así.

---

## 6 · Apéndice · fórmulas usadas

**Revenue neto mensual** = Σ (GMV_vertical × take_rate_vertical). Datos directos del CSV 02-ingresos.

**Growth MoM** = (revenue_mes_t / revenue_mes_t-1) - 1. Usado sólo para validar el +15% base y el +28% optimista contra histórico ene-mar. Histórico: feb/ene = +21,6%, mar/feb = +20,9%. El +15% "base" es por tanto conservador respecto al histórico reciente.

**Gasto recurrente mensual** = Σ importes de 03-gastos-recurrentes.csv donde desde_mes ≤ mes ≤ hasta_mes. Resultado: 29.740 €/mes a partir de febrero 2026.

**Burn neto mensual** = (gastos recurrentes + hires del mes prorrateados + one-offs del mes) - revenue neto mensual.

**Saldo fin de mes** = saldo fin mes anterior + revenue - gastos recurrentes - hires - one-offs + ronda (si aplica).

**Runway desde hoy (pesimista)** = meses hasta que saldo fin de mes < 0.  
Pesimista: saldo fin de sep = 11.606; burn neto oct (sin one-offs) = 33.380 - 6.996 = 26.384. Días antes de romper en oct: 11.606 / 26.384 × 30 ≈ 13 días → rotura ~13-oct-2026. Desde 24-abr = **171 días ≈ 5,7 meses**.

**Prorrateo de hires a media de mes** = salario_mensual × (días trabajados / días del mes). Cuidador Ops entra 15-may → (mes de 31 días, trabaja desde el 15 al 31 = 17 días) = 3.640 × 17/31 ≈ 1.996 €. He usado 1.820 € (medio mes) como aproximación redondeada. Diferencia: <200 €, despreciable frente al forecast. Igual aplicado a Country Manager Portugal mid-agosto.

**Impacto palanca sobre runway en días** = ahorro acumulado / burn neto mensual del mes de rotura × 30.

---

_Datos fuente: 01-caja-actual.md, 02-ingresos.csv, 03-gastos-recurrentes.csv, 04-pagos-puntuales.csv, 05-hiring-plan.csv, 06-notas-founder.md. Fecha snapshot caja: 31-mar-2026. Fecha de cálculo: 24-abr-2026._
