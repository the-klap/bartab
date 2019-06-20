import React from 'react';
import Menu from '../Menu';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'reactstrap'

Enzyme.configure({ adapter: new Adapter() });

const menu= [
              { name: 'Space Dust', price:7},
              { name: 'Sculpin', price:5},
              { name: 'Belching Beaver', price:6},
            ]

describe('<Menu/>', () => {
    const wrapper = shallow(<Menu menu={menu}/>)
    it('has a form', () => {
        expect(wrapper.find('Form.newItem').exists()).toBe(true)
    })
    it('lists each item of the menu', () => {
        expect(wrapper.find('.menuItem')).toHaveLength(menu.length)
    })
    // it('adds an item to the list', () => {
    //     // wrapper.find('Button').simulate('click')
    //     expect(wrapper.state('name')).toEqual(wrapper.find('input.itemName.value'))
    // })
})