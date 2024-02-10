
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { notifications, todoAtomFamily,  totalNotificationSelector} from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
    <Todos id={1}></Todos>
    <Todos id={2}></Todos>
  </RecoilRoot>
  
}

function MainApp(){

  const notiCount = useRecoilValue(notifications); 
  const totalNotification = useRecoilValue(totalNotificationSelector)

  
  return (
    <div>
     <button>Home</button>

     <button>My network ({notiCount.network > 100 ? "99+" : notiCount.network})</button>
     <button>Jobs ({notiCount.jobs})</button>
     <button>Messaging ({notiCount.messaging})</button>
     <button>Notifications ({notiCount.notifications})</button>

     <button>Me ({totalNotification})</button>

     
    </div>
  )
}

function Todos({id}){
  const displayTodos = useRecoilValue(todoAtomFamily(id));
  return <div>
    <p>{displayTodos.title}</p>
    <p>{displayTodos.description}</p>
  </div>
}

export default App
