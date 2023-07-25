import { Logo, PageContainer, PowerButton } from "../../components";

const HomePage = () => {
  return (
    <PageContainer>
      <div className="flex justify-between">
        <Logo />
        <PowerButton />
        <div>Third</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
