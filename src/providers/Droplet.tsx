import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  x: number;
  y: number;
  color?: string;
};

const Droplet = (props: Props) => {
  const { x, y, color, ...rest } = props;

  return (
    <div
      className="fixed w-10 h-10 rounded-full animate-droplet"
      style={{ top: y, left: x, backgroundColor: color || "blue" }}
      {...rest}
    />
  );
};

export default Droplet;
