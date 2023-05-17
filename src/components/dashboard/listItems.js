import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { routes } from "../../router";
import { Link, NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    {routes.map((x, index) => (
      <Link style={{ textDecoration: "none" }} to={x.path} key={`link${index}`}>
        <ListItemButton key={x.linkText}>
          <ListItemIcon>{x.icon}</ListItemIcon>
          <ListItemText primary={x.linkText} />
        </ListItemButton>
      </Link>
    ))}
  </React.Fragment>
);
