import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Courses from './Components/Courses';
import About from './Components/About';
import Resources from './Components/Resources';
import Footer from './Components/Footer';
import HTML from './CoursesContent/HTML';
import Topbar from './Components/Topbar';

function App() {

  return (
    <>
       <Router>
        <Topbar />
        <Navbar />
          <div className="App-content">
            <Switch>
              <Route exact path='/'>
                <Hero />
              </Route>
              <Route exact path='/Courses'>
                <Courses />
              </Route>
              <Route exact path='/About'>
                <About />
              </Route>
              <Route exact path='/Resources'>
                <Resources />
              </Route>`
              <div className="Courses-Content">
              <Route exact path='/HTML'>
                <HTML />
              </Route>
              </div>
            </Switch>
          </div>
        <Footer />
       </Router>
    </>
  )
}

export default App