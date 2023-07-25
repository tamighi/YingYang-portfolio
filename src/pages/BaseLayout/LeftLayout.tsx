import { Link } from "@tanstack/router";
import { SocialLinks } from "../../components";

const LeftLayout = () => {
  return (
    <div className="flex flex-col justify-between pr-16">
      <Link className="text-5xl font-bold font-pacifica" to="/">
        AT
      </Link>
      <SocialLinks />
    </div>
  );
};

export default LeftLayout;
