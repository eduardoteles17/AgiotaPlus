import {Navigation} from "@/core/navigation"
import {Providers} from "./providers";

export function App() {
  return (
    <Providers>
      <Navigation/>
    </Providers>
  );
}

