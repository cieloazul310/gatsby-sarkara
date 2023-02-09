export type GradientDirection =
  | 'to-t'
  | 'to-tr'
  | 'to-r'
  | 'to-br'
  | 'to-b'
  | 'to-bl'
  | 'to-l'
  | 'to-tl';

function useGradient(
  from: string,
  to: string,
  options?: {
    type?: 'linear' | 'radial';
    direction?: GradientDirection;
  }
) {
  const gradientType = options?.type ?? 'linear';
  const direction = options?.direction ?? 'to-r';

  if (gradientType === 'radial') return `radial(${from}, ${to})`;
  return `${gradientType}(${direction}, ${from}, ${to})`;
}

export default useGradient;
