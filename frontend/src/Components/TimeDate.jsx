import { useEffect, useState } from "react";

export default function TimeDate(props) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            setFormattedDate(formattedDate);
        };

        updateDate();
        const intervalId = setInterval(updateDate, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <>
            <div className="timestamp" id="timestamp">{formattedDate}</div>
        </>
    );
}
