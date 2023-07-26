import { Link } from "@tanstack/router";
import { SocialLinks } from "../../components";

const LeftLayout = () => {
  return (
    <div className="flex-col justify-between hidden md:flex">
      <Link className="text-5xl font-bold font-pacifica" to="/">
        AT
      </Link>
      <SocialLinks />
    </div>
  );
};

export default LeftLayout;
