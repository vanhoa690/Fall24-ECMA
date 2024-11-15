import { useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";

function App() {
  const routes = [
    {
      path: "/product/list",
      element: <ProductList />,
    },
    {
      path: "/product/add",
      element: <ProductAdd />,
    },
    {
      path: "/product/edit/:id",
      element: <ProductEdit />,
    },
  ];

  const element = useRoutes(routes);

  return <div>{element}</div>;
}

export default App;
