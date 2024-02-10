import { atom, selector } from "recoil";


//Atoms

export const networkAtom = atom({
    key:"networkAtom",
    default:102
})
export const jobs = atom({
    key:"jobs",
    default:0
})
export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})

///Selector

export const totalNotificationSelector  = selector({
    key : "totalNotificationSelector",
    get : ({get})=>{
        const netCount = get(networkAtom)
        const jobsCount = get(jobs)
        const notifCount = get(notificationsAtom)
        const msgCount = get(messagingAtom)
        return netCount + jobsCount + notifCount + msgCount;
    }
})