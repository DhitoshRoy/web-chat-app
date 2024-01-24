import { LOCALSTORAGE_TOKEN_KEY } from "../utiles";


const customFetch = async(url, {body,...customconfig}) =>{
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);


    

    const headers = {

        'content-type' : 'application/json',
        Accept: 'application/json'
    }

    if (token){

        headers.Authorization = `Bearer ${token}`;
    }



    const config = {

        ...customconfig, 
        headers : {

            ...headers,
            customconfig.headers,
        },
    };

    if (body){

        config.body = JSON.stringify(body);
    }

    try{
        const response = await fetch(url, config);
        const data = await response.json ();

        if (response.success){

            return{

                data: data.data,
                success:true;

            }           
        }
        throw new Err (data.message);
    }catch{err}{

        console.err('error')

        return{

            message:error.message,
            success:false;

        }           
    }
    


};


const getPosts = (page, limit) =>{
    // fetch();    

    return customFetch ();
}

// const createPost = ( =>{

//     return customFetch ();
// }