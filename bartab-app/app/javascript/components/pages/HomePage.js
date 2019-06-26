import React from "react"
import PropTypes from "prop-types"

class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div>
            <section>
                <div id="action"><h1> BarTab</h1> <h4> Order drinks <br />from your phone!</h4>
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
            </div>
      </React.Fragment>
    );
  }
}

export default HomePage
