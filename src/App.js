import React, { Component } from 'react';
import ScoreBar from "./components/ScoreBar";
import Jumbotron from "./components/Jumbotron";
import ImageField from "./components/ImageField";
// import Image from "./components/Image";

const images = [
  {
    id: 1,
    src: "./images/baby-goat.jpg",
    guessed: false
  },
  {
    id: 2,
    src: "./images/beard-goat.jpg",
    guessed: false
  },
  {
    id: 3,
    src: "./images/big-ears-goat.jpg",
    guessed: false
  },
  {
    id: 4,
    src: "./images/daisy-goat.jpg",
    guessed: false
  },
  {
    id: 5,
    src: "./images/friends-goats.jpg",
    guessed: false
  },
  {
    id: 6,
    src: "./images/grass-goat.jpg",
    guessed: false
  },
  {
    id: 7,
    src: "./images/jumping-goat.jpg",
    guessed: false
  },
  {
    id: 8,
    src: "./images/scream-goat.jpg",
    guessed: false
  },
  {
    id: 9,
    src: "./images/smiley-goat.jpeg",
    guessed: false
  },
  {
    id: 10,
    src: "./images/tired-goat.jpg",
    guessed: false
  },
  {
    id: 11,
    src: "./images/v-furry-goat.jpg",
    guessed: false
  },
  {
    id: 12,
    src: "./images/wtf-goat.jpg",
    guessed: false
  },
];

class App extends Component {
  state = {
    score: 0,
    images: []
  }

  handleImageClick = event => {
    console.log(event.target);
    const index = event.target.id;
    if (images[index].guessed === false) {
      images[index].guessed = true;
      this.setState({ score: this.state.score + 1});
      console.log(this.state.score);
    }
    else {
      for (var i = 0; i < images.length; i++) {
        images[i].guessed = false;
        this.setState({ score: 0 });
      }
    }
    this.shuffleImages(images);
  }

  shuffleImages = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ images: array });
  }

  componentDidMount() {
    this.shuffleImages(images);
  }

  render() {
    return (
      <div>
        <ScoreBar 
          score={this.state.score}
        />
        <Jumbotron />
        <ImageField images={this.state.images} handleImageClick={this.handleImageClick}/> 
      </div>
    );
  }
}

export default App;
