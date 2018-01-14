import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import API from './API';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.handleVideoSelect = this.handleVideoSelect.bind(this);

        API( { q: 'surfboards' }, (videos) => {
            this.setState( {
                videos: videos,
                selectedVideo: videos[0]
            });
        });
        
    }

    handleVideoSelect(video) {
        console.log('clicked');
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return(
            <div className="AppWrapper">
                <SearchBar />
                <div className="ContentWrapper">
                    <VideoList 
                        videos={this.state.videos}
                        onVideoSelect={this.handleVideoSelect}
                        />
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));