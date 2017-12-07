import { RoutingNodeDescriptor, routing } from "services/routing";
import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";

const routeToSidebarTitle = new Map<RoutingNodeDescriptor, React.ReactNode>([
  [routing.profile, "Profile"],
  [routing.stack, "Stack"],
]);

const routeToSidebarIcon = new Map<RoutingNodeDescriptor, React.ReactNode>([
  [routing.profile, <div className={cn(theme.icon, theme.profile)}></div>],
  [routing.stack, <div className={cn(theme.icon, theme.stack)}></div>],
]);

export const getTitleForRoute = (route: RoutingNodeDescriptor): React.ReactNode => routeToSidebarTitle.get(route);
export const getIconForRoute = (route: RoutingNodeDescriptor): React.ReactNode => routeToSidebarIcon.get(route);
