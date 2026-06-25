import { Button, Paper, Stack, Typography } from '@mui/material';

import type { Task } from '../../types/task';

import { TaskListSection } from './components/TaskListSection';

const tasks: Task[] = [];

// Coordina la pantalla principal del dashboard de tareas.
export function TaskDashboardScreen() {
  return (
    <Stack spacing={3}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems={{ xs: 'stretch', sm: 'center' }}
        justifyContent="space-between"
      >
        <Stack spacing={0.5}>
          <Typography component="h2" variant="h4" fontWeight={700}>
            Gestor de Tareas ICE
          </Typography>
          <Typography color="text.secondary">
            Prioriza el trabajo de la sesion con impacto, confianza y esfuerzo.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Button variant="contained" disabled>
            Crear tarea
          </Button>
          <Button variant="outlined" disabled>
            Ordenar ICE
          </Button>
        </Stack>
      </Stack>

      <Paper elevation={1} sx={{ p: { xs: 2, sm: 3 } }}>
        <TaskListSection tasks={tasks} />
      </Paper>
    </Stack>
  );
}
