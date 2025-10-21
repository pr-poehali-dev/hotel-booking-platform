export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  description: string;
  images: string[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Гранд Отель Европа',
    location: 'Москва, Центр',
    price: 12500,
    rating: 4.9,
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8679f12f-fd32-4578-98dd-63a578bf0740.jpg',
    amenities: ['Wi-Fi', 'Бассейн', 'Спа', 'Ресторан', 'Парковка', 'Фитнес'],
    description: 'Роскошный отель в самом центре Москвы с потрясающим видом на Кремль. Идеально подходит для деловых поездок и отдыха.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8679f12f-fd32-4578-98dd-63a578bf0740.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/2741b2ff-0c2a-404f-9547-42eff57c0abe.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/def98038-baf4-4c0b-b1df-3e084842a356.jpg',
    ],
  },
  {
    id: 2,
    name: 'Невский Палас',
    location: 'Санкт-Петербург, Невский проспект',
    price: 9800,
    rating: 4.8,
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8dcfb3e1-a5c0-42de-9aeb-189d89b777eb.jpg',
    amenities: ['Wi-Fi', 'Завтрак', 'Парковка', 'Ресторан'],
    description: 'Элегантный отель на главной улице Санкт-Петербурга. Рядом с основными достопримечательностями города.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8dcfb3e1-a5c0-42de-9aeb-189d89b777eb.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/2741b2ff-0c2a-404f-9547-42eff57c0abe.jpg',
    ],
  },
  {
    id: 3,
    name: 'Сочи Резорт',
    location: 'Сочи, Адлер',
    price: 8500,
    rating: 4.7,
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/1bc530f2-cb64-46f5-8f3d-25188b19c295.jpg',
    amenities: ['Wi-Fi', 'Бассейн', 'Пляж', 'Спа', 'Анимация'],
    description: 'Современный курортный отель на берегу Черного моря. Идеальное место для семейного отдыха.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/1bc530f2-cb64-46f5-8f3d-25188b19c295.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/020d22fa-1dcd-456d-855e-100fb75330a3.jpg',
    ],
  },
  {
    id: 4,
    name: 'Бизнес Отель Аэропорт',
    location: 'Москва, Шереметьево',
    price: 5500,
    rating: 4.5,
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8679f12f-fd32-4578-98dd-63a578bf0740.jpg',
    amenities: ['Wi-Fi', 'Трансфер', 'Завтрак', 'Конференц-зал'],
    description: 'Удобный отель рядом с аэропортом. Бесплатный трансфер и отличный сервис для деловых путешественников.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8679f12f-fd32-4578-98dd-63a578bf0740.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/2741b2ff-0c2a-404f-9547-42eff57c0abe.jpg',
    ],
  },
  {
    id: 5,
    name: 'Эрмитаж Отель',
    location: 'Санкт-Петербург, Дворцовая площадь',
    price: 11200,
    rating: 4.9,
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8dcfb3e1-a5c0-42de-9aeb-189d89b777eb.jpg',
    amenities: ['Wi-Fi', 'Ресторан', 'Спа', 'Консьерж', 'Парковка'],
    description: 'Премиум отель в историческом центре Петербурга с видом на Эрмитаж и Дворцовую площадь.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8dcfb3e1-a5c0-42de-9aeb-189d89b777eb.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/def98038-baf4-4c0b-b1df-3e084842a356.jpg',
    ],
  },
  {
    id: 6,
    name: 'Прибрежный Отель',
    location: 'Сочи, Центр',
    price: 7200,
    rating: 4.6,
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/36aac09d-4861-428b-8ec1-f216349edb92.jpg',
    amenities: ['Wi-Fi', 'Бассейн', 'Завтрак', 'Бар'],
    description: 'Уютный отель в центре Сочи, в шаговой доступности от набережной и основных развлечений.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/36aac09d-4861-428b-8ec1-f216349edb92.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/490e05ce-8cbd-4721-bf87-070950fa3fe6.jpg',
    ],
  },
];