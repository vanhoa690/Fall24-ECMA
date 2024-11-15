import { useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";

function App() {
  const routes = [
    {
      path: "/product/list",
      element: <ProductList />,
    },
  ];
  return <div></div>;
}

export default App;
