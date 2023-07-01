import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { routes } from "../router";
import { Link } from "react-router-dom";
import List from "@mui/material/List";

const MenuNavegacao = () =>
  <List component="nav">
    {routes.map((x, index) => (
      <Link style={{ textDecoration: "none", color: "black" }} to={x.path} key={`link${index}`}>
        <ListItemButton key={x.linkText}>
          <ListItemIcon>{x.icon}</ListItemIcon>
          <ListItemText primary={x.linkText} />
        </ListItemButton>
      </Link>
    ))}
  </List>;

export default MenuNavegacao;