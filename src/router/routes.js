import { List, LocalShipping } from "@mui/icons-material";
import Solicitaoes from "../pages/Solicitacoes";
import Coletas from "../pages/Coletas";

export const routes = [
  {
    path: "/",
    element: <Solicitaoes />,
    icon: <List />,
    linkText: "Solicitações",
  },
  {
    path: "/coletas",
    element: <Coletas />,
    icon: <LocalShipping />,
    linkText: "Coletas",
  }
];