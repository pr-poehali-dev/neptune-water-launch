import { useState } from 'react';
import Icon from '@/components/ui/icon';

const STEPS = [
  { id: 1, question: 'Как вас зовут?', hint: 'Введите ваше полное ФИО' },
  { id: 2, question: 'Ваш номер телефона?', hint: 'Мы позвоним в удобное время' },
  { id: 3, question: 'Ваш город проживания?', hint: 'Работаем по всей России дистанционно' },
  { id: 4, question: 'Общая сумма долга?', hint: 'Выберите подходящий диапазон' },
  { id: 5, question: 'Есть ли имущество, оформленное на вас?', hint: 'Квартира, автомобиль, земля и т.д.' },
];

const DEBT_OPTIONS = [
  { value: 'less_500k', label: 'Менее 500 000 ₽' },
  { value: 'up_1m', label: 'До 1 000 000 ₽' },
  { value: 'more_1m', label: 'Более 1 000 000 ₽' },
];

const PROPERTY_OPTIONS = [
  { value: 'yes', label: 'Да, есть' },
  { value: 'no', label: 'Нет имущества' },
  { value: 'not_sure', label: 'Не уверен(а)' },
];

interface FormData {
  name: string;
  phone: string;
  city: string;
  debt: string;
  property: string;
}

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({ name: '', phone: '', city: '', debt: '', property: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const current = STEPS[step - 1];
  const progress = ((step - 1) / STEPS.length) * 100;

  function canNext() {
    if (step === 1) return form.name.trim().length >= 2;
    if (step === 2) return form.phone.trim().length >= 7;
    if (step === 3) return form.city.trim().length >= 2;
    if (step === 4) return form.debt !== '';
    if (step === 5) return form.property !== '';
    return false;
  }

  function handleNext() {
    if (step < STEPS.length) setStep(s => s + 1);
    else handleSubmit();
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && canNext()) handleNext();
  }

  async function handleSubmit() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="application" className="py-24 px-8 md:px-16 bg-neutral-900">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={32} className="text-black" />
          </div>
          <h2 className="text-3xl font-light text-white mb-4">Заявка отправлена!</h2>
          <p className="text-white/60 text-lg">Артём свяжется с вами в ближайшее время для бесплатной консультации.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="py-24 px-8 md:px-16 bg-neutral-900">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-3">Оставить заявку</p>
          <h2 className="text-3xl md:text-4xl font-light text-white">Получите бесплатный<br />анализ вашей ситуации</h2>
        </div>

        <div className="bg-neutral-950 border border-white/10 p-8 md:p-12">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/30 text-xs uppercase tracking-widest">Шаг {step} из {STEPS.length}</span>
              <span className="text-amber-400 text-xs">{Math.round(((step - 1) / STEPS.length) * 100)}%</span>
            </div>
            <div className="h-px bg-white/10 w-full">
              <div
                className="h-px bg-amber-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex gap-2 mb-10">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className={`flex-1 h-0.5 transition-all duration-300 ${
                  s.id < step ? 'bg-amber-400' : s.id === step ? 'bg-amber-400/60' : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-light text-white mb-2">{current.question}</h3>
            <p className="text-white/40 text-sm">{current.hint}</p>
          </div>

          {/* Input */}
          <div className="mb-10">
            {step === 1 && (
              <input
                autoFocus
                type="text"
                placeholder="Иванов Иван Иванович"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onKeyDown={handleKey}
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-amber-400 outline-none text-white text-xl py-3 transition-colors placeholder-white/20"
              />
            )}
            {step === 2 && (
              <input
                autoFocus
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                onKeyDown={handleKey}
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-amber-400 outline-none text-white text-xl py-3 transition-colors placeholder-white/20"
              />
            )}
            {step === 3 && (
              <input
                autoFocus
                type="text"
                placeholder="Москва"
                value={form.city}
                onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                onKeyDown={handleKey}
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-amber-400 outline-none text-white text-xl py-3 transition-colors placeholder-white/20"
              />
            )}
            {step === 4 && (
              <div className="flex flex-col gap-3">
                {DEBT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setForm(f => ({ ...f, debt: opt.value }))}
                    className={`text-left px-6 py-4 border transition-all duration-200 ${
                      form.debt === opt.value
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className={`inline-block w-4 h-4 rounded-full border-2 mr-3 align-middle transition-all ${
                      form.debt === opt.value ? 'border-amber-400 bg-amber-400' : 'border-white/30'
                    }`} />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            {step === 5 && (
              <div className="flex flex-col gap-3">
                {PROPERTY_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setForm(f => ({ ...f, property: opt.value }))}
                    className={`text-left px-6 py-4 border transition-all duration-200 ${
                      form.property === opt.value
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className={`inline-block w-4 h-4 rounded-full border-2 mr-3 align-middle transition-all ${
                      form.property === opt.value ? 'border-amber-400 bg-amber-400' : 'border-white/30'
                    }`} />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </button>
            ) : <div />}

            <button
              onClick={handleNext}
              disabled={!canNext() || loading}
              className={`flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-200 ${
                canNext() && !loading
                  ? 'bg-amber-400 text-black hover:bg-amber-300'
                  : 'bg-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <Icon name="Loader2" size={16} className="animate-spin" />
                  Отправляем...
                </>
              ) : step === STEPS.length ? (
                <>
                  Отправить заявку
                  <Icon name="Send" size={16} />
                </>
              ) : (
                <>
                  Далее
                  <Icon name="ArrowRight" size={16} />
                </>
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Нажимая «Отправить», вы соглашаетесь на обработку персональных данных
        </p>
      </div>
    </section>
  );
}
