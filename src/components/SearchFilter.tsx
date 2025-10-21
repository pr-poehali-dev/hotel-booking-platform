import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface SearchFilterProps {
  onFilterChange?: (filters: any) => void;
}

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [location, setLocation] = useState('');

  const amenities = ['Wi-Fi', 'Бассейн', 'Парковка', 'Завтрак', 'Спа', 'Фитнес'];

  return (
    <Card className="sticky top-20">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Icon name="SlidersHorizontal" className="h-5 w-5 mr-2" />
            Фильтры
          </h3>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Город или отель</Label>
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="location"
              placeholder="Москва, Санкт-Петербург..."
              className="pl-9"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label>Цена за ночь</Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={50000}
            step={1000}
            className="mt-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0].toLocaleString()} ₽</span>
            <span>{priceRange[1].toLocaleString()} ₽</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Рейтинг</Label>
          <div className="flex gap-2">
            {[3, 4, 5].map((rating) => (
              <Button key={rating} variant="outline" size="sm" className="flex-1">
                {rating}+ <Icon name="Star" className="h-3 w-3 ml-1 fill-yellow-400 text-yellow-400" />
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label>Удобства</Label>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox id={amenity} />
                <label
                  htmlFor={amenity}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full" size="lg">
          Применить фильтры
        </Button>
      </CardContent>
    </Card>
  );
}
