export class RoutingLeafNode {
  children: RoutingLeafNode[] = [];
  title: string;

  private _fullpath: string;

  get fullpath() {
    return this._fullpath;
  }

  constructor(public path: string, title: string) {
    this._fullpath = path;
    this.title = title;
  }

  addChildNode(child: RoutingLeafNode) {
    this.children.push(child);
    child._fullpath = `${this._fullpath !== "/" ? this._fullpath : ""}/${child.path}`;
  }
}

export type RoutingNode = RoutingLeafNode | {
  _index: RoutingLeafNode;
  [key: string]: RoutingNode | RoutingLeafNode;
};

export const buildRoutingMap = (menuItem: RoutingLeafNode, child: RoutingNode) => {

  if (!(child instanceof RoutingLeafNode)) {
    for (const key in child) {
      if (key !== "_index") {
        const childItem = child[key];

        if (childItem instanceof RoutingLeafNode) {
          menuItem.addChildNode(childItem);
        }
        else {
          menuItem.addChildNode(childItem._index);
          buildRoutingMap(childItem._index, childItem);
        }
      }
    }
  }
};

/**
 * Application menu structure
 */
export const routing = {
  _index: new RoutingLeafNode("/", "cv"),
  profile: new RoutingLeafNode("profile", "Profile")
};

buildRoutingMap(routing._index, routing);