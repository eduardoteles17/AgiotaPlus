import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native";
import {ListDebtsScreen} from "@/screens/list-debts";
import {useTheme} from "@/styles/theme";
import {DebtsRoutes} from "@/constants/routes/debts";

const Stack = createNativeStackNavigator()

export function Navigation() {
  const theme = useTheme()

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name={DebtsRoutes.list} options={{headerTitle: "Dividas",}} component={ListDebtsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}