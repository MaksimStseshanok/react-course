import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import './App.css';
import MyHoc from './hoc/clickCount';
import RenderPropComponent from './renderProp/RenderPropComponent';
import ProductList from './renderProp/ProductList';
import ProductTable from './renderProp/ProductTable';
import Form from './hooks/Form';
import UserComponent from './components/useContext';
import CountHookComponent from './components/useState_useEffect';
import Parent from './components/useCallback-useMemo/Parent';
import Counter from './components/useReducer';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Route path="/hoc" component={MyHoc} />
        <Route
          path="/renderProp"
          render={() => (
            <RenderPropComponent
              render={({ products }) => <ProductList products={products} />}
            />
          )}
        />
        <Route
          path="/renderProp"
          render={() => (
            <RenderPropComponent
              render={({ products }) => <ProductTable products={products} />}
            />
          )}
        />
        <Route path="/customHook" component={Form} />
        <Route path="/useContext" component={UserComponent} />
        <Route path="/useState-useEffect" component={CountHookComponent} />
        <Route path="/useCallback-useMemo" component={Parent} />
        <Route path="/useReducer" component={Counter} />
      </div>
    </Router>
  );
}

export default App;
