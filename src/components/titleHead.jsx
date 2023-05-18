import moment from "moment"
import { useState } from "react"

export default function TitleHead() {
    const [currentTime, setCurrentTime] = useState(moment().format(' h:mm:ss a'));

    setInterval(() => {
        setCurrentTime(moment().format(' h:mm:ss a'))
    }, 1000)

    return (
        <div>
            <h6 class="mb-4 text-sm font-extrabold leading-none tracking-tight text-gray-900 md:text-sm lg:text-2xl dark:text-white">Lista de Tareas <span class="text-blue-600 dark:text-blue-500">{moment().format('MMMM Do YYYY')}{currentTime}</span></h6>
            {/* <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
        </div>

    )
} 