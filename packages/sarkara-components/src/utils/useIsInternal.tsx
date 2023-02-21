function useIsInternal(href: string) {
  const internal = /^\/(?!\/)/.test(href);
  return internal;
}

export default useIsInternal;
