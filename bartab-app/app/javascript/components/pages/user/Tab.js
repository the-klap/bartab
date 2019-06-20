import React from "react"
import PropTypes from "prop-types"


export default class Tab extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
            tabTotal = () =>{
                let openSessions = this.props.sessions.filter(item => item.open === true )
                console.log(openSessions)
                const openSessionsTotal = openSessions.map((tab, index) =>  {
                        return (<li key={index}>
                                    Total {tab.tab_total}<br />
                                    location: {tab.bar_id}
                                </li>
                        )
                    } )
                return openSessionsTotal
            }
        render(){
            return(
                 <React.Fragment>
                    <ul>
                   <br/>
                   {this.tabTotal()}
                        <br />
                        <br/>
                    </ul>
                </React.Fragment>
                )
    }
}