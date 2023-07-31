import React from 'react'
import Todo from './Todo'
import  '../App.css'

const Todos = (props) => {
  let mySt = {
    height: '41vh',
    overflowX: 'hidden'
  }
  let a = <h4 >No Todos Yet!! Fill to Add.</h4>
  return (
    <div className="container" >
      <h3 className='text-center m-3'>Todos List</h3>
      <div  style={mySt} className='scrl'>
      {
        props.todoList.length===0?a:
          (props.todoList).map((todo)=>{

            return (
            <>
            <Todo todo={todo} onDelete ={props.onDelete}/>
            </>
            )
          })
        }
      </div>
      
      
    </div>
  )
}

export default Todos
