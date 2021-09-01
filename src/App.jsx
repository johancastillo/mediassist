
import { Router, Route, Switch } from 'wouter';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import Home from './pages/home/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';
import Store from './pages/store/Store';


const AppRouting = () => {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tienda" component={Store} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/contactanos" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouting;
