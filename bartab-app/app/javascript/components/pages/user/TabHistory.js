import React from "react"
import PropTypes from "prop-types"

export default class TabHistory extends React.Component {
    constructor(){
        super()
        }
        
         render(){
            const {sessions} = this.props
            
            const closedSessions = sessions.filter(tab => tab.open === false)
            
            const closedSessionsList = closedSessions.map((tab, index) =>  {
                        return (<li key={index}>
                                    Location: {tab.bar_id} Total: ${tab.tab_total}
                                </li>
                        )
                    })

            return(
                <React.Fragment>
                    <h1>Tab History</h1>
                    <ul>
                        {closedSessionsList}
                    </ul>
                </React.Fragment>
                )
    }
}