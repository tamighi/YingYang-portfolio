import { Logo, PageContainer, PowerButton } from "../../components";

const HomePage = () => {
  return (
    <PageContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <PowerButton />
        <div>Third</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
