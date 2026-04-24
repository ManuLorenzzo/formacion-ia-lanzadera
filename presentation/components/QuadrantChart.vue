<script setup lang="ts">
interface Point {
  name: string
  x: number
  y: number
  tone?: 'free' | 'paid' | 'premium' | 'expert' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  recommended?: boolean
  note?: string
}

interface Recommendation {
  emoji: string
  label: string
  tool: string
}

interface Props {
  title?: string
  kicker?: string
  palanca?: 'cliente' | 'equipo' | 'producto' | 'marca' | 'datos'
  xAxis?: string
  xLabels?: string[]
  yAxis?: string
  yLabels?: string[]
  points: Point[]
  recommendations?: Recommendation[]
  footnote?: string
}

const props = withDefaults(defineProps<Props>(), {
  xAxis: 'Expertise técnico',
  xLabels: () => ['no-código', 'AI no-code', 'low-code', 'dev'],
  yAxis: 'Coste mensual',
  yLabels: () => ['0 €', '25 €', '100 €', '200 €+'],
  palanca: 'cliente',
  recommendations: () => [],
})

const WIDTH = 900
const HEIGHT = 420
const PAD_LEFT = 130
const PAD_RIGHT = 280
const PAD_TOP = 36
const PAD_BOTTOM = 60
const chartW = WIDTH - PAD_LEFT - PAD_RIGHT
const chartH = HEIGHT - PAD_TOP - PAD_BOTTOM

function xPx(x: number): number {
  const denom = Math.max(1, props.xLabels.length - 1)
  return PAD_LEFT + (x / denom) * chartW
}

function yPx(y: number): number {
  const denom = Math.max(1, props.yLabels.length - 1)
  return HEIGHT - PAD_BOTTOM - (y / denom) * chartH
}

function pointFill(p: Point): string {
  switch (p.tone) {
    case 'free': return 'var(--paper-pure)'
    case 'paid': return `var(--palanca-${props.palanca})`
    case 'premium': return 'var(--ink)'
    case 'expert': return 'var(--ink)'
    case 'warning': return 'var(--accent-danger)'
    default: return 'var(--paper-pure)'
  }
}

function pointStroke(p: Point): string {
  switch (p.tone) {
    case 'free': return 'var(--ink)'
    case 'paid': return `var(--palanca-${props.palanca})`
    case 'premium': return 'var(--ink)'
    case 'expert': return 'var(--ink)'
    case 'warning': return 'var(--accent-danger)'
    default: return 'var(--ink)'
  }
}

function pointRadius(p: Point): number {
  if (p.size === 'sm') return 7
  if (p.size === 'lg') return 13
  return 10
}

function isRightEdge(p: Point): boolean {
  const px = xPx(p.x)
  const chartRight = WIDTH - PAD_RIGHT
  return px > chartRight - 140
}

function labelX(p: Point): number {
  const px = xPx(p.x)
  return isRightEdge(p) ? px - pointRadius(p) - 7 : px + pointRadius(p) + 7
}

function labelAnchor(p: Point): 'start' | 'end' {
  return isRightEdge(p) ? 'end' : 'start'
}
</script>

