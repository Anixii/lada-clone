export function generateQueryParams(
  params: Record<string, string | number | boolean | undefined>,
): string {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([ , value ]) => value !== undefined),
  );

  return new URLSearchParams(filteredParams as Record<string, string>).toString();
}
