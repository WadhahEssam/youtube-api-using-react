

// go find a library called react ( in the node_modules )  and assign it to the variable React
import React from 'react' ;
import ReactDOM from 'react-dom' ;
import YTSearch from 'youtube-api-search' ;
import SearchBar from './components/search_bar' ; // path from the file we are in
import VideoList from './components/video_list' ;
import VideoArea from './components/video_area' ;

// the API for youtube
const API = 'AIzaSyASLB-tu4GOReJSzTl87J63QDcHJO3lQic' ;

// creating a new component that will produce html
class App extends React.Component {

    constructor (props) {

        super(props) ;

        this.state = {
            videos: [] ,
            selectedVideo : null
        };

        YTSearch ( {key:API , term:'res killer'} , (videos) => {
            this.setState({
                videos , // in the ES6 you can do it that way and the key and value will be
                selectedVideo : videos[0]
            }) ;
            console.log(videos) ;
        });
    }

    render () {
        return (
            <div>
                <SearchBar/>
                <VideoArea video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={(video) => { this.setState({ selectedVideo : video }) } }
                    videos={this.state.videos} />
            </div>
        );
    }

}

// taking the component and put it in the dom
ReactDOM.render( <App /> , document.querySelector('.container') );