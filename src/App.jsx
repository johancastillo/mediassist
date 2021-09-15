
import { Router, Route, Switch } from 'wouter';
import NavInfo from './components/nav-info/NavInfo';
import Navigation from './components/navigation/Navigation';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import Home from './pages/home/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';
import SingleProduct from './pages/single-product/SingleProduct';
import Store from './pages/store/Store';

import "./App.css"
import DiabetePage from './pages/diabete-page/DiabetePage';
import ProductsPage from './pages/products-page/ProductsPage';

const AppRouting = () => {
  return (
    <Router>
      <NavInfo />
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tienda" component={Store} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/contactanos" component={ContactUs} />
        <Route path="/diabetes" component={DiabetePage} />
        <Route path="/productos-descartables" component={ProductsPage} />
        <Route path="/producto" component={SingleProduct} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouting;
