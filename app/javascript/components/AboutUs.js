import React from "react";
import {
  faBeer,
  faDizzy
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://files.slack.com/files-pri/T04B40L2C-FL2NKPEE8/image_from_ios.jpg",
    altText: "",
    caption: " "
  },
  {
    src:
      "http://4.images.southparkstudios.com/images/shows/south-park/clip-thumbnails/season-7/0708/south-park-s07e08c06-kyles-had-enough-16x9.jpg?quality=0.8",
    altText: "",
    caption: ""
  },
  {
    src: "https://memegenerator.net/img/instances/81809689.jpg",
    altText: "",
    caption: ""
  },
  {
    src: "https://i.imgflip.com/1gqoya.jpg",
    altText: "",
    caption: ""
  },
  {
    src:
      "https://m.media-amazon.com/images/M/MV5BMjg1NGM1Y2MtY2JiMS00NWZhLThkZWItYTYyMjcwOTYwMTI1XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
    altText: "",
    caption: ""
  }
];

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.state = {
      activeIndex: 0,
      direction: null,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
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
    this.setState({
      activeIndex: nextIndex
    });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }



  render() {
    const { index, direction } = this.state
    const items = [
      {
        src: "https://cattinderfrontscreen.s3-us-west-1.amazonaws.com/image_from_ios-1.jpg",
        altText: " ",
        caption: <div>
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} About Us </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} charCode="Y">We Are Team KLAP</ModalHeader>
            <ModalBody>
              We like to drink Beer and not forget to close our Tab
              <br />
              Kyle
              <br />
              Luke
              <br />
              Aaron
              <br />
              Peter
          </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}><fontAwesome font={faBeer} />Let's Drink</Button>{' '}
              <Button color="danger" onClick={this.toggle}><fontAwesome font={faDizzy} />Go Home You're Drunk</Button>
            </ModalFooter>
          </Modal>
        </div>
      },
      {
        src:
          "http://4.images.southparkstudios.com/images/shows/south-park/clip-thumbnails/season-7/0708/south-park-s07e08c06-kyles-had-enough-16x9.jpg?quality=0.8",
        altText: "",
        caption: ""
      },
      {
        src: "https://memegenerator.net/img/instances/81809689.jpg",
        altText: "",
        caption: ""
      },
      {
        src: "https://i.imgflip.com/1gqoya.jpg",
        altText: "",
        caption: ""
      },
      {
        src:
          "https://m.media-amazon.com/images/M/MV5BMjg1NGM1Y2MtY2JiMS00NWZhLThkZWItYTYyMjcwOTYwMTI1XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
        altText: "",
        caption: ""
      }
    ];
    const { activeIndex } = this.state;
    const slides = items.map(item => {
      return (
        <CarouselItem
          ActiveIndex={index}
          direction={direction}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <React.Fragment>

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
        <div>{" "}</div>
      </React.Fragment>

    );
  }
}

export default AboutUs;