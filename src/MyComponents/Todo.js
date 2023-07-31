import React from 'react'

const Todo = (props) => {
  let myst2= {
    backgroundColor:'#eaf6f6'
  }
let myst1 ={
  color:'black',
  border: '2px solid black',
  borderRadius: '25px'
}  
  return (
    <div className='shadow-sm p-3 mb-3 rounded' style={myst2}>
      <h4 className='mt-5'>{props.todo.title}</h4>
      <p className='my-1'>{props.todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      <hr style={myst1}/>
    </div>
  )
}

export default Todo
