import React from 'react';
import UserHome from '../UserHome';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav, NavItem, NavLink } from 'reactstrap'

Enzyme.configure({ adapter: new Adapter() });



describe('<UserHome>', () => {
    it('Should have nav items of user home, tab history, map, tab, profile and sign out', () => {
        const wrapper = shallow(<UserHome user_logged_in={ true } />); 
        expect(wrapper.find('Nav').length).toEqual(1); 
        expect(wrapper.containsMatchingElement(<NavLink id="userHome" href="/user_home/user_home">User Home</NavLink>)).toBe(true)
        expect(wrapper.containsMatchingElement(<NavLink id="tabHistory" href="/user_home/tab_history">Tab History</NavLink>)).toBe(true)
        expect(wrapper.containsMatchingElement(<NavLink id="map" href="/user_home/map">Map</NavLink>)).toBe(true)
        expect(wrapper.containsMatchingElement(<NavLink id="tab" href="/user_home/tab">Tab</NavLink>)).toBe(true)
        expect(wrapper.containsMatchingElement(<NavLink id="userProfile" href="/user_home/profile">Profile</NavLink>)).toBe(true)

     });
})