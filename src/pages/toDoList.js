import React from 'react';
import ToDoListItems from '../pages/ToDoListItems';

const todoItems = [];
todoItems.push({ index: 1, value: "czytanie etykiet", done: false });
todoItems.push({ index: 2, value="odstawienie wagi", done: false });
todoItems.push({ index: 3, value: "Zbadanie się", done: true });

class TodoList extends React.Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
            );
        });
        return (
            <ul className="list-group"> {items} </ul>

        );
    }
}



export default toDoList;