import {Button} from "react-native";

export function HomeScreen() {
  return <Button title="Hello World!"
                 onPress={() => {
                   console.log("Hello World!")
                 }}
  />
}