import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

import {
  TASK_PRIORITY_LABELS,
  TASK_STATUS_LABELS,
} from '../../../constants/taskConstants';
import type { Task, TaskPriority } from '../../../types/task';

interface TaskCardProps {
  task: Task;
}

const priorityChipColor: Record<TaskPriority, 'success' | 'warning' | 'default'> = {
  high: 'success',
  medium: 'warning',
  low: 'default',
};

// Presenta el resumen visual de una tarea y su prioridad ICE.
export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
          >
            <Stack spacing={0.5}>
              <Typography component="h4" variant="subtitle1" fontWeight={700}>
                {task.title}
              </Typography>
              <Typography color="text.secondary">{task.description}</Typography>
            </Stack>

            <Chip label={TASK_STATUS_LABELS[task.status]} color="primary" variant="outlined" />
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {typeof task.iceScore === 'number' ? (
              <Chip label={`ICE ${task.iceScore}`} color="primary" />
            ) : (
              <Chip label="Sin priorizar" variant="outlined" />
            )}

            {task.priority ? (
              <Chip
                label={TASK_PRIORITY_LABELS[task.priority]}
                color={priorityChipColor[task.priority]}
              />
            ) : null}

            {task.iceValues ? (
              <>
                <Chip label={`Impacto ${task.iceValues.impact}`} variant="outlined" />
                <Chip label={`Confianza ${task.iceValues.confidence}`} variant="outlined" />
                <Chip label={`Esfuerzo ${task.iceValues.effort}`} variant="outlined" />
              </>
            ) : null}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
