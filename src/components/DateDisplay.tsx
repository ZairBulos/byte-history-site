import { Calendar } from "lucide-react";

interface DateDisplayProps {
  date?: string;
}

function DateDisplay({ date }: DateDisplayProps) {
  return (
    date && (
      <section
        className="flex items-center justify-center gap-2 mb-8"
        aria-label="Fecha actual"
      >
        <Calendar className="h-5 w-5 text-blue-600" aria-hidden="true" />
        <span className="text-slate-700 font-semibold text-lg">{date}</span>
      </section>
    )
  );
}

export default DateDisplay;
