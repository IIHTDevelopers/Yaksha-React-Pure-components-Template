import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../components/TodoItem';

describe('boundary', () => {
    let wrapper;
    let mockOnDelete;
    let mockOnEdit;
    const todo = { id: 1, task: 'Test Task' };

    beforeEach(() => {
        mockOnDelete = jest.fn();
        mockOnEdit = jest.fn();
        wrapper = shallow(
            <TodoItem todo={todo} onDelete={mockOnDelete} onEdit={mockOnEdit} />
        );
    });

    it('TodoItemComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('TodoItemComponent boundary should display the correct task', () => {
        expect(wrapper.find('span').text()).toBe(todo.task);
    });

    it('TodoItemComponent boundary should call onDelete when delete button is clicked', () => {
        wrapper.find('button').at(1).simulate('click');
        expect(mockOnDelete).toHaveBeenCalledWith(todo.id);
    });

    it('TodoItemComponent boundary should call onEdit when edit button is clicked', () => {
        window.prompt = jest.fn().mockReturnValue('Updated Task');
        wrapper.find('button').at(0).simulate('click');
        expect(mockOnEdit).toHaveBeenCalledWith(todo.id, 'Updated Task');
    });

    it('TodoItemComponent boundary should not call onEdit if prompt is cancelled', () => {
        window.prompt = jest.fn().mockReturnValue(null);
        wrapper.find('button').at(0).simulate('click');
        expect(mockOnEdit).not.toHaveBeenCalled();
    });
});
