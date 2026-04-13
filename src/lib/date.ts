const baseFormatterOptions = { timeZone: 'UTC' } as const;

export function formatIsoDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    ...baseFormatterOptions,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function formatDottedDate(date: Date): string {
  return formatIsoDate(date).replaceAll('-', '.');
}

export function formatYear(date: Date): string {
  return new Intl.DateTimeFormat('en', {
    ...baseFormatterOptions,
    year: 'numeric',
  }).format(date);
}
