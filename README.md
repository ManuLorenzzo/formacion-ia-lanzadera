# Formación IA para Producto — Lanzadera · Abril 2026

Proyecto completo para la formación de 90 min que Manu Lorenzo (CEO de Mint ITV) da en Lanzadera.

**Tesis de la charla:**
> *El trabajo del founder con IA no es promptear mejor. Es especificar como un arquitecto y verificar como un QA. El prompting es un subproducto.*

**Dato ancla:**
> *En Mint somos 2 devs senior + 1 en prácticas. Producimos como un equipo de 10.*

---

## Estructura del proyecto

```
formacion_ia_lanzadera/
│
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-04-22-formacion-ia-lanzadera-design.md    # Spec completo v5.3
│
├── presentation/                  # Slidev deck
│   ├── slides.md                  # 90 min de presentación
│   ├── style.css                  # Sistema visual editorial-tech
│   ├── components/                # Componentes Vue custom
│   │   ├── PalancaHeader.vue
│   │   ├── DatoAncla.vue
│   │   └── MatrizComparativa.vue
│   ├── setup/
│   │   ├── main.ts                # Carga CSS global
│   │   └── shortcuts.ts           # Atajos del ponente
│   ├── public/
│   │   └── data-verified.md       # Datos fact-checked 22-abr-2026
│   ├── DESIGN_SYSTEM.md           # Guía del sistema visual
│   ├── package.json
│   └── README.md                  # Cómo correr Slidev
│
├── asset-pack/                    # Material descargable (QR al final de charla)
│   ├── matriz-quiero-x-usa-y.md   # Matriz Free Stack / Pro Stack
│   ├── cheat-sheet-5cs.md         # 1-pager A4 de las 5 C's
│   ├── perks-lanzadera.md         # Guía de AWS/GCP/Azure y Bedrock
│   ├── prompts-plantilla.md       # Prompts de las 4 demos
│   └── README.md                  # Cómo exportar a PDF con pandoc
│
└── demo-prep/                     # Guiones y backups de las demos
    ├── pre-work-survey.md         # ⭐ Encuesta + plan de integración (48h antes)
    ├── demo-1-gemini-deep-research.md    # Cliente · Deep Research para founder_A
    ├── demo-2-mvp-lovable.md             # ⭐ Producto · construir MVP para founder_B (WOW principal)
    ├── demo-2-notebooklm-podcast.md      # Asistente · ahora bonus track, no principal
    ├── demo-3-triple-marca.md            # Marca · Nano Banana + Veo + Claude Design
    ├── demo-4-pdf-analisis.md            # Datos · PDF → insights
    ├── backup-plans.md            # Qué hacer si algo falla
    └── pre-event-checklist.md     # Por ventanas temporales
```

---

## Quick start

### Presentación

```bash
cd presentation
npm install
npm run dev
```

Abre http://localhost:3030 y presenta. `P` para presenter mode, `O` para overview.

### Asset pack (exportar a PDF)

```bash
cd asset-pack
# Requiere pandoc + wkhtmltopdf o weasyprint
pandoc matriz-quiero-x-usa-y.md -o matriz.pdf --pdf-engine=wkhtmltopdf
# Ver asset-pack/README.md para comando completo de todos
```

---

## Flujo de trabajo recomendado

### 1. Revisar spec
Lee `docs/superpowers/specs/2026-04-22-formacion-ia-lanzadera-design.md` para entender decisiones. Especialmente:
- **Checklist de fact-check** (sección al final) — data que cambia rápido
- **Risk register** — qué puede fallar

### 2. Preparar demos
Cada demo en `demo-prep/` tiene setup, script, backup plan y métricas de éxito. Ejecútalas todas al menos 2 veces antes del evento.

### 3. Personalizar presentación
Abre `presentation/slides.md` y:
- Sustituye `[competidor]` por nombre real en demo 1
- Sustituye `[confirmar]` en cifras de perks Lanzadera (consultar al equipo Lanzadera)
- Ajusta el QR de la slide final a tu URL real del asset pack
- Confirma que el sector del ejemplo sectorial encaja con la audiencia real

### 4. Publicar asset pack
Decide hosting:
- **GitHub repo** (recomendado por transparencia y facilidad de actualización)
- **Notion público**
- **Plataforma Lanzadera** (pregunta al equipo si aceptan)

Crea URL corta + QR, y úsalo en la slide de cierre.

### 5. Pre-event checklist
`demo-prep/pre-event-checklist.md` te guía desde 7 días antes hasta 5 minutos antes de empezar.

---

## Stack usado

| Capa | Tool | Por qué |
|------|------|---------|
| Slides | **Slidev** | Markdown-first, Vue 3, exporta PDF/PPTX, offline, control pro |
| Design system | **IBM Plex + paleta sobria** | Editorial tech, anti-Gamma, anti-Canva |
| Components | **Vue 3 custom** | PalancaHeader, DatoAncla, MatrizComparativa |
| Asset pack | **Markdown + pandoc** | Fácil actualizar, exporta a PDF limpios |

---

## Cambios volátiles pre-evento

Revisar antes del día de la charla (ver `presentation/public/data-verified.md` sección final):

1. **Sora de OpenAI cierra el 26 abril 2026** — si la charla es posterior, actualizar slide del bloque Marca
2. **Claude Code en plan Pro $20** está inestable — revisar claude.com/pricing
3. **Cifras exactas de perks Lanzadera** no están publicadas — consultar al equipo Lanzadera

---

## Constraint crítico

**CERO publicidad de Mint ITV.** El logo no aparece, el nombre de la empresa solo se menciona en el dato ancla ("en Mint somos 3..."). Cualquier snippet que delate self-promo debe quitarse.

---

## Licencia

Proyecto personal de Manu Lorenzo, creado para la formación específica en Lanzadera en abril 2026. No redistribuible sin permiso explícito.
