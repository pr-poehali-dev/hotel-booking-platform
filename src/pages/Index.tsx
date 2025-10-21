import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Label } from '@/components/ui/label';

const Index = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = () => {
    navigate(`/search?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  };

  const popularHotels = [
    {
      id: 1,
      name: 'Grand Luxury Hotel',
      location: 'Москва, Центр',
      price: '15 000',
      rating: 4.8,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/109edd2a-69a4-42db-9caf-8dffc16f42c3.jpg'
    },
    {
      id: 2,
      name: 'Modern City Hotel',
      location: 'Санкт-Петербург',
      price: '12 000',
      rating: 4.6,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8e92e188-47c0-4cd4-8b6c-58d71f7ad8ff.jpg'
    },
    {
      id: 3,
      name: 'Cozy Boutique Hotel',
      location: 'Казань',
      price: '8 000',
      rating: 4.7,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/9e0ecc22-a1bf-4ae5-a68c-cc77d7b964f5.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Найдите идеальный отель
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Более 100 000 отелей по всему миру. Лучшие цены и удобное бронирование
              </p>
            </div>

            <Card className="max-w-4xl mx-auto shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <Label htmlFor="destination" className="mb-2 block">Куда</Label>
                    <div className="relative">
                      <Icon name="MapPin" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="destination"
                        placeholder="Город или отель"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="checkIn" className="mb-2 block">Заезд</Label>
                    <div className="relative">
                      <Icon name="Calendar" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="checkIn"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="checkOut" className="mb-2 block">Выезд</Label>
                    <div className="relative">
                      <Icon name="Calendar" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="checkOut"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="mb-2 block">Гости</Label>
                    <div className="relative">
                      <Icon name="Users" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <Button onClick={handleSearch} size="lg" className="w-full">
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Найти отели
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Популярные отели</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularHotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate(`/hotel/${hotel.id}`)}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold">{hotel.name}</h3>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                        <Icon name="Star" className="h-4 w-4 text-accent fill-accent" />
                        <span className="text-sm font-semibold">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Icon name="MapPin" className="h-4 w-4 mr-1" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">{hotel.price} ₽</span>
                        <span className="text-sm text-muted-foreground ml-1">/ ночь</span>
                      </div>
                      <Button>Забронировать</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="BadgePercent" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Лучшие цены</h3>
                  <p className="text-muted-foreground">Гарантия самой низкой цены на все отели</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
                  <p className="text-muted-foreground">Защищенные платежи и конфиденциальность данных</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Headphones" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">Круглосуточная помощь на вашем языке</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
