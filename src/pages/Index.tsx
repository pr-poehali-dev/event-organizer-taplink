import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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
      text: "Невероятный уровень сервиса. Наше корпоративное мероприятие прошло безупречно.",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      role: "Основатель стартапа",
      text: "Профессионализм на каждом этапе. Концепция превзошла все ожидания.",
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
    <div className="min-h-screen bg-[#F5F1EB]">
      <section className="container mx-auto px-4 py-20 md:py-32 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block border-b border-chocolate/20 pb-2">
            <span className="text-sm uppercase tracking-[0.3em] text-chocolate/60">Since 2014</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-charcoal mb-8 tracking-tight leading-tight">
            Создаем события,<br />которые запоминаются
          </h1>
          <p className="text-xl md:text-2xl text-stone mb-6 leading-relaxed font-light">
            Более 10 лет опыта в event-индустрии
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-10 text-base">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-chocolate rounded-full"></div>
              <span className="text-chocolate font-light">Индивидуальные концепции</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-chocolate rounded-full"></div>
              <span className="text-chocolate font-light">Премиальный сервис</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-chocolate rounded-full"></div>
              <span className="text-chocolate font-light">Большой опыт</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-chocolate hover:bg-chocolate/90 text-cashmere px-10 py-6 text-base tracking-wide uppercase font-light border-0 rounded-none"
          >
            Обсудить проект
          </Button>
        </div>
      </section>

      <section id="services" className="bg-white py-20 md:py-28 border-t border-cashmere/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal text-center mb-16 tracking-tight">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-10 hover:shadow-xl transition-all duration-500 animate-scale-in border border-cashmere/30 bg-white rounded-none">
                <div className="mb-6 pb-6 border-b border-cashmere/30">
                  <Icon name={service.icon} size={36} className="text-chocolate" strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif font-light text-charcoal mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-stone leading-relaxed font-light">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 md:py-28 bg-[#F5F1EB]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal text-center mb-16 tracking-tight">
            Пакеты услуг
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-10 transition-all duration-500 rounded-none ${
                  pkg.highlighted 
                    ? 'border-2 border-chocolate shadow-2xl bg-white' 
                    : 'border border-cashmere/30 hover:shadow-lg bg-white'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-chocolate text-cashmere text-xs font-light tracking-widest px-4 py-2 inline-block mb-6 uppercase">
                    Популярный
                  </div>
                )}
                <h3 className="text-3xl font-serif font-light text-charcoal mb-3 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-light text-chocolate mb-8 tracking-tight">
                  {pkg.price}
                </p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone font-light">
                      <div className="w-1.5 h-1.5 bg-chocolate rounded-full flex-shrink-0 mt-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.highlighted ? "default" : "outline"}
                  className={`w-full rounded-none uppercase tracking-widest text-sm font-light ${
                    pkg.highlighted 
                      ? 'bg-chocolate hover:bg-chocolate/90 text-cashmere border-0' 
                      : 'border-chocolate text-chocolate hover:bg-chocolate hover:text-cashmere'
                  }`}
                >
                  Выбрать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-20 md:py-28 border-t border-b border-cashmere/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal text-center mb-16 tracking-tight">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-10 border border-cashmere/30 rounded-none bg-white">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-chocolate rounded-full"></div>
                  ))}
                </div>
                <p className="text-charcoal mb-8 leading-relaxed italic font-light text-lg">
                  "{testimonial.text}"
                </p>
                <div className="pt-6 border-t border-cashmere/30">
                  <p className="font-serif text-charcoal tracking-tight">{testimonial.name}</p>
                  <p className="text-sm text-stone font-light mt-1">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-28 bg-[#F5F1EB]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal text-center mb-16 tracking-tight">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolio.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden hover:opacity-90 transition-opacity duration-500 cursor-pointer border border-cashmere/30"
              >
                <img 
                  src={image} 
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28 bg-white border-t border-cashmere/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal text-center mb-6 tracking-tight">
              Готовы создать незабываемое событие?
            </h2>
            <p className="text-lg text-stone mb-16 text-center font-light">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-10 border border-cashmere/30 rounded-none">
                <h3 className="text-2xl font-serif font-light text-charcoal mb-8 tracking-tight">Оставьте заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input 
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-cashmere/40 rounded-none font-light focus:border-chocolate"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="border-cashmere/40 rounded-none font-light focus:border-chocolate"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-cashmere/40 rounded-none font-light focus:border-chocolate"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      className="border-cashmere/40 rounded-none font-light focus:border-chocolate resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-chocolate hover:bg-chocolate/90 text-cashmere rounded-none uppercase tracking-widest text-sm font-light border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="p-8 border border-cashmere/30 rounded-none">
                  <div className="flex items-start gap-5">
                    <div className="bg-cashmere/30 p-4 rounded-none">
                      <Icon name="Phone" size={24} className="text-chocolate" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-charcoal mb-2 tracking-tight">Телефон</h4>
                      <a href="tel:+79001234567" className="text-stone hover:text-chocolate transition-colors font-light">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border border-cashmere/30 rounded-none">
                  <div className="flex items-start gap-5">
                    <div className="bg-cashmere/30 p-4 rounded-none">
                      <Icon name="Mail" size={24} className="text-chocolate" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-charcoal mb-2 tracking-tight">Email</h4>
                      <a href="mailto:info@events.ru" className="text-stone hover:text-chocolate transition-colors font-light">
                        info@events.ru
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border border-cashmere/30 rounded-none">
                  <div className="flex items-start gap-5">
                    <div className="bg-cashmere/30 p-4 rounded-none">
                      <Icon name="MapPin" size={24} className="text-chocolate" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-charcoal mb-2 tracking-tight">Офис</h4>
                      <p className="text-stone font-light">
                        г. Москва, ул. Примерная, д. 1
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="icon" className="rounded-none border-chocolate text-chocolate hover:bg-chocolate hover:text-cashmere">
                    <Icon name="Instagram" size={20} strokeWidth={1.5} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-none border-chocolate text-chocolate hover:bg-chocolate hover:text-cashmere">
                    <Icon name="Send" size={20} strokeWidth={1.5} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-none border-chocolate text-chocolate hover:bg-chocolate hover:text-cashmere">
                    <Icon name="Facebook" size={20} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-cashmere/70 py-10 border-t border-cashmere/10">
        <div className="container mx-auto px-4 text-center">
          <p className="font-light text-sm tracking-wider">© 2024 Event Organizer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
