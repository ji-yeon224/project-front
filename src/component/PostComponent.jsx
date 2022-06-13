import { Component } from "react";
import PostService from "../service/PostService";

class PostComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [],

        }

        
    }

    componentDidMount() {
        this.reloadPostList();
    }

    reloadPostList = () => {
        PostService.postList()
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
        .catch(err => {
            console.log('get all posts list Error', err);
        });
    }

    render() {
        return (
            <div className="album">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {this.state.posts.map(post =>
                    <div key={post.postNo} style={style}>
                        <h4>{post.title}</h4>
                        
                    </div>
                            

                    )}



                </div>
                
                    

            </div>
            </div>
        );
    }

}

const style = {
    display: 'flex',
    justifyContent: 'nomal'
}

export default PostComponent;