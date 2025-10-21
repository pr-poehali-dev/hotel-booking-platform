import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Hotels = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [showFilters, setShowFilters] = useState(true);

  const hotels = [
    {
      id: 1,
      name: 'Grand Luxury Hotel',
      location: 'Москва, Центр',
      price: 8500,
      rating: 4.8,
      reviews: 342,
      amenities: ['Wi-Fi', 'Бассейн', 'Ресторан', 'Парковка'],
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/b6c26cdb-5c36-4922-b811-07a7a64fb185.jpg'
    },
    {
      id: 2,
      name: 'Boutique Comfort',
      location: 'Санкт-Петербург',
      price: 6200,
      rating: 4.6,
      reviews: 218,
      amenities: ['Wi-Fi', 'Завтрак', 'Фитнес'],
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/830efcbb-ff82-4f3f-8fbe-e14d973b2bc4.jpg'
    },
    {
      id: 3,
      name: 'Modern Plaza',
      location: 'Сочи, Набережная',
      price: 7800,
      rating: 4.7,
      reviews: 287,
      amenities: ['Wi-Fi', 'Бассейн', 'Спа', 'Пляж'],
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/41134249-8373-47bf-9823-458f52e7b2ba.jpg'
    },
    {
      id: 4,
      name: 'City Center Hotel',
      location: 'Казань, Центр',
      price: 5500,
      rating: 4.5,
      reviews: 156,
      amenities: ['Wi-Fi', 'Завтрак', 'Парковка'],
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/b6c26cdb-5c36-4922-b811-07a7a64fb185.jpg'
    },
    {
      id: 5,
      name: 'Coastal Resort',
      location: 'Владивосток, Набережная',
      price: 9200,
      rating: 4.9,
      reviews: 412,
      amenities: ['Wi-Fi', 'Бассейн', 'Ресторан', 'Спа', 'Пляж'],
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/830efcbb-ff82-4f3f-8fbe-e14d973b2bc4.jpg'
    },
    {
      id: 6,
      name: 'Mountain View Hotel',
      location: 'Красная Поляна',
      price: 7200,
      rating: 4.7,
      reviews: 198,
      amenities: ['Wi-Fi', 'Ресторан', 'Фитнес', 'Парковка'],
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/41134249-8373-47bf-9823-458f52e7b2ba.jpg'
    }
  ];

  const amenitiesList = [
    'Wi-Fi',
    'Бассейн',
    'Ресторан',
    'Парковка',
    'Фитнес',
    'Спа',
    'Завтрак',
    'Пляж'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/20">
        <div className="container py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Поиск отелей</h1>
            <p className="text-muted-foreground">
              Найдено {hotels.length} вариантов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className={`lg:col-span-1 ${!showFilters ? 'hidden lg:block' : ''}`}>
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">Фильтры</h2>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowFilters(!showFilters)}
                      className="lg:hidden"
                    >
                      <Icon name="X" size={18} />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Цена за ночь: {priceRange[0]} - {priceRange[1]} ₽
                      </Label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={20000}
                        step={500}
                        className="mt-2"
                      />
                    </div>

                    <div className="pt-4 border-t">
                      <Label className="text-sm font-medium mb-3 block">Рейтинг</Label>
                      <div className="space-y-2">
                        {[5, 4, 3].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="text-sm cursor-pointer flex items-center gap-1"
                            >
                              {rating}
                              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                              и выше
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Label className="text-sm font-medium mb-3 block">Удобства</Label>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {amenitiesList.map((amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox id={amenity} />
                            <label
                              htmlFor={amenity}
                              className="text-sm cursor-pointer"
                            >
                              {amenity}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">Применить фильтры</Button>
                    <Button variant="outline" className="w-full">Сбросить</Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Icon name="SlidersHorizontal" size={18} className="mr-2" />
                  Фильтры
                </Button>
                
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-sm text-muted-foreground">Сортировка:</span>
                  <Button variant="outline" size="sm">
                    По популярности
                    <Icon name="ChevronDown" size={16} className="ml-1" />
                  </Button>
                </div>
              </div>

              {hotels.map((hotel) => (
                <Card 
                  key={hotel.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/hotel/${hotel.id}`)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardContent className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-xl mb-1">{hotel.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {hotel.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-lg">
                            <Icon name="Star" size={16} className="fill-current" />
                            <span className="font-semibold">{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-3">
                          {hotel.reviews} отзывов
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.map((amenity, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-muted text-xs rounded-md"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <span className="text-2xl font-bold text-primary">{hotel.price} ₽</span>
                          <span className="text-sm text-muted-foreground"> / ночь</span>
                        </div>
                        <Button>
                          Посмотреть номера
                          <Icon name="ArrowRight" size={18} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;
