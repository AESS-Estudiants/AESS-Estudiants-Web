<!--
Sync Impact Report
Version change: template/0.0.0 -> 1.0.0
Modified principles:
- PRINCIPLE_1_NAME placeholder -> I. Modularidad por Responsabilidad
- PRINCIPLE_2_NAME placeholder -> II. Reutilizacion de Componentes y Estilos
- PRINCIPLE_3_NAME placeholder -> III. Contenido Parametrizable y Datos Separados
- PRINCIPLE_4_NAME placeholder -> IV. Calidad Web, Accesibilidad y Rendimiento
- PRINCIPLE_5_NAME placeholder -> V. Entrega Verificable y Mantenible
Added sections:
- Estandares Tecnicos
- Flujo de Desarrollo
Removed sections:
- Ninguna; se sustituyeron placeholders iniciales por secciones concretas.
Templates requiring updates:
- Updated: .specify/templates/plan-template.md
- Updated: .specify/templates/spec-template.md
- Updated: .specify/templates/tasks-template.md
- Checked: .specify/templates/commands/*.md (no directory present)
- Checked: .specify/extensions/*/commands/*.md
- Updated: README.md
- Updated: AGENTS.md
Follow-up TODOs:
- Ninguno
-->

# AESS Estudiants Web Constitution

## Core Principles

### I. Modularidad por Responsabilidad
El codigo MUST organizarse en unidades con una responsabilidad clara: paginas para
composicion de rutas, componentes para interfaz reutilizable, utilidades para logica
compartida, servicios para integraciones externas y datos/configuracion para contenido
parametrizable. Cada nuevo modulo MUST tener una frontera comprensible, props o
parametros explicitos, y evitar dependencias circulares o acoplamientos innecesarios.

Rationale: una web institucional evoluciona por secciones, campanas y eventos; la
modularidad permite cambiar una parte sin reescribir el resto.

### II. Reutilizacion de Componentes y Estilos
Los patrones visuales repetidos MUST implementarse como componentes, estilos base,
tokens de diseno o variantes parametrizadas antes de duplicarse en paginas concretas.
Los componentes compartidos MUST exponer una API simple mediante props y MUST mantener
coherencia visual en espaciado, tipografia, color, estados interactivos y responsive.
El CSS especifico de pagina SHOULD limitarse a composicion local y excepciones
justificadas.

Rationale: la coherencia entre paginas reduce deuda visual y acelera nuevas pantallas.

### III. Contenido Parametrizable y Datos Separados
Listados de imagenes, cursos, proyectos, FAQs, enlaces, textos repetibles, metadatos SEO
y configuracion de formularios MUST vivir fuera del JSX de pagina siempre que puedan
representarse como datos o configuracion. El contenido SHOULD centralizarse en modulos
de datos, constantes tipadas/documentadas o fuentes externas controladas. Los valores
hardcoded solo se permiten para estructura estatica, microcopy unico o prototipos
marcados para migracion.

Rationale: separar contenido y presentacion facilita mantenimiento, traducciones,
actualizaciones de eventos y reutilizacion de componentes.

### IV. Calidad Web, Accesibilidad y Rendimiento
Cada cambio de interfaz MUST respetar estandares modernos de desarrollo web: HTML
semantico, navegacion por teclado, etiquetas accesibles cuando sean necesarias,
contraste suficiente, estados focus/hover claros, responsive desde mobile hasta desktop,
imagenes optimizadas y carga razonable. Las animaciones MUST aportar claridad o caracter
sin bloquear interaccion ni degradar la experiencia en dispositivos modestos.

Rationale: la web representa a AESS Estudiants y debe ser usable, rapida y robusta para
visitantes con contextos y dispositivos distintos.

### V. Entrega Verificable y Mantenible
Todo cambio MUST poder verificarse con una combinacion adecuada de build, pruebas,
revision manual o captura visual segun el riesgo. Las funciones y componentes SHOULD
mantener nombres descriptivos, parametros explicitos y complejidad baja. La introduccion
de dependencias, abstracciones o excepciones a la constitucion MUST documentar su
beneficio y su impacto de mantenimiento.

Rationale: la velocidad de desarrollo solo es sostenible si cada entrega deja el sistema
facil de entender y comprobar.

## Estandares Tecnicos

El proyecto usa React 18, Vite, React Router, Framer Motion, EmailJS y CSS modularizado
por componentes/paginas. Nuevas implementaciones MUST ajustarse a esta pila salvo que un
plan aprobado justifique otra tecnologia.

La estructura fuente SHOULD conservar estas responsabilidades:
- `src/components/`: componentes reutilizables y composables.
- `src/pages/`: paginas de ruta y composicion de secciones.
- `src/styles/`: estilos globales, tokens, utilidades y microinteracciones compartidas.
- `src/data/` o `src/config/`: contenido parametrizable, listados y configuracion.
- `src/services/` o `src/utils/`: integraciones externas y logica compartida.

Los assets publicos MUST ubicarse en `public/images/`, `public/documents/` u otra
carpeta nombrada por dominio. Toda imagen nueva SHOULD tener nombre estable, dimensiones
conocidas cuando importen para layout y alternativa textual cuando se use como contenido.

## Flujo de Desarrollo

Antes de implementar una feature, el plan MUST declarar como cumple cada principio de
esta constitucion. Las specs MUST identificar entidades de contenido parametrizable
cuando la feature incluya listados, imagenes, enlaces, textos repetibles, formularios o
metadatos. Las tareas MUST incluir trabajo explicito para componentes reutilizables,
datos/configuracion, estilos compartidos y verificacion.

Los cambios MUST ejecutarse de forma incremental: primero infraestructura compartida,
luego una historia verificable, luego extensiones. Cuando una pagina necesite una
excepcion local a un patron compartido, el plan o el codigo MUST explicar por que la
excepcion es especifica y no un nuevo componente reusable.

## Governance

Esta constitucion gobierna el desarrollo del proyecto y tiene prioridad sobre practicas
ad hoc o preferencias puntuales cuando haya conflicto. Cualquier plan, spec, tarea o
revision de codigo MUST evaluar cumplimiento con sus principios.

Las enmiendas MUST incluir: motivacion, impacto esperado, version nueva, fecha ISO,
plantillas afectadas y cualquier migracion necesaria. La version sigue SemVer:
- MAJOR para eliminar o redefinir principios de forma incompatible.
- MINOR para anadir principios, secciones o controles materiales.
- PATCH para aclaraciones o cambios editoriales sin efecto normativo.

La revision de cumplimiento MUST ocurrir como minimo en el `Constitution Check` del plan,
al generar tareas y antes de aceptar una implementacion. Las violaciones solo se permiten
si estan documentadas con razon, alternativa mas simple rechazada y plan de correccion.

**Version**: 1.0.0 | **Ratified**: 2026-06-02 | **Last Amended**: 2026-06-02
