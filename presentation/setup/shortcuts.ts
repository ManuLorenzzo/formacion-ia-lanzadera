import { defineShortcutsSetup } from '@slidev/types'

/**
 * Shortcuts custom para la presentación de Lanzadera.
 *
 * Referencia Slidev: https://sli.dev/custom/config-shortcuts
 *
 * Por defecto Slidev ya trae:
 *   - space / right / n       → siguiente
 *   - left / p / backspace    → anterior
 *   - up / k                  → slide anterior (skip clicks)
 *   - down / j                → slide siguiente (skip clicks)
 *   - o                       → overview
 *   - d                       → dark mode toggle
 *   - f                       → fullscreen
 *   - g                       → goto
 *
 * Aquí sólo añadimos los que necesita Manu específicamente para esta charla.
 */
export default defineShortcutsSetup((nav, base) => {
  // Filtramos las teclas 'o' y 'g' del base para desactivar overview y goto
  const filteredBase = base.filter((s) => {
    const k = typeof s.key === 'string' ? s.key.toLowerCase() : ''
    return k !== 'o' && k !== 'g'
  })

  return [
    ...filteredBase,

    // No-ops defensivos para 'o' y 'g' por si algún binding superviviera
    {
      key: 'o',
      fn: () => {},
      autoRepeat: false,
    },
    {
      key: 'g',
      fn: () => {},
      autoRepeat: false,
    },

    /* ---------------------------------------------------------------------
     *  NAVEGACIÓN POR PALANCAS
     *  Cada palanca empieza en una slide conocida. Se pueden redefinir
     *  los números según el estado final de slides.md.
     *
     *  Atajos: SHIFT + 1/2/3/4 → saltar a cada palanca
     *          SHIFT + 0       → volver a la portada
     *          SHIFT + Q       → slide de Q&A / cierre
     * ------------------------------------------------------------------ */
    {
      key: 'shift+digit0',
      fn: () => nav.go(1),
      autoRepeat: false,
    },
    {
      key: 'shift+digit1',
      // Palanca 1 · Cliente
      fn: () => nav.go(getAnchorSlide('cliente') ?? 10),
      autoRepeat: false,
    },
    {
      key: 'shift+digit2',
      // Palanca 2 · Equipo
      fn: () => nav.go(getAnchorSlide('equipo') ?? 25),
      autoRepeat: false,
    },
    {
      key: 'shift+digit3',
      // Palanca 3 · Marca
      fn: () => nav.go(getAnchorSlide('marca') ?? 40),
      autoRepeat: false,
    },
    {
      key: 'shift+digit4',
      // Palanca 4 · Datos
      fn: () => nav.go(getAnchorSlide('datos') ?? 55),
      autoRepeat: false,
    },
    {
      key: 'shift+q',
      fn: () => nav.go(getAnchorSlide('qa') ?? nav.total.value),
      autoRepeat: false,
    },

    /* ---------------------------------------------------------------------
     *  MODO DEMO EN VIVO
     *
     *  SHIFT + D → toggle clase .demo-mode en <html> para oscurecer la UI
     *              mientras Manu hace la demo en otra ventana/app.
     *  SHIFT + B → toggle "blackout" (pantalla negra, atención al ponente).
     * ------------------------------------------------------------------ */
    {
      key: 'shift+d',
      fn: () => {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('demo-mode')
        }
      },
      autoRepeat: false,
    },
    {
      key: 'shift+b',
      fn: () => {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('blackout')
        }
      },
      autoRepeat: false,
    },

    /* ---------------------------------------------------------------------
     *  TIMER · t → reinicia el timer del speaker
     *  (el timer en sí se implementa en un componente; aquí solo el reset)
     * ------------------------------------------------------------------ */
    {
      key: 't',
      fn: () => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('presenter:reset-timer'))
        }
      },
      autoRepeat: false,
    },

    /* ---------------------------------------------------------------------
     *  SHIFT + N → toggle de notas visibles en la slide (para ensayar)
     * ------------------------------------------------------------------ */
    {
      key: 'shift+n',
      fn: () => {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('show-notes')
        }
      },
      autoRepeat: false,
    },
  ]
})

/* ----------------------------------------------------------------------
 *  Helper para resolver slides por "ancla". Cuando Manu tenga el slides.md
 *  cerrado, rellena aquí los números reales. Mientras tanto se usa el
 *  fallback del segundo argumento en nav.go(..., fallback).
 * ------------------------------------------------------------------- */
function getAnchorSlide(key: 'cliente' | 'equipo' | 'marca' | 'datos' | 'qa'): number | null {
  const anchors: Record<string, number | null> = {
    cliente: null,
    equipo:  null,
    marca:   null,
    datos:   null,
    qa:      null,
  }
  return anchors[key] ?? null
}
