import { useEffect, useState } from "react"
import axios from "axios";


export default function User(){
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
            .then(response => {
                setData(response.data);
            })
    }, [])

    return (
       <div>
             User Page
        </div>
) 
}