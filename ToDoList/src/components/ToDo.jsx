import './css/ToDoItems.css'

const ToDo = () => {
  return (
    <div className='todo'>
        <div className='todo-header'>To-DO List</div>
      <div className="todo-add">
        <input type="text" placeholder='Add your Task' className='todo-input'/>
        <div classname='todo-add-btn'>ADD</div>  
        <div className='todo-list'></div>
      </div>
    </div>
  )
}

export default ToDo
