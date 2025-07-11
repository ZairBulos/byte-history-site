import { useMilestone } from "./hooks/useMilestone";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Dashboard";

function App() {
  const { milestone, loading } = useMilestone();

  return (
    <MainLayout>
      <Dashboard milestone={milestone} loading={loading} />
    </MainLayout>
  );
}

export default App;
