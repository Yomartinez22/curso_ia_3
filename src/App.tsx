import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material';

import { TASK_PRIORITY_LABELS, TASK_STATUS_LABELS } from './constants/taskConstants';
import type { Task } from './types/task';
import { calculateIceScore, classifyTaskPriority } from './utils/ice';

const sampleIceValues = {
  impact: 8,
  confidence: 7,
  effort: 4,
};

const sampleIceScore = calculateIceScore(sampleIceValues);

const sampleTask: Task = {
  id: 'sample-task',
  title: 'Preparar presentacion',
  description: 'Crear una presentacion para explicar el producto al equipo comercial.',
  status: 'pending',
  iceValues: sampleIceValues,
  iceScore: sampleIceScore,
  priority: classifyTaskPriority(sampleIceScore),
  createdAt: new Date().toISOString(),
};

export default function App() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Box>
            <Typography component="h1" variant="h4" fontWeight={700}>
              Gestor de Tareas ICE
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Base del MVP lista para modelar tareas y prioridades.
            </Typography>
          </Box>

          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                justifyContent="space-between"
              >
                <Box>
                  <Typography component="h2" variant="h6" fontWeight={700}>
                    {sampleTask.title}
                  </Typography>
                  <Typography color="text.secondary">{sampleTask.description}</Typography>
                </Box>

                <Chip
                  label={TASK_STATUS_LABELS[sampleTask.status]}
                  color="primary"
                  variant="outlined"
                />
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label={`ICE ${sampleTask.iceScore}`} color="primary" />
                {sampleTask.priority ? (
                  <Chip label={TASK_PRIORITY_LABELS[sampleTask.priority]} color="secondary" />
                ) : null}
                <Chip label={`Impacto ${sampleIceValues.impact}`} variant="outlined" />
                <Chip label={`Confianza ${sampleIceValues.confidence}`} variant="outlined" />
                <Chip label={`Esfuerzo ${sampleIceValues.effort}`} variant="outlined" />
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
