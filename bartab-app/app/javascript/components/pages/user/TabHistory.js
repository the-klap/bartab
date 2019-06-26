import React from "react"
import PropTypes from "prop-types"
import TabListItem from './TabListItem'
import { Row } from 'reactstrap'

export default class TabHistory extends React.Component {
    constructor(){
        super()
        }
        
     render(){
        const {closed_tabs} =this.props
        
        const closedSessionsList = closed_tabs.map((tab, index) =>  {
                    return (<TabListItem bar_id={tab.admin_id} total={tab.total} key={index} />
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