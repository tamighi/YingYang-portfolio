import { Link } from "@tanstack/router";
import { FacebookIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "..";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Link>
        <GithubIcon width={25} height={25} />
      </Link>
      <Link>
        <TwitterIcon width={25} height={25} />
      </Link>
      <Link>
        <FacebookIcon width={25} height={25} />
      </Link>
      <Link>
        <YoutubeIcon width={25} height={25} />
      </Link>
      <div className="h-32 border-solid border-[1px]" />
    </div>
  );
};

export default SocialLinks;
