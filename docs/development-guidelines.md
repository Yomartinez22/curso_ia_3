# Development Guidelines

## Estructura de carpetas

- [ ] `src/main.tsx`: punto de entrada de React.

- [ ] `src/App.tsx`: composicion principal de la aplicacion.

- [ ] `src/components/`: componentes reutilizables y sin logica de negocio pesada.

- [ ] `src/features/`: componentes y logica agrupados por funcionalidad.

- [ ] `src/hooks/`: hooks reutilizables entre componentes.

- [ ] `src/services/`: llamadas externas y adaptadores de API.

- [ ] `src/utils/`: funciones puras sin dependencias de React.

- [ ] `src/types/`: tipos e interfaces compartidas.

- [ ] `src/constants/`: constantes de dominio y configuracion estatica.

- [ ] Evitar carpetas vacias o capas sin uso real.

## Convenciones de nombres

- [ ] Componentes React en `PascalCase`.

- [ ] Hooks personalizados con prefijo `use`.

- [ ] Funciones, variables y props en `camelCase`.

- [ ] Tipos e interfaces en `PascalCase`.

- [ ] Archivos de componentes en `PascalCase.tsx`.

- [ ] Archivos de hooks en `useNombre.ts`.

- [ ] Archivos de utilidades en `camelCase.ts`.

- [ ] Constantes globales en `UPPER_SNAKE_CASE`.

- [ ] Nombres descriptivos antes que abreviaturas.

- [ ] Evitar sufijos genericos como `Manager`, `Helper` o `Common`.

## Organizacion de componentes con sus responsabilidades

- [ ] Un componente debe tener una responsabilidad principal.

- [ ] Los componentes de UI reciben datos por props.

- [ ] Los componentes de feature coordinan estado y acciones.

- [ ] Evitar componentes de mas de 150 lineas.

- [ ] Extraer subcomponentes solo si reducen claridad o duplicacion.

- [ ] Formularios separados de listas y tarjetas.

- [ ] No mezclar llamadas API dentro de componentes visuales.

- [ ] Usar Material UI como base visual principal.

- [ ] Mantener estilos cerca del componente con `sx` cuando sean simples.

- [ ] Evitar abstracciones prematuras de componentes.

## Uso de hooks

- [ ] Usar `useState` para estado local simple.

- [ ] Usar `useEffect` solo para efectos reales.

- [ ] Evitar `useEffect` para derivar datos renderizables.

- [ ] Usar `useMemo` solo ante coste o render repetido evidente.

- [ ] Usar `useCallback` solo si evita renders o dependencias inestables.

- [ ] Crear hooks propios solo cuando haya reutilizacion clara.

- [ ] Los hooks no deben renderizar UI.

- [ ] Los hooks deben exponer datos, acciones y estados de carga.

- [ ] Mantener dependencias de hooks completas y explicitas.

- [ ] No ocultar reglas de negocio complejas dentro de efectos.

## Gestion del estado

- [ ] Mantener el estado lo mas cerca posible de donde se usa.

- [ ] Usar `useState` como opcion por defecto.

- [ ] Usar `useReducer` solo si hay transiciones complejas.

- [ ] No usar Redux ni stores globales en este MVP.

- [ ] Derivar valores calculables en render o utilidades.

- [ ] Evitar duplicar estado derivado.

- [ ] Mantener listas como arrays inmutables.

- [ ] Centralizar reglas de dominio en funciones puras.

- [ ] No persistir datos salvo decision explicita.

- [ ] Evitar sincronizaciones innecesarias entre estados.

## Gestion de llamadas API

- [ ] Toda llamada externa vive en `src/services/`.

- [ ] Los componentes no conocen detalles del proveedor.

- [ ] La respuesta externa se adapta a tipos internos.

- [ ] Validar datos minimos antes de usarlos.

- [ ] La clave API se lee desde variables de entorno de Vite.

- [ ] No registrar claves ni respuestas sensibles en consola.

- [ ] Mantener una unica funcion publica por caso de uso simple.

- [ ] Definir fallback manual si falla la IA.

- [ ] Evitar SDKs si `fetch` resuelve el caso.

- [ ] Documentar que una clave en frontend no es segura para produccion.

## Manejo de errores y cargas

- [ ] Toda llamada API debe tener estado `loading`.

- [ ] Toda llamada API debe tener estado `error`.

- [ ] Mostrar mensajes breves y accionables.

- [ ] Evitar errores tecnicos crudos en pantalla.

- [ ] Deshabilitar acciones mientras se ejecutan.

- [ ] Permitir reintento cuando sea razonable.

- [ ] Mantener la aplicacion usable tras un fallo.

- [ ] Validar formularios antes de llamar a la API.

- [ ] Mostrar estados vacios en listas sin datos.

- [ ] No bloquear tareas manuales por error de IA.

## Librerias aprobadas

- [ ] React para UI y composicion.

- [ ] TypeScript para tipos estaticos.

- [ ] Material UI para componentes visuales.

- [ ] Material Icons solo si ya esta instalado o es necesario.

- [ ] Vite para entorno de desarrollo si el proyecto lo usa.

- [ ] `fetch` nativo para llamadas HTTP simples.

- [ ] No usar librerias de estado global.

- [ ] No usar librerias de formularios para formularios simples.

- [ ] No usar librerias de fechas sin necesidad real.

- [ ] Cualquier libreria nueva debe justificar ahorro claro de complejidad.

## Herramientas de calidad

- [ ] Usar `npm run lint` para validar reglas de ESLint sobre React, TypeScript, hooks e importaciones.

- [ ] Usar `npm run lint:fix` para aplicar correcciones seguras de ESLint.

- [ ] Usar `npm run format:check` para comprobar formato con Prettier.

- [ ] Usar `npm run format` para aplicar formato con Prettier.

- [ ] Mantener `eslint-config-prettier` al final de la configuracion de ESLint para evitar conflictos con Prettier.
