import React from "react";

type Position = {
  x: number;
  y: number;
};

type DropletProps = {
  setPosition: React.Dispatch<React.SetStateAction<Position | undefined>>;
};

const dropletContext = React.createContext<DropletProps | null>(null);

type Props = { children: React.ReactNode };

const DropletProvider = (props: Props) => {
  const { children } = props;
  const [position, setPosition] = React.useState<Position>();

  return (
    <dropletContext.Provider value={{ setPosition }}>
      {children}
    </dropletContext.Provider>
  );
};

export default DropletProvider;
