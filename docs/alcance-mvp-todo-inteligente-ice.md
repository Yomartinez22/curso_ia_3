# Alcance funcional del MVP: Gestor de Tareas Inteligente con modelo ICE

## 1. Objetivo del MVP

El objetivo del MVP es construir una aplicacion React sencilla para gestionar tareas y priorizarlas mediante el modelo ICE:

- **Impacto**: valor o beneficio esperado de completar la tarea.
- **Confianza**: seguridad de que la tarea producira el impacto esperado.
- **Esfuerzo**: coste o dificultad estimada para realizarla.

La aplicacion permitira crear tareas, calcular automaticamente una puntuacion ICE a partir de una descripcion usando una API de IA gratuita o con plan gratuito, y ordenar visualmente las tareas segun su prioridad.

El MVP esta pensado para un curso de React, por lo que debe priorizar claridad, componentes simples, estado local y una experiencia facil de entender.

## 2. Usuarios objetivo

El usuario principal es una persona que quiere organizar una lista sencilla de tareas y recibir ayuda para priorizarlas.

Tambien esta orientado a estudiantes de React que necesitan practicar:

- Componentes funcionales.
- Estado con `useState`.
- Efectos con `useEffect`.
- Formularios controlados.
- Renderizado condicional.
- Listas y eventos.
- Consumo basico de una API externa.

## 3. Funcionalidades incluidas

### 3.1. Crear una tarea

El usuario podra crear una tarea mediante un formulario simple con los siguientes campos:

- **Titulo**: campo obligatorio.
- **Descripcion**: campo obligatorio, usada como entrada para calcular el ICE.

Al guardar la tarea, la aplicacion generara un identificador local y la agregara a la lista en memoria.

### 3.2. Calcular ICE con IA

La aplicacion podra calcular automaticamente las puntuaciones ICE a partir de la descripcion de la tarea.

El flujo esperado sera:

1. El usuario introduce titulo y descripcion.
2. El usuario pulsa un boton como `Calcular ICE`.
3. La aplicacion envia la descripcion a una API de IA gratuita o con plan gratuito.
4. La IA devuelve una estimacion numerica para:
   - Impacto: valor de 1 a 10.
   - Confianza: valor de 1 a 10.
   - Esfuerzo: valor de 1 a 10.
5. La aplicacion calcula la puntuacion final:

```text
ICE = (Impacto * Confianza) / Esfuerzo
```

6. La tarea muestra los valores calculados y la puntuacion final.

Para simplificar el desarrollo, la API debe devolver o poder transformarse facilmente a un JSON similar a:

```json
{
  "impact": 8,
  "confidence": 7,
  "effort": 4,
  "reason": "La tarea parece tener alto impacto y esfuerzo medio."
}
```

Si la API falla, la aplicacion debe mostrar un mensaje de error simple y permitir introducir los valores ICE manualmente.

### 3.3. Introducir o editar ICE manualmente

Aunque exista calculo con IA, el MVP debe permitir editar manualmente:

- Impacto.
- Confianza.
- Esfuerzo.

Esto evita que la aplicacion dependa completamente de la API externa durante las practicas.

### 3.4. Listar tareas

La aplicacion mostrara una lista de tareas creadas en la sesion actual.

Cada tarea mostrara:

- Titulo.
- Descripcion.
- Estado.
- Impacto.
- Confianza.
- Esfuerzo.
- Puntuacion ICE.
- Explicacion breve generada por la IA, si existe.

### 3.5. Ordenar tareas por prioridad ICE

La lista podra ordenarse por puntuacion ICE de mayor a menor.

Este comportamiento puede ser automatico o activarse con un boton simple como `Ordenar por ICE`.

### 3.6. Cambiar estado de una tarea

Cada tarea podra tener uno de estos estados:

- Pendiente.
- En progreso.
- Completada.

El usuario podra cambiar el estado desde la propia tarjeta o fila de la tarea.

### 3.7. Eliminar una tarea

El usuario podra eliminar una tarea de la lista local.

No se requiere confirmacion avanzada. Para mantenerlo simple, basta con un boton `Eliminar`.

### 3.8. Indicadores visuales de prioridad

La aplicacion mostrara una indicacion visual sencilla segun la puntuacion ICE:

- **Alta prioridad**: ICE alto.
- **Media prioridad**: ICE medio.
- **Baja prioridad**: ICE bajo.

Los umbrales pueden definirse asi:

