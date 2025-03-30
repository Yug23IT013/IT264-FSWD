import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add some tasks to get started!</p>
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList 