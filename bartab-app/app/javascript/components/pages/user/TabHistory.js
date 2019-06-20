import React from "react"
import PropTypes from "prop-types"
import TabListItem from './TabListItem'
import { Row } from 'reactstrap'

export default class TabHistory extends React.Component {
    constructor(){
        super()
        }
        
         render(){
            const {sessions} = this.props
            
            const closedSessions = sessions.filter(tab => tab.open === false)
            
            const closedSessionsList = closedSessions.map((tab, index) =>  {
                        return (<TabListItem bar_id={tab.bar_id} total={tab.tab_total} key={index} />
                        )
                    })

            return(
                <React.Fragment>
                    <h1>Tab History</h1>
                    {closedSessionsList}
                </React.Fragment>
                )
    }
}