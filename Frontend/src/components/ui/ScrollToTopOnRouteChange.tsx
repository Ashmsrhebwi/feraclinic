import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top whenever the route pathname changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
