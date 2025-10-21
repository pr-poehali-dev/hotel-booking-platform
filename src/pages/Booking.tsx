import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { hotels } from '@/data/hotels';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { toast } from 'sonner';

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find((h) => h.id === Number(id));

  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return nights * hotel.price;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut || !name || !email || !phone) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }

    toast.success('Бронирование успешно создано!', {
      description: `Мы отправили подтверждение на ${email}`,
    });

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-5xl">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(`/hotel/${hotel.id}`)}
          >
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Назад к отелю
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Бронирование</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Детали бронирования</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Дата заезда</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left">
                              <Icon name="Calendar" className="mr-2 h-4 w-4" />
                              {checkIn ? format(checkIn, 'PP', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={setCheckIn}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Дата выезда</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left">
                              <Icon name="Calendar" className="mr-2 h-4 w-4" />
                              {checkOut ? format(checkOut, 'PP', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={checkOut}
                              onSelect={setCheckOut}
                              disabled={(date) => date < (checkIn || new Date())}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Количество гостей</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Полное имя</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (900) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Подтвердить бронирование
                      <Icon name="Check" className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Сводка заказа</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Icon name="MapPin" className="h-3 w-3 mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    {checkIn && checkOut && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Даты</span>
                          <span className="font-medium">
                            {format(checkIn, 'dd.MM', { locale: ru })} - {format(checkOut, 'dd.MM', { locale: ru })}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Ночей</span>
                          <span className="font-medium">{calculateNights()}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Гостей</span>
                      <span className="font-medium">{guests}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Цена за ночь</span>
                      <span className="font-medium">{hotel.price.toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold">Итого</span>
                      <span className="text-2xl font-bold text-primary">
                        {calculateTotal().toLocaleString()} ₽
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                      <span>Бесплатная отмена до 24 часов</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                      <span>Оплата при заселении</span>
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
