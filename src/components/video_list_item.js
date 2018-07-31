import React from 'react' ;

// props => ( video , key , onVideoSelect )
const VideoListItem = ( {video , onVideoSelect} ) => {


    const imageUrl = video.snippet.thumbnails.default.url ;

    return (
        <li className="list-group-item video-list-item" onClick={ () => { onVideoSelect(video) }  } >
            <div className="video-list media" >
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading video-item-title-text" > {video.snippet.title} </div>
                </div>
            </div>
        </li>
    );
} ;

export default VideoListItem ;