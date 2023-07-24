import { Logo, PageContainer, PowerButton } from "../../components";

const HomePage = () => {
  return (
    <PageContainer>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Logo>AT</Logo>
        <PowerButton style={{ justifySelf: "center" }} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
