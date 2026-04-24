# Forecast · alertas cruzando los datos

Cosas que no cuadran, supuestos que parecen agresivos, o decimales que faltan. Lo que encontré cruzando los 6 archivos, ordenado por tamaño de impacto.

---

## Alertas que mueven la caja (impacto real)

### 1 · Stripe fees infradotadas
En `03-gastos-recurrentes.csv` aparece *"Stripe processing fees estimadas · 180 €/mes"* con la nota *"aprox 2.9% + 0.25 sobre GMV"*.

180 € es una línea fija, pero las fees reales son proporcionales al GMV.

- **Marzo 2026**: GMV total = 45.700 € → fees reales ≈ 1.325 € + 0,25 × ~2.378 bookings ≈ **1.920 €/mes**.
- **Diferencia hoy**: ~1.740 €/mes infradotados.
- **En el forecast**: esto empeora. En septiembre con GMV ~105.500 € las fees reales serán ~3.330 €/mes.

**Efecto acumulado abr-sep 2026**: ~15k € de burn adicional no contemplado. Equivale a ~15 días de runway menos en el pesimista.

En el simulador no corrijo esta línea (sigo la CSV literal), pero conviene recalibrarla ya.

### 2 · El revenue neto del CSV **no** descuenta Stripe fees
En `02-ingresos.csv` la columna `revenue_neto_eur` es simplemente `gmv_bruto × take_rate`. Eso es revenue **bruto para Pawly**, no neto. Los ~1.920 €/mes de Stripe fees se restan aparte desde el lado de gastos.

No es un error — está consistente — pero el nombre "neto" confunde. Si un VC pregunta "cuál es vuestro net revenue real" el número a dar es **revenue_csv − stripe_fees_reales**, no el de la columna.

### 3 · El saldo mínimo del "saldo disponible" no es 205.650 €
`01-caja-actual.md` dice *"Caja realmente disponible para operar ≈ 205.650 €"* restando los 14.800 € de impuestos reservados. Pero el 20 de abril ese dinero sale de la cuenta igualmente (pago IRPF Q1). El modelo arranca con 220.450 € y carga los 14.800 € en abril → el efecto neto es idéntico a partir del 21 de abril. Ojo al explicarlo a un VC: no hay un "colchón operativo de 205k" distinto de los 220k.

### 4 · La estimación del founder sobre la Palanca 3 está inflada
Nota del founder (archivo 06): *"Impacto: ~4.200 € más de revenue neto al mes al ritmo actual"* subiendo de 15 % a 17 %.

Cuentas al ritmo de marzo 2026:
- GMV paseos marzo: 28.200 €.
- Subir 2 puntos → +2 % × 28.200 = **+564 €/mes**, no 4.200 €.

Los 4.200 €/mes solo se alcanzan cuando el GMV paseos llegue a ~210.000 €/mes — eso es **noviembre 2026 con growth +15 %** o septiembre con +28 %. No es "al ritmo actual".

Conviene ajustar el pitch: "en 6 meses al ritmo base, subir take rate 2 puntos aporta ~800 €/mes. A fin de año, ~1.300 €/mes".

### 5 · Cuidador Ops y Country Manager PT entran a mitad de mes
`05-hiring-plan.csv`:
- Cuidador Ops: 15 de mayo.
- Country Manager PT: 15 de agosto.

El modelo los carga el mes completo. Sobreestima:
- Cuidador Ops mayo: ~1.820 € de más.
- Country Manager PT agosto: ~2.730 € de más (solo aplica si ronda).

Pequeño (~4,5k € total), pero en la frontera del mes crítico suma 1-2 días de runway.

---

## Supuestos que parecen agresivos

### 6 · Growth +15 % MoM como base
Últimos 3 meses cerrados (ene-feb-mar 2026) han ido a **+28 % MoM**. El escenario base aplica +15 %. Es conservador contra los datos. Bueno para planificar caja, malo para un pitch: un VC va a preguntar *"¿por qué asumís menos de la mitad del growth que habéis demostrado?"*. Respuesta lista: saturación de canales, inicio de cohorte invernal (sitting baja en verano pero paseos sube, efecto neto incierto), previsión prudente.

### 7 · AWS y verificaciones son flat, pero escalan con volumen
`03-gastos-recurrentes.csv`:
- AWS 450 €/mes *"subirá con crecimiento"* (reconocido).
- Verificaciones cuidadores 900 €/mes (depende de onboarding de nuevos cuidadores).

