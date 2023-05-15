import { useForm } from 'react-hook-form'
import FormNew from '../components/FormNew'
import { Typography } from '@material-tailwind/react'

export default function NuevoPage() {

    return (
        <div>
            <Typography variant="h4" color="blue-gray">
                Nueva Incidencia
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Entre los detalles.
            </Typography>
            <FormNew />
        </div>
    )
}