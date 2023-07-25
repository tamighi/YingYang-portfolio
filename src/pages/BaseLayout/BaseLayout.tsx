import React from "react";

import { PageContainer, PowerButton } from "../../components";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <PageContainer>
      <div className="h-full flex flex-row">
        <LeftLayout />

        <div className="flex flex-col items-center flex-grow">
          <PowerButton />
          {children}
        </div>

        <RightLayout />
      </div>
    </PageContainer>
  );
};

export default BaseLayout;
