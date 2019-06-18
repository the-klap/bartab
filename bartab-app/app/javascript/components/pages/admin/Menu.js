import React from "react"
import PropTypes from "prop-types"
import {Table} from 'reactstrap'
import MenuItem from './MenuItem'

class Menu extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        menu: [
          {name: 'Space Dust', price:7},
          {name: 'Sculpin', price:5},
          {name: 'Belching Beaver', price:6},
          ]
      }
  }
  
  render () {
    const {menu} = this.state
    
    var menuList = menu.map((value, index) => <MenuItem 
      key={index}
      index={index}
      name={value.name}
      price={value.price}
      />
      )
    
    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
            
            {menuList}
            
        </Table>
      </React.Fragment>
    );
  }
}

export default Menu