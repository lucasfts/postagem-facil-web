import { Title } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import Solicitaoes from "./components/Solicitacoes";

export const routes = [
  {
    path: "/",
    element: <Solicitaoes />,
    icon: <DashboardIcon />,
    linkText: "Solicitações",
  },
  {
    path: "/integracoes",
    element: <Title />,
    icon:  <LayersIcon />,
    linkText: "Integrações",
  },
];