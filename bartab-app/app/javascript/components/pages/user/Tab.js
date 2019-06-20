import React from "react"
import PropTypes from "prop-types"


export default class Tab extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
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
                
           
                    <ul>
                        {displayMenu}
                        <br />
                        <br/>
                    </ul>
                 
                 
                 
                 </React.Fragment>
                )
    }
}