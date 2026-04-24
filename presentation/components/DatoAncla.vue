<script setup lang="ts">
/**
 * DatoAncla
 * --------------------------------------------------------------
 * Bloque para datos impactantes. Estilo Stripe / Economist big number:
 * el número DOMINA, contexto corto debajo, fuente en caption.
 *
 * <DatoAncla
 *   numero="3"
 *   unidad="personas"
 *   contexto="Equipo de 10 efectivo con IA."
 *   fuente="Mint ITV · Q1 2026" />
 *
 * Variantes visuales:
 *   size   = "lg" (default) | "xl" | "sm"
 *   align  = "left" (default) | "center"
 *   palanca opcional: cliente | equipo | marca | datos → accent en el número
 */

interface Props {
  numero: string
  unidad?: string           // "personas", "%", "€", etc.
  contexto: string
  fuente?: string
  size?: 'sm' | 'lg' | 'xl'
  align?: 'left' | 'center'
  palanca?: 'cliente' | 'equipo' | 'marca' | 'datos' | null
  delta?: string            // ej: "+240%", "-12pts" — pequeño chip al lado
  deltaTone?: 'positive' | 'negative' | 'neutral'
}

const props = withDefaults(defineProps<Props>(), {
  unidad: '',
  fuente: '',
  size: 'lg',
  align: 'left',
  palanca: null,
  delta: '',
  deltaTone: 'neutral',
})
</script>

<template>
  <figure
    class="dato-ancla"
    :data-size="props.size"
    :data-align="props.align"
    :data-palanca="props.palanca ?? ''"
  >
    <div class="numero-block">
      <span class="numero">{{ props.numero }}</span>
      <span v-if="props.unidad" class="unidad">{{ props.unidad }}</span>
      <span
        v-if="props.delta"
        class="delta"
        :data-tone="props.deltaTone"
      >{{ props.delta }}</span>
    </div>

    <figcaption class="contexto-block">
      <p class="contexto">{{ props.contexto }}</p>
      <p v-if="props.fuente" class="fuente">{{ props.fuente }}</p>
    </figcaption>
  </figure>
</template>

<style scoped>
.dato-ancla {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin: var(--space-5) 0;
  padding-top: var(--space-3);
  border-top: 1px solid var(--ink);
  max-width: 24ch;
}

.dato-ancla[data-align='center'] {
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

/* -- numero row -------------------------------------------------------- */
.numero-block {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  line-height: 0.82;
}

.numero {
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: -0.045em;
  font-variant-numeric: tabular-nums lining-nums;
  font-feature-settings: 'tnum', 'lnum', 'ss01';
  color: var(--ink);
  line-height: 0.82;
}

/* tamaños */
.dato-ancla[data-size='sm'] .numero  { font-size: clamp(3rem, 6vw, 4.5rem); }
.dato-ancla[data-size='lg'] .numero  { font-size: clamp(5rem, 10vw, 8rem); }
.dato-ancla[data-size='xl'] .numero  { font-size: clamp(7rem, 14vw, 12rem); }

/* palanca = acento en el número */
.dato-ancla[data-palanca='cliente'] .numero { color: var(--palanca-cliente); }
.dato-ancla[data-palanca='equipo']  .numero { color: var(--palanca-equipo);  }
.dato-ancla[data-palanca='marca']   .numero { color: var(--palanca-marca);   }
.dato-ancla[data-palanca='datos']   .numero { color: var(--palanca-datos);   }

.unidad {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: clamp(1.2rem, 2vw, 2rem);
  color: var(--ink-mute);
  letter-spacing: -0.01em;
  line-height: 1;
  align-self: flex-end;
  padding-bottom: 0.45em;
}

.dato-ancla[data-size='sm'] .unidad { font-size: 1rem; padding-bottom: 0.35em; }
.dato-ancla[data-size='xl'] .unidad { font-size: 1.6rem; }

/* Delta chip */
.delta {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 0.82rem;
  padding: 0.18em 0.55em;
  border: 1px solid currentColor;
  border-radius: var(--radius-1);
  align-self: flex-end;
  margin-bottom: 0.5em;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
}
.delta[data-tone='positive'] { color: var(--accent-success); }
.delta[data-tone='negative'] { color: var(--accent-danger);  }
.delta[data-tone='neutral']  { color: var(--ink-mute);       }

/* -- contexto + fuente ------------------------------------------------- */
.contexto-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 32ch;
}

.contexto {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--fs-body);
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  text-wrap: balance;
}

.dato-ancla[data-size='sm'] .contexto { font-size: var(--fs-small); }
.dato-ancla[data-size='xl'] .contexto { font-size: var(--fs-lead); }

.fuente {
  font-family: var(--font-mono);
  font-size: var(--fs-caption);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--ink-mute);
  margin: 0;
}

.fuente::before {
  content: 'Fuente · ';
  color: var(--ink-faint);
}
</style>
