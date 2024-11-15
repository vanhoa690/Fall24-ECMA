import { useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Homepage from "./pages/Homepage";

function App() {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
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
