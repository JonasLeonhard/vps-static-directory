type TreeNode = {
  title: string;
  children?: TreeNode[]
}

const tree: TreeNode[] = [
    {
      title: "Archive",
      children: [
        {
          title: "Bachelor-Thesis.pdf",
        }
      ]
    }
  ];
  
  const ROOT_NODE = document.getElementById("root");
  export default tree;
  export { ROOT_NODE, TreeNode };