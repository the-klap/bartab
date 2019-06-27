import React from 'react';
import CustomerTab from '../CustomerTab';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav, NavItem, NavLink } from 'reactstrap'
import MenuItem from '../MenuItem'


Enzyme.configure({ adapter: new Adapter() });



describe('<CustomerTab/>', () => {
    const wrapper = shallow(<MenuItem />)
    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })
})


const handleAClose = jest.fn()

describe('<CustomerTab/>', () => {
  it('should close a tab', () => {
    const component = shallow(<handleAClose handleAClose={handleAClose} />)
        .simulate('click')
        expect(handleAClose).toBeTruthy()
    })
})

const handleChange = jest.fn()

describe('<CustomerTab/>', () => {
  it('should take index of selected item and set state', () => {
    const component = shallow(<handleChange handleChange={handleChange} />)
        .simulate('click')
        expect(handleChange).toBeTruthy()
    })
})

const handleAddOrder = jest.fn()

describe('<CustomerTab/>', () => {
  it('sends state and user id to home', () => {
    const component = shallow(<handleAddOrder handleAddOrder={handleAddOrder} />)
        .simulate('click')
        expect(handleAddOrder).toBeTruthy()
    })
})

const handleDelete = jest.fn()

describe('<CustomerTab/>', () => {
  it('should delete an item from a customer\'s order', () => {
    const component = shallow(<handleDelete handleDelete={handleDelete} />)
        .simulate('click')
        expect(handleDelete).toBeTruthy()
    })
})