# AGENTS.md

## Proposito

- Este archivo es la guia local de Codex para este repositorio.
- No duplica las reglas generales de trabajo ya definidas en el AGENTS global.
- No duplica el alcance funcional ni las guias tecnicas ya documentadas en `docs/`.
- Antes de modificar codigo, leer las fuentes del proyecto que apliquen al cambio.

## Fuentes Canonicas

- Alcance funcional del MVP: `docs/alcance-mvp-todo-inteligente-ice.md`.
- Estructura, convenciones, estado, hooks, servicios, errores y dependencias: `docs/development-guidelines.md`.
- Flujo de navegacion: `docs/user-navigation-flow.mmd`.
- Flujo de creacion de tareas: `docs/task-creation-flow.mmd`.
- Referencia visual de pantallas y componentes: `docs/app-screens.svg`.
- Plan historico de implementacion: `docs/implementation-tasks.md`.

## Prioridad de Informacion

- Si el cambio afecta comportamiento funcional, seguir `docs/alcance-mvp-todo-inteligente-ice.md`.
- Si el cambio afecta arquitectura de carpetas, nombres, componentes, hooks, estado, servicios o dependencias, seguir `docs/development-guidelines.md`.
- Si el cambio afecta navegacion o composicion de pantallas, revisar los diagramas `.mmd`.
- Si el cambio afecta UI, revisar `docs/app-screens.svg` como referencia de estructura visual.
- Usar `docs/implementation-tasks.md` solo como contexto de secuencia, no como fuente de reglas permanentes.

## Reglas Locales del Repositorio

- Mantener el proyecto como MVP didactico de React, TypeScript y Material UI.
- No introducir arquitectura que no este respaldada por la documentacion canonica.
- No convertir funcionalidades opcionales o futuras en requisitos obligatorios.
- No tratar nombres de componentes de diagramas o tareas como obligatorios si la implementacion real ya usa otro patron coherente.
- No asumir que existe backend, autenticacion, routing o persistencia real salvo que la documentacion se actualice.
- No anadir dependencias nuevas sin confirmacion explicita del usuario.
- Preferir cambios pequenos y alineados con la documentacion existente.

## Uso de la Documentacion

- Referenciar los documentos canonicos en vez de copiar sus reglas dentro de este archivo.
- Cuando una regla ya exista en `alcance-mvp-todo-inteligente-ice.md`, no duplicarla aqui.
- Cuando una regla ya exista en `development-guidelines.md`, no duplicarla aqui.
- Si una decision no esta cubierta por la documentacion, aplicar el AGENTS global y mantener el alcance minimo.
- Si aparece una contradiccion entre documentos, detenerse y reportarla antes de convertirla en regla de implementacion.

## Observaciones Arquitectonicas

- La documentacion describe una arquitectura objetivo; puede no existir todavia codigo fuente que la materialice.
- Los umbrales ICE aparecen en el alcance como orientativos, no como una regla inmutable.
- `localStorage` aparece como mejora didactica opcional, no como persistencia obligatoria.
- `implementation-tasks.md` contiene tareas de ejecucion, por lo que no debe gobernar decisiones permanentes del proyecto.
