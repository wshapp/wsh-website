import React, { createContext } from 'react';
import useSound from "use-sound";


const MainTrackContext = createContext([]);

const MainTrackProvider = (props) => {
    const [mainTrack, setMainTrack] = React.useState("")

    let [playMainTrack, mainTrackData] = useSound(mainTrack);

    return <MainTrackContext.Provider value={[mainTrack, setMainTrack, playMainTrack, mainTrackData]}>{props.children}</MainTrackContext.Provider>
}

export { MainTrackContext, MainTrackProvider };