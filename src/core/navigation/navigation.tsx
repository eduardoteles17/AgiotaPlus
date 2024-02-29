import { DebtsRoutes } from '@agiota-plus/constants/routes/debts';
import { ListDebtsScreen } from '@agiota-plus/screens/list-debts';
import { NewDebtScreen } from '@agiota-plus/screens/new-debt';
import { useTheme } from '@agiota-plus/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name={DebtsRoutes.list}
          options={{ headerTitle: 'Dividas' }}
          component={ListDebtsScreen}
        />
        <Stack.Screen
          name={DebtsRoutes.create}
          options={{ headerTitle: 'Criar Divida' }}
          component={NewDebtScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
