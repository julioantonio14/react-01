import { Component } from "react";
import "./App.css";
import { clear } from "@testing-library/user-event/dist/clear";

class App extends Component {
    state = {
        counter: 0,
        posts: [
            {
                id: 1,
                title: "O título 1",
                body: "O corpo 1",
            },
            {
                id: 2,
                title: "O título 2",
                body: "O corpo 2",
            },
            {
                id: 3,
                title: "O título 3",
                body: "O corpo 3",
            },
        ],
    };

    timeOutUpdate = null;

    handleTimeOut = () =>{
      const { posts, counter } = this.state;
      posts[0].title = "o título mudou";
        this.timeOutUpdate = setTimeout(() => {
            this.setState({ posts, counter: counter + 1 });
        }, 2000);
    }

    componentDidMount() {
      clearTimeout(timeOutUpdate);
      this.handleTimeOut();
    }

    componentDidUpdate(){
      this.handleTimeOut();
    }

    render() {
        const { posts, counter } = this.state;
 
        return (
            <div className="App">
                <h2>{counter}</h2>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}
export default App;
