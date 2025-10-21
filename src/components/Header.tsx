import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Hotel" className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">HotelBooking</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Главная
          </Link>
          <Link
            to="/hotels"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/hotels') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Отели
          </Link>
          <Link
            to="/contacts"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contacts') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Icon name="User" className="h-4 w-4" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
