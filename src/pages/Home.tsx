import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const popularDestinations = [
    { city: 'Москва', hotels: 1250, image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8679f12f-fd32-4578-98dd-63a578bf0740.jpg' },
    { city: 'Санкт-Петербург', hotels: 890, image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/8dcfb3e1-a5c0-42de-9aeb-189d89b777eb.jpg' },
    { city: 'Сочи', hotels: 560, image: 'https://cdn.poehali.dev/projects/e7350ded-ea73-497a-a535-0e7a49b24fde/files/1bc530f2-cb64-46f5-8f3d-25188b19c295.jpg' },
  ];

  const features = [
    { icon: 'Search', title: 'Быстрый поиск', description: 'Найдите идеальный отель за считанные секунды' },
    { icon: 'CreditCard', title: 'Безопасная оплата', description: 'Защищенные платежи и гарантия возврата' },
    { icon: 'Star', title: 'Лучшие цены', description: 'Эксклюзивные предложения и скидки' },
    { icon: 'Clock', title: 'Поддержка 24/7', description: 'Всегда на связи для вашего комфорта' },
  ];

  const handleSearch = () => {
    navigate('/hotels');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Найдите идеальный отель для вашего путешествия
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Бронируйте отели по всему миру с лучшими ценами и гарантией
              </p>
              
              <Card className="p-6 shadow-xl animate-scale-in">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Icon name="MapPin" className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Куда вы хотите поехать?"
                      className="pl-10 h-12"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button size="lg" className="h-12 px-8" onClick={handleSearch}>
                    <Icon name="Search" className="mr-2 h-5 w-5" />
                    Найти отель
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Популярные направления</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularDestinations.map((dest, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
                  onClick={handleSearch}
                >
                  <div className="relative h-64">
                    <img 
                      src={dest.image} 
                      alt={dest.city}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{dest.city}</h3>
                      <p className="text-sm text-white/90">{dest.hotels} отелей</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon name={feature.icon as any} className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Как забронировать отель?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Выберите отель, укажите даты заезда и выезда, количество гостей и завершите бронирование с помощью банковской карты.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Можно ли отменить бронирование?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, большинство отелей предлагают бесплатную отмену за 24-48 часов до заезда. Условия отмены указаны на странице отеля.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Безопасна ли оплата на сайте?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы используем защищенное SSL-соединение и работаем только с проверенными платежными системами.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Как связаться с поддержкой?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Наша служба поддержки работает 24/7. Вы можете написать нам через форму на странице контактов или позвонить по телефону горячей линии.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать путешествие?</h2>
            <p className="text-lg mb-8 opacity-90">Найдите лучшие отели по выгодным ценам</p>
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={handleSearch}>
              Найти отель сейчас
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}