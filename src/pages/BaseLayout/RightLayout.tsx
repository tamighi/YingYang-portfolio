import { Link } from "@tanstack/router";

const RightLayout = () => {
  return (
    <div className="hidden md:flex items-center">
      <Link className="text-3xl rotate-90" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default RightLayout;
