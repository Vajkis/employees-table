import { useContext } from "react";
import DataContext from "./DataContext";

function Notifications() {
    const { notifications } = useContext(DataContext);

    return (
        <div className="notifications-container">
            {notifications.map(n => <div className='notification'>{n}</div>)}
        </div>
    );
}

export default Notifications;

