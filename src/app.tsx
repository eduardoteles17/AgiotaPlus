import { useEffect } from 'react';

import { useApp } from '@agiota-plus/core/app';
import { Navigation } from '@agiota-plus/core/navigation';

import { Providers } from './providers';

export function App() {
  const app = useApp();

  useEffect(() => {
    app.init();
  }, []);

  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}
