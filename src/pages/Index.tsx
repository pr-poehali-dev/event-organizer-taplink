import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Calendar",
      title: "Корпоративные мероприятия",
      description: "От концепции до реализации: тимбилдинги, конференции, презентации"
    },
    {
      icon: "Sparkles",
      title: "Частные события",
      description: "Свадьбы, дни рождения, юбилеи с индивидуальным подходом"
    },
    {
      icon: "Trophy",
      title: "Промо-акции",
      description: "Запуск продуктов, BTL-акции, брендированные события"
    }
  ];

  const packages = [
    {
      name: "Базовый",
      price: "от 150 000 ₽",
      features: [
        "Разработка концепции",
        "Подбор площадки",
        "Координация в день события",
        "До 50 гостей"
      ]
    },
    {
      name: "Премиум",
      price: "от 350 000 ₽",
      features: [
        "Полное сопровождение",
        "Индивидуальная концепция",
        "Декор и оформление",
        "Работа с подрядчиками",
        "До 150 гостей"
      ],
      highlighted: true
    },
    {
      name: "VIP",
      price: "от 800 000 ₽",
      features: [
        "Эксклюзивная концепция",
        "Премиальные локации",
        "Полный event-менеджмент",
        "Артисты и развлечения",
        "Безлимитное количество гостей"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Директор по маркетингу",
      text: "Невероятный уровень сервиса! Наше корпоративное мероприятие прошло безупречно.",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      role: "Основатель стартапа",
      text: "Профессионализм на каждом этапе. Концепция превзошла все ожидания!",
      rating: 5
    },
    {
      name: "Елена Волкова",
      role: "Невеста",
      text: "Свадьба мечты стала реальностью благодаря индивидуальному подходу команды.",
      rating: 5
    }
  ];

  const portfolio = [
    "https://v3b.fal.media/files/b/monkey/OmnCI7QKUYFE9-l7nx2DI_output.png",
    "https://v3b.fal.media/files/b/monkey/OmnCI7QKUYFE9-l7nx2DI_output.png",
    "https://v3b.fal.media/files/b/monkey/OmnCI7QKUYFE9-l7nx2DI_output.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D3748] mb-6 tracking-tight">
            Создаем события,<br />которые запоминаются
          </h1>
          <p className="text-lg md:text-xl text-[#718096] mb-4 leading-relaxed">
            Более 10 лет опыта в event-индустрии
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-[#E53E3E]" />
              <span className="text-[#2D3748]">Индивидуальные концепции</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} className="text-[#E53E3E]" />
              <span className="text-[#2D3748]">Премиальный сервис</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Target" size={20} className="text-[#E53E3E]" />
              <span className="text-[#2D3748]">Большой опыт</span>
            </div>
          </div>
          <Button size="lg" className="bg-[#E53E3E] hover:bg-[#C53030] text-white px-8 py-6 text-lg rounded-lg">
            Обсудить проект
          </Button>
        </div>
      </section>

      <section id="services" className="bg-[#F7FAFC] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] text-center mb-12">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 animate-scale-in border-0">
                <div className="mb-4">
                  <Icon name={service.icon} size={40} className="text-[#E53E3E]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] text-center mb-12">
            Пакеты услуг
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 transition-all duration-300 ${
                  pkg.highlighted 
                    ? 'border-2 border-[#E53E3E] shadow-xl scale-105' 
                    : 'border-0 hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-[#E53E3E] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#2D3748] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-[#E53E3E] mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#718096]">
                      <Icon name="Check" size={20} className="text-[#E53E3E] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.highlighted ? "default" : "outline"}
                  className={`w-full ${
                    pkg.highlighted 
                      ? 'bg-[#E53E3E] hover:bg-[#C53030] text-white' 
                      : 'border-[#E53E3E] text-[#E53E3E] hover:bg-[#FFF5F5]'
                  }`}
                >
                  Выбрать пакет
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#F7FAFC] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-[#E53E3E] fill-[#E53E3E]" />
                  ))}
                </div>
                <p className="text-[#2D3748] mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-[#2D3748]">{testimonial.name}</p>
                  <p className="text-sm text-[#718096]">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] text-center mb-12">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolio.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#2D3748] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы создать незабываемое событие?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+79001234567" className="flex items-center gap-2 text-lg hover:text-[#E53E3E] transition-colors">
              <Icon name="Phone" size={24} />
              <span>+7 (900) 123-45-67</span>
            </a>
            <a href="mailto:info@events.ru" className="flex items-center gap-2 text-lg hover:text-[#E53E3E] transition-colors">
              <Icon name="Mail" size={24} />
              <span>info@events.ru</span>
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-[#2D3748]">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-[#2D3748]">
              <Icon name="Send" size={24} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-[#2D3748]">
              <Icon name="Facebook" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A202C] text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Event Organizer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
