import React from 'react';
var marked = require('marked');

class MarkdownPreview extends React.Component{
    createMarkup(){
        return {__html:marked(this.props.markdown)}
    }

    render(){
        return(
            <div className="well" dangerouslySetInnerHTML={this.createMarkup()}>
            </div>

        )
    }
}
export default MarkdownPreview;