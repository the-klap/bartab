import React from 'react';
import MapContainer from '../MapContainer';
import Enzyme, { mount, shallow } from 'enzyme';
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
// describe('<MapContainer/>', () => {
//   it('has a functioning onClick inside of Marker', () => {
//     const mockCallBack = jest.fn()

//     const button = shallow((<Marker onClick={mockCallBack}>Ok!</Marker>))
//     button.find('onClick').simulate('click')
//     expect(mockCallBack.mock.calls.length).toEqual(1)
//   });
// });