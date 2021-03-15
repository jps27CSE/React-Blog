import React, { Component } from 'react'
import './Root.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
    posts: []
  }


  componentDidMount() {
    axios.get('http://localhost:3001/data')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }

  render() {

    const { posts } = this.state;

    const Postlist = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card center" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <h6 className="card-title">{post.title}</h6>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>

        )
      })
    ) : (
      <div className="loader">
        <h6>No Post</h6>
      </div>
    )



    return (

      <div className="post card center Element">
        <div className="card-content">
          {Postlist}
        </div>
      </div>

    )
  }
}

export default Home