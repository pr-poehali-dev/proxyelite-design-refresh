import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary animate-gradient flex items-center justify-center">
                <Icon name="Wifi" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold gradient-text">ProxyElite</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'pricing', 'features', 'api', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'features' && 'Преимущества'}
                  {section === 'api' && 'API'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Войти
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              🚀 Самые быстрые прокси в СНГ
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Премиальные прокси для
              <span className="block gradient-text animate-gradient bg-gradient-to-r from-primary via-accent to-secondary">
                профессионалов
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              HTTP, HTTPS, SOCKS5 с автоматической ротацией IP. Поддержка более 50 стран и городов. API для полного контроля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg px-8">
                Начать бесплатно
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '<50ms', label: 'Пинг' },
                { value: '50+', label: 'Стран' },
                { value: '24/7', label: 'Поддержка' },
              ].map((stat, i) => (
                <div key={i} className="animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный план для ваших задач</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '990',
                features: ['10 IP адресов', 'HTTP/HTTPS', '100 GB трафика', 'Автоматическая ротация', 'Email поддержка'],
                popular: false,
              },
              {
                name: 'Профессионал',
                price: '2990',
                features: ['50 IP адресов', 'HTTP/HTTPS/SOCKS5', 'Безлимитный трафик', 'Выбор города', 'API доступ', 'Приоритетная поддержка'],
                popular: true,
              },
              {
                name: 'Корпоративный',
                price: '9990',
                features: ['200 IP адресов', 'Все протоколы', 'Безлимитный трафик', 'Выделенные IP', 'Полный API', 'Персональный менеджер', 'SLA 99.9%'],
                popular: false,
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`relative overflow-hidden transition-all hover:scale-105 ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/мес</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Преимущества</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают ProxyElite</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'RefreshCw',
                title: 'Автоматическая ротация IP',
                description: 'Автоматическая смена IP-адресов с настраиваемым интервалом от 1 минуты',
              },
              {
                icon: 'Globe',
                title: 'Выбор страны и города',
                description: '50+ стран и 200+ городов для максимальной гибкости таргетинга',
              },
              {
                icon: 'Zap',
                title: 'Высокая скорость',
                description: 'Серверы с пингом <50ms и пропускной способностью 1 Гбит/с',
              },
              {
                icon: 'Shield',
                title: 'HTTP/HTTPS/SOCKS5',
                description: 'Поддержка всех популярных протоколов прокси-серверов',
              },
              {
                icon: 'BarChart',
                title: 'Дашборд аналитики',
                description: 'Подробная статистика использования трафика и IP-адресов в реальном времени',
              },
              {
                icon: 'Code',
                title: 'REST API',
                description: 'Полноценное API для интеграции и управления прокси программно',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">API Документация</h2>
            <p className="text-xl text-muted-foreground">Простая интеграция за несколько минут</p>
          </div>
          <Tabs defaultValue="get-proxies" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="get-proxies">Получить прокси</TabsTrigger>
              <TabsTrigger value="rotate">Ротация IP</TabsTrigger>
              <TabsTrigger value="stats">Статистика</TabsTrigger>
            </TabsList>
            <TabsContent value="get-proxies">
              <Card>
                <CardHeader>
                  <CardTitle>GET /api/proxies</CardTitle>
                  <CardDescription>Получить список активных прокси-серверов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`curl -X GET "https://api.proxyelite.biz/v1/proxies" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

{
  "success": true,
  "data": {
    "proxies": [
      {
        "ip": "192.168.1.100",
        "port": 8080,
        "protocol": "http",
        "country": "RU",
        "city": "Moscow",
        "speed": 45
      }
    ],
    "total": 10
  }
}`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="rotate">
              <Card>
                <CardHeader>
                  <CardTitle>POST /api/rotate</CardTitle>
                  <CardDescription>Принудительная ротация IP-адреса</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`curl -X POST "https://api.proxyelite.biz/v1/rotate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"proxy_id": "12345"}'

{
  "success": true,
  "data": {
    "new_ip": "192.168.1.101",
    "rotated_at": "2024-01-15T10:30:00Z"
  }
}`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>GET /api/stats</CardTitle>
                  <CardDescription>Получить статистику использования</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`curl -X GET "https://api.proxyelite.biz/v1/stats" \\
  -H "Authorization: Bearer YOUR_API_KEY"

{
  "success": true,
  "data": {
    "traffic_used_gb": 45.2,
    "traffic_limit_gb": 100,
    "active_proxies": 10,
    "requests_today": 15420
  }
}`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: 'Как быстро активируется прокси после оплаты?',
                a: 'Прокси-серверы активируются мгновенно после подтверждения оплаты. Обычно это занимает не более 1-2 минут.',
              },
              {
                q: 'Можно ли изменить тарифный план?',
                a: 'Да, вы можете повысить или понизить тарифный план в любое время. При повышении тарифа пересчёт происходит автоматически.',
              },
              {
                q: 'Какие способы оплаты принимаются?',
                a: 'Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки (ЮMoney, QIWI) и криптовалюты.',
              },
              {
                q: 'Есть ли ограничения по трафику?',
                a: 'На тарифах "Профессионал" и "Корпоративный" трафик безлимитный. На тарифе "Базовый" лимит составляет 100 GB в месяц.',
              },
              {
                q: 'Как работает автоматическая ротация IP?',
                a: 'Вы можете настроить автоматическую смену IP-адреса через заданный интервал времени (от 1 минуты) в личном кабинете или через API.',
              },
              {
                q: 'Предоставляется ли тестовый период?',
                a: 'Да, мы предоставляем бесплатный тестовый период на 24 часа с доступом к 3 прокси-серверам для оценки качества сервиса.',
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Мы ответим в течение 1 часа</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input placeholder="Тема сообщения" />
                </div>
                <div>
                  <Textarea placeholder="Ваше сообщение" rows={5} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">support@proxyelite.biz</p>
                  </div>
                  <div>
                    <Icon name="MessageCircle" className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm font-semibold">Telegram</p>
                    <p className="text-sm text-muted-foreground">@proxyelite_support</p>
                  </div>
                  <div>
                    <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm font-semibold">Телефон</p>
                    <p className="text-sm text-muted-foreground">+7 (800) 555-35-35</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary animate-gradient flex items-center justify-center">
                <Icon name="Wifi" className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold gradient-text">ProxyElite</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 ProxyElite. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
