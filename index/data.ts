type TreeNode = {
  title: string;
  children?: TreeNode[]
}

const tree: TreeNode[] = [
    {
      title: "some-stuff",
      children: [
        {
          title: "stuff inner",
          children: [
            {
              title: "some.txt"
            }
          ]
        },
        {
          title: "stuff inner2",
          children: [
            {
              title: "some2.txt"
            }
          ]
        }
      ]
    },
    {
      title: "Folder",
      children: [
        {
          title: "Folder inner",
          children: [
            {
              title: "another.txt"
            }
          ]
        }
      ]
    }
  ];
  
  const ROOT_NODE = document.getElementById("root");
  export default tree;
  export { ROOT_NODE, TreeNode };