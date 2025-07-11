import type { TechMilestone } from "../types/milestone";
import DateDisplay from "./DateDisplay";
import Footer from "./Footer";
import Header from "./Header";
import MilestoneCard from "./MilestoneCard";

interface DashboardProps {
  milestone: TechMilestone | null;
  loading: boolean;
}

function Dashboard({ milestone, loading }: DashboardProps) {
  return (
    <>
      <Header />
      <DateDisplay date={milestone?.date} />
      <MilestoneCard milestone={milestone} loading={loading} />
      <Footer />
    </>
  );
}

export default Dashboard;
