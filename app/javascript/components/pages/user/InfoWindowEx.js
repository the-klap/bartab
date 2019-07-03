import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
// import { InfoWindow } from 'google-maps-react';

class InfoWindowEx extends React.Component {
  constructor(props) {
    super(props);
    this.infoWindowRef = React.createRef();
    this.onInfoWindowOpen = this.onInfoWindowOpen.bind(this);
    if (!this.containerElement) {
      this.containerElement = document.createElement(`div`);
    }
  }

  onInfoWindowOpen() {
    ReactDOM.render(
      React.Children.only(this.props.children),
      this.containerElement
    );
    this.infoWindowRef.current.infowindow.setContent(this.containerElement);
  }
  // render() {
  //   return (
  //     <InfoWindow
  //       onOpen={this.onInfoWindowOpen}
  //       ref={this.infoWindowRef}
  //       {...this.props}
  //     />
  //   );
//  }
  render(){
    return(
      <div>
      hello
      </div>
    )
    
  }
}

export default InfoWindowEx
