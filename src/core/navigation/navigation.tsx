import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "@/screens/home";
import { useTheme } from "@/styles/theme";

const Stack = createNativeStackNavigator()

export function Navigation() {
  const theme = useTheme()

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}