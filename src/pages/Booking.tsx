import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    specialRequests: '',
    agreeTerms: false
  });

  const hotel = {
    name: 'Grand Luxury Hotel',
    location: 'Москва, Центр',
    image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/86150e20-6727-48c4-a75e-5a1469a3d522.jpg',
    room: {
      name: 'Стандартный номер',
      price: 12000
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, примите условия бронирования",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Бронирование успешно!",
      description: "Подтверждение отправлено на вашу почту",
    });

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const nights = 1;
  const roomPrice = hotel.room.price * nights;
  const serviceFee = roomPrice * 0.05;
  const total = roomPrice + serviceFee;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/20">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate(-1)}
          >
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Назад
          </Button>

          <h1 className="text-3xl font-bold mb-8">Оформление бронирования</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="User" className="h-5 w-5" />
                      Личные данные
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Имя *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Фамилия *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" className="h-5 w-5" />
                      Даты проживания
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="checkIn">Заезд *</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut">Выезд *</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Гости *</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageSquare" className="h-5 w-5" />
                      Особые пожелания
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Label htmlFor="specialRequests">Дополнительные пожелания (необязательно)</Label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Например: ранний заезд, детская кроватка..."
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CreditCard" className="h-5 w-5" />
                      Способ оплаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <input
                          type="radio"
                          id="card"
                          name="payment"
                          defaultChecked
                          className="h-4 w-4"
                        />
                        <label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Icon name="CreditCard" className="h-5 w-5" />
                            <span className="font-medium">Банковская карта</span>
                          </div>
                        </label>
                      </div>

                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <input
                          type="radio"
                          id="hotel"
                          name="payment"
                          className="h-4 w-4"
                        />
                        <label htmlFor="hotel" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Icon name="Building2" className="h-5 w-5" />
                            <span className="font-medium">Оплата в отеле</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm cursor-pointer"
                  >
                    Я принимаю условия бронирования и политику конфиденциальности
                  </label>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Детали бронирования</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <Icon name="MapPin" className="h-3 w-3 mr-1" />
                        <span>{hotel.location}</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Тип номера</p>
                      <p className="font-medium">{hotel.room.name}</p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{nights} {nights === 1 ? 'ночь' : 'ночи'}</span>
                        <span>{roomPrice.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Сервисный сбор</span>
                        <span>{serviceFee.toLocaleString()} ₽</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Итого</span>
                        <span className="text-primary">{total.toLocaleString()} ₽</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Check" className="mr-2 h-5 w-5" />
                      Подтвердить бронирование
                    </Button>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="ShieldCheck" className="h-4 w-4 text-primary" />
                        <span>Бесплатная отмена до 48 часов</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Lock" className="h-4 w-4 text-primary" />
                        <span>Безопасная оплата</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Mail" className="h-4 w-4 text-primary" />
                        <span>Мгновенное подтверждение</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;