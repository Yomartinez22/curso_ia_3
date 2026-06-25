import { Chip, Paper, Slider, Stack, Typography } from '@mui/material';

import { ICE_VALUE_LIMITS } from '../../../constants/taskConstants';
import type { IceValues, TaskPriority } from '../../../types/task';
import { calculateIceScore, classifyTaskPriority } from '../../../utils/ice';

interface ManualIceFieldsProps {
  values: IceValues;
  onChange: (values: IceValues) => void;
}

const iceFieldLabels: Record<keyof IceValues, string> = {
  impact: 'Impacto',
  confidence: 'Confianza',
  effort: 'Esfuerzo',
};

const priorityChipColor: Record<TaskPriority, 'success' | 'warning' | 'default'> = {
  high: 'success',
  medium: 'warning',
  low: 'default',
};

// Permite ajustar manualmente impacto, confianza y esfuerzo antes de guardar.
export function ManualIceFields({ values, onChange }: ManualIceFieldsProps) {
  const iceScore = calculateIceScore(values);
  const priority = classifyTaskPriority(iceScore);

  // Actualiza un valor ICE cuando el usuario mueve su control manual.
  const handleValueChange =
    (field: keyof IceValues) => (_event: Event, value: number | number[]) => {
      if (typeof value !== 'number') {
        return;
      }

      onChange({
        ...values,
        [field]: value,
      });
    };

  return (
    <Stack spacing={2}>
      <Stack spacing={0.5}>
        <Typography component="h3" variant="subtitle1" fontWeight={700}>
          Valores ICE manuales
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Ajusta cada valor entre {ICE_VALUE_LIMITS.min} y {ICE_VALUE_LIMITS.max}.
        </Typography>
      </Stack>

      {(Object.keys(iceFieldLabels) as Array<keyof IceValues>).map((field) => (
        <Stack key={field} spacing={0.5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography id={`${field}-slider-label`} fontWeight={600}>
              {iceFieldLabels[field]}
            </Typography>
            <Chip label={values[field]} size="small" />
          </Stack>
          <Slider
            aria-labelledby={`${field}-slider-label`}
            value={values[field]}
            min={ICE_VALUE_LIMITS.min}
            max={ICE_VALUE_LIMITS.max}
            step={1}
            marks
            valueLabelDisplay="auto"
            onChange={handleValueChange(field)}
          />
        </Stack>
      ))}

      <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ sm: 'center' }}>
          <Typography fontWeight={700}>ICE recalculado: {iceScore}</Typography>
          <Chip
            label={priority === 'high' ? 'Alta' : priority === 'medium' ? 'Media' : 'Baja'}
            color={priorityChipColor[priority]}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
