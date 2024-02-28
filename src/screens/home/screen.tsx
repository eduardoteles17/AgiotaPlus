import {Button} from "react-native-paper"

export function HomeScreen() {
  return (
    <Button
      onPress={() => {
        console.log("Hello World!")
      }}
    >
      Hello World!
    </Button>
  );
}