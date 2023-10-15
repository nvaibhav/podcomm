import axios from "axios";

const BACKEND_URL = "http://localhost:30081/say-hello";
class BackendService {

    getHello() {
        console.log("Calling backend - "+BACKEND_URL);
        return axios.get(BACKEND_URL);
    }
}
export default new BackendService();