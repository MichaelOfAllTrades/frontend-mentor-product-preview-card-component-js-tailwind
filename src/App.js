import './App.css';

import ProductPreview from './components/ProductPreview';
import classnames from "classnames";

function App() {
  return (
    <div className={classnames(`h-[100%] w-[100%] flex`)}>
      <ProductPreview />
    </div>
  );
}

export default App;
