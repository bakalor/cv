export class RoutingNodeDescriptor {
  children: RoutingNodeDescriptor[] = [];

  private _fullpath: string;

  get fullpath() {
    return this._fullpath;
  }

  constructor(public path: string) {
    this._fullpath = path;
  }

  addChildNode(child: RoutingNodeDescriptor) {
    this.children.push(child);
    child._fullpath = `${this._fullpath !== '/' ? this._fullpath : ''}/${child.path}`;
  }
}

export type RoutingDslNode = RoutingNodeDescriptor | {
  _index: RoutingNodeDescriptor;
  [key: string]: RoutingDslNode | RoutingNodeDescriptor;
};

export const buildRoutingMap = (actualRoot: RoutingNodeDescriptor, actualDslRoot: RoutingDslNode) => {

  if (!(actualDslRoot instanceof RoutingNodeDescriptor)) {
    for (const key in actualDslRoot) {
      if (key !== '_index') {
        const childItem = actualDslRoot[key];

        if (childItem instanceof RoutingNodeDescriptor) {
          actualRoot.addChildNode(childItem);
        }
        else {
          actualRoot.addChildNode(childItem._index);
          buildRoutingMap(childItem._index, childItem);
        }
      }
    }
  }
};

export const routing = {
  _index: new RoutingNodeDescriptor('/'),
  profile: new RoutingNodeDescriptor('profile'),
  stack: {
    _index: new RoutingNodeDescriptor('stack'),
    frontend: new RoutingNodeDescriptor('frontend'),
    backend: new RoutingNodeDescriptor('backend'),
  }
};

buildRoutingMap(routing._index, routing);
