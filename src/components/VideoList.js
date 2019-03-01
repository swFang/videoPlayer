import React from 'react'; 
 

const VideoList = (props) => {
    // arrray of videos = props.videos
    return <div> {props.videos.length} </div>;
};

export default VideoList;