import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const faqItems = [
    {
      question: "Как забронировать номер?",
      answer: "Выберите отель, укажите даты заезда и выезда, выберите номер и заполните форму бронирования. Подтверждение придет на вашу электронную почту."
    },
    {
      question: "Можно ли отменить бронирование?",
      answer: "Да, большинство бронирований можно отменить бесплатно за 48 часов до заезда. Условия отмены указаны при бронировании."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы принимаем все основные банковские карты (Visa, MasterCard, Мир), а также предлагаем оплату в отеле при заселении."
    },
    {
      question: "Как изменить даты бронирования?",
      answer: "Свяжитесь с нами по телефону или email, и мы поможем изменить даты вашего бронирования в соответствии с доступностью."
    },
    {
      question: "Включен ли завтрак в стоимость?",
      answer: "Это зависит от выбранного тарифа. При бронировании вы можете выбрать номер с завтраком или без него."
    },
    {
      question: "Можно ли заселиться раньше/выселиться позже?",
      answer: "Ранний заезд и поздний выезд возможны при наличии свободных номеров. Укажите это в особых пожеланиях при бронировании."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы готовы ответить на ваши вопросы и помочь с бронированием
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">info@bookstay.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground mb-2">г. Москва, ул. Тверская, 1</p>
                  <p className="text-sm text-muted-foreground">БЦ "Центральный", офис 501</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Иван Иванов"
                        />
                      </div>

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
                          placeholder="ivan@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Тема сообщения *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Вопрос о бронировании"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Сообщение *</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Опишите ваш вопрос или пожелание..."
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" className="mr-2 h-5 w-5" />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Card className="mt-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Headphones" className="h-6 w-6 text-primary" />
                      Нужна помощь?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Наша служба поддержки работает круглосуточно и готова помочь вам в любое время
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Позвонить
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                        Онлайн чат
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
