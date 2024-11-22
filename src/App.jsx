import { useRoutes } from "react-router-dom";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import ProductList from "./pages/ProductList";
import Homepage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
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
  return (
    <main>
      <Toaster />
      {element}
    </main>
  );
}
export default App;
