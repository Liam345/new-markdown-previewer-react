import React from 'react';
import MarkdownPreview from './markdown-preview';


class UserInput extends React.Component{
    constructor(){
        super();
        this.state={
            md: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### '
        };
    }

    updatePreview(e){
        this.setState({
            md: e.target.value
        });
    }
    render(){
        return(
            <div className="row">
            <div className="col-md-6">
            <h3 className="text-center">Enter Markdown</h3>
            <textarea type="text" className="md-input" value={this.state.md} onChange={this.updatePreview.bind(this)} />
            </div>
            <div className="col-md-6">
            <h3 className="text-center">Result</h3>
            <MarkdownPreview markdown={this.state.md} />
            </div>
            </div>
        )
    }
}
export default UserInput;