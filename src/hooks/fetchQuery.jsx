import {useEffect,useState} from 'react'
import axios from 'axios'

export const useFetchQuery = () => {
    const [response,setResponse] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchData = async (query) => {
        try {
            setLoading(true)
            const res = await axios.get('http://127.0.0.1:5000')
            setResponse(res.data)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }
  return {response,loading,error,fetchData}
}
