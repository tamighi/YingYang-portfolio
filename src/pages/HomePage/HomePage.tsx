import React from "react";
import { Link } from "@tanstack/router";
import { PageContainer, PowerButton, YingYangIcon } from "../../components";
import { SocialLinks } from "./SocialLinks";

const HomePage = () => {
  const [center, setCenter] = React.useState(true);

  return (
    <PageContainer>
      <div className="h-full flex">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl font-bold font-pacifica">AT</h1>
          <div className="flex flex-col">
            <Link className="text-3xl rotate-[270deg] py-12" to="/work">
              Work
            </Link>
            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between flex-grow">
          <PowerButton />

          <div
            className={`cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] transition-all duration-1000 ${
              center
                ? "top-[50%] left-[50%] w-48 h-48"
                : "top-[85%] left-[92%] w-32 h-32"
            }`}
          >
            <YingYangIcon
              className="animate-spin-slow"
              onClick={() => setCenter(!center)}
            />
          </div>

          <div className="w-full flex justify-around">
            <Link className="text-3xl" to="/about">
              About
            </Link>
            <Link className="text-3xl" to="/skills">
              Skills
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link className="text-3xl" href="mailto:amighithomas@gmail.com">
            Say hi...
          </Link>
          <div className="flex-grow flex items-center">
            <Link className="text-3xl rotate-90" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
