import { useRoutes } from "react-router-dom";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import ProductList from "./pages/ProductList";

function App() {
  const routes = [
    {
      path: "product/list",
      element: <ProductList />,
    },
    {
      path: "product/add",
      element: <ProductAdd />,
    },
    {
      path: "product/edit/:id",
      element: <ProductEdit />,
    },
  ];

  const element = useRoutes(routes);
  
  return <main>{element}</main>;
}

export default App;
