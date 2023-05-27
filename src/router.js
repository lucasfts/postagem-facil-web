import Chart from "./components/dashboard/Chart";
import Deposits from "./components/dashboard/Deposits";
import { Title } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Solicitaoes from "./components/dashboard/Solicitacoes";

export const routes = [
  {
    path: "/",
    element: <div>Hello world!</div>,
    icon: <DashboardIcon />,
    linkText: "Home",
  },
  {
    path: "/solicitacoes",
    element: <Solicitaoes />,
    icon: <ShoppingCartIcon />,
    linkText: "Solicitações",
  },
  {
    path: "/usuarios",
    element: <Deposits />,
    icon: <PeopleIcon />,
    linkText: "Usuários",
  },
  {
    path: "/relatorios",
    element: <Chart />,
    icon: <BarChartIcon />,
    linkText: "Relatórios",
  },
  {
    path: "/integracoes",
    element: <Title />,
    icon:  <LayersIcon />,
    linkText: "Integrações",
  },
];