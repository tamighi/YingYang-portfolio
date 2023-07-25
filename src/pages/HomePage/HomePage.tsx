import { Logo, PageContainer, PowerButton } from "../../components";
import { SocialLinks } from "./SocialLinks";

const HomePage = () => {
  return (
    <PageContainer>
      <div className="h-full flex justify-between">
        <div className="flex flex-col justify-between">
          <Logo />
          <SocialLinks />
        </div>
        <PowerButton />
        <div>Third</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
