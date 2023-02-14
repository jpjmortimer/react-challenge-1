/*
 * This function converts a comma separated string to a list of unique, trimmed strings.
 */
export function convertStringToTags(entry: string): string[] {
  // this could be more concise but I've left it this way for readability
  const trimmedTags = entry.split(",").map((tag) => tag.trim());

  const cleanedTags = trimmedTags.filter((tag) => tag != "");

  const uniqueTags = [...new Set(cleanedTags)];

  return uniqueTags;
}

export function createId(): number {
  return Date.now();
}
