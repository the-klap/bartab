import React, { Component } from "react";
import PropTypes from "prop-types";
import './app.css';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media
} from "reactstrap";

const items = [
  {
    src:
      "https://cdn1.thr.com/sites/default/files/2016/07/south_park_still_h_2016.jpg",
    altText: "",
    caption: "Team KLAP"
  },
  {
    src:
      "http://4.images.southparkstudios.com/images/shows/south-park/clip-thumbnails/season-7/0708/south-park-s07e08c06-kyles-had-enough-16x9.jpg?quality=0.8",
    altText: "",
    caption: "KYLE"
  },
  {
    src: "https://memegenerator.net/img/instances/81809689.jpg",
    altText: "",
    caption: ""
  },
  {
    src: "https://i.imgflip.com/1gqoya.jpg",
    altText: "",
    caption: "Luke"
  },
  {
    src:
      "https://m.media-amazon.com/images/M/MV5BMjg1NGM1Y2MtY2JiMS00NWZhLThkZWItYTYyMjcwOTYwMTI1XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
    altText: "",
    caption: "Peter"
  }
];

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}  />
          <CarouselCaption
            className="textcolor" captionText={item.caption}
            className="text_color" captionHeader={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <React.Fragment>
        <div>
          <Media>
    
            <Media body>
              <Media heading> <h5> ABOUT US </h5> </Media>
            </Media>
          </Media>
        </div>

        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </React.Fragment>
    );
  }
}

export default AboutUs;
