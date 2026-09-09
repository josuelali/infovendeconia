# Auditoría AdSense — infovendeconia.com

## Objetivo
Corregir las señales más claras asociadas al rechazo de AdSense por **contenido de poco valor** y dejar una versión editorial coherente, navegable y preparada para validación antes de producción.

## Estado técnico confirmado
- Repositorio: `josuelali/infovendeconia`.
- Rama de trabajo: `fix/adsense-value-review-v1`.
- `main` no se ha modificado durante la auditoría.
- `ads.txt` ya existe con el publisher `pub-9789327885520093`.
- El proyecto Vercel canónico es `infovendeconia` (`prj_luR1iUZrB891rE3i0dQI6iNabKaS`).
- El Preview de la rama se genera automáticamente y el último despliegue comprobado está `READY`.

## Problemas encontrados
1. Páginas heredadas construidas con texto de plantilla y encabezados genéricos como `Sección 4`, `Sección 5`, etc.
2. Bloques comerciales repetidos en páginas donde no aportaban valor.
3. Placeholders publicados (`tu-codigo`) para afiliados inexistentes.
4. Promoción de herramientas incluso en privacidad, cookies, aviso legal, contacto y sobre nosotros.
5. Home orientada a monetización y afiliación antes de establecer utilidad editorial.
6. Índice de guías masivo sin jerarquía editorial.
7. Índice de negocios que mezclaba páginas revisadas con contenido heredado todavía pendiente de revisión.
8. Sitemap con centenares de rutas antiguas, inconsistentes o no prioritarias y páginas técnicas como `offline.html`.
9. Analítica y tracking repetidos directamente en páginas institucionales y legales.

## Correcciones completadas
### Estructura principal
- `index.html` reescrito como portada editorial: rutas de aprendizaje, método, contenido destacado y transparencia comercial.
- `guias/index.html` reconstruido como biblioteca curada por temas; eliminada la lista masiva automática de slugs.
- `negocios/index.html` limitado a contenidos que han pasado la revisión editorial actual.

### Confianza y legales
- `sobre-nosotros.html` reforzado con propósito, método y transparencia.
- `politica-editorial.html` creado con criterios de preparación, verificación, actualización, correcciones y afiliación.
- `contacto.html` simplificado y limpiado de promociones.
- `legal/privacidad.html` reescrito sin bloques afiliados ni tracking promocional.
- `legal/cookies.html` actualizado a la configuración actual de analítica/publicidad y consentimiento.
- `legal/aviso-legal.html` reescrito sin afiliados ni scripts innecesarios.

### Guías de negocio reescritas
- `negocios/ia-en-pequenas-empresas.html`
- `negocios/automatizacion-sencilla-con-ia.html`
- `negocios/ia-para-crear-ideas-de-contenido.html`
- `negocios/ia-para-atencion-al-cliente-basica.html`

Estas páginas sustituyen plantillas incompletas por métodos, ejemplos, límites, métricas y reglas de revisión.

### Guías editoriales prioritarias reescritas
- `guias/como-escribir-prompts-que-funcionan-formula-simple-con-ejemplos/`
- `guias/como-detectar-informacion-falsa-o-inventada-por-ia/`
- `guias/errores-comunes-al-usar-ia-y-como-evitarlos-sin-complicarte/`
- `guias/como-usar-ia-para-resumir-textos-largos/`
- `guias/como-organizar-proyectos-con-ia/`
- `guias/ia-para-ahorrar-tiempo-12-tareas-que-puedes-automatizar-hoy/`
- `guias/como-crear-contenido-con-ia-texto-imagen-y-video-sin-liarte/`
- `guias/generacion-de-contenido-con-ia-que-debes-saber/`

Se eliminaron de estas páginas los bloques de afiliación dominantes, plantillas genéricas y llamadas comerciales que competían con el contenido.

### Rastreo e indexación
- `sitemap.xml` reconstruido desde cero para incluir únicamente portada, hubs, confianza/legal y el conjunto editorial revisado.
- Eliminadas del sitemap las rutas técnicas, duplicadas, antiguas o todavía no revisadas.
- `robots.txt` ya permite rastreo general y apunta al sitemap canónico.
- `vercel.json` añadido para marcar como `noindex, nofollow` páginas técnicas (`app.html`, `offline.html`, `gracias.html`, `estructura.txt`) y redirigir duplicados legales históricos a `/legal/...`.

## Tratamiento del archivo histórico
El repositorio conserva muchas páginas antiguas para no destruir contenido sin una decisión específica. Esas páginas no se promocionan desde la navegación principal ni se incluyen en el nuevo sitemap hasta superar una revisión editorial. Esto evita presentar el archivo heredado completo como contenido prioritario durante la revisión de AdSense y conserva la posibilidad de recuperar y mejorar contenidos concretos posteriormente.

## Criterio editorial vigente
Una página destacada/indexable debe aportar:
- una intención concreta;
- explicación específica del problema;
- proceso, método o criterios aplicables;
- ejemplos o límites cuando sean relevantes;
- revisión humana cuando haya riesgo;
- enlaces internos útiles;
- monetización secundaria y claramente separada;
- ausencia de placeholders, secciones vacías y promesas de ingresos garantizados.

## Validación de Preview
- Vercel detecta la rama y ha creado Preview automáticamente.
- Último Preview comprobado tras el bloque final: estado `READY`.
- La rama está por delante de `main` y no está detrás de producción.

## Antes de solicitar nueva revisión de AdSense
1. Fusionar únicamente tras revisar visualmente el Preview.
2. Confirmar que producción despliega el SHA fusionado.
3. Verificar en producción `/ads.txt`, `/sitemap.xml`, navegación, legales y varias guías revisadas.
4. Confirmar configuración de mensaje europeo/CMP y Consent Mode en la cuenta de AdSense para `infovendeconia.com`.
5. No volver a añadir páginas de plantilla, bloques `tu-codigo` ni promoción masiva a los hubs principales.

## Resultado de la auditoría
La causa editorial más evidente no era falta de número de páginas, sino **exceso de contenido heredado poco específico y monetización repetitiva**. La versión de esta rama cambia el foco a una biblioteca curada, contenido revisado y señales de confianza coherentes. No se puede garantizar la aprobación de AdSense, pero sí se han corregido las señales internas más claras detectadas en el repositorio.
