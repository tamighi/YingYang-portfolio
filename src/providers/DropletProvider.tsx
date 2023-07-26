import React from "react";

import { v4 as uuidv4 } from "uuid";

import Droplet from "./Droplet";

type DropletProps = {
  x: number;
  y: number;
  color?: string;
};

type DropletContextProps = {
  createDroplet: (props: DropletProps) => void;
};

const dropletContext = React.createContext<DropletContextProps | null>(null);

export const useDroplet = () => {
  const dropletProps = React.useContext(dropletContext);
  if (!dropletProps) {
    throw new Error();
  }
  return dropletProps;
};

type Props = { children: React.ReactNode };

const DropletProvider = (props: Props) => {
  const { children } = props;

  const [droplets, setDroplets] = React.useState<
    (DropletProps & { uuid: string })[]
  >([]);

  const createDroplet = (newPosition: DropletProps) => {
    const newId = uuidv4();

    setDroplets((prevPositions) => [
      ...prevPositions,
      { ...newPosition, uuid: newId },
    ]);

    setTimeout(() => {
      setDroplets((prevPositions) => prevPositions.slice(1));
    }, 2000);
  };

  return (
    <dropletContext.Provider value={{ createDroplet }}>
      {droplets.map((droplet) => {
        return (
          <Droplet
            key={droplet.uuid}
            x={droplet.x}
            y={droplet.y}
            color={droplet.color}
          />
        );
      })}
      {children}
    </dropletContext.Provider>
  );
};

export default DropletProvider;
