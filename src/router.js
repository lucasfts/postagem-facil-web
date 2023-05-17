import { createBrowserRouter } from "react-router-dom";
import Chart from "./components/dashboard/Chart";
import Deposits from "./components/dashboard/Deposits";
import Orders from "./components/dashboard/Orders";
import { Title } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const routes = [
  {
    path: "/",
    element: <div>Hello world!</div>,
    icon: <DashboardIcon />,
    linkText: "Home",
  },
  {
    path: "/solicitacoes",
    element: <Chart />,
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
    element: <Orders />,
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