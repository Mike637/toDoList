import React,{useState,useEffect} from 'react';

const Rate = () => 
{
    const [rubleRate,setRubleRate]  = useState({});
    useEffect(() =>
    {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            setRubleRate(prev =>{
                return {
                    ...prev,
                    USD:data.Valute.USD,
                    EUR:data.Valute.EUR
                        }
            });    
        })
    },[])
    return (
        <div>
       <p>{JSON.stringify(rubleRate.USD)}</p>
       <p>{JSON.stringify(rubleRate.EUR)}</p>
       </div>
    )
}


export default Rate