import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Demo1 from './hooks-quick-demos/Demo1';
import Demo2 from './hooks-quick-demos/Demo2';
import Demo3 from './hooks-quick-demos/Demo3';
import Demo4 from './hooks-quick-demos/Demo4';

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/demo1/10">Demo1</Link></li>
        <li><Link to="/demo2">Demo2</Link></li>
        <li><Link to="/demo3">Demo3</Link></li>
        <li><Link to="/demo4">Demo4</Link></li>
      </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/demo1/:value" component={Demo1} />
      <Route path="/demo2" component={Demo2} />
      <Route path="/demo3" component={Demo3} />
      <Route path="/demo4" component={Demo4} />
    </div>
  </Router>
)

export default AppRouter;
