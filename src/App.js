import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Footer from './layouts/Footer';
import Home from './components/Home';
import Sidebar from './layouts/Sidebar';
import TweetDetails from './components/TweetDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-layout">
          <div className="container">
            <div className="row">
              <Sidebar />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/:user/status/:id">
                    <TweetDetails />
                  </Route>
                </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
