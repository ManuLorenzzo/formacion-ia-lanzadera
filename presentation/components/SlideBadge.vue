<script setup lang="ts">
/**
 * SlideBadge
 * --------------------------------------------------------------
 * Badge editorial en esquina superior derecha de la slide.
 *
 * <SlideBadge provider="claude" />   · logo Anthropic + "Claude"
 * <SlideBadge provider="gemini" />   · logo Gemini + "Gemini"
 * <SlideBadge provider="chatgpt" />  · logo OpenAI + "ChatGPT"
 * <SlideBadge demo />                · pill "DEMO"
 * <SlideBadge demo provider="claude" /> · DEMO + Claude apilados
 */

type Provider = 'claude' | 'gemini' | 'chatgpt'

interface Props {
  provider?: Provider
  demo?: boolean
}

const props = defineProps<Props>()

const providerMeta: Record<Provider, { label: string; logo: string; color: string }> = {
  claude:  { label: 'Claude',  logo: '/logos/claude.svg',       color: 'var(--brand-claude)' },
  gemini:  { label: 'Gemini',  logo: '/logos/googlegemini.svg', color: 'var(--brand-gemini)' },
  chatgpt: { label: 'ChatGPT', logo: '/logos/openai.svg',       color: 'var(--brand-chatgpt)' },
}
</script>

<template>
  <div class="slide-badge" aria-hidden="true">
    <div v-if="props.demo" class="badge badge-demo">
      <span class="dot" />
      <span class="label">DEMO</span>
    </div>
    <div
      v-if="props.provider"
      class="badge badge-provider"
      :style="{
        '--brand': providerMeta[props.provider].color,
        '--logo-url': `url('${providerMeta[props.provider].logo}')`,
      }"
    >
      <span class="logo" />
      <span class="label">{{ providerMeta[props.provider].label }}</span>
    </div>
  </div>
</template>

<style scoped>
.slide-badge {
  position: absolute;
  top: 1.1rem;
  right: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
  z-index: 20;
  pointer-events: none;
  user-select: none;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.28rem 0.55rem 0.28rem 0.5rem;
  background: var(--paper-pure);
  border: 1px solid var(--rule);
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  line-height: 1;
  box-shadow: 0 1px 0 rgba(21, 22, 26, 0.04);
}

.badge .label {
  position: relative;
  top: 0.5px;
}

/* Label en ink para legibilidad · logo en color de marca como acento */
.badge-provider .label {
  color: var(--ink);
}

.badge-provider .logo {
  width: 13px;
  height: 13px;
  display: inline-block;
  background-color: var(--brand, var(--ink));
  -webkit-mask: var(--logo-url) center / contain no-repeat;
          mask: var(--logo-url) center / contain no-repeat;
}

.badge-demo {
  background: var(--accent-highlight-soft);
  border-color: #d9bf4a;
  color: var(--ink);
}

.badge-demo .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-danger);
  box-shadow: 0 0 0 2px rgba(138, 42, 42, 0.15);
}
</style>
