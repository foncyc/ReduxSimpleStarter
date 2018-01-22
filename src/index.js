import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// npm install
// npm install --save youtube-api-search
// npm install --save lodash

const API_KEY = 'AIzaSyCH0Hc5ME8rxFgdiDKcM2zJ88sKXE0t3uk';

// Create new component. This should produce some html

// const App = function(){
//     return <div>Hi!</div>
// }

// const App = () => {
//     // return <div>Hi!</div>
//     return (
//         <div>
//             <SearchBar /> 
//         </div>
//     );
// }

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // this.setState({videos: data });
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);
        
        return (
            <div>
                {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
                
            </div>
        );
    }

}

// Test edit
// Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
