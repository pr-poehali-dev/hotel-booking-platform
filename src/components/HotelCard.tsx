import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
}

export default function HotelCard({ id, name, location, price, rating, image, amenities }: HotelCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 right-4 bg-white/90 text-foreground">
          <Icon name="Star" className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
          {rating}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <Icon name="MapPin" className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary">{price.toLocaleString()} ₽</span>
          <span className="text-sm text-muted-foreground">/ ночь</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/hotel/${id}`} className="w-full">
          <Button className="w-full">
            Подробнее
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
