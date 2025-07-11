import { Cpu } from "lucide-react";

interface AIBadgeProps {
  model: string;
}

function AIBadge({ model }: AIBadgeProps) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Contenido generado por ${model}`}
    >
      <Cpu className="h-3 w-3 mr-1" aria-hidden="true" />
      <span>Powered by {model}</span>
    </span>
  );
}

export default AIBadge;
