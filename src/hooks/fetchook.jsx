import { useEffect, useState } from "react";
import axios from "axios";
import { urlFetch, urlAdd } from "../config/confiBack";

export const useFetch = () => {
    const [task, setTask] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(null)

    const handleError = (error) => {
        setError(error);
        setIsloading(false)
    }

    const fetchData = async () => {
        setIsloading(true)
        try {
            const response = await axios(urlFetch)
            setTask(response.data)
            setIsloading(false)
        } catch (error) {
            handleError(error)
        }
    }

    const createTask = async (newTask) => {
        setIsloading(true)
        try {
            const newTaskResponse = await axios.post(urlAdd, newTask)
            setTask((prevTask) => [...prevTask, newTaskResponse.data])
            setIsloading(false)
        } catch (error) {
            handleError(error)
        }
    }

    const updateTask = async (taskId, updatedTask) => {
        setIsloading(true);
        try {
            const response = await axios.put(`${urlFetch}/${taskId}`, updatedTask);
            setTask((prevTasks) => prevTasks.map((task) => (task.id === taskId ? response.data : task)));
            setIsloading(false);
        } catch (error) {
            handleError(error);
        }
    }
    const deleteTask = async (taskId) => {
        setIsloading(true);
        try {
            const response = await axios.delete(`${urlFetch}/${taskId}`);
            setTask(task.filter(tas => tas.id !== taskId));
            setIsloading(false);
        } catch (error) {
            handleError(error);
        }
    }


    useEffect(() => {
        fetchData()
    }, [])


    return { task, isLoading, error, createTask, updateTask, deleteTask }
}
