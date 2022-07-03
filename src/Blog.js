import React from 'react';
import ReactMarkdown from 'react-markdown'
class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
            <div className='Blog' style={{textAlign:'left', width:'100%'}}>
                <ReactMarkdown children={this.props.markDownContent} />
            </div>
        )
    }
}

export default Blog;
