import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(1);

    function increaseCount(){
        setCount( currentValue => currentValue + 1);
    }

    useEffect(function(){
        console.log("above setinterval")
        setInterval(increaseCount, 1000);
    }, [])

    useEffect(function(){
            console.log("the count has been updated to " + count);
    },[count]);

    return <div>
        {count}
    </div>

}

export default App  
