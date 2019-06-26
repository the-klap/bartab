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
                return (<TabListItem bar_id={tab.bar_id} total={tab.total} key={index} />
                    )
            } )
        return(
             <React.Fragment>
               {openSessionsTotal}
            </React.Fragment>
            )
    }
}