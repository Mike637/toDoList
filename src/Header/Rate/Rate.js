import React,{useState,useEffect} from 'react';

const Rate = () => 
{
    const [rubleRate,setRubleRate]  = useState([]);
    useEffect(() =>
    {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            setRubleRate([data.Valute.USD,data.Valute.EUR]);    
        })
        .catch(error => console.log(error))
    },[])
    return (
        <div className="rate">
            <h1>Курс валют</h1>
       {rubleRate.map(item => <p>{item.Nominal} {item.CharCode} - {item.Value} Rub</p>)}
       </div>
    )
}


export default Rate