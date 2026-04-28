---
title: Cheat sheet de las 5 C's
subtitle: Checklist táctica para escribir un prompt como senior
eyebrow: Material 02
---

**Checklist para que cualquier founder no-técnico prompte como senior.** Imprime en A4, pégalo al lado del monitor.

---

## 1. Cabeza — Piensa antes de prompt

**Qué es:** Antes de abrir el chat, ten claro el output que quieres. Si tú no sabes qué buscas, el modelo tampoco.

**MALO:** "Ayúdame con la estrategia de marketing."

**BUENO:** "Necesito un plan de 3 canales para captar 50 SQLs B2B en 60 días con presupuesto de 2k€. Priorizo LinkedIn Ads y outbound. Dame solo los 3 canales con CAC estimado y razonamiento."

**Auto-check:** ¿Podría un colega leer este prompt y saber exactamente qué le estoy pidiendo sin preguntarme nada?

---

## 2. Caja — Elige la tool adecuada

**Qué es:** Cada modelo/tool tiene un sweet spot. No uses ChatGPT para research con citas, ni Perplexity para escribir copy largo, ni Claude para generar imagen.

**MALO:** Pedirle a Claude que te genere una imagen de marketing.

**BUENO:** Claude Opus para el copy → Nano Banana Pro para la imagen → Veo 3.1 para el vídeo → Runway para editar.

**Auto-check:** ¿Esta tool es la mejor para este caso concreto, o es solo la que tengo abierta?

---

## 3. Contexto — Dale todo lo que necesita saber

**Qué es:** El modelo no conoce tu empresa, tu cliente, tu tono, tus restricciones. Si no se lo das, se lo inventa.

**MALO:** "Escribe un email de follow-up al cliente."

**BUENO:** "Soy CEO de una startup B2B SaaS (30 empleados, €2M ARR, vertical retail). Hablé hace 5 días con {{nombre}}, Director de Ops de una cadena con 40 tiendas. Objeción principal: integración con su ERP (SAP). Escribe follow-up de máximo 120 palabras, tono directo, que proponga una POC de 2 semanas sin coste. Cierre con pregunta concreta."

**Auto-check:** ¿He dado rol, audiencia, objetivo, restricciones y formato?

---

## 4. Cortar — En pasos pequeños, no monolitos

**Qué es:** Los modelos fallan más en prompts gigantes con 7 cosas a la vez. Descompón en pasos, valida, avanza.

**MALO:** "Analiza este PDF de la memoria anual del competidor, extrae las 10 métricas clave, compara con las nuestras, identifica 3 gaps, proponme estrategia de posicionamiento y redacta un one-pager para el board."

**BUENO:** 
- Paso 1: "Extrae las 10 métricas financieras y de tracción clave del PDF. Formato tabla."
- Paso 2: "Compara esa tabla con estos números nuestros: {{pegar}}. Marca gaps en rojo."
- Paso 3: "Dame 3 ángulos de posicionamiento basados en los gaps del paso 2."
- Paso 4: "Con el ángulo {{X}}, redacta one-pager de 1 página para board."

**Auto-check:** ¿Este prompt tiene más de 2 verbos de acción? Si sí, córtalo.

---

## 5. Check — Verifica cada paso antes de seguir

**Qué es:** El modelo alucina. Asumir que la primera respuesta es correcta y construir encima es el camino rápido al desastre.

**MALO:** Copy-pegar la respuesta directamente en un email al cliente.

**BUENO:** Leer la respuesta → verificar 2-3 datos concretos (cifras, nombres, URLs) → pedir al modelo las fuentes si son afirmaciones factuales → solo entonces usar o pasar al siguiente paso.

**Auto-check:** ¿He verificado al menos un dato antes de usar esto en producción o frente a un cliente?

---

## Meta: cuándo saltarse cada C

Las 5 C's son para **prompts que importan** (cliente, ronda, decisión de producto). Para prompts **low-stakes iterativos** (brainstorming solo para ti, juguetear con ideas, primera draft que vas a reescribir) puedes saltarte **Cabeza, Contexto y Cortar** — pero **nunca Caja ni Check**:

- **Caja** siempre importa: usar la herramienta incorrecta es perder tiempo.
- **Check** siempre importa: no copy-pegues nunca en producción sin verificar.

Regla práctica: si lo que generas va a ver **otra persona** que no sea tú, aplica las 5. Si es para ti y vas a reescribirlo, aplica solo Caja + Check.
