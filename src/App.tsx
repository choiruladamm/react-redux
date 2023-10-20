import { FC } from "react";
import { Button } from "./components/ui/button";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <Button>vite-ts-tailwind-starter</Button>
    </div>
  );
};

export default App;
