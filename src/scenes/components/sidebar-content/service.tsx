import * as React from 'react';
import * as cn from 'classnames';

import {
  RoutingNodeDescriptor,
  routing,
} from 'services';
import * as theme from './theme.css';

const routeToSidebarTitle = new Map<RoutingNodeDescriptor, React.ReactNode>([
  [routing.profile, 'Profile'],
  [routing.stack._index, 'Stack'],
  [routing.stack.frontend, 'Frontend'],
  [routing.stack.backend, 'Backend'],
]);

const routeToSidebarIcon = new Map<RoutingNodeDescriptor, React.ReactNode>([
  [routing.profile, <div className={cn(theme.icon, theme.profile)} />],
  [routing.stack._index, <div className={cn(theme.icon, theme.stack)} />],
  [routing.stack.frontend, <div className={cn(theme.icon, theme.frontend)} />],
  [routing.stack.backend, <div className={cn(theme.icon, theme.backend)} />],
]);

export const getTitleForRoute = (route: RoutingNodeDescriptor): React.ReactNode => routeToSidebarTitle.get(route);
export const getIconForRoute = (route: RoutingNodeDescriptor): React.ReactNode => routeToSidebarIcon.get(route);
