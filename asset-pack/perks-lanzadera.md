# Perks de Startup para IA Pro

## Guía práctica para acceder a herramientas IA sin pagar de bolsillo

> Antes de meter la tarjeta en ningún SaaS de IA, revisa esta guía. Entre perks de Lanzadera y programas abiertos puedes tener $100k-$500k en créditos cloud para correr modelos top (Claude, GPT-5, Gemini) durante 1-2 años.

---

## 1. El Free Stack puro

Lo que cualquiera tiene gratis con **una cuenta Google + una cuenta Claude free + una cuenta OpenAI free**. Sin tarjeta, sin perks, sin nada.

| Herramienta | URL | Qué te da gratis |
|---|---|---|
| NotebookLM | https://notebooklm.google.com | 100 notebooks, 50 fuentes c/u, 500k palabras por fuente |
| Gemini 2.5 Pro (AI Studio) | https://aistudio.google.com | 1M de contexto en browser, gratis |
| Gemini CLI | https://github.com/google-gemini/gemini-cli | Claude Code alternativo, gratis con Google account |
| ImageFX | https://labs.google/fx/tools/image-fx | Generación de imágenes ilimitada [verificar cuota] |
| Veo 3.1 en vids.new | https://vids.new | 10 vídeos/mes, 720p, 8s, sin audio sincronizado |
| Claude.ai (free) | https://claude.ai | Sonnet con cuota diaria reseteable |
| ChatGPT (free) | https://chatgpt.com | GPT-4o/5 mini con cuota diaria |
| Gemini (free) | https://gemini.google.com | Gemini Flash con cuota diaria |
| Perplexity (free) | https://perplexity.ai | Búsquedas ilimitadas, Pro Search limitado |
| Bolt (free) | https://bolt.new | Tokens diarios para generar apps |
| Lovable (free) | https://lovable.dev | 5 mensajes/día |
| Suno (free) | https://suno.com | 10 créditos diarios |
| ElevenLabs (free) | https://elevenlabs.io | 10k caracteres/mes |
| n8n (self-hosted) | https://n8n.io | Ilimitado si levantas Docker tú |

**Valor real de este stack:** si lo equiparas a Pro, rondaría los **$150-200/mes** comprado individualmente. Gratis si sabes rotar.

---

## 2. Perks de Lanzadera

Las startups aceleradas por Lanzadera tienen acceso a bolsas de créditos cloud a través de la plataforma de partners.

### Google Cloud for Startups (vía Lanzadera)

- **Crédito:** aproximadamente $25k en GCP credits [verificar tier exacto 2026]
- **Qué desbloquea:** Vertex AI con Gemini 2.5/3.x, Claude en Vertex (Opus 4.x, Sonnet 4.x), Imagen/Veo, BigQuery, Cloud Run
- **Cómo activar:**
  1. Acceder al portal de partners de Lanzadera
  2. Sección "Cloud credits" → Google Cloud
  3. Solicitar código de activación (tarda 2-5 días laborables)
  4. Aplicar en https://console.cloud.google.com/billing con la cuenta de facturación de la startup

### AWS Activate (vía Lanzadera)

- **Crédito:** aproximadamente $10-11k en AWS credits [verificar tier exacto 2026]
- **Qué desbloquea:** Bedrock (Claude Opus/Sonnet/Haiku), SageMaker, Lambda, todo AWS
- **Cómo activar:**
  1. Portal de partners de Lanzadera → AWS Activate Portfolio
  2. Solicitar Organization ID de Lanzadera
  3. Ir a https://aws.amazon.com/activate/ → Apply con el Org ID
  4. Aprobación en ~1-3 días

> Nota: los tiers y cantidades exactas varían cada año. Confirmar con el equipo de Lanzadera las cifras vigentes en abril 2026.

---

## 3. Perks externos (cualquier founder puede aplicar)

Aunque no estés en Lanzadera, estos programas son abiertos y muy generosos. Aplicar requiere básicamente tener la startup constituida, web, y responder un formulario.

### Microsoft for Startups Founders Hub

- **URL:** https://www.microsoft.com/en-us/startups
- **Crédito:** hasta **$150k en Azure** (escalonado: $1k → $25k → $150k según fase)
- **Qué desbloquea:** Azure OpenAI Service con **GPT-5, GPT-5.2, GPT-5.4** (los modelos OpenAI corren aquí con latencia y compliance enterprise), GitHub Copilot Enterprise, Visual Studio, LinkedIn Premium
- **Requisitos:** no hace falta investor ni facturación mínima en el tier inicial
- **Tiempo aprobación:** inmediato para tier $1k, revisión manual para $25k+

### Google for Startups Cloud Program

- **URL:** https://cloud.google.com/startup
- **Crédito:** hasta **$350k en GCP** según tier (Start, Scale)
- **Qué desbloquea:** todo Vertex AI (Gemini, Claude en Vertex, Imagen, Veo), BigQuery ML, infra
- **Requisitos:** startup con inversión externa para tiers altos. Tier inicial más abierto.
- **Tiempo aprobación:** 2-4 semanas

### AWS Activate (acceso general, sin Lanzadera)

