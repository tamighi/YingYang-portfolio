import { HomeMain } from "./HomeMain";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-grow items-center pt-20">
      <div className="flex-grow flex flex-col items-center justify-center">
        <HomeMain />
      </div>

      <p className="text-center text-xl max-w-2xl mb-32 mt-20">
        Yin and yang are two sides of a dualism. Yin is passive and subdued.
        Yang, in contrast, is active and expressive. You can use any color to
        represent yin — similarly for yang, — so long as the contrast remains.
      </p>
    </div>
  );
};

export default HomePage;
