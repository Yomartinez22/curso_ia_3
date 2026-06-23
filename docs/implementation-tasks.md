# Tareas de implementacion del MVP Gestor de Tareas ICE

## 1. Preparar base del proyecto y modelo de dominio

**Objetivo:** dejar lista la estructura minima para desarrollar el MVP con React, TypeScript y Material UI.

**Incluye:**

- Crear la estructura base indicada en `development-guidelines.md`.
- Definir los tipos principales: `Task`, `TaskStatus`, `TaskPriority` e `IceValues`.
- Crear constantes para estados, prioridades y umbrales ICE.
- Implementar funciones puras para calcular ICE y clasificar prioridad.
- Configurar el tema base de Material UI si el proyecto no lo tiene.

**Resultado esperado:**

- La app compila.
- Existe una base clara para manejar tareas e ICE sin UI compleja.

## 2. Construir layout principal y listado de tareas

**Objetivo:** implementar la pantalla principal de la aplicacion siguiendo `user-navigation-flow.mmd` y `app-screens.svg`.

**Incluye:**

- Crear `AppShell` o layout principal con `AppBar` de Material UI.
- Crear `TaskDashboardScreen`.
- Crear `TaskListSection`.
- Crear `TaskCard`.
- Mostrar estado vacio cuando no existan tareas.
- Mostrar titulo, descripcion, estado, ICE y prioridad cuando existan tareas.

**Resultado esperado:**

- El usuario entra en la app y ve el listado de tareas o un estado vacio.
- La interfaz ya refleja la estructura visual principal del MVP.

## 3. Implementar creacion y edicion manual de tareas

**Objetivo:** permitir crear una tarea sin depender todavia de la IA.

**Incluye:**

- Crear `TaskFormDialog`.
- Crear campos obligatorios de titulo y descripcion.
- Crear `ManualIceFields` para impacto, confianza y esfuerzo.
- Validar titulo, descripcion y valores ICE.
- Guardar la tarea en estado local de React.
- Recalcular ICE al modificar valores manuales.
- Mostrar resumen tras confirmar la tarea.

**Resultado esperado:**

- El usuario puede crear una tarea completa manualmente.
- La tarea aparece en el listado con ICE y prioridad calculados.

## 4. Integrar sugerencia ICE con IA

**Objetivo:** conectar el flujo de creacion con una sugerencia automatica de ICE.

**Incluye:**

- Crear servicio en `src/services/` para solicitar la sugerencia ICE.
- Usar `fetch` salvo que exista una razon clara para otra libreria.
- Adaptar la respuesta externa al modelo interno.
- Mostrar estado de carga mientras se calcula la sugerencia.
- Crear `IceSuggestionPanel` con impacto, confianza, esfuerzo, ICE y motivo.
- Permitir aceptar la sugerencia o editarla manualmente.
- Permitir continuar manualmente si la IA falla.

**Resultado esperado:**

- El usuario puede pedir una sugerencia ICE desde la descripcion.
- La app no queda bloqueada si la API falla.

## 5. Completar acciones del listado y pulido UX

**Objetivo:** cerrar el flujo completo del MVP y dejar la experiencia coherente.

**Incluye:**

- Cambiar estado de tarea: pendiente, en progreso y completada.
- Eliminar tareas desde el listado.
- Ordenar tareas por ICE de mayor a menor.
- Mostrar chips o indicadores visuales de prioridad.
- Mostrar errores breves y accionables.
- Deshabilitar botones durante cargas.
- Revisar que no haya persistencia real obligatoria.
- Verificar el flujo completo definido en `task-creation-flow.mmd`.

**Resultado esperado:**

- El MVP cumple los criterios de aceptacion funcionales.
- El flujo principal queda listo para demo del curso.
