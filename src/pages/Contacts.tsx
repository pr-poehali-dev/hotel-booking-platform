import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !subject || !message) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }

    toast.success('Сообщение отправлено!', {
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Круглосуточно'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@hotelbook.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, Тверская ул., 1',
      description: 'Пн-Пт: 9:00 - 18:00'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады помочь вам с любыми вопросами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon name={info.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
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
                    <Label htmlFor="subject">Тема</Label>
                    <Input
                      id="subject"
                      placeholder="Вопрос по бронированию"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите нам, чем мы можем помочь..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Часы работы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Воскресенье</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Clock" className="inline h-4 w-4 mr-1" />
                      Горячая линия работает 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="flex-1 flex items-center justify-center p-3 rounded-lg border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Facebook" className="h-6 w-6" />
                    </a>
                    <a 
                      href="#" 
                      className="flex-1 flex items-center justify-center p-3 rounded-lg border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Twitter" className="h-6 w-6" />
                    </a>
                    <a 
                      href="#" 
                      className="flex-1 flex items-center justify-center p-3 rounded-lg border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Instagram" className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Прежде чем связаться с нами, ознакомьтесь с разделом часто задаваемых вопросов на главной странице. 
                    Возможно, вы найдете ответ на свой вопрос там.
                  </p>
                  <Button variant="outline" className="w-full">
                    Перейти к FAQ
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
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
