import axios from "axios"

export default axios.create({
    baseURL: "https://react-quiz-c8e83.firebaseio.com"
})