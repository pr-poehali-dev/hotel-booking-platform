import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { hotels } from '@/data/hotels';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function HotelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Отель не найден</h1>
            <Button onClick={() => navigate('/hotels')}>Вернуться к поиску</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const reviews = [
    { author: 'Анна К.', rating: 5, text: 'Превосходный отель! Отличное расположение и сервис.' },
    { author: 'Дмитрий П.', rating: 5, text: 'Все на высшем уровне. Обязательно вернемся!' },
    { author: 'Мария С.', rating: 4, text: 'Хороший отель, но немного шумно из-за центрального расположения.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/hotels')}
          >
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Назад к поиску
          </Button>

          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {hotel.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${hotel.name} - ${index + 1}`}
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
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{hotel.name}</h1>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="MapPin" className="h-5 w-5 mr-2" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  <Badge className="text-lg px-4 py-2">
                    <Icon name="Star" className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {hotel.rating}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-lg">{hotel.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Удобства</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" className="h-5 w-5 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Отзывы гостей</h2>
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{review.author}</span>
                          <div className="flex items-center">
                            <Icon name="Star" className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                            <span>{review.rating}.0</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Цена за ночь</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {hotel.price.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Рейтинг</span>
                      <div className="flex items-center">
                        <Icon name="Star" className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{hotel.rating} / 5.0</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Отзывов</span>
                      <span className="font-semibold">127</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => navigate(`/booking/${hotel.id}`)}
                  >
                    Забронировать
                    <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                      <span>Бесплатная отмена</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                      <span>Без предоплаты</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                      <span>Подтверждение сразу</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
