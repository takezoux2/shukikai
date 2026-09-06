export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/shukikai";

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // If already prefixed with BASE_PATH, return as is
  if (BASE_PATH && cleanPath.startsWith(`${BASE_PATH}/`)) {
    return cleanPath;
  }
  return `${BASE_PATH}${cleanPath}`;
}
