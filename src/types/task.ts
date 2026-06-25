export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export type TaskPriority = 'high' | 'medium' | 'low';

export interface IceValues {
  impact: number;
  confidence: number;
  effort: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  iceValues?: IceValues;
  iceScore?: number;
  priority?: TaskPriority;
  aiReason?: string;
  createdAt: string;
}
