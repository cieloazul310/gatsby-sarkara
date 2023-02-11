import { withPrefix } from 'gatsby';
import useBaseUrl from './useBaseUrl';

/**
 * #### example code (import static image)
 *
 * ```tsx
 * import image from '../asset/image.png';
 *
 * function Head() {
 *   const imageUrl = useAbsolutePath(image);
 *   if (!imageUrl) return null;
 *   return (
 *     <meta name="og:image" content={imageUrl} />
 *   );
 * }
 * ```
 */
function useAbsoluteUrl(
  path: string | undefined | null,
  options?: { prefix?: boolean }
) {
  if (!path) return undefined;

  const baseUrl = useBaseUrl();
  const relativePath = options?.prefix ? withPrefix(path) : path;
  const url = new URL(relativePath, baseUrl);
  return url.toString();
}

export default useAbsoluteUrl;
