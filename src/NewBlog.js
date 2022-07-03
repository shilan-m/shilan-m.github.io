import './NewBlog.css';
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Blog from './Blog';
class NewBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markDownContent: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({markDownContent: event.target.value});
    }
    render() {
        return (
            <div className="NewBlogPage">
                <header className="NewBlogPage-header">
                    New Blo
                </header>
                <div className='NewBlog'>
                    <div className='BlogEditor'>
                        <TextareaAutosize
                            placeholder="New Blog Content in Markdown format"
                            style={{ width: '90%', minHeight: '90%' }}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className='BlogPreview'>
                        <Blog markDownContent={this.state.markDownContent} />
                    </div>
                </div>
            </div>
          );
    }
}
export default NewBlog;