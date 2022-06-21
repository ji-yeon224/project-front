import React, { Component } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

//import PostService from '../../service/PostService';

//plugins
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

//code-syntax-highligh
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

//color-syntax
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Button } from 'react-bootstrap';


class WriteComponent extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        console.log('writeComponent');
    }

    render() {
        const editorRef = React.createRef();

        // const onChangeEditorTextHandler = () => {
        //     console.log(editorRef.current.getInstance().getMarkdown());
        // }

        return (
            <div>
                <div vertical-align="middle">
                    <textarea 
                        style={title} 
                        rows="1" 
                        type="title" 
                        placeholder="제목을 입력하세요.">
                    </textarea>
                </div>
                <Editor
                    overflow-y="scroll"
                    priviewStyle="vertical"
                    height="79vh"
                    initialEditType='markdown'
                    ref={editorRef}
                    plugins={[colorSyntax, [codeSyntaxHighlight, {highlighter: Prism}]]}
                    hideModeSwitch='true'
                />
                <Button
                    variant="primary"
                    type="submit"
                    className="submitBtn">Post</Button>
                <Button
                    variant="primary"
                    className="cacelBtn">Cancel</Button>    
            </div>
        );
    }

}


const title={
    maxLength:'40',
    width: '100%',
    height: '7vh',
    border: 'none',
    resize: 'none',
    spellcheck: 'false',
    padding: '10px',
    outline: 'none',
    overflow: 'auto',
    fontSize:'3vh'
}



export default WriteComponent;