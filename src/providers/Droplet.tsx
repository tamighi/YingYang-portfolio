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
      className="fixed w-10 h-10 rounded-full bg-transparent animate-droplet 
      translate-x-[-50%] translate-y-[-50%]"
      style={{
        top: y,
        left: x,
        boxShadow: `0px 0px 50px 32px inset ${color}, 0px 0px 50px 28px ${color}`,
      }}
      {...rest}
    />
  );
};

export default Droplet;
