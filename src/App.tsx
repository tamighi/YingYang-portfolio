import { Outlet } from "@tanstack/router";
import { BaseLayout } from "./pages";

function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default App;
