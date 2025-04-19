import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

describe('boundary', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('AppComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('AppComponent boundary should render a TodoForm component', () => {
        expect(wrapper.find(TodoForm)).toHaveLength(1);
    });

    it('AppComponent boundary should render a TodoList component', () => {
        expect(wrapper.find(TodoList)).toHaveLength(1);
    });

    it('AppComponent boundary should add a todo', () => {
        const task = 'New Task';
        wrapper.instance().addTodo(task);
        expect(wrapper.state('todos')).toHaveLength(1);
        expect(wrapper.state('todos')[0].task).toBe(task);
    });

    it('AppComponent boundary should delete a todo', () => {
        const task = 'New Task';
        wrapper.instance().addTodo(task);
        const { id } = wrapper.state('todos')[0];
        wrapper.instance().deleteTodo(id);
        expect(wrapper.state('todos')).toHaveLength(0);
    });

    it('AppComponent boundary should edit a todo', () => {
        const task = 'New Task';
        const newTask = 'Updated Task';
        wrapper.instance().addTodo(task);
        const { id } = wrapper.state('todos')[0];
        wrapper.instance().editTodo(id, newTask);
        expect(wrapper.state('todos')[0].task).toBe(newTask);
    });
});
