import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = {
    id: 1,
    name: 'Grand Luxury Hotel',
    location: 'Москва, Центр',
    address: 'ул. Тверская, 15, Москва, 125009',
    rating: 4.8,
    reviews: 342,
    description: 'Роскошный отель в самом центре Москвы с потрясающим видом на город. Предлагаем высококлассный сервис, элегантные номера и широкий спектр услуг для комфортного отдыха.',
    images: [
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/109edd2a-69a4-42db-9caf-8dffc16f42c3.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8e92e188-47c0-4cd4-8b6c-58d71f7ad8ff.jpg',
      'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/9e0ecc22-a1bf-4ae5-a68c-cc77d7b964f5.jpg',
    ],
    amenities: [
      { icon: 'Wifi', name: 'Бесплатный WiFi' },
      { icon: 'Car', name: 'Парковка' },
      { icon: 'Waves', name: 'Бассейн' },
      { icon: 'Utensils', name: 'Ресторан' },
      { icon: 'Dumbbell', name: 'Тренажерный зал' },
      { icon: 'Sparkles', name: 'Спа-центр' },
      { icon: 'Clock', name: 'Стойка регистрации 24/7' },
      { icon: 'Coffee', name: 'Завтрак включен' }
    ],
    rooms: [
      {
        id: 1,
        name: 'Стандартный номер',
        size: 25,
        guests: 2,
        price: 12000,
        image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8e92e188-47c0-4cd4-8b6c-58d71f7ad8ff.jpg',
        amenities: ['WiFi', 'ТВ', 'Кондиционер']
      },
      {
        id: 2,
        name: 'Номер Делюкс',
        size: 35,
        guests: 2,
        price: 18000,
        image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/9e0ecc22-a1bf-4ae5-a68c-cc77d7b964f5.jpg',
        amenities: ['WiFi', 'ТВ', 'Кондиционер', 'Мини-бар']
      },
      {
        id: 3,
        name: 'Люкс',
        size: 50,
        guests: 4,
        price: 25000,
        image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/109edd2a-69a4-42db-9caf-8dffc16f42c3.jpg',
        amenities: ['WiFi', 'ТВ', 'Кондиционер', 'Мини-бар', 'Джакузи']
      }
    ],
    reviewsList: [
      {
        id: 1,
        author: 'Анна П.',
        rating: 5,
        date: '15 октября 2024',
        text: 'Потрясающий отель! Очень чистые номера, вежливый персонал. Обязательно вернемся!'
      },
      {
        id: 2,
        author: 'Дмитрий К.',
        rating: 4.5,
        date: '10 октября 2024',
        text: 'Отличное расположение в центре города. Вид из окна просто восхитительный.'
      },
      {
        id: 3,
        author: 'Елена М.',
        rating: 5,
        date: '5 октября 2024',
        text: 'Завтраки превосходные, номера современные и комфортные. Рекомендую!'
      }
    ]
  };

  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate(-1)}
          >
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Назад к поиску
          </Button>

          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {hotel.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[21/9] overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${hotel.name} - фото ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{hotel.name}</h1>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Icon name="MapPin" className="h-4 w-4 mr-1" />
                      <span>{hotel.address}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded mb-2">
                      <Icon name="Star" className="h-5 w-5 text-accent fill-accent" />
                      <span className="text-lg font-semibold">{hotel.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{hotel.reviews} отзывов</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg">{hotel.description}</p>
              </div>

              <Tabs defaultValue="rooms" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="rooms">Номера</TabsTrigger>
                  <TabsTrigger value="amenities">Удобства</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="rooms" className="mt-6">
                  <div className="space-y-4">
                    {hotel.rooms.map((room) => (
                      <Card key={room.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            <div className="md:col-span-1 aspect-[4/3] md:aspect-auto overflow-hidden">
                              <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div className="md:col-span-2 p-6">
                              <h3 className="text-xl font-semibold mb-3">{room.name}</h3>
                              
                              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Icon name="Maximize" className="h-4 w-4" />
                                  {room.size} м²
                                </div>
                                <div className="flex items-center gap-1">
                                  <Icon name="Users" className="h-4 w-4" />
                                  до {room.guests} гостей
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {room.amenities.map((amenity) => (
                                  <Badge key={amenity} variant="secondary">
                                    {amenity}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-2xl font-bold text-primary">
                                    {room.price.toLocaleString()} ₽
                                  </span>
                                  <span className="text-sm text-muted-foreground ml-1">/ ночь</span>
                                </div>
                                <Button onClick={() => {
                                  setSelectedRoom(room);
                                  navigate(`/booking?hotelId=${hotel.id}&roomId=${room.id}`);
                                }}>
                                  Забронировать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="amenities" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hotel.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon name={amenity.icon as any} className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-medium">{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-4">
                    {hotel.reviewsList.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{review.author}</h4>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                              <Icon name="Star" className="h-4 w-4 text-accent fill-accent" />
                              <span className="text-sm font-semibold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Забронировать номер</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm text-muted-foreground">Заезд</label>
                      <Input type="date" className="mt-1" />
                    </div>
                    
                    <div>
                      <label className="text-sm text-muted-foreground">Выезд</label>
                      <Input type="date" className="mt-1" />
                    </div>
                    
                    <div>
                      <label className="text-sm text-muted-foreground">Гости</label>
                      <Input type="number" min="1" defaultValue="2" className="mt-1" />
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">1 ночь</span>
                      <span>12 000 ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сервисный сбор</span>
                      <span>600 ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Итого</span>
                      <span className="text-primary">12 600 ₽</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg" onClick={() => navigate('/booking')}>
                    Забронировать
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Бесплатная отмена до 48 часов до заезда
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HotelDetail;
