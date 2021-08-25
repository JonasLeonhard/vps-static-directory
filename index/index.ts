import tree, { ROOT_NODE, TreeNode } from "./data.js";


class FileTree {
  tree: TreeNode[];
  root: {
    folderOpen: HTMLElement
    folderClosed: HTMLElement,
    file: HTMLElement
  };

  constructor(tree: TreeNode[]) {
    this.tree = tree;
    this.onTreeClick = this.onTreeClick.bind(this);
    this.root = {
      folderOpen: document.querySelector('.folder-open'),
      folderClosed: document.querySelector('.folder-closed'),
      file: document.querySelector('.file')
    }
  }

  init() {
    this.render();
  }

  render() {
    const tree = document.createElement("ul");
    tree.className = "tree";
    tree.addEventListener("click", this.onTreeClick);

    this.tree.forEach(treeNode => {
      this.appendTreeNode(treeNode, tree, 'static');
    });

    ROOT_NODE.appendChild(tree);
  }

  onTreeClick(event) {
    const target = event.target;
    const folderTarget = target.closest('.folder');
    const fileTarget = target.closest('.file');

    // don't toggle the folder when clicking a file directly or no parent folder exists
    if (!folderTarget || fileTarget) {
      return;
    }

    folderTarget.classList.toggle('folder-open');
    folderTarget.classList.toggle('folder-closed');

    const img = folderTarget.querySelector('img');
    img.src = img.src.includes('folder-open') ? './index/icons/folder-closed.svg' : './index/icons/folder-open.svg';
  }

  appendTreeNode(treeNode: TreeNode, parentNode: HTMLElement, currentHref: string) {
    console.log('append', treeNode, parentNode);
    // create copy of html node and replace the content and append it to the tree
    const child: HTMLElement = treeNode.children ? this.root.folderClosed.cloneNode(true) as HTMLElement : this.root.file.cloneNode(true) as HTMLElement;
    child.classList.remove('root-clone-item');
    child.innerHTML = child.innerHTML.replace('{{title}}', treeNode.title);
    child.innerHTML = child.innerHTML.replace('{{href}}',`${currentHref}/${treeNode.title}`);
    parentNode.appendChild(child);

    // if there are children, append a node foreach child
    if (treeNode.children) {
      const appendChildWrapper = document.createElement('div');
      appendChildWrapper.classList.add('tree-children');
      child.appendChild(appendChildWrapper);
      treeNode.children.forEach(childTreeNode => {
        this.appendTreeNode(childTreeNode, appendChildWrapper, `${currentHref}/${treeNode.title}`);
      });
    }
  }
}

new FileTree(tree).init();
