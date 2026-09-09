# Auditoría AdSense — infovendeconia.com

## Objetivo
Corregir las señales asociadas al rechazo de AdSense por **contenido de poco valor** sin eliminar las vías legítimas de monetización del proyecto.

## Estado técnico confirmado
- `ads.txt` existe en el repositorio con el publisher `pub-9789327885520093`.
- El código de AdSense está presente en distintas páginas.
- No se ha detectado Sirdata en la búsqueda del repositorio.
- El trabajo de corrección se realiza en `fix/adsense-value-review-v1`; `main` no se modifica durante la auditoría.

## Hallazgos críticos
1. **Contenido de plantilla e incompleto**
   - Se han detectado páginas con encabezados vacíos (`Sección 4`, `Sección 5`, etc.) y texto genérico intercambiable.
   - Ejemplo claro previo a corrección: `negocios/ia-en-pequenas-empresas.html`.

2. **Placeholders comerciales publicados**
   - Existen referencias heredadas como `amzn.to/tu-codigo`, `shein.top/tu-codigo`, `brevo.com/?affid=tu-codigo` y `appsaccel.com/?aff=tu-codigo`.
   - Estos bloques aparecen repetidos en páginas informativas, institucionales y legales.

3. **Promoción repetitiva en páginas que no la necesitan**
   - Bloques de herramientas y afiliación aparecen en privacidad, cookies, contacto, sobre nosotros y distintos artículos.
   - Esta mezcla reduce claridad editorial y confianza.

4. **Analítica duplicada o cargada directamente**
   - Varias páginas incluyen GA4 inline y lógica de tracking repetida.
   - Las páginas legales no deberían depender de scripts publicitarios/analíticos para cumplir su función informativa.

5. **Índices débiles o desactualizados**
   - `negocios/index.html` era una lista mínima con metadatos pobres y solo una parte del contenido real.
   - `guias/index.html` contiene una biblioteca muy extensa generada desde una lista de slugs y mantiene GA4/tracking inline.

6. **Sitemap con señales de mantenimiento deficiente**
   - Incluye rutas antiguas o inconsistentes (`/privacidad.html`, `/cookies.html`, `/aviso-legal.html`, `offline.html`, rutas `.html` para guías que en el repositorio existen como directorios con `index.html`).
   - Requiere reconciliación completa antes del reenvío a AdSense.

7. **Home demasiado orientada a monetización**
   - El hero menciona monetización desde el primer bloque.
   - Hay una recomendación afiliada prominente de Systeme.io junto al hero.
   - La sección de herramientas afiliadas aparece antes de que el sitio establezca suficiente valor editorial.

## Correcciones ya aplicadas en la rama
- Reescrita `legal/privacidad.html`: eliminados afiliados, placeholders y scripts innecesarios; contenido actualizado a analítica/publicidad actuales.
- Reescrita `legal/cookies.html`: eliminados afiliados, placeholders y scripts innecesarios; texto actualizado para Google Analytics/AdSense y consentimiento.
- Reescrita `sobre-nosotros.html`: reforzado propósito, criterio editorial, mantenimiento y transparencia comercial.
- Reescrita `contacto.html`: eliminados bloques promocionales y placeholders.
- Reescrita `negocios/ia-en-pequenas-empresas.html`: sustituida plantilla incompleta por una guía específica con método, ejemplos, límites y métricas.
- Reconstruido `negocios/index.html` como índice editorial útil.

## Criterio para el resto del trabajo
Cada página indexable debe aportar:
- intención concreta;
- explicación específica;
- proceso, método o criterios aplicables;
- ejemplos o límites cuando sean relevantes;
- enlaces internos útiles;
- monetización secundaria, nunca dominante;
- ausencia total de placeholders o secciones vacías.

## Pendientes prioritarios
- Auditar y limpiar las páginas con `tu-codigo` y bloques comerciales repetidos.
- Revisar las guías de monetización/ingresos por riesgo de contenido genérico o promesas excesivas.
- Reconstruir `guias/index.html` con una selección editorial clara en lugar de una lista masiva sin jerarquía.
- Revisar `index.html` para mover herramientas afiliadas y monetización a una posición secundaria.
- Revisar `legal/aviso-legal.html` y cualquier duplicado legal en raíz.
- Reconciliar `sitemap.xml` con rutas reales y eliminar páginas que no deban indexarse (`offline.html`, gracias, app técnica, duplicados legales si procede).
- Centralizar GA4/AdSense/Consent Mode para evitar implementaciones repetidas e incoherentes.
- Verificar el Preview de Vercel antes de fusionar a `main`.

## Condición para reenvío a AdSense
No solicitar nueva revisión hasta que la versión corregida esté desplegada, rastreable y cumpla simultáneamente:
1. contenido editorial dominante;
2. ausencia de plantillas, secciones vacías y placeholders;
3. afiliación secundaria y claramente separada;
4. legales coherentes y sin scripts innecesarios;
5. sitemap y navegación consistentes;
6. configuración de anuncios/analítica/consentimiento revisada en producción.
