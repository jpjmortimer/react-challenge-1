/*
 * This function converts a comma separated string to a list of unique, trimmed strings.
 */
export function convertStringToTags(entry: string): string[] {
  return [
    ...new Set(
      entry
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag != "")
    )
  ];
}

export function createId(): number {
  return Date.now();
}
