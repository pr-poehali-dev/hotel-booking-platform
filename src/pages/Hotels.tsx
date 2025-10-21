import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HotelCard from '@/components/HotelCard';
import SearchFilter from '@/components/SearchFilter';
import { hotels } from '@/data/hotels';

export default function Hotels() {
  const [filteredHotels] = useState(hotels);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Поиск отелей</h1>
            <p className="text-muted-foreground">Найдено {filteredHotels.length} отелей</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <SearchFilter />
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} {...hotel} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
