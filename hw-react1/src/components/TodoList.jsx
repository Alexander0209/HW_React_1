import React from 'react'
import ListItem from './ListItem'

const TodoList = (props) => {

    const todos = [
        {id: 1, title: "Помыть посуду", img:"1.jpg", completed: false},
        {id: 2, title: "Выгулять собаку", img:"2.jpg", completed: true},
        {id: 3, title: "Приготовить покушать", img:"3.jpg", completed: true},
        {id: 4, title: "Сделать ДЗ", img:"4.jpg", completed: false},
        {id: 5, title: "Сдать диплом", img:"5.jpg", completed: false},
        {id: 6, title: "Убрать в квартире", img:"3.jpg", completed: true},
        {id: 7, title: "Выйти на прогулку", img:"1.jpg", completed: false},
        {id: 8, title: "Купить продукты", img:"4.jpg", completed: false},
        {id: 9, title: "Позаниматься спортом", img:"3.jpg", completed: true},
        {id: 10, title: "Отдохнуть", img:"5.jpg", completed: false},
        
    ]

    return (
        <div>
            <h3>Задание №3</h3>
            <ul className="todoList">
                {
                  todos.map((todo) => {
                    return(
                        <ListItem todo = {todo} key={todo.id}/>
                    )
                  })  
                }
            </ul>
        </div>
    )
}

export default TodoList