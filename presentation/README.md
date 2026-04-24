# Slides · Formación IA para Producto — Lanzadera

Presentación de 90 minutos construida con [Slidev](https://sli.dev). Estética editorial-tech, sistema custom (IBM Plex + paleta sobria), 4 demos en vivo.

## Quick start

```bash
cd presentation
npm install
npm run dev
```

Abre `http://localhost:3030` y ya estás presentando. Tecla `O` para overview, `D` para dark, `P` para presenter mode.

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Arranca Slidev en modo desarrollo con hot reload |
| `npm run build` | Build estático para hosting (SPA) |
| `npm run export` | Exporta la presentación a PDF |
| `npm run export:pptx` | Exporta a PowerPoint (requiere Playwright) |

## Estructura

```
presentation/
├── slides.md              # El deck completo
├── style.css              # Sistema visual (tokens, tipografía, componentes)
├── components/            # PalancaHeader, DatoAncla, MatrizComparativa
├── setup/
│   ├── main.ts           # Carga style.css
│   └── shortcuts.ts      # Atajos del ponente (Shift+1/2/3/4 para saltar a palancas)
├── public/
│   └── data-verified.md  # Datos fact-checked 22-abr-2026
├── DESIGN_SYSTEM.md       # Guía del sistema visual
└── package.json
```

## Atajos del ponente durante la charla

| Tecla | Acción |
|-------|--------|
| `Shift + 0` | Portada |
| `Shift + 1..4` | Saltar a palanca Cliente / Equipo / Marca / Datos |
| `Shift + Q` | Ir al cierre |
| `Shift + D` | Modo demo (oscurece UI para live coding) |
| `Shift + B` | Blackout (pantalla negra) |
| `Shift + N` | Toggle notas visibles |
| `T` | Reset timer |

## Antes del evento (24h)

1. Releer `../docs/superpowers/specs/2026-04-22-formacion-ia-lanzadera-design.md` sección "Checklist de fact-check OBLIGATORIO"
2. Ver `../demo-prep/pre-event-checklist.md`
3. Verificar `public/data-verified.md` (cambios volátiles listados abajo)
4. Ensayar demos end-to-end en <85 min
5. Confirmar hotspot móvil en sala real

## Cambios a re-verificar el día de la charla

Ver sección "CAMBIOS POST-VERIFICACIÓN" en `public/data-verified.md`. Resumen:
- Sora de OpenAI muere **26 abril 2026** — ajustar si la charla es posterior
- Claude Code en Pro $20 está **fluctuando** (revisar claude.com/pricing)
- Cifras exactas de perks de Lanzadera (GCP, AWS) **no verificadas** — consultar al equipo Lanzadera
