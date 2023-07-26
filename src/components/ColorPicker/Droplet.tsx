import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  x?: number;
  y?: number;
  activated?: boolean;
  deactivate?: () => void;
};

const Droplet = (props: Props) => {
  const { x, y, activated, deactivate, ...rest } = props;

  React.useEffect(() => {
    if (!activated) return;

    deactivate?.();
  }, [activated, x, y]);

  return (
    <div
      className={`bg-black fixed w-10 h-10 rounded-full translate-x-[-50%] translate-y-[-50%] z-[-1] animate-droplet`}
      style={{ top: y, left: x }}
      {...rest}
    />
  );
};

export default Droplet;
