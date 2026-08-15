const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-500">
          {eyebrow}
        </p>
      )}

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h1>

      {description && (
        <p className="max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
