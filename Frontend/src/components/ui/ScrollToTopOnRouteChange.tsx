import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (anchor), don't scroll to top instantly
    // Let the browser handle the anchor scroll
    if (hash) return;

    // Use requestAnimationFrame to ensure the scroll happens after the new page has rendered
    const scrollTask = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });

    return () => cancelAnimationFrame(scrollTask);
  }, [pathname, hash]);

  return null;
}
