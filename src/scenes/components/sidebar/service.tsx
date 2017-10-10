import { RoutingNodeDescriptor, routing } from "services/routing";
import * as React from "react";
import * as css from "./theme.css";
import * as cn from "classnames";

const routeToSidebarTitle = new Map<RoutingNodeDescriptor, React.ReactNode>([
  [routing.profile, "Profile"],
  [routing.stack._index, "Stack"],
  [routing.stack.technologies, "Technologies"],
  [routing.stack.tools, "Tools"],
  [routing.projects, "Projects"],
]);

const routeToSidebarIcon = new Map<RoutingNodeDescriptor, React.ReactNode>([
  [routing.profile, <div className={cn(css.icon, css.profile)}></div>],
  [routing.stack._index, <div className={cn(css.icon, css.stack)}></div>],
  [routing.stack.technologies, <div className={cn(css.icon, css.technologies)}></div>],
  [routing.stack.tools, <div className={cn(css.icon, css.tools)}></div>],
  [routing.projects, <div className={cn(css.icon, css.projects)}></div>],
]);

export const getTitleForRoute = (route: RoutingNodeDescriptor): React.ReactNode => routeToSidebarTitle.get(route);
export const getIconForRoute = (route: RoutingNodeDescriptor): React.ReactNode => routeToSidebarIcon.get(route);
