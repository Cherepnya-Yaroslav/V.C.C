import type { Product } from "@/types/product";

const livePhoto = {
  id: "nesu-dvoyku-photo",
  url: "/images/image.png",
  alt: 'Футболка "Несу двойку"',
  width: 890,
  height: 664,
};

export const products: Product[] = [
  {
    id: "product-001",
    slug: "nesu-dvoyku-tee",
    title: 'Футболка "Несу двойку"',
    description:
      "Плотная черная футболка с прямой посадкой и уличным характером. Вещь выглядит просто на первом взгляде, но работает именно как жест: будто школьная ошибка превращена в уверенную форму и собственный код.",
    price: 1999,
    photos: [
      {
        ...livePhoto,
        id: "nesu-dvoyku-main",
      },
      {
        ...livePhoto,
        id: "nesu-dvoyku-detail-1",
      },
      {
        ...livePhoto,
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
        ...livePhoto,
        id: "to-be-announced-001-main",
      },
      {
        ...livePhoto,
        id: "to-be-announced-001-detail-1",
      },
      {
        ...livePhoto,
        id: "to-be-announced-001-detail-2",
      },
    ],
    available: false,
  },
  {
    id: "product-003",
    slug: "to-be-announced-002",
    title: "To be announced",
    description:
      "Еще один закрытый слот в подборке. Изображение уже на месте, но сам предмет пока держится в тени.",
    price: 0,
    photos: [
      {
        ...livePhoto,
        id: "to-be-announced-002-main",
      },
      {
        ...livePhoto,
        id: "to-be-announced-002-detail-1",
      },
      {
        ...livePhoto,
        id: "to-be-announced-002-detail-2",
      },
    ],
    available: false,
  },
];
