export const routes = [
  { path: "/", element: <h1>Root</h1> },
  {
    path: "posts",
    element: <h1>posts</h1>,

    children: [
      { path: "/", element: <h1>posts index</h1> },
      {
        path: ":postId",
        element: <h1>post</h1>,
      },
    ],
  },
];
