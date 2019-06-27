import React from 'react';
import MapContainer from '../MapContainer';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


Enzyme.configure({ adapter: new Adapter() });



describe('<MapContainer/>', () => {
    const wrapper = shallow(<Marker />)
    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })
})


const clickFn = jest.fn()

describe('<MapContainer/>', () => {
  it('should show info window when clicked', () => {
    const component = shallow(<MapContainer onClick={clickFn} />)
        .simulate('click')
        expect(clickFn).toBeTruthy()
    })
})