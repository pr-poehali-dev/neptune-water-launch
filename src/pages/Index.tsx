import HeroSection from '@/components/HeroSection';
import ApplicationForm from '@/components/ApplicationForm';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Scale',
    title: 'Банкротство физических лиц',
    desc: 'Полное сопровождение процедуры банкротства. Списываем долги законно и без последствий для вашего имущества.',
  },
  {
    icon: 'RefreshCw',
    title: 'Реструктуризация долга',
    desc: 'Переговоры с банками и МФО. Снижаем ежемесячный платёж, убираем штрафы и пени.',
  },
  {
    icon: 'ShieldOff',
    title: 'Защита от коллекторов',
    desc: 'Останавливаем звонки и давление. Защищаем вас и ваших близких от незаконных методов взыскания.',
  },
  {
    icon: 'FileX',
    title: 'Расторжение кредитных договоров',
    desc: 'Признаём договоры недействительными. Находим нарушения банков и добиваемся расторжения через суд.',
  },
  {
    icon: 'RotateCcw',
    title: 'Возврат страховок',
    desc: 'Возвращаем навязанные страховки по кредитам. Взыскиваем деньги даже после окончания договора.',
  },
  {
    icon: 'Gavel',
    title: 'Снятие исполнительного производства',
    desc: 'Отменяем аресты счетов и имущества. Останавливаем судебных приставов и закрываем производство.',
  },
];

const steps = [
  { num: '01', title: 'Бесплатная консультация', desc: 'Разбираем вашу ситуацию и определяем лучший способ решения' },
  { num: '02', title: 'Стратегия и договор', desc: 'Разрабатываем план действий и фиксируем стоимость без скрытых платежей' },
  { num: '03', title: 'Работа и результат', desc: 'Ведём дело до победного конца — вы следите за ходом онлайн' },
];

export default function Index() {
  return (
    <main className="bg-neutral-950 text-white">
      <HeroSection />

      {/* Services */}
      <section className="py-24 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-3">Чем я могу помочь</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">Услуги по защите<br />прав перед кредиторами</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {services.map((s) => (
              <div key={s.title} className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors group">
                <Icon name={s.icon as never} size={28} className="text-amber-400 mb-5" />
                <h3 className="text-lg font-medium text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="py-24 px-8 md:px-16 bg-neutral-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-3">Почему выбирают меня</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Опыт, который<br />работает на вас</h2>
              <div className="space-y-6">
                {[
                  ['200+', 'успешных дел о банкротстве'],
                  ['98%', 'клиентов получили нужный результат'],
                  ['7 лет', 'специализации на кредитных спорах'],
                  ['0 ₽', 'предоплата только после подписания договора'],
                ].map(([num, label]) => (
                  <div key={num} className="flex items-baseline gap-4">
                    <span className="text-3xl font-light text-amber-400 w-24 shrink-0">{num}</span>
                    <span className="text-white/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {['Работаем строго по договору', 'Фиксированная стоимость — без доплат', 'Защищаем от кредиторов на весь период работы', 'Консультация бесплатно, без обязательств', 'Ведём дела по всей России дистанционно'].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-3">Как мы работаем</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">Три шага до свободы<br />от долгов</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {steps.map((step) => (
              <div key={step.num} className="bg-neutral-950 p-10 text-center">
                <p className="text-5xl font-light text-amber-400/30 mb-4">{step.num}</p>
                <h3 className="text-lg font-medium text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplicationForm />

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 bg-amber-400">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4">Получите бесплатную консультацию</h2>
          <p className="text-black/60 mb-10 max-w-xl mx-auto">Расскажите о своей ситуации — я объясню, что можно сделать и сколько это стоит. Без давления и обязательств.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/tugushevartem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <Icon name="MessageCircle" size={18} />
              Написать в Telegram
            </a>
            <a
              href="tel:+79605466161"
              className="flex items-center gap-2 border-2 border-black text-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              <Icon name="Phone" size={18} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 Тугушев Артём. Юридические услуги.</p>
          <p className="text-white/20 text-xs">Информация на сайте не является публичной офертой</p>
        </div>
      </footer>
    </main>
  );
}