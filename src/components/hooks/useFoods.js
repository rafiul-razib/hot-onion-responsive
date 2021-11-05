import { useEffect, useState } from 'react';

const useFoods = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[]);

    return [
        menu,
        setMenu
    ]
};

export default useFoods;