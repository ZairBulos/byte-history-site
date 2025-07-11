function LoadingSpinner() {
  return (
    <div
      className="text-center py-12"
      role="status"
      aria-live="polite"
      aria-label="Cargando la efeméride de hoy"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        aria-hidden="true"
      ></div>
      <p className="text-slate-600">Cargando la efeméride de hoy...</p>
      <span className="sr-only">Cargando contenido</span>
    </div>
  );
}

export default LoadingSpinner;
