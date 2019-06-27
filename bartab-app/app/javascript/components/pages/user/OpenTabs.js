import React from "react"
import PropTypes from "prop-types"
import TabListItem from './TabListItem'


export default class OpenTabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const {open_tabs} = this.props
        const openSessionsTotal = open_tabs.map((tab, index) =>  {
                return (<TabListItem 
                            bar_id={tab.admin_id} 
                            total={tab.total} 
                            orders={tab.tab_histories}
                            key={index}
                            establishmentname={tab.admin.admin_profile.establishmentname}
                            address1={tab.admin.admin_profile.address1}
                            address2={tab.admin.admin_profile.address1}
                            city={tab.admin.admin_profile.city}
                            state={tab.admin.admin_profile.state}
                            zip={tab.admin.admin_profile.zip}
                            country={tab.admin.admin_profile.country}
                        />
                    )
            } )
        return(
             <React.Fragment>
               {openSessionsTotal}
            </React.Fragment>
            )
    }
}