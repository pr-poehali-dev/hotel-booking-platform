import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Home = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = () => {
    navigate(`/hotels?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}`);
  };

  const features = [
    {
      icon: 'Search',
      title: 'Удобный поиск',
      description: 'Найдите идеальный отель за несколько кликов'
    },
    {
      icon: 'Star',
      title: 'Лучшие предложения',
      description: 'Отобранные отели с высоким рейтингом'
    },
    {
      icon: 'Shield',
      title: 'Безопасное бронирование',
      description: 'Гарантия безопасности ваших данных'
    },
    {
      icon: 'Clock',
      title: 'Поддержка 24/7',
      description: 'Всегда готовы помочь вам'
    }
  ];

  const popularHotels = [
    {
      id: 1,
      name: 'Grand Luxury Hotel',
      location: 'Москва, Центр',
      price: 8500,
      rating: 4.8,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/86150e20-6727-48c4-a75e-5a1469a3d522.jpg'
    },
    {
      id: 2,
      name: 'Boutique Comfort',
      location: 'Санкт-Петербург',
      price: 6200,
      rating: 4.6,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/88b94e61-7a01-4c23-aeb2-87ca5fce009b.jpg'
    },
    {
      id: 3,
      name: 'Modern Plaza',
      location: 'Сочи, Набережная',
      price: 7800,
      rating: 4.7,
      image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/e840dcef-0a96-4df2-97b8-1e024a1df3c2.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Как забронировать номер?',
      answer: 'Выберите отель, укажите даты заезда и выезда, заполните форму бронирования и подтвердите оплату.'
    },
    {
      question: 'Можно ли отменить бронирование?',
      answer: 'Да, условия отмены зависят от политики конкретного отеля. Обычно бесплатная отмена доступна за 24-48 часов до заезда.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем все основные банковские карты, а также электронные платежные системы.'
    },
    {
      question: 'Есть ли скидки для постоянных клиентов?',
      answer: 'Да, зарегистрированные пользователи получают специальные предложения и накопительные скидки.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Найдите идеальный отель для вашего отдыха
              </h1>
              <p className="text-xl text-muted-foreground">
                Более 10,000 отелей по всему миру. Лучшие цены и условия бронирования
              </p>
              
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Input
                      placeholder="Куда едем?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="md:col-span-2"
                    />
                    <Input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      placeholder="Заезд"
                    />
                    <Input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      placeholder="Выезд"
                    />
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full mt-4"
                    onClick={handleSearch}
                  >
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти отели
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Популярные отели</h2>
              <Button variant="outline" onClick={() => navigate('/hotels')}>
                Смотреть все
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularHotels.map((hotel) => (
                <Card 
                  key={hotel.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/hotel/${hotel.id}`)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {hotel.location}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-2xl font-bold text-primary">{hotel.price} ₽</span>
                        <span className="text-sm text-muted-foreground"> / ночь</span>
                      </div>
                      <Button size="sm">Забронировать</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center space-y-4">
                <h2 className="text-3xl font-bold">Готовы забронировать?</h2>
                <p className="text-lg opacity-90">
                  Присоединяйтесь к тысячам довольных клиентов
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/hotels')}
                  className="mt-4"
                >
                  Начать поиск
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;