import { useState, useEffect } from "react";
import axios from "axios";


export default function AbiertosPage() {

    const [data, setData] = useState([]);

    const fectData = async () => {
        const data = await axios('http://10.0.0.243:3000/abiertos')
        return data
    }

    useEffect(() => {
        fectData().then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    return (
        <div className="flex flex-col">
            {data.map((item, idx) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <p>{item.name}</p>

                </div>
            ))}
        </div>
    )
}