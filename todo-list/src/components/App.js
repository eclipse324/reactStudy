import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    state = {
        input: '',
        todos: [],
        id: -1,
    }

    // 변경된 input 값 받아오기
    _handleChange = (e) => {
        const {value} = e.target;       
        this.setState ({
            input: value
        });
    }

    // 새 데이터 추가
    _handleInsert = () => {
        const { input, todos } = this.state;
        if (this.state.input === '') return alert ('내용을 입력해주세요!');
        const newTodo = {
            text: input,
            done: false,
            id: this.state.id + 1
        }

        this.setState({
            todos: [...todos, newTodo],
            input: '' ,
            id: this.state.id + 1
        })
    }    

    // todo item 토글하기
    _handleToggle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        }

        this.setState ({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }

    // 아이템 삭제하기
    _handleRemove = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }

    render() {
        const { input, todos } = this.state;
        const {
            _handleChange,
            _handleInsert,
            _handleToggle,
            _handleRemove
        } = this;

        return(
            <PageTemplate>
                <TodoInput onChange={_handleChange} onInsert={_handleInsert} value={input} />
                <TodoList todos={todos} onToggle={_handleToggle} onRemove={_handleRemove} />
            </PageTemplate>
        )
    }
}

export default App;