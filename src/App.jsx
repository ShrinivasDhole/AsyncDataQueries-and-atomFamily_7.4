
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobs, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
}

function MainApp(){
  const netCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobs)
  const notifCount = useRecoilValue(notificationsAtom)
  const msgCount = useRecoilValue(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
     <button>Home</button>

     <button>My network ({netCount > 100 ? "99+" : netCount})</button>
     <button>Jobs ({jobsCount})</button>
     <button>Messaging ({notifCount})</button>
     <button>Notifications ({msgCount})</button>

     <button>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App
