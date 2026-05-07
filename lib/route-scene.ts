export type RouteScene = {
  index: string;
  label: string;
  note: string;
};

export function getRouteScene(pathname: string): RouteScene {
  if (pathname === "/") {
    return {
      index: "01",
      label: "Entrance signal",
      note: "Threshold composition active",
    };
  }

  if (pathname === "/catalog") {
    return {
      index: "02",
      label: "Catalog field",
      note: "Cast objects drifting in sequence",
    };
  }

  if (pathname.startsWith("/product/")) {
    return {
      index: "03",
      label: "Object study",
      note: "Silhouette, surface, and residual tension",
    };
  }

  return {
    index: "00",
    label: "Lost channel",
    note: "Signal rerouted through static",
  };
}
