import React from "react";

import { v4 as uuidv4 } from "uuid";

import Droplet from "./Droplet";

type Position = {
  x: number;
  y: number;
};

type DropletProps = {
  createDroplet: (position: Position) => void;
};

const dropletContext = React.createContext<DropletProps | null>(null);

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
    (Position & { uuid: string })[]
  >([]);

  const createDroplet = (newPosition: Position) => {
    const newId = uuidv4();

    setDroplets((prevPositions) => [
      ...prevPositions,
      { ...newPosition, uuid: newId },
    ]);

    setTimeout(() => {
      setDroplets((prevPositions) => prevPositions.slice(1));
    }, 1000);
  };

  return (
    <dropletContext.Provider value={{ createDroplet }}>
      {droplets.map((position) => {
        return <Droplet key={position.uuid} x={position.x} y={position.y} />;
      })}
      {children}
    </dropletContext.Provider>
  );
};

export default DropletProvider;
