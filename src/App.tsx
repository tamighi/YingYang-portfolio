import React from "react";
import { Link, Outlet } from "@tanstack/router";
import { PageContainer, PowerButton, SocialLinks, YingYangIcon } from "./components";

function App() {
  const [center, setCenter] = React.useState(true);

  return (
    <PageContainer>
      <div className="h-full flex">
        <div className="flex flex-col justify-between pr-16">
          <Link className="text-5xl font-bold font-pacifica" to="/">
            AT
          </Link>
          <SocialLinks />
        </div>
        <div className="flex flex-col items-center justify-between flex-grow">
          <PowerButton />

          <div>
            <Outlet />
            <div
              className={`cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] transition-all duration-1000 ${
                center
                  ? "top-[50%] left-[50%] w-48 h-48"
                  : "top-[85%] left-[92%] w-32 h-32"
              }`}
            >
              <YingYangIcon onClick={() => setCenter(!center)} />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link className="text-3xl rotate-90" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}

export default App;
