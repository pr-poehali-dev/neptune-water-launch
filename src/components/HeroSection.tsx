import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/1c7c4b05-abdc-4a13-a68b-dd72801c0bd0/files/c6b4d186-53a5-4290-8905-579babf71ab4.jpg',
  'https://cdn.poehali.dev/projects/1c7c4b05-abdc-4a13-a68b-dd72801c0bd0/files/4f7de097-af93-43f0-aede-1d75cfd7bcaf.jpg',
  'https://cdn.poehali.dev/projects/1c7c4b05-abdc-4a13-a68b-dd72801c0bd0/files/5e71bc5f-8eaf-4c9a-b6e6-ac86244a689e.jpg',
  'https://cdn.poehali.dev/projects/1c7c4b05-abdc-4a13-a68b-dd72801c0bd0/files/d1bcdd05-2560-4b2b-9d0b-9965fad975a0.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-amber-400/80 shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/1c7c4b05-abdc-4a13-a68b-dd72801c0bd0/bucket/6f4f634e-1f70-4929-9617-5cbc4690b2ac.jpg"
                  alt="Юрист"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
                  Юридические услуги
                </p>
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Тугушев Артём
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Защита прав перед кредиторами
                </p>
                <p className="max-w-md text-base text-white/60 leading-relaxed">
                  Помогаю избавиться от долгов законно. Банкротство, реструктуризация, защита от коллекторов — решу вашу ситуацию.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://t.me/tugushevartem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-none border border-amber-400 bg-amber-400 px-6 py-3 text-sm font-medium text-black transition-all hover:bg-amber-300"
                  >
                    <Icon name="MessageCircle" size={16} />
                    Написать в Telegram
                  </a>
                  <a
                    href="tel:+79605466161"
                    className="flex items-center gap-2 rounded-none border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:text-white"
                  >
                    <Icon name="Phone" size={16} />
                    Позвонить
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-amber-400' : 'w-8 bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}