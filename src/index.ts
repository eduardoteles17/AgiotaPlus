import { registerRootComponent } from 'expo';

import { App } from './app';

async function bootstrap() {
  registerRootComponent(App);
}

bootstrap();
