# Asset Pack — Formación IA para Producto, Lanzadera (abril 2026)

Pack descargable para asistentes a la charla de 90 min de Manu Lorenzo (CEO Mint ITV). Todo lo que cubrimos en la sesión, en formato consulta rápida.

## Qué hay en el pack

| Archivo | Qué es | Cuándo consultarlo |
|---|---|---|
| `matriz-quiero-x-usa-y.md` | Matriz de decisión de 15 casos de uso × herramienta recomendada, con versiones Free Stack y Pro Stack. | Cuando tengas un problema concreto ("quiero X") y necesites decidir qué herramienta usar. |
| `cheat-sheet-5cs.md` | 1-pager imprimible en A4 con las 5 C's del prompting (Cabeza, Caja, Contexto, Cortar, Check). | Antes de escribir un prompt importante. Imprímelo y pégalo al lado del monitor. |
| `perks-lanzadera.md` | Guía para acceder a IA Pro sin pagar de bolsillo: perks de Lanzadera + programas abiertos (Microsoft for Startups, Google for Startups, AWS Activate) + guías Bedrock y Azure OpenAI. | Antes de meter la tarjeta en ningún SaaS de IA. |
| `prompts-plantilla.md` | Plantillas copy-paste de los 4 prompts demo de la charla: Deep Research de competidor, NotebookLM interno, Nano Banana Pro para imagen marketing, análisis de PDF financiero. | Cuando quieras replicar las demos con tu caso real. |

## Cómo exportar a PDF

Los 4 archivos son Markdown estándar compatible con pandoc. Para imprimir o distribuir en PDF:

### Opción A — pandoc (recomendada)

```bash
# Instalar pandoc + LaTeX (una vez)
brew install pandoc basictex

# Exportar un archivo
pandoc cheat-sheet-5cs.md \
  -o cheat-sheet-5cs.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1.5cm \
  -V mainfont="Helvetica" \
  -V fontsize=10pt
```

Para el cheat-sheet específicamente (que debe caber en A4 una cara), añade:
```bash
-V geometry:"a4paper,margin=1cm" -V fontsize=9pt
```

Para exportar los 4 archivos de golpe a un único PDF (libro completo):
```bash
pandoc \
  matriz-quiero-x-usa-y.md \
  cheat-sheet-5cs.md \
  perks-lanzadera.md \
  prompts-plantilla.md \
  -o asset-pack-completo.pdf \
  --pdf-engine=xelatex \
  --toc \
  -V geometry:margin=2cm \
  -V mainfont="Helvetica" \
  -V fontsize=10pt
```

### Opción B — VSCode / Obsidian / Typora

Abrir el `.md` → Print / Export to PDF desde el menú. Resultados variables, ajustar márgenes antes de imprimir.

### Opción C — navegador

1. Renderizar el `.md` en GitHub, o con una extensión Markdown Viewer en Chrome/Firefox
2. Cmd+P / Ctrl+P → Guardar como PDF
3. Ajustar márgenes a "Estrechos" y escala al 85-90%

## Cómo personalizar antes de distribuir

Todo el pack está pensado para que puedas hacerlo tuyo si lo redistribuyes. Puntos editables:

1. **Pie de página de cada archivo:** actualizar fecha y número de versión cuando revises (las herramientas de IA cambian de pricing y features casi cada mes).

2. **`matriz-quiero-x-usa-y.md`:**
   - Precios: verificar al trimestre. Lovable, Cursor, Midjourney y otros han cambiado pricing 2-3 veces en el último año.
   - URLs: auditar cada 6 meses; algunas herramientas cambian de dominio (vids.new → puede migrar).
   - Cuotas free: suelen apretar o aflojar sin avisar.

3. **`perks-lanzadera.md`:**
   - Cifras exactas de créditos Google Cloud y AWS Activate vía Lanzadera: confirmar con el equipo de Lanzadera cada año.
   - Tiers de Microsoft for Startups y Google for Startups: consultar landing oficial antes de distribuir.
   - Ejemplos de `region` en Bedrock / Azure OpenAI: revisar qué regiones EU tienen los modelos más recientes.

4. **`prompts-plantilla.md`:**
   - Los placeholders `{{así}}` son para rellenar. Si los vas a personalizar para tu propio equipo, considera sustituir los genéricos por ejemplos propios del sector de tu startup.

5. **Búsqueda de `[verificar]`:** en todos los archivos hay marcas `[verificar]` donde el dato era dudoso. Antes de una redistribución seria, buscar todas esas marcas, confirmar el dato, y quitar la marca.

```bash
# Encontrar todos los [verificar] del pack
grep -rn "\[verificar\]" *.md
```

## Licencia y uso

Material producido para la formación Lanzadera de abril 2026. Uso libre para los asistentes. Si redistribuyes, mantén el crédito del ponente o marca el documento como derivado.
