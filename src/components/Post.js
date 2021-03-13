import React, { Component } from 'react';
import './Root.css'
import axios from 'axios'

class Post extends Component {

    state = {
        title: "",
        body: ""
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3001/data", this.state)
            .then(respone => {
                console.log("Posted Successfully")
            })
        this.props.history.push('/')
    }

    EventHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }


    render() {

        const { title, body } = this.state

        return (
            <div className="center">
                <form onSubmit={this.onSubmitHandler}>
                    <h5 className="center">Enter Post Title:</h5>
                    <input type="text" placeholder="Title" name="title" onChange={this.EventHandler} value={title} />
                    <h5 className="center">Enter Post Body:</h5>
                    <input type="text" placeholder="Post" name="body" onChange={this.EventHandler} value={body} />
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                     <i className="material-icons right"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Post;