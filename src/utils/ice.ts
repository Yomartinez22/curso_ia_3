import { ICE_PRIORITY_THRESHOLDS, ICE_VALUE_LIMITS } from '../constants/taskConstants';
import type { IceValues, TaskPriority } from '../types/task';

// Comprueba si un valor ICE entra en el rango aceptado por el MVP.
export function isValidIceValue(value: number): boolean {
  return Number.isFinite(value) && value >= ICE_VALUE_LIMITS.min && value <= ICE_VALUE_LIMITS.max;
}

// Valida el conjunto completo de valores ICE antes de calcular la puntuacion.
export function areIceValuesValid(values: IceValues): boolean {
  return (
    isValidIceValue(values.impact) &&
    isValidIceValue(values.confidence) &&
    isValidIceValue(values.effort)
  );
}

// Calcula la puntuacion ICE con la formula definida para el MVP.
export function calculateIceScore(values: IceValues): number {
  if (!areIceValuesValid(values)) {
    throw new Error('Los valores ICE deben estar entre 1 y 10.');
  }

  return Number(((values.impact * values.confidence) / values.effort).toFixed(2));
}

// Clasifica la prioridad de una tarea a partir de su puntuacion ICE.
export function classifyTaskPriority(iceScore: number): TaskPriority {
  if (iceScore >= ICE_PRIORITY_THRESHOLDS.high) {
    return 'high';
  }

  if (iceScore >= ICE_PRIORITY_THRESHOLDS.medium) {
    return 'medium';
  }

  return 'low';
}
