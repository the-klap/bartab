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
                    return (<TabListItem 
                        bar_id={tab.admin_id} 
                        total={tab.total} 
                        key={index}
                        orders={tab.tab_histories}
                        establishmentname={tab.admin.admin_profile.establishmentname}
                        address1={tab.admin.admin_profile.address1}
                        address2={tab.admin.admin_profile.address1}
                        city={tab.admin.admin_profile.city}
                        state={tab.admin.admin_profile.state}
                        zip={tab.admin.admin_profile.zip}
                        country={tab.admin.admin_profile.country}
                        />
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