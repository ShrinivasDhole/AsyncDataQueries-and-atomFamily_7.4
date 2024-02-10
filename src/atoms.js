import { atom, atomFamily, selector } from "recoil";
import axios from "axios";
import { todos } from "./todos";

//Atoms

export const notifications = atom({
    key:"networkAtom",
    default: selector({
        key:"notificationSelector",
        get:async()=>{
            const response = await axios.get("https://sum-server.100xdevs.com/notifications");
            return response.data;
        }
    })
})

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default: id=>{
        return todos.find(x=>x.id == id);
    }
})
///Selector   

export const totalNotificationSelector  = selector({
    key : "totalNotificationSelector",
    get : ({get})=>{
        const notificationsCount = get(notifications);
        return notificationsCount.network + notificationsCount.jobs +
                notificationsCount.messaging + notificationsCount.notifications;
    }
})