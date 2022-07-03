import './LearningBlogs.css';
import React from 'react';
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";

class LearningBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Blogs: []};
    }
    componentDidMount() {
        // let config = {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //       }
        // }
        // axios.post('http://139.196.166.180:5000/login',
        // {
        //     username: "shma8897",
        //     password: "11111111"
        // },config).then((response) => {
        //     console.log(response)
        //     this.setState({Blogs: response.data})
        //   });
        
        const blogs = [
            {id: 1, title: 'First Blog', description: 'sample description'},
            {id: 2, title: 'Seconds Blog', description: 'sample description'},
            {id: 3, title: 'Third Blog', description: 'sample description'},
        ]
        this.setState({Blogs: blogs})
    }
    render() {
        const BlogsList = this.state.Blogs.map((blog) => 
            <Card  key={blog.id.toString()} className="Blog" 
                sx={{ bgcolor: 'background.paper',minWidth: 300, maxWidth: 300 }}>
                <CardContent>
                    <ReactMarkdown children={"# " + blog.title} />
                    <ReactMarkdown children={"## " + blog.description} />
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
        return (
            <div className="LearningBlogs">
                <header className="LearningBlogs-header">
                    Learning Blogs
                    <Button variant="contained" component={Link} to="../newBlog">New Blog</Button>
                </header>
                <div className='BlogsList'>{BlogsList}</div>
            </div>
          );
    }
}

export default LearningBlogs;