<template>
  <figure class="quadrant-chart">
    <header v-if="kicker || title" class="qc-header">
      <div v-if="kicker" class="qc-kicker">{{ kicker }}</div>
      <h3 v-if="title" class="qc-title">{{ title }}</h3>
    </header>

    <div class="qc-legend">
      <span class="qc-legend-item">
        <svg width="12" height="12" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" fill="var(--paper-pure)" stroke="var(--ink)" stroke-width="1.5" />
        </svg>
        free
      </span>
      <span class="qc-legend-item">
        <svg width="12" height="12" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" :fill="`var(--palanca-${palanca})`" :stroke="`var(--palanca-${palanca})`" stroke-width="1.5" />
        </svg>
        de pago
      </span>
      <span class="qc-legend-item">
        <svg width="12" height="12" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" fill="var(--ink)" stroke="var(--ink)" stroke-width="1.5" />
        </svg>
        técnico / producción
      </span>
      <span class="qc-legend-item">
        <svg width="12" height="12" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" fill="var(--accent-danger)" stroke="var(--accent-danger)" stroke-width="1.5" />
        </svg>
        open source con riesgos
      </span>
    </div>

    <div class="qc-body">
      <svg :viewBox="`0 0 ${WIDTH} ${HEIGHT}`" class="qc-svg" role="img" :aria-label="title">
        <line
          v-for="(_label, i) in yLabels"
          :key="'hl' + i"
          :x1="PAD_LEFT"
          :y1="yPx(i)"
          :x2="WIDTH - PAD_RIGHT"
          :y2="yPx(i)"
          class="qc-grid"
        />
        <line
          v-for="(_label, i) in xLabels"
          :key="'vl' + i"
          :x1="xPx(i)"
          :y1="PAD_TOP"
          :x2="xPx(i)"
          :y2="HEIGHT - PAD_BOTTOM"
          class="qc-grid"
        />

        <text
          v-for="(label, i) in yLabels"
          :key="'ylbl' + i"
          :x="PAD_LEFT - 14"
          :y="yPx(i) + 4"
          class="qc-axis-label"
          text-anchor="end"
        >
          {{ label }}
        </text>

        <text
          v-for="(label, i) in xLabels"
          :key="'xlbl' + i"
          :x="xPx(i)"
          :y="HEIGHT - PAD_BOTTOM + 22"
          class="qc-axis-label"
          text-anchor="middle"
        >
          {{ label }}
        </text>

        <text
          :x="18"
          :y="PAD_TOP + chartH / 2"
          class="qc-axis-title"
          :transform="`rotate(-90, 18, ${PAD_TOP + chartH / 2})`"
          text-anchor="middle"
        >
          {{ yAxis }}
        </text>

        <text
          :x="PAD_LEFT + chartW / 2"
          :y="HEIGHT - 10"
          class="qc-axis-title"
          text-anchor="middle"
        >
          {{ xAxis }} →
        </text>

        <g v-for="(p, i) in points" :key="'p' + i">
          <circle
            v-if="p.recommended"
            :cx="xPx(p.x)"
            :cy="yPx(p.y)"
            :r="pointRadius(p) + 6"
            fill="var(--accent-highlight)"
            opacity="0.35"
          />
          <circle
            :cx="xPx(p.x)"
            :cy="yPx(p.y)"
            :r="pointRadius(p)"
            :fill="pointFill(p)"
            :stroke="pointStroke(p)"
            stroke-width="1.5"
          />
          <text
            :x="labelX(p)"
            :y="yPx(p.y) + 4"
            class="qc-point-label"
            :text-anchor="labelAnchor(p)"
            :style="{ fontWeight: p.recommended ? 600 : 400 }"
          >
            {{ p.name }}
          </text>
          <text
            v-if="p.note"
            :x="labelX(p)"
            :y="yPx(p.y) + 18"
            class="qc-point-note"
            :text-anchor="labelAnchor(p)"
          >
            {{ p.note }}
          </text>
        </g>
      </svg>

      <aside v-if="recommendations.length > 0" class="qc-recs">
        <div class="qc-recs-title">Mi recomendación</div>
        <ul class="qc-recs-list">
          <li v-for="rec in recommendations" :key="rec.label" class="qc-rec">
            <span class="qc-rec-emoji">{{ rec.emoji }}</span>
            <div class="qc-rec-body">
              <span class="qc-rec-label">{{ rec.label }}</span>
              <strong class="qc-rec-tool">{{ rec.tool }}</strong>
            </div>
          </li>
        </ul>
      </aside>
    </div>

    <figcaption v-if="footnote" class="qc-footnote">
      {{ footnote }}
    </figcaption>
  </figure>
</template>

<style scoped>
.quadrant-chart {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
  color: var(--ink);
  margin: 1rem 0 0;
}

.qc-header {
  margin-bottom: 0.8rem;
}

.qc-kicker {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-mute);
  margin-bottom: 0.3rem;
}

.qc-title {
  font-family: 'IBM Plex Serif', serif;
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.15;
}

.qc-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-mute);
  margin: 0 0 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--rule);
}

.qc-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.qc-body {
  position: relative;
}

.qc-svg {
  width: 100%;
  height: auto;
  display: block;
}

.qc-grid {
  stroke: var(--rule);
  stroke-width: 0.5;
}

.qc-axis-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  fill: var(--ink-mute);
  letter-spacing: 0.04em;
}

.qc-axis-title {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  fill: var(--ink-mute);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.qc-point-label {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink);
}

.qc-point-note {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  fill: var(--ink-mute);
}

.qc-recs {
  position: absolute;
  right: 0;
  top: 28px;
  width: 260px;
  border-left: 1px solid var(--rule);
  padding-left: 1.2rem;
}

.qc-recs-title {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  margin-bottom: 0.6rem;
}

.qc-recs-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}

.qc-rec {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 0.82rem;
}

.qc-rec-emoji {
  font-size: 1.05rem;
  line-height: 1.2;
}

.qc-rec-body {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.qc-rec-label {
  color: var(--ink-soft);
  font-size: 0.78rem;
  line-height: 1.25;
}

.qc-rec-tool {
  color: var(--ink);
  font-weight: 600;
  font-size: 0.88rem;
  line-height: 1.2;
}

.qc-footnote {
  margin-top: 1rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  color: var(--ink-mute);
  border-top: 1px solid var(--rule);
  padding-top: 0.6rem;
}
</style>
