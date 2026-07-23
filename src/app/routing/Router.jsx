import { matchPaths, useRoute } from "./useRoute";

const Router = (props) => {
  const path = useRoute();
  const { routes } = props;

  // if (path.startsWith("/tasks/")) {
  //   const id = path.replace("/tasks/", "");
  //   const TaskPage = routes["/tasks/:id"];

  //   return <TaskPage params={{ id }} />;
  // }

  // const Page = routes[path] ?? routes["*"];

  // return <Page />;

  for (const route in routes) {
    const params = matchPaths(path, route);

    if (params) {
      const Page = routes[route];

      return <Page params={params} />;
    }
  }

  const NotFound = routes["*"];

  return <NotFound />;
};

export default Router;
