

// go find a library called react ( in the node_modules )  and assign it to the variable React
import React from 'react' ;
import ReactDOM from 'react-dom' ;
import YTSearch from 'youtube-api-search' ;
import _ from 'lodash' ;
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
        this.search(); // will search and put the result in the state
    }

    search( term ) {
        YTSearch({key: API, term }, (videos) => {
            this.setState({
                videos, // in the ES6 you can do it that way and the key and value will be
                selectedVideo: videos[0]
            });
        });
    }

    render () {

        // method debounce creates a function so first you should save the created function in a variable
        const debouncedSearch  = _.debounce( (term)=>{this.search(term)} , 300 ) ; // how to use lodash

        return (
            <div>
                <SearchBar onVideoSearch={ (term)=>{debouncedSearch(term)} } />
                <VideoArea video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={(selectedVideo) => { this.setState({selectedVideo}) } }
                    videos={this.state.videos} />
            </div>
        );
    }
}

// taking the component and put it in the dom
ReactDOM.render( <App /> , document.querySelector('.container') );

