import React from 'react' ;


const VideoArea = ({video}) => {

    if ( !video ) {
        return <div>Loading...</div> ;
    }

    const videoId = video.id.videoId ;
    const url = `https://www.youtube.com/embed/${videoId}`; // new way of injecting a string

    return (

        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} />
            </div>

            <div className="card video-area-details" >
                <div className="card-header video-area-title-text">{video.snippet.title}</div>
                <div className="card-body video-area-description-text">{video.snippet.description}</div>
            </div>

        </div>

    )
};


export default VideoArea ;