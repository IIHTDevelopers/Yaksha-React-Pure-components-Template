import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../../components/TodoForm';

describe('boundary', () => {
    let wrapper;
    let mockOnAdd;

    beforeEach(() => {
        mockOnAdd = jest.fn();
        wrapper = shallow(<TodoForm onAdd={mockOnAdd} />);
    });

    it('TodoFormComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('TodoFormComponent boundary should call onAdd when form is submitted', () => {
        const task = 'New Task';
        wrapper.find('input').simulate('change', { target: { value: task } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(mockOnAdd).toHaveBeenCalledWith(task);
    });

    it('TodoFormComponent boundary should clear input after form is submitted', () => {
        const task = 'New Task';
        wrapper.find('input').simulate('change', { target: { value: task } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(wrapper.find('input').props().value).toBe('');
    });
});
