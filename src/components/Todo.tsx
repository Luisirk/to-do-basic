import React from 'react'
import {type Todo as TodoType, TodoId} from '../types'
 
interface Props extends TodoType {
      onRemoveTodo:({id}:TodoId)=> void
      onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
} 

export const Todo: React.FC<Props>=({ id, title, completed, onRemoveTodo, onToggleCompleteTodo})=> {

    const handleChangeCheckbox =(event: React.ChangeEvent<HTMLInputElement>):void =>{
        onToggleCompleteTodo({
            id,
            completed: event.target.checked,
        })
        }

    return(
        <div className="view">
            <input
                className="toggle"
                id={`todo-${id}`}
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
                
            />
            <label htmlFor={`todo-${id}`}>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                onRemoveTodo({ id });
                }}
            />
            </div>

    )

}