- **URL:** https://aws.amazon.com/activate/
- **Crédito:** hasta **$100k en AWS** según tier (Founders, Portfolio)
- **Qué desbloquea:** Bedrock con Claude, infra general
- **Requisitos:** Portfolio tier requiere estar en aceleradora/VC partner. Founders tier es más accesible.

**Estrategia recomendada:** aplica a los 3. Los créditos no son fungibles entre clouds, pero tener $150k Azure + $100k AWS + $350k GCP te da 2+ años de runway en infra IA sin pagar de bolsillo.

---

## 4. Guía Bedrock — Claude en AWS

Cuándo: cuando Claude Pro ($20/mes) se queda corto por cuota, o cuando necesitas usar Claude via API en producción con compliance enterprise.

**Setup básico (10 minutos):**

1. Cuenta AWS con créditos Activate aplicados
2. Consola AWS → **Amazon Bedrock** → región `us-east-1` o `eu-west-1` (mejor latencia desde España: `eu-west-1` Irlanda o `eu-west-3` París)
3. **Model access** → solicitar acceso a los modelos Anthropic (Claude Opus 4.x, Sonnet 4.x, Haiku 4.x). Aprobación en minutos.
4. **API call de prueba** con AWS CLI:
   ```bash
   aws bedrock-runtime invoke-model \
     --model-id anthropic.claude-opus-4-5-20250514-v1:0 \
     --body '{"anthropic_version":"bedrock-2023-05-31","max_tokens":1000,"messages":[{"role":"user","content":"Hola"}]}' \
     --cli-binary-format raw-in-base64-out \
     out.json
   ```
5. Precios: **se facturan contra tus créditos Activate**. Input/output por millón de tokens; Opus es más caro, Haiku más barato.

**Cuándo compensa vs Claude Pro:**
- Claude Pro = $20/mes flat, ~45 mensajes cada 5h (cuota variable)
- Bedrock = pay-per-token pero contra créditos gratis
- Si tienes $10k+ en AWS credits y haces >500 llamadas/día → Bedrock gana
- Si eres 1 founder usando chat casual → Claude Pro gana

---

## 5. Guía Azure OpenAI — GPT en Azure

Cuándo: cuando quieres usar GPT-5/5.2/5.4 sin pagar ChatGPT Plus, con créditos Azure de Microsoft for Startups.

**Setup básico (15 minutos):**

1. Cuenta Azure con créditos Founders Hub aplicados
2. Portal Azure → crear recurso **Azure OpenAI Service** (región: `Sweden Central` o `West Europe` tienen los modelos más recientes primero)
3. **Model deployments** → desplegar `gpt-5`, `gpt-5.2` o `gpt-5.4` (naming 2026). Los deployments son inmediatos.
4. **Keys and Endpoint** → copia `endpoint` y `api_key`
5. Llamada de prueba (Python):
   ```python
   from openai import AzureOpenAI
   client = AzureOpenAI(
       api_key="TU_KEY",
       api_version="2026-01-01-preview",  # [verificar versión vigente]
       azure_endpoint="https://TU-RECURSO.openai.azure.com"
   )
   r = client.chat.completions.create(
       model="gpt-5",  # nombre del deployment
       messages=[{"role":"user","content":"Hola"}]
   )
   ```
6. Precios: contra créditos Founders Hub. Mismo pricing por token que OpenAI directo, pero contra tu bolsa gratis.

**Extra Azure:** GitHub Copilot Enterprise también viene incluido en Founders Hub (~$39/usuario/mes valor).

---

## 6. Calculadora "¿Team Plan vs pay-per-use?"

Regla rápida. Si tu equipo usa IA intensivamente, puede compensar más un plan Team/Enterprise que APIs individuales.

### La regla de las 100 llamadas/día

**Por persona:**
- **< 100 llamadas/día** → plan individual Pro ($20/mes) o free + API esporádico
- **100-500 llamadas/día** → Team Plan (Claude Team $30/usuario/mes, ChatGPT Team $25-30/usuario/mes) — descuento por volumen, admin centralizado
- **> 500 llamadas/día o uso en producto** → pasa a API (Bedrock/Azure) con créditos cloud

**Para equipos:**
- Equipo **< 5 personas** → suma planes individuales Pro, no pelees con el procurement de Team
- Equipo **5-20 personas** → Team Plan (beneficio: SSO, admin, billing centralizado, seat pooling en algunos casos)
- Equipo **> 20 personas** o **producto con IA embebida** → Enterprise o API directa

### Cuándo tiene sentido pagar CERO

- Eres 1-2 founders
- Uso mixto chat + generación ocasional
- No tienes producto con IA embebida todavía
- → **Free Stack puro (sección 1) + créditos cloud de perks (sección 2-3) para picos**

### Cuándo tiene sentido pagar al menos $20/mes

- El founder pasa >2h/día con un modelo específico
- Necesitas Opus 4.7 / GPT-5.4 / Gemini 3.x Pro sin cuotas aleatorias cortándote el flow
- Usas Claude Code o Cursor para desarrollo diario

En ese caso: **Claude Pro $20** o **Gemini AI Pro $20** o **ChatGPT Plus $20**. Uno. No tres.

---

última actualización: 22 abril 2026
versión 1.0
