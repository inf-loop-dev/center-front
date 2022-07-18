import React, {useEffect} from "react";
import {useLocation, useParams} from 'react-router-dom';
import qs from 'qs';

function LoginCallback(){
    const location = useLocation();
    const {name} = useParams();
    useEffect(()=>{
        const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
     });
        console.log(code)
        console.log(name)

    })

    return(
        <>
        </>
    )
}
export default LoginCallback;