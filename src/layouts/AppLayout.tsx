import { Navigate } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'
import { getUSer } from "../api/DevTreeAPI";
import DevTree from "../components/DevTree";

export default function AppLayout() {

    const { data, isLoading, error, isError} = useQuery({
        queryFn: getUSer,
        queryKey: ['user'],
        retry: 2,
        refetchOnWindowFocus: false,
    })

    console.log(data)

    if(isLoading) return 'cargando...'

    if(isError) return <Navigate to={'/auth/login'} />


    if (data) return <DevTree data={data} />
}