import { TreeData } from "../../types";

function procura(path: string, tree: any[]): any {
  if (path.length === 0) {
    return tree;
  }
  return tree.find((item: any) => {
    if (item.key === path) {
      return true;
    }
    return false;
  });
}

// Retorna uma sub arvore indicada pelo path
export function treePath(data: TreeData, path: string) {
  const pathArray = path.split("/");
  if (pathArray[0] === "") {
    pathArray.shift();
  }
  if (pathArray.length === 0) {
    pathArray.push("");
  }

  const rsp = pathArray.reduce((acc, curr) => {
    if (curr === "") {
      return acc;
    }
    const resp = procura(curr, acc);
    return resp.child;
  }, data);
  return rsp || [];
}
