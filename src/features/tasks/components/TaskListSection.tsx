import { Box, Stack, Typography } from '@mui/material';

import type { Task } from '../../../types/task';

import { TaskCard } from './TaskCard';

interface TaskListSectionProps {
  tasks: Task[];
}

// Muestra la lista de tareas o su estado vacio.
export function TaskListSection({ tasks }: TaskListSectionProps) {
  const hasTasks = tasks.length > 0;

  return (
    <Stack spacing={2}>
      <Box>
        <Typography component="h3" variant="h6" fontWeight={700}>
          Tareas
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {hasTasks ? `${tasks.length} tareas en memoria local` : 'Sin tareas en memoria local'}
        </Typography>
      </Box>

      {hasTasks ? (
        <Stack spacing={2}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Stack>
      ) : (
        <Box
          sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography fontWeight={700}>Todavia no hay tareas</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Las tareas creadas durante la sesion apareceran aqui.
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