Con GMV 9× de aquí a diciembre, AWS podría pasar a ~1.200-1.800 €/mes y verificaciones a ~2.500 €/mes. No catastrófico, pero ~2k-3k €/mes adicionales a fin de año. Merece revisar.

### 8 · Burn medio histórico 29.500 €, mi modelo pesimista arranca en ~31.000 €/mes
El burn medio `ene-mar 2026` es 29.500 €/mes (fuente `01-caja-actual.md`). Mi cálculo del pesimista abril da burn de ~30.500 €/mes (sin puntuales) — razonable tras la entrada completa de Marta en febrero. Ya en mayo con Cuidador Ops entra a ~34.000 €/mes pesimista. Esto dispara el consumo de caja más rápido de lo que la media histórica sugiere.

### 9 · La expectativa de ronda en "junio" es la **realista**, no la conservadora
Nota del founder: *"Riesgo real: si ninguno convierte, tenemos que reabrir el proceso y cerrar mínimo en septiembre"*. Es decir, el propio founder contempla que la ronda podría resbalar a septiembre.

El simulador pone la ronda base en junio. Para una segunda vuelta conviene añadir un escenario intermedio *"ronda cierra en septiembre"* — es el que responde a la pregunta concreta del founder en `06-notas-founder.md`.

**Estimación rápida** (no en el simulador aún):
- Escenario "ronda septiembre, growth +15 %, sin palancas": la caja cruzaría cero a principios de octubre. **No hay margen**: hay que activar Palanca 1 + Palanca 3 sí o sí para aguantar hasta septiembre.

---

## Gastos marcados como "condicionales" que podrían no serlo

### 10 · Offsite Valencia 3.500 €
`04-pagos-puntuales.csv` lo lista como no condicional (*"presupuesto ya aprobado"*). En el mes más crítico (septiembre). En el pesimista es una de las cargas que empuja el cruce a octubre. **Recortarlo da ~3-4 días de runway gratis**. Considérlo palanca D silenciosa.

### 11 · La campaña Portugal de 15.000 € está casada con el Country Manager
`04-pagos-puntuales.csv` marca la campaña PT como condicional a ronda. Pero el Country Manager PT en `05-hiring-plan.csv` también es condicional a ronda. Consistente. Si decides **congelar Portugal** (palanca D del founder) aunque la ronda cierre, ahorras los 15k € + el salario de 5.460 €/mes × 5 meses = **41.700 € de colchón extra** sin afectar al core negocio en España.

---

## Consistencia de los CSVs

### 12 · Revenue forecast del CSV no cuadra al 100 % con "+15 % MoM"
En `02-ingresos.csv`, forecast paseos abril: **4.860 €** (take rate 15 %, GMV 32.400 €).

Partiendo de marzo histórico 28.200 €: 28.200 × 1,15 = **32.430 €**. El CSV da 32.400 €. Diferencia 0,1 %, redondeo inofensivo. Lo señalo solo para que nadie se rasque la cabeza si ve ~30 € de diferencia entre el simulador (que recalcula desde marzo × 1,15^m) y el CSV.

### 13 · `hasta_mes = indefinido` en todas las líneas recurrentes
Nadie tiene fecha de salida. Razonable a 9 meses, pero el seguro RC cuidadores se renueva en junio (4.200 € de prima anual) — si aumenta el volumen de cuidadores, la renovación será más cara. No contemplado.

---

## Síntesis accionable

**Tres cosas para revisar antes del próximo forecast:**
1. Corregir la línea de Stripe fees — pasarla a variable sobre GMV.
2. Ajustar el pitch de la Palanca 3: "+800 € en 6 meses", no "+4.200 € hoy".
3. Añadir un escenario intermedio *ronda cierra en septiembre* — es la pregunta real del founder.

**Dos palancas "escondidas" no contempladas en el simulador:**
- Offsite Valencia (3,5k €, mes crítico): +3-4 días.
- Congelar Portugal aunque la ronda cierre: +41k € de colchón.

**Dato duro para el pitch:**
Con ronda cerrando junio + growth +15 %, Pawly termina diciembre con ~1,37 M € de caja y sin cruzar cero. Sin ronda (pesimista, growth plano) la caja se rompe el 11 de octubre de 2026 — 194 días de runway desde el 1 de abril.
