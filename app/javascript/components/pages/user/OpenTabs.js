import React from "react"
import PropTypes from "prop-types"
import TabListItem from './TabListItem'


class OpenTabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const {openTabs, handleCloseTab} = this.props
        const openSessionsTotal = openTabs.map((tab, index) =>  {
                return (<TabListItem 
                            bar_id={tab.admin_id}
                            open={tab.open}
                            tabId={tab.id}
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
                            handleCloseTab={handleCloseTab}
                        />
                    )
            })
            console.log(openTabs)
        return(
             <React.Fragment>
               {openSessionsTotal}
            </React.Fragment>
            )
    }
}
export default OpenTabs