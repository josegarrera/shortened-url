import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';

const Routes = () => (
    <Router>
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
    </Router>
);

export default Routes;
