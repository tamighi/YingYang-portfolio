import { Link } from "@tanstack/router";
import { PageContainer, PowerButton } from "../../components";
import { SocialLinks } from "./SocialLinks";

const HomePage = () => {
  return (
    <PageContainer>
      <div className="h-full flex">
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold font-pacifica">AT</h1>
          <div className="flex flex-col">
              <Link
                className="text-2xl rotate-[270deg] py-12"
                to="/work"
              >
                Work
              </Link>
            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between flex-grow">
          <PowerButton />
        </div>
        <div className="flex flex-col justify-between">
          <a className="text-2xl" href="mailto:amighithomas@gmail.com">
            Say hi...
          </a>
          <Link className="text-2xl rotate-90" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
