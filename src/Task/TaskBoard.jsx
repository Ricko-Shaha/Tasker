import { useState } from "react";

import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import  AddTaskModal  from "./AddTaskModal";


export default function TaskBoard() {
    const defaultTask= {
        'id': crypto.randomUUID(),
        'title': 'Learn React',
        "description": "Learn React from the official documentation.",
        "tags": ["web", "react","js"],
        "priority": "High",
        "isFavorite": true,
    }
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);

    function handleAddTask(newTask) {
      console.log("Adding a task...",newTask);
      setTasks([...tasks, newTask]);
      setShowAddModal(false);
    }

    function handleEditTask(task) {
      
    }

  return (
    <section className="mb-20" id="tasks">
      { showAddModal && <AddTaskModal onSave={handleAddTask}/>}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={()=>setShowAddModal(true)}/>
          <TaskList tasks={tasks} onEdit={handleEditTask}/>
        </div>
      </div>
    </section>
  );
}
