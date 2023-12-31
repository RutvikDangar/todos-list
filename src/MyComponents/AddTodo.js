import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {

  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if(!title || !desc){
      alert("Title Or Decription should no be empty")
    }else{
      addTodo(title,desc)
    setTitle('')
    setDesc('')

    }
    
  }


  return (
    <div className='container'>
    <h3 className='my-3 text-center' >Add a ToDo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Desc" className="form-label">Description</label>
    <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn shadow btn-success btn-sm my-3">ADD Todo</button>
</form>
    </div>
  )
}

export default AddTodo
