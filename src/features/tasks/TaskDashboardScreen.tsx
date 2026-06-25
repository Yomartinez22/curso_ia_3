import { Alert, Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { TASK_PRIORITY_LABELS } from '../../constants/taskConstants';
import type { Task } from '../../types/task';

import { TaskFormDialog } from './components/TaskFormDialog';
import { TaskListSection } from './components/TaskListSection';

// Coordina la pantalla principal del dashboard de tareas.
export function TaskDashboardScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [confirmedTask, setConfirmedTask] = useState<Task | null>(null);

  // Guarda una tarea manual en memoria local y muestra su resumen de confirmacion.
  const handleSaveTask = (task: Task) => {
    setTasks((currentTasks) => [task, ...currentTasks]);
    setConfirmedTask(task);
    setIsFormOpen(false);
  };

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
          <Button variant="contained" onClick={() => setIsFormOpen(true)}>
            Crear tarea
          </Button>
          <Button variant="outlined" disabled>
            Ordenar ICE
          </Button>
        </Stack>
      </Stack>

      {confirmedTask ? (
        <Alert severity="success" onClose={() => setConfirmedTask(null)}>
          Tarea guardada: {confirmedTask.title}. ICE {confirmedTask.iceScore} con prioridad{' '}
          {confirmedTask.priority ? TASK_PRIORITY_LABELS[confirmedTask.priority] : 'sin prioridad'}.
        </Alert>
      ) : null}

      <Paper elevation={1} sx={{ p: { xs: 2, sm: 3 } }}>
        <TaskListSection tasks={tasks} />
      </Paper>

      <TaskFormDialog
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveTask}
      />
    </Stack>
  );
}
