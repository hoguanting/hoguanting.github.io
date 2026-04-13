type EntryWithSlug = {
  id: string;
  data: {
    slug?: string;
  };
};

export function getEntrySlug(entry: EntryWithSlug): string {
  if (entry.data.slug) {
    return entry.data.slug;
  }

  const segments = entry.id.split('/');
  return segments[segments.length - 1] ?? entry.id;
}
