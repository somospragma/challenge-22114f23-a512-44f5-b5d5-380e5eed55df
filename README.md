# Fundamentos de Integración y Despliegue Continuo

El equipo de desarrollo móvil de una fintech está implementando una nueva característica en su aplicación de banca móvil. Para asegurar una entrega rápida y confiable, el equipo necesita adoptar prácticas de Integración y Despliegue Continuo (CI/CD). El objetivo es entender y aplicar las técnicas básicas de CI/CD para mejorar el flujo de trabajo del equipo.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Técnicas básicas de CI/CD |
| **Nivel** | advanced-l1 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 2-3 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración de CI/CD

**Objetivo:** Comprender los conceptos fundamentales de CI/CD y su importancia en el desarrollo de software.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Investiga y describe qué es la Integración Continua (CI) y el Despliegue Continuo (CD).
- Identifica los beneficios de implementar CI/CD en un proyecto de desarrollo móvil.

**Entregable:** Un documento que explique los conceptos de CI/CD y sus beneficios.

<details>
<summary>Pistas de conocimiento</summary>

- CI/CD ayuda a integrar cambios de código de manera frecuente y automatizar el proceso de despliegue.
- Los beneficios incluyen reducción de errores, entregas más rápidas y mejora en la calidad del software.

</details>

### Fase 2: Identificación de Herramientas y Prácticas

**Objetivo:** Identificar las herramientas y prácticas comunes utilizadas en CI/CD y cómo se aplican en un proyecto de desarrollo móvil.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Enumera al menos tres herramientas comunes utilizadas en CI/CD y describe su propósito.
- Discute las prácticas recomendadas para implementar CI/CD en un proyecto de Flutter.

**Entregable:** Un documento que liste las herramientas y prácticas comunes de CI/CD y su aplicación en proyectos de Flutter.

<details>
<summary>Pistas de conocimiento</summary>

- Herramientas como Jenkins, GitHub Actions y CircleCI son populares en CI/CD.
- Las prácticas recomendadas incluyen automatización de pruebas, control de versiones y monitoreo de despliegues.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué entiendes por Integración Continua (CI) y Despliegue Continuo (CD)?
- **paraQueSirve**: ¿Cuáles son los beneficios de implementar CI/CD en un proyecto de desarrollo móvil?
- **comoSeUsa**: ¿Qué herramientas y prácticas recomiendas para implementar CI/CD en un proyecto de Flutter?
- **erroresComunes**: ¿Qué errores comunes se deben evitar al implementar CI/CD?

## Criterios de Evaluacion

- Explicación de los conceptos de CI/CD y sus beneficios.
- Identificación de herramientas y prácticas comunes de CI/CD.
- Discusión de las mejores prácticas para implementar CI/CD en proyectos de Flutter.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
