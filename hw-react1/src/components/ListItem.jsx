import React from 'react'
import PropTypes, { nominalTypeHack } from 'prop-types'

const ListItem = (props) => {
    let completed;
    if(props.todo.completed){
        completed = 'lineNo';
    } else {
        completed = 'lineYes';
    }
    
    return(
        <li className="listItem">
            <div>
                <h4 className={completed}>#{props.todo.id} - {props.todo.title}</h4>
                <img alt={props.todo.title} src={'../../images/'+props.todo.img}></img>
            </div>
        </li>
    )
}   

ListItem.propTypes = {
    todo: PropTypes.shape( {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })
   
}

export default ListItem;