<script setup lang="ts">
/**
 * PalancaHeader
 * --------------------------------------------------------------
 * Header editorial para abrir cada una de las 4 palancas.
 *
 * Visual: numeración enorme tipo revista, accent bar vertical con
 * el color de la palanca, título en display type, metadata de
 * duración en monospace.
 *
 * <PalancaHeader
 *   color="cliente"
 *   numero="01"
 *   titulo="Cliente"
 *   duracion="20 min" />
 */

interface Props {
  color: 'cliente' | 'equipo' | 'marca' | 'datos'
  numero: string
  titulo: string
  duracion?: string
  kicker?: string   // texto pequeño sobre el número (ej: "Palanca")
}

const props = withDefaults(defineProps<Props>(), {
  kicker: 'Palanca',
  duracion: '',
})
</script>

<template>
  <header class="palanca-header" :data-palanca="props.color">
    <div class="accent-bar" aria-hidden="true" />

    <div class="content">
      <div class="meta">
        <span class="kicker">{{ props.kicker }}</span>
        <span class="sep">/</span>
        <span class="numero-inline">{{ props.numero }}</span>
        <template v-if="props.duracion">
          <span class="sep">·</span>
          <span class="duracion">{{ props.duracion }}</span>
        </template>
      </div>

      <div class="heading-row">
        <span class="numero-big">{{ props.numero }}</span>
        <h1 class="titulo">{{ props.titulo }}</h1>
      </div>

      <div class="slot-row" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </header>
</template>

<style scoped>
.palanca-header {
  --palanca: var(--palanca-cliente);
  --palanca-soft: var(--palanca-cliente-soft);

  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-6);
  align-items: stretch;
  padding: var(--space-4) 0;
  min-height: 60vh;
  position: relative;
}

.palanca-header[data-palanca='cliente'] {
  --palanca: var(--palanca-cliente);
  --palanca-soft: var(--palanca-cliente-soft);
}
.palanca-header[data-palanca='equipo'] {
  --palanca: var(--palanca-equipo);
  --palanca-soft: var(--palanca-equipo-soft);
}
.palanca-header[data-palanca='marca'] {
  --palanca: var(--palanca-marca);
  --palanca-soft: var(--palanca-marca-soft);
}
.palanca-header[data-palanca='datos'] {
  --palanca: var(--palanca-datos);
  --palanca-soft: var(--palanca-datos-soft);
}

.accent-bar {
  width: 6px;
  background: var(--palanca);
  align-self: stretch;
  min-height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-5);
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
}

/* -- Metadata row ------------------------------------------------------ */
.meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--fs-caption);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--ink-mute);
}

.meta .kicker {
  color: var(--palanca);
  font-weight: 600;
}

.meta .sep {
  color: var(--ink-faint);
}

.meta .numero-inline,
.meta .duracion {
  color: var(--ink-mute);
}

/* -- Heading row — numero enorme + título ------------------------------ */
.heading-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-6);
  align-items: baseline;
}

.numero-big {
  font-family: var(--font-serif);
  font-weight: 400;
  font-style: italic;
  font-size: clamp(6rem, 14vw, 12rem);
  line-height: 0.82;
  color: var(--palanca);
  letter-spacing: -0.04em;
  font-feature-settings: 'lnum', 'tnum';
  /* pequeña ligera desalineación que recuerda a portadas de revista */
  transform: translateY(0.05em);
}

.titulo {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--ink);
  margin: 0;
  align-self: end;
  padding-bottom: 0.12em;
  /* subrayado grueso solo debajo del texto */
  border-bottom: 3px solid var(--ink);
  padding-right: var(--space-5);
  text-wrap: balance;
}

/* -- Slot — subtítulo, descripción o teaser ---------------------------- */
.slot-row {
  margin-top: var(--space-3);
  max-width: 62ch;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--fs-lead);
  line-height: 1.35;
  color: var(--ink-soft);
}

.slot-row :deep(p) {
  margin: 0 0 var(--space-3) 0;
}

.slot-row :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
