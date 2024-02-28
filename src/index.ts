import "react-native-get-random-values"
import {registerRootComponent} from 'expo';
import * as SplashScreen from 'expo-splash-screen';

import {App} from './app';

async function bootstrap() {
  SplashScreen.preventAutoHideAsync();

  registerRootComponent(App);
}

bootstrap();
