export function PipelineDiagram({ stages, label }: { stages: string[]; label: string }) {
  return (
    <ol aria-label={`${label} pipeline`} className="pipeline flex flex-col gap-0 md:flex-row md:items-stretch">
      {stages.map((s, i) => (
        <li key={s} className="flex flex-1 flex-col md:flex-row md:items-center">
          <div className="pipe-node relative flex min-h-[3.25rem] flex-1 items-center gap-3 rounded-[14px] border border-rule bg-background/60 px-3.5 py-3 text-sm leading-snug">
            <span className="text-[11px] text-signal" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
            <span>{s}</span>
          </div>
          {i < stages.length - 1 && (
            <span aria-hidden className="pipe-link mx-auto h-5 w-px md:mx-0 md:h-px md:w-6" />
          )}
        </li>
      ))}
    </ol>
  );
}
