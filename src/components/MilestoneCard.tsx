import type { TechMilestone } from "../types/milestone";
import AIBadge from "./AIBadge";
import LoadingSpinner from "./LoadingSpinner";

interface MilestoneCardProps {
  milestone: TechMilestone | null;
  loading: boolean;
}

function MilestoneCard({ milestone, loading }: MilestoneCardProps) {
  return (
    <article className="rounded-lg border-0 bg-white/80 backdrop-blur-sm shadow-lg">
      <div className="p-8 md:p-12">
        {loading ? (
          <LoadingSpinner />
        ) : milestone ? (
          <>
            {/* AI Model Badge */}
            <div className="flex justify-between items-start mb-6">
              <AIBadge model={milestone.model} />
            </div>

            {/* Milestone Content */}
            <section className="prose prose-lg max-w-none">
              <p
                className="text-slate-800 leading-relaxed text-xl md:text-2xl font-light"
                aria-live="polite"
              >
                {milestone.milestone}
              </p>
            </section>
          </>
        ) : (
          <p role="alert" className="text-center py-12 text-slate-600 mb-4">
            No se pudo cargar la efeméride
          </p>
        )}
      </div>
    </article>
  );
}

export default MilestoneCard;
