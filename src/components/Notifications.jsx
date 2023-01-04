import { useContext } from "react";
import DataContext from "./DataContext";

function Notifications() {
    const { notifications } = useContext(DataContext);

    return (
        <>
            {notifications.map(n => <div className='notification'>{n}</div>)}
        </>
    );
}

export default Notifications;

