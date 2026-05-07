import { formatProductTitle } from "@/lib/format-product-title";
import { products } from "@/lib/products";

export type RouteScene = {
  index: string;
  label: string;
  note: string;
};

export function getRouteScene(pathname: string): RouteScene {
  if (pathname === "/") {
    return {
      index: "01",
      label: "Вход в архив",
      note: "Тихий старт перед первым кадром",
    };
  }

  if (pathname === "/catalog") {
    return {
      index: "02",
      label: "Поле вещей",
      note: "Свои силуэты собираются в один ряд",
    };
  }

  if (pathname.startsWith("/product/")) {
    const slug = pathname.replace("/product/", "");
    const product = products.find((item) => item.slug === slug);

    return {
      index: "03",
      label: product ? formatProductTitle(product.title) : "Object study",
      note: "Вещь выходит на первый план",
    };
  }

  return {
    index: "00",
    label: "Потерянный сигнал",
    note: "Канал ушел в шум",
  };
}
