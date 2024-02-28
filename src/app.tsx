import {Navigation} from "@/core/navigation"
import {Providers} from "./providers";
import {useApp} from "@/core/app";
import {useEffect} from "react";

export function App() {
  const app = useApp();

  useEffect(() => {
    app.init();
  }, []);

  return (
    <Providers>
      <Navigation/>
    </Providers>
  );
}

