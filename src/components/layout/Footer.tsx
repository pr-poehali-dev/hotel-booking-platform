import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Hotel" size={24} className="text-primary" />
              <span className="text-lg font-bold">BookStay</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Платформа для бронирования лучших отелей по всему миру
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-muted-foreground hover:text-primary transition-colors">
                  Поиск отелей
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">FAQ</li>
              <li className="text-muted-foreground">Помощь</li>
              <li className="text-muted-foreground">Политика</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@bookstay.com
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BookStay. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
