import { Component } from "react";
import PostService from "../../service/PostService";

class ReadPostComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            postNo: this.props.match.params.postNo,
            title: '',
            writer: '',
            content: '',
            date: '',
        }
    }

    componentDidMount() {
        console.log('readpostcomponent');
        PostService.getPost(this.state.postNo)
        .then( res => {
            let post = res.data;
            this.setState({
                title: post.title,
                writer: post.writer,
                content: post.content,
                date: post.date,
            })
        })
        
    }

    

    render() {
        return(
            <div>
                <h2>hello</h2>
            </div>
        );
    }
}

export default ReadPostComponent;