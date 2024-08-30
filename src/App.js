import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import NewPostForm from './components/NewPostForm'
import PostDetail from './components/PostDetail'
import PostList from './components/PostList'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/new" element={<NewPostForm />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function Header() {
  return (
    <header>
      <h1>Blog App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">New Post</Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Blog App</p>
    </footer>
  )
}

export default App
