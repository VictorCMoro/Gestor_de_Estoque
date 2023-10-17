import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ItemsLayout from "./pages/items/Layout";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import Home from "./pages/Home";

const router = createBrowserRouter([{
  path: "/Gestor_de_Estoque/",
  element: <RootLayout />,
  children: [
    {
      path: "/Gestor_de_Estoque/",
      element: <Home/>
    },
    {
      path: "/Gestor_de_Estoque/items",
      element: <ItemsLayout />,
      children: [
        { index: true, element: <ListItems /> },
        { path: "new", element: <CreateItem /> },
        { path: ":id", element: <ShowItem /> },
        { path: ":id/update", element: <UpdateItem /> }
      ]
    }
  ]
}])

export default router;