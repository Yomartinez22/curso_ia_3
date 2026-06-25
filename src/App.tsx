import { AppShell } from './components/AppShell';
import { TaskDashboardScreen } from './features/tasks/TaskDashboardScreen';

// Renderiza la composicion principal de la aplicacion.
export default function App() {
  return (
    <AppShell>
      <TaskDashboardScreen />
    </AppShell>
  );
}
