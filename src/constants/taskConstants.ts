import type { TaskPriority, TaskStatus } from '../types/task';

export const TASK_STATUSES = ['pending', 'in_progress', 'completed'] as const;

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  pending: 'Pendiente',
  in_progress: 'En progreso',
  completed: 'Completada',
};

export const TASK_PRIORITIES = ['high', 'medium', 'low'] as const;

export const TASK_PRIORITY_LABELS: Record<TaskPriority, string> = {
  high: 'Alta prioridad',
  medium: 'Media prioridad',
  low: 'Baja prioridad',
};

export const ICE_VALUE_LIMITS = {
  min: 1,
  max: 10,
} as const;

export const ICE_PRIORITY_THRESHOLDS = {
  high: 15,
  medium: 7,
} as const;
