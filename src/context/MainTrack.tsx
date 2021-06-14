import React, { createContext } from "react";
import useSound from "use-sound";

const MainTrackContext = createContext([]);

interface MainTrackProviderProps {
  children: React.ReactNode;
}

const MainTrackProvider: React.FC<MainTrackProviderProps> = ({
  children,
}: MainTrackProviderProps) => {
  const [mainTrack, setMainTrack] = React.useState<string>("");

  const [playMainTrack, mainTrackData] = useSound(mainTrack);

  return (
    <MainTrackContext.Provider
      value={[mainTrack, setMainTrack, playMainTrack, mainTrackData]}
    >
      {children}
    </MainTrackContext.Provider>
  );
};

export { MainTrackContext, MainTrackProvider };
