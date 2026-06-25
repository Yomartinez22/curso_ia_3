import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useState, type FormEvent } from 'react';

import type { IceValues, Task } from '../../../types/task';
import { areIceValuesValid, calculateIceScore, classifyTaskPriority } from '../../../utils/ice';

import { ManualIceFields } from './ManualIceFields';

interface TaskFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const initialIceValues: IceValues = {
  impact: 5,
  confidence: 5,
  effort: 5,
};

// Genera un identificador local suficiente para tareas en memoria.
function createTaskId(): string {
  return crypto.randomUUID();
}

// Construye una tarea lista para guardar a partir del formulario manual.
function createTask(title: string, description: string, iceValues: IceValues): Task {
  const iceScore = calculateIceScore(iceValues);

  return {
    id: createTaskId(),
    title,
    description,
    status: 'pending',
    iceValues,
    iceScore,
    priority: classifyTaskPriority(iceScore),
    createdAt: new Date().toISOString(),
  };
}

// Recoge los datos manuales necesarios para crear una tarea priorizada.
export function TaskFormDialog({ open, onClose, onSave }: TaskFormDialogProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [iceValues, setIceValues] = useState<IceValues>(initialIceValues);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();
  const titleError = hasSubmitted && trimmedTitle.length === 0;
  const descriptionError = hasSubmitted && trimmedDescription.length === 0;
  const iceError = hasSubmitted && !areIceValuesValid(iceValues);

  // Restablece el formulario cuando se cancela o se guarda una tarea.
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setIceValues(initialIceValues);
    setHasSubmitted(false);
  };

  // Cierra el dialogo sin guardar y limpia el estado temporal.
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Valida el formulario y emite una tarea completa al dashboard.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    if (
      trimmedTitle.length === 0 ||
      trimmedDescription.length === 0 ||
      !areIceValuesValid(iceValues)
    ) {
      return;
    }

    onSave(createTask(trimmedTitle, trimmedDescription, iceValues));
    resetForm();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Crear tarea</DialogTitle>
      <DialogContent>
        <Stack component="form" id="task-form" spacing={3} onSubmit={handleSubmit} sx={{ pt: 1 }}>
          <TextField
            label="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            error={titleError}
            helperText={titleError ? 'El titulo es obligatorio.' : ' '}
            required
            fullWidth
          />

          <TextField
            label="Descripcion"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            error={descriptionError}
            helperText={descriptionError ? 'La descripcion es obligatoria.' : ' '}
            required
            fullWidth
            multiline
            minRows={3}
          />

          <ManualIceFields values={iceValues} onChange={setIceValues} />

          {iceError ? (
            <Alert severity="error">Los valores ICE deben estar entre 1 y 10.</Alert>
          ) : null}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type="submit" form="task-form" variant="contained">
          Guardar tarea
        </Button>
      </DialogActions>
    </Dialog>
  );
}
