import axios from "axios";

const POST_API_URL = "http://localhost:8080/post";

class PostService {
    postList() {
        return axios.get(POST_API_URL);
    }

    getPost(postNo){
        return axios.get(POST_API_URL + '/'+ postNo);
    }

    addPost() {
        return axios.post(POST_API_URL);
    }

    updatePost(postNo) {
        return axios.put(POST_API_URL + '/'+ postNo);
    }

    deletePost(postNo) {
        return axios.delete(POST_API_URL + '/' + postNo);
    }

    
}

export default new PostService();