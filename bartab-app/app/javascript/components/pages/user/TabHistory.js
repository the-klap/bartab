import React from "react"
import PropTypes from "prop-types"

export default class TabHistory extends React.Component {
    constructor(){
        super()
        }
        
         render(){
             
             
              console.log(this.props.menu)
             const displayMenu = this.props.menu.map((item) => {
             return (
                    <ul>
                        {item.brewery}<br />
                        Beers on Menu: {item.beer_name}<br />
                        Price: {item.price}
                        <br />
                        <br/>
                    </ul>)
            })
             
            return(
                <React.Fragment>
                <h3>this is the tab history</h3>
                <ul>{displayMenu}</ul>
                </React.Fragment>
                )
    }
}