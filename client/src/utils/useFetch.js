import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch((error) => {
            console.log(error);
        })
    })

    return data;

    
}
 
export default UseFetch;