import axios from "axios";

export default function config(session_id){
    axios.create({
        baseURL:'10.1.53.119:8069',//vhange this to your ip address or create an env file
    })

}