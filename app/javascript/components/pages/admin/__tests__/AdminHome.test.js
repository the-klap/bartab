import React from 'react';
import AdminHome from '../AdminHome';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav, NavItem, NavLink } from 'reactstrap'

Enzyme.configure({ adapter: new Adapter() });

// describe('<AdminHome/>', () => {
//     const menu= [
//                   { name: 'Space Dust', price:7},
//                   { name: 'Sculpin', price:5},
//                   { name: 'Belching Beaver', price:6},
//                  ]
//     const customers= [
//                       {id: 42, name: 'Joe', total:0, order: [], status: 'Open'},
//                       {id: 2, name: 'Bob', total:0, order: [], status: 'Open'},
//                       {id: 9, name: 'Rick', total:0, order: [], status: 'Open'},
//                       ]
//     const profile = {
//                       name:"Bub's",
//                       hours:"24/7",
//                       info:"We sell beer"
//                     }
    
// })

describe('<AdminHome>', () => {
    it('Should have nav items of open tabs, menu, profile, and logout', () => {
        const wrapper = shallow(<AdminHome admin_logged_in={ true } />); 
        expect(wrapper.find('Nav').length).toEqual(1); 
        expect(wrapper.containsMatchingElement(<NavLink id="openTabs" href="/admin_home/open_tabs">Open Tabs</NavLink>)).toBe(true)
        expect(wrapper.containsMatchingElement(<NavLink id="adminMenu" href="/admin_home/menu">Menu</NavLink>)).toBe(true)
        expect(wrapper.containsMatchingElement(<NavLink id="adminProfile" href="/admin_home/profile">Profile</NavLink>)).toBe(true)
     });
})