import React from "react"
import PropTypes from "prop-types"
class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div>
            <section>
                <div id="action">
                    <div id="keg">
                        <div id="pipe-handle"></div>
                        <div id="pipe"></div>
                        <div id="pipe-front"></div>
                    </div>

                    <div className="glass">
                        <div className="beer"></div>
                        <div className="handle">
                            <div className="top-right"></div>
                            <div className="bottom-right"></div>
                        </div>
                        <div className="front-glass"></div>
                    </div>
                </div>
            </section>
            <h1>
                BarTab
            </h1>
            <h3> Order beer from <br/>
            your phone!</h3>
            </div>
      </React.Fragment>
    );
  }
}

export default HomePage