```text
ICE >= 15: Alta prioridad
ICE >= 7 y < 15: Media prioridad
ICE < 7: Baja prioridad
```

Estos valores son orientativos y pueden ajustarse durante el desarrollo.

## 4. Funcionalidades no incluidas

El MVP no incluye:

- Backend.
- Autenticacion.
- Persistencia real en base de datos.
- Paginacion.
- Multiusuario.
- Tags o etiquetas.
- Roles de usuario.
- Compartir tareas.
- Notificaciones.
- Fechas limite avanzadas.
- Subtareas.
- Adjuntos.
- Busqueda avanzada.
- Analiticas.

## 5. Persistencia

No habra persistencia real.

Para mantener la aplicacion simple, las tareas pueden vivir solo en el estado de React. Al recargar la pagina, la informacion se perdera.

Opcionalmente, si el docente lo considera util, se puede usar `localStorage` como mejora didactica, pero no forma parte del alcance obligatorio del MVP.

## 6. Pantallas o vistas del MVP

### 6.1. Vista principal

La aplicacion puede resolverse en una sola pantalla con:

- Encabezado con el nombre de la aplicacion.
- Formulario de creacion de tarea.
- Boton para calcular ICE con IA.
- Lista de tareas.
- Ordenacion por ICE.
- Mensajes de carga y error.

No se requiere routing.

## 7. Modelo de datos

Cada tarea puede representarse con esta estructura:

```js
{
  id: "local-id",
  title: "Preparar presentacion",
  description: "Crear una presentacion para explicar el nuevo producto al equipo comercial.",
  status: "pending",
  impact: 8,
  confidence: 7,
  effort: 4,
  iceScore: 14,
  priority: "medium",
  aiReason: "Tiene impacto alto porque ayuda a alinear al equipo comercial.",
  createdAt: "2026-06-22T10:00:00.000Z"
}
```

Estados internos sugeridos:

```text
pending
in_progress
completed
```

Prioridades internas sugeridas:

```text
high
medium
low
```

## 8. Reglas funcionales

- El titulo y la descripcion son obligatorios.
- Impacto, confianza y esfuerzo deben estar entre 1 y 10.
- Esfuerzo no puede ser 0.
- La puntuacion ICE se recalcula si el usuario modifica impacto, confianza o esfuerzo.
- Una tarea sin valores ICE puede mostrarse como `Sin priorizar`.
- La aplicacion debe mostrar un estado de carga mientras espera la respuesta de la IA.
- Si la IA no responde o devuelve un formato invalido, se mostrara un error comprensible.
- El usuario debe poder continuar usando la aplicacion aunque falle la IA.

## 9. Integracion funcional con API de IA gratuita

La integracion con IA debe cubrir solo el caso de uso de priorizacion ICE.

La respuesta esperada debe permitir obtener:

- Impacto.
- Confianza.
- Esfuerzo.
- Explicacion breve opcional.

Si la IA no esta disponible, el usuario debe poder completar la priorizacion manualmente.

## 10. Criterios de aceptacion

El MVP se considera completo cuando:

- El usuario puede crear una tarea con titulo y descripcion.
- El usuario puede calcular impacto, confianza y esfuerzo usando IA.
- El usuario puede ver la puntuacion ICE calculada.
- El usuario puede editar manualmente los valores ICE.
- El usuario puede ver una lista de tareas.
- El usuario puede ordenar las tareas por ICE.
- El usuario puede cambiar el estado de una tarea.
- El usuario puede eliminar una tarea.
- La aplicacion funciona sin backend.
- La aplicacion mantiene los datos solo durante la sesion actual.
- La aplicacion muestra errores simples si falla la API de IA.

## 11. Fuera de alcance para futuras versiones

Estas funcionalidades podrian considerarse despues del MVP:

- Guardar tareas en una base de datos.
- Autenticacion de usuarios.
- Historial de cambios.
- Filtros avanzados.
- Tags.
- Fechas limite.
- Vistas por calendario.
- Integracion con herramientas externas.
- Backend propio para proteger la clave de API.
- Multiusuario.

## 12. Complejidad recomendada para el curso

El desarrollo deberia mantenerse en una dificultad baja o media-baja.

La prioridad tecnica debe ser:

- Evitar librerias innecesarias.
- No introducir routing salvo que el curso ya lo haya explicado.
- No usar gestion global compleja como Redux.

El resultado esperado es una aplicacion pequena, funcional y didactica, no una herramienta de productividad completa.
