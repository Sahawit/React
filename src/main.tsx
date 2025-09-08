import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoApp from './components/Todolist.tsx'
import GPAApp from './components/Grade.tsx'
import TodoListHookFrom from './components/TodoListFrom.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App/>*/}
    {/*<TodoApp />*/}
    {/*{<GPAApp />*/}
    <TodoListHookFrom  />
  </StrictMode>,
)
