import { message } from 'antd';
import {BASE_PATH, API_VERSION} from './config';

export function signUpApi(data){
    const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url,params)
        .then(Response =>{
            return Response.json();
        }).then(Result => {
            if(Result.user){
                return {
                    status: true,
                    message: "Usuario Creado exitosamente"
                };
            }
            return {
                ok:false,
                message: result.message
            };
        })
        .catch(err =>
            {return {
                ok:false,
                message: err.message
            };
        });
}