import { useRef, Fragment } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
    Select,
    Option
} from "@material-tailwind/react";

import { useFetch } from "../hooks/fetchook";

export default function FormNew() {
    const { createTask, isLoading } = useFetch()

    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const telepRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = { name: nameRef.current.value, lastName: lastNameRef.current, email: emailRef.current.value };
        // console.log(task)

        createTask(task)

        // axios.post('http://10.0.0.243:3000/add', task)
        //     .then((response) => {
        //         console.log(response.data);
        //         // setTitle('');
        //         // setDescription('');
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <Card color="transparent" shadow={false} style={{ border: '1px solid red' }}>
            <form className="px-4 py-8 inline-block w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 " >
                <div className="mb-4 text-left">
                    <Typography variant="small" color="blue-gray" className="p-1 font-normal" >
                        Fecha
                    </Typography>
                    <input
                        type="date"
                        id="name"
                        name="name"
                        ref={nameRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4 text-left">
                    <div className="">
                        <Select label="Select Version" ref={lastNameRef} >
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                </div>
                <div className="mb-4 text-left">
                    <Typography variant="small" color="blue-gray" className="p-1 font-normal" >
                        Urgente
                    </Typography>
                    <Checkbox
                        id="vertical-list-react"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                            className: "p-0"
                        }}
                    />
                    {/* <input
                        type="checkbox"
                        id="telep"
                        name="telep"
                        ref={telepRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    /> */}
                </div>
                <div className="mb-4 text-left">
                    <Typography variant="small" color="blue-gray" className="p-1 font-normal" >
                        Descripcion
                    </Typography>
                    <div className="w-90">
                        <Textarea label="" rows={6} ref={emailRef} />
                    </div>
                </div>

                <div className='text-right'>
                    <Button variant="gradient" type='submit' size="sm" className="hidden lg:inline-block ml-2 px-4 py-2 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring border
                     border-cyan-400" onClick={(e) => handleSubmit(e)} disabled={false}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"                    >
                            Add
                        </Typography>
                    </Button>
                </div>
            </form>
            {isLoading ? <h1>Loading</h1> : <h1>Nada</h1>}
        </Card>
    );
}