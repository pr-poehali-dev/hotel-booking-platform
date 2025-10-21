import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);

  const hotels = [
    {
      id: 1,
      name: 'Grand Luxury Hotel',
      location: 'Москва, Центр',
      price: 15000,
      rating: 4.8,
      reviews: 342,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/109edd2a-69a4-42db-9caf-8dffc16f42c3.jpg',
      amenities: ['WiFi', 'Парковка', 'Бассейн', 'Ресторан']
    },
    {
      id: 2,
      name: 'Modern City Hotel',
      location: 'Санкт-Петербург, Невский',
      price: 12000,
      rating: 4.6,
      reviews: 218,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8e92e188-47c0-4cd4-8b6c-58d71f7ad8ff.jpg',
      amenities: ['WiFi', 'Парковка', 'Тренажерный зал']
    },
    {
      id: 3,
      name: 'Cozy Boutique Hotel',
      location: 'Казань, Кремль',
      price: 8000,
      rating: 4.7,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/9e0ecc22-a1bf-4ae5-a68c-cc77d7b964f5.jpg',
      amenities: ['WiFi', 'Завтрак включен']
    },
    {
      id: 4,
      name: 'Business Suite Hotel',
      location: 'Москва, Сити',
      price: 18000,
      rating: 4.9,
      reviews: 420,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8e92e188-47c0-4cd4-8b6c-58d71f7ad8ff.jpg',
      amenities: ['WiFi', 'Парковка', 'Бассейн', 'Ресторан', 'Спа']
    },
    {
      id: 5,
      name: 'Downtown Comfort Inn',
      location: 'Санкт-Петербург, Центр',
      price: 9500,
      rating: 4.5,
      reviews: 187,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/9e0ecc22-a1bf-4ae5-a68c-cc77d7b964f5.jpg',
      amenities: ['WiFi', 'Завтрак включен', 'Парковка']
    }
  ];

  const toggleAmenity = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRating(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const filteredHotels = hotels.filter(hotel => {
    const priceMatch = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    const ratingMatch = selectedRating.length === 0 || selectedRating.some(r => hotel.rating >= r);
    const amenityMatch = amenities.length === 0 || amenities.every(a => hotel.amenities.includes(a));
    return priceMatch && ratingMatch && amenityMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Поиск отелей</h1>
            <p className="text-muted-foreground">
              Найдено {filteredHotels.length} {filteredHotels.length === 1 ? 'отель' : 'отелей'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Фильтры</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base mb-3 block">Цена за ночь</Label>
                      <Slider
                        min={0}
                        max={50000}
                        step={1000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-3"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0].toLocaleString()} ₽</span>
                        <span>{priceRange[1].toLocaleString()} ₽</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base mb-3 block">Рейтинг</Label>
                      <div className="space-y-2">
                        {[4.5, 4.0, 3.5].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox
                              id={`rating-${rating}`}
                              checked={selectedRating.includes(rating)}
                              onCheckedChange={() => toggleRating(rating)}
                            />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="text-sm cursor-pointer flex items-center"
                            >
                              {rating}+ <Icon name="Star" className="h-3 w-3 ml-1 text-accent fill-accent" />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base mb-3 block">Удобства</Label>
                      <div className="space-y-2">
                        {['WiFi', 'Парковка', 'Бассейн', 'Ресторан', 'Тренажерный зал', 'Завтрак включен'].map((amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox
                              id={amenity}
                              checked={amenities.includes(amenity)}
                              onCheckedChange={() => toggleAmenity(amenity)}
                            />
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

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setPriceRange([0, 50000]);
                        setSelectedRating([]);
                        setAmenities([]);
                      }}
                    >
                      Сбросить фильтры
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredHotels.map((hotel) => (
                  <Card 
                    key={hotel.id} 
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/hotel/${hotel.id}`)}
                  >
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="md:col-span-1 aspect-[4/3] md:aspect-auto overflow-hidden">
                          <img 
                            src={hotel.image} 
                            alt={hotel.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="md:col-span-2 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold">{hotel.name}</h3>
                              <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                                <Icon name="Star" className="h-4 w-4 text-accent fill-accent" />
                                <span className="text-sm font-semibold">{hotel.rating}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center text-muted-foreground mb-3">
                              <Icon name="MapPin" className="h-4 w-4 mr-1" />
                              <span className="text-sm">{hotel.location}</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {hotel.amenities.slice(0, 4).map((amenity) => (
                                <span 
                                  key={amenity}
                                  className="text-xs bg-secondary px-2 py-1 rounded"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            
                            <p className="text-sm text-muted-foreground">
                              {hotel.reviews} отзывов
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div>
                              <span className="text-2xl font-bold text-primary">{hotel.price.toLocaleString()} ₽</span>
                              <span className="text-sm text-muted-foreground ml-1">/ ночь</span>
                            </div>
                            <Button>Посмотреть номера</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredHotels.length === 0 && (
                <Card className="p-12 text-center">
                  <Icon name="SearchX" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground mb-4">Попробуйте изменить параметры поиска</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setPriceRange([0, 50000]);
                      setSelectedRating([]);
                      setAmenities([]);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
