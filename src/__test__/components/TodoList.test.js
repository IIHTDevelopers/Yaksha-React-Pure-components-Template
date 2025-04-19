import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList';

describe('boundary', () => {
    let wrapper;
    let mockOnEdit;
    let mockOnDelete;
    const todos = [{ id: 1, task: 'Test Task' }];

    beforeEach(() => {
        mockOnEdit = jest.fn();
        mockOnDelete = jest.fn();
        wrapper = shallow(
            <TodoList todos={todos} onEdit={mockOnEdit} onDelete={mockOnDelete} />
        );
    });

    it('TodoListComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
