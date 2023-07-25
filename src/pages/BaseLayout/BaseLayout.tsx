import React from "react";

import { PageContainer, PowerButton, YingYangIcon } from "../../components";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  const [center, setCenter] = React.useState(true);
  return (
    <PageContainer>
      <div className="h-full flex flex-row">
        <LeftLayout />

        <div className="flex flex-col items-center flex-grow">
          <PowerButton />

          <div
            className={`cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] transition-yinYang duration-1000 ${
              center
                ? "top-[50%] left-[50%] w-48 h-48"
                : "top-[85%] left-[92%] w-32 h-32"
            }`}
          >
            <YingYangIcon onClick={() => setCenter(!center)} />
          </div>
          {center && <div className="flex-grow" />}

          {children}
        </div>

        <RightLayout />
      </div>
    </PageContainer>
  );
};

export default BaseLayout;
