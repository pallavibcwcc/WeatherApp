import {useState} from 'react'
const api = {
    key:"7cc88d95e41ba70147315f46b3a52e94",
    base:"https://api.openweathermap.org/data/2.5/"
}
const Weather =()=>{
    const[Query,setQuery]=useState('');
    const[weather,setWeather]=useState({});
    const search = evt =>{
        if(evt.key==='Enter'){
fetch(`${api.base}weather?q=${Query}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(result=>{
            setWeather(result);
            setQuery('');
        })
    }

    }
    return(
        <div>
<main>
    <div className="search_bar">
<input className="search_box"  placeholder="search...."
value={Query}
onChange={e=>setQuery(e.target.value)}
onKeyPress={search}
/>
    </div>
    <div className="loacation_box">
        <div className="loacation">
            
        </div>

    </div>
</main>
        </div>
    )
}
export default Weather;