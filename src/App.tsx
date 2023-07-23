import { Outlet } from "@tanstack/router";

function App() {
  return (
    <>
      <div>Hello world, this is root</div>
        <Outlet />
    </>
  );
}

export default App;
