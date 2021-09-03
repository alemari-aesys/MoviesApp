import React from 'react';
import VideoPlayer from 'react-native-video-controls';


const Video = ({videoFunction}) => {
    return (
        <VideoPlayer 
        onBack={()=>videoFunction()}
        onEnd={()=>videoFunction()}
        fullScreenOrientation='all'
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
        />
    );
}

export default Video;