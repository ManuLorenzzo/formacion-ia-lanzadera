<script setup lang="ts">
/**
 * MatrizComparativa
 * --------------------------------------------------------------
 * Tabla editorial densa para la matriz "Quiero X → usa Y".
 *
 * Dos modos de uso:
 *
 * 1) Declarativo vía prop `rows`:
 *    <MatrizComparativa
 *      :rows="[
 *        { quiero: 'Redactar emails', premium: 'Claude 3.5', free: 'Mistral Le Chat', nota: 'EU-hosted' },
 *        { quiero: 'Generar imagen',  premium: 'Midjourney',  free: 'Flux Schnell', nota: '—' },
 *      ]"
 *    />
 *
 * 2) Slot libre, para casos que necesiten ricos markup o componentes:
 *    <MatrizComparativa>
 *      <template #row>
 *        <tr>
 *          <td>Redactar emails</td>
 *          <td>Claude 3.5</td>
 *          <td>Mistral Le Chat</td>
 *          <td>EU-hosted</td>
 *        </tr>
 *      </template>
 *    </MatrizComparativa>
 *
 * Prop extras:
 *   titulo    → H4 superior
 *   kicker    → eyebrow por encima
 *   headers   → override de cabeceras default
 *   palanca   → tinte sutil para la cabecera (sólo bar top)
 */

interface Row {
  quiero:  string
  premium: string
  free:    string
  nota?:   string
}

interface Props {
  rows?: Row[]
  titulo?: string
  kicker?: string
  headers?: [string, string, string, string]
  palanca?: 'cliente' | 'equipo' | 'marca' | 'datos' | null
  numbered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rows: () => [],
  titulo: '',
  kicker: '',
  headers: () => ['Quiero', 'Premium', 'Alternativa free', 'Nota'],
  palanca: null,
  numbered: true,
})
</script>

<template>
  <section
    class="matriz"
    :data-palanca="props.palanca ?? ''"
  >
    <header v-if="props.titulo || props.kicker" class="matriz-header">
      <span v-if="props.kicker" class="eyebrow">{{ props.kicker }}</span>
      <h4 v-if="props.titulo" class="matriz-titulo">{{ props.titulo }}</h4>
    </header>

    <table class="matriz-tabla">
      <thead>
        <tr>
          <th v-if="props.numbered" class="col-num" aria-label="Nº"></th>
          <th class="col-quiero">{{ props.headers[0] }}</th>
          <th class="col-premium">{{ props.headers[1] }}</th>
          <th class="col-free">{{ props.headers[2] }}</th>
          <th class="col-nota">{{ props.headers[3] }}</th>
        </tr>
      </thead>

      <tbody>
        <!-- Modo declarativo -->
        <template v-if="props.rows.length > 0">
          <tr v-for="(row, i) in props.rows" :key="i">
            <td v-if="props.numbered" class="col-num">
              {{ String(i + 1).padStart(2, '0') }}
            </td>
            <td class="col-quiero">{{ row.quiero }}</td>
            <td class="col-premium">{{ row.premium }}</td>
            <td class="col-free">{{ row.free }}</td>
            <td class="col-nota">{{ row.nota || '—' }}</td>
          </tr>
        </template>
        <!-- Modo slot -->
        <slot v-else name="rows" />
      </tbody>
    </table>

    <footer v-if="$slots.footer" class="matriz-footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style scoped>
.matriz {
  --palanca: var(--ink);
  margin: var(--space-5) 0;
  font-family: var(--font-sans);
}

.matriz[data-palanca='cliente'] { --palanca: var(--palanca-cliente); }
.matriz[data-palanca='equipo']  { --palanca: var(--palanca-equipo);  }
.matriz[data-palanca='marca']   { --palanca: var(--palanca-marca);   }
.matriz[data-palanca='datos']   { --palanca: var(--palanca-datos);   }

.matriz-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.matriz-header .eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--fs-caption);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--palanca);
  padding-bottom: var(--space-1);
  border-bottom: 1px solid currentColor;
  align-self: flex-start;
}

.matriz-titulo {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: var(--fs-h4);
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--ink);
  margin: 0;
}

/* ---- Tabla ---- */
.matriz-tabla {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fs-small);
  font-variant-numeric: tabular-nums;
  table-layout: fixed;
}

.matriz-tabla thead tr {
  border-top: 2px solid var(--ink);
  border-bottom: 1px solid var(--ink);
  background: transparent;
}

.matriz-tabla th {
  padding: var(--space-3) var(--space-3) var(--space-3) 0;
  font-family: var(--font-mono);
  font-size: var(--fs-caption);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--ink);
  text-align: left;
  vertical-align: bottom;
}

.matriz-tabla tbody tr {
  border-bottom: 1px solid var(--rule);
  transition: background-color 80ms ease;
}

.matriz-tabla tbody tr:last-child {
  border-bottom: 1.5px solid var(--ink);
}

.matriz-tabla tbody tr:hover {
  background: var(--paper-sunken);
}

.matriz-tabla td {
  padding: var(--space-3) var(--space-3) var(--space-3) 0;
  vertical-align: top;
  line-height: 1.35;
  color: var(--ink);
}

/* ---- Columnas ---- */
.col-num {
  width: 3.2ch;
  padding-right: var(--space-3);
  font-family: var(--font-mono);
  color: var(--ink-mute);
  font-variant-numeric: tabular-nums;
  font-size: var(--fs-caption);
}

.col-quiero  { width: 32%; font-weight: 500; }
.col-premium {
  width: 22%;
  font-weight: 500;
}
.col-free    {
  width: 22%;
  color: var(--ink-soft);
}
.col-nota    {
  width: 24%;
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--ink-mute);
  font-size: 0.92em;
}

/* Pequeña marca sutil que diferencia "premium" de "free" */
.matriz-tabla td.col-premium::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--palanca);
  margin-right: 0.55em;
  transform: translateY(-2px);
}

.matriz-tabla td.col-free::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 1px solid var(--ink-faint);
  margin-right: 0.55em;
  transform: translateY(-2px);
}

/* ---- Footer ---- */
.matriz-footer {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: var(--fs-caption);
  color: var(--ink-mute);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
</style>
