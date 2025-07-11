import { Cpu } from "lucide-react";

function Header() {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Cpu className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
          Byte History
        </h1>
      </div>
      <p id="description" className="text-slate-600 text-lg">
        Descubre momentos fascinantes de la historia de la tecnología
      </p>
    </header>
  );
}

export default Header;
