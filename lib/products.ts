import type { Product } from "@/types/product";

const livePhotoMain = {
  id: "nesu-dvoyku-photo-main",
  url: "/images/image.webp",
  alt: "Футболка Несу двойку",
  width: 890,
  height: 664,
};

const livePhotoDetailOne = {
  id: "nesu-dvoyku-photo-detail-1",
  url: "/images/image1.webp",
  alt: "Футболка Несу двойку, дополнительный ракурс",
  width: 810,
  height: 696,
};

const livePhotoDetailTwo = {
  id: "nesu-dvoyku-photo-detail-2",
  url: "/images/image2.webp",
  alt: "Футболка Несу двойку, детальный кадр",
  width: 1626,
  height: 696,
};

const tbaPhotoOne = {
  id: "tba-photo-1",
  url: "/images/tba1.webp",
  alt: "Закрытый анонс товара",
  width: 618,
  height: 446,
};

const tbaPhotoTwo = {
  id: "tba-photo-2",
  url: "/images/tba2.webp",
  alt: "Футболка Белый шум",
  width: 658,
  height: 436,
};

const tbaPhotoTwoDetail = {
  id: "tba-photo-2-detail",
  url: "/images/tba2-1.webp",
  alt: "Футболка Белый шум, дополнительный ракурс",
  width: 682,
  height: 550,
};

export const products: Product[] = [
  {
    id: "product-001",
    slug: "nesu-dvoyku-tee",
    title: "Футболка Несу двойку",
    description:
      "Плотная черная футболка с прямой посадкой и уличным характером. Вещь выглядит просто на первом взгляде, но работает именно как жест: будто школьная ошибка превращена в уверенную форму и собственный код.",
    price: 1999,
    photos: [
      {
        ...livePhotoMain,
        id: "nesu-dvoyku-main",
      },
      {
        ...livePhotoDetailOne,
        id: "nesu-dvoyku-detail-1",
      },
      {
        ...livePhotoDetailTwo,
        id: "nesu-dvoyku-detail-2",
      },
    ],
  },
  {
    id: "product-002",
    slug: "to-be-announced-001",
    title: "To be announced",
    description:
      "Следующий объект еще не раскрыт. Пока в поле остается только зашумленный силуэт и ощущение будущего дропа.",
    price: 0,
    photos: [
      {
        ...tbaPhotoOne,
        id: "to-be-announced-001-main",
      },
      {
        ...tbaPhotoOne,
        id: "to-be-announced-001-detail-1",
      },
      {
        ...tbaPhotoOne,
        id: "to-be-announced-001-detail-2",
      },
    ],
    available: false,
  },
  {
    id: "product-003",
    slug: "white-noise-tee",
    title: "Футболка Белый шум",
    description:
      "Светлая футболка с чистым силуэтом и спокойной подачей. Работает не как громкий акцент, а как ровный сигнал внутри своей компании: вещь для тех, кто считывает форму, посадку и настроение без лишних слов.",
    price: 1999,
    photos: [
      {
        ...tbaPhotoTwo,
        id: "white-noise-main",
      },
      {
        ...tbaPhotoTwo,
        id: "white-noise-detail-1",
      },
      {
        ...tbaPhotoTwoDetail,
        id: "white-noise-detail-2",
      },
    ],
  },
];
