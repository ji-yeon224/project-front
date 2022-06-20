import React, { Component } from "react";
import PostService from "../../service/PostService";

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

    showPost (postNo){
        //window.localStorage.setItem("postNo", postNo);
        this.props.history.push(`/readPost/${postNo}`);
        console.log(postNo);
        window.location.reload();
    }

    render() {
        return (
            <div className="album">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {this.state.posts.map(post =>
                    <div key={post.postNo} style={style} onClick={() => this.showPost(post.postNo)}>
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