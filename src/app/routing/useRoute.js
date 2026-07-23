import { useEffect, useState } from "react";

export const matchPaths = (path, route) => {
  const pathParts = path.split("/");
  const routePaths = route.split("/");

  if (pathParts.length !== routePaths.length) {
    return null;
  }

  const params = {};

  for (let i = 0; i < routePaths.length; i++) {
    if (routePaths[i].startsWith(":")) {
      const paramName = routePaths[i].slice(1);

      params[paramName] = pathParts[i];
    } else if (routePaths[i] !== pathParts[i]) {
      return null;
    }
  }

  return params;
};

export const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return path;
};
