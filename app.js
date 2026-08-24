const TRIP = {
  start: '2026-08-29',
  end: '2026-09-05',
  hotel: 'Reef Oasis Blue Bay Resort & Spa'
};

const stages = [
  {
    title:'Перед выходом из дома', sub:'Критичная финальная проверка',
    items:[
      ['home-passports','Загранпаспорта ×2','critical'],
      ['home-tickets','Билеты на поезд и самолёт сохранены офлайн','critical'],
      ['home-money','Наличные доллары разложены по разным местам','critical'],
      ['home-phones','Телефоны и Power Bank заряжены','critical'],
      ['home-meds','Постоянные лекарства в ручной клади','critical'],
      ['home-water','Перекрыть воду / выключить лишние электроприборы',''],
      ['home-windows','Закрыть окна, вынести мусор, проверить дверь','']
    ],
    tip:'Паспорта → деньги → телефоны → билеты. Если эти четыре вещи с вами, большинство остальных проблем решаемы.'
  },
  {
    title:'Поезд до Москвы', sub:'Что держать рядом',
    items:[
      ['train-bag','Паспорта, деньги и телефоны — только при себе','critical'],
      ['train-power','Power Bank и кабели',''],
      ['train-food','Вода и перекус',''],
      ['train-hygiene','Щётки, мини-паста, салфетки',''],
      ['train-warm','Лёгкая кофта / худи',''],
      ['train-sleep','Беруши и маска для сна','']
    ]
  },
  {
    title:'Аэропорт Москвы', sub:'Пошагово до посадки',
    items:[
      ['mow-terminal','Проверить аэропорт, терминал и номер рейса','critical'],
      ['mow-board','Найти рейс на табло → посмотреть стойки регистрации',''],
      ['mow-checkin','Регистрация → получить посадочные',''],
      ['mow-bag','Сдать багаж',''],
      ['mow-passport','Пройти паспортный контроль',''],
      ['mow-security','Пройти досмотр',''],
      ['mow-gate','Сразу найти свой gate и проверить время посадки','critical']
    ],
    tip:'На международный рейс лучше приехать примерно за 3 часа. После контроля сначала найдите gate, а уже потом кафе и duty free.'
  },
  {
    title:'Самолёт', sub:'Что не сдавать в багаж',
    items:[
      ['plane-power','Power Bank остаётся в ручной клади','critical'],
      ['plane-docs','Паспорта и деньги не убирать далеко','critical'],
      ['plane-water','После досмотра купить/набрать воду',''],
      ['plane-layer','Кофта под рукой — в салоне может быть прохладно','']
    ]
  },
  {
    title:'Прилёт в Шарм', sub:'Аэропорт → трансфер',
    items:[
      ['ssh-visa','Определиться: Sinai Only или полноценная виза','critical'],
      ['ssh-control','Паспортный контроль',''],
      ['ssh-bag','Получить багаж и проверить чемоданы','critical'],
      ['ssh-sim','При необходимости купить SIM / включить eSIM',''],
      ['ssh-transfer','Найти представителя туроператора / трансфер','critical'],
      ['ssh-hotel','Сохранить офлайн название отеля: Reef Oasis Blue Bay','']
    ],
    tip:'Не отдавайте паспорт случайным помощникам. Сначала разберитесь с визой/штампом, затем паспортный контроль, багаж и трансфер.'
  },
  {
    title:'Заселение в отель', sub:'Первые 20 минут',
    items:[
      ['hotel-safe','Паспорта и основной запас денег — в сейф','critical'],
      ['hotel-room','Проверить номер, кондиционер, воду, сейф',''],
      ['hotel-beach','Уточнить пляжные полотенца и путь к пляжу',''],
      ['hotel-food','Посмотреть часы ресторанов и баров',''],
      ['hotel-return','Сфотографировать номер комнаты / корпус','']
    ]
  },
  {
    title:'Отдых', sub:'Жара, море, экскурсии',
    items:[
      ['rest-spf','SPF 50 наносить до выхода и обновлять','hot'],
      ['rest-hat','Головной убор и вода днём','hot'],
      ['rest-shoes','Коралловые тапочки на пляж',''],
      ['rest-shirt','UV-футболка для долгого снорклинга','hot'],
      ['rest-cash','На день брать только небольшую часть наличных',''],
      ['rest-egypt-water','Не пить воду из-под крана','critical']
    ],
    tip:'В конце августа солнце очень жёсткое. Первые 2–3 дня лучше не пытаться «загореть сразу».'
  },
  {
    title:'День перед вылетом домой', sub:'Не вспоминать всё утром',
    items:[
      ['back-time','Уточнить время трансфера в аэропорт','critical'],
      ['back-flight','Проверить рейс и терминал','critical'],
      ['back-pack','Собрать чемоданы вечером',''],
      ['back-docs','Паспорта, деньги и телефоны отдельно','critical'],
      ['back-room','Проверить сейф, шкаф, ванную, розетки, балкон','critical'],
      ['back-weight','Если есть возможность — проверить вес багажа','']
    ]
  },
  {
    title:'Аэропорт Шарм-эль-Шейха', sub:'Обратный вылет',
    items:[
      ['back-entrance','На входе подготовить паспорт и данные рейса',''],
      ['back-checkin','Регистрация и сдача багажа',''],
      ['back-controls','Паспортный контроль и досмотр',''],
      ['back-gate','Найти gate и следить за изменениями на табло','critical'],
      ['back-water','Купить воду после досмотра','']
    ],
    tip:'В аэропорту Шарма контроль может занимать время, поэтому не приезжайте впритык.'
  }
];

const packing = [
  ['pack-passports','Загранпаспорта ×2','Документы','Ручная кладь','critical'],
  ['pack-tickets','Билеты / ваучер / страховки офлайн','Документы','Ручная кладь','critical'],
  ['pack-cash','Наличные доллары + мелкие $1/$5/$10','Деньги','Ручная кладь','critical'],
  ['pack-phone1','Телефоны ×2','Техника','Ручная кладь',''],
  ['pack-power','Power Bank','Техника','Ручная кладь','critical'],
  ['pack-cables','Зарядки и кабели','Техника','Ручная кладь',''],
  ['pack-meds','Постоянные лекарства','Аптечка','Ручная кладь','critical'],
  ['pack-shirt-hand','По футболке и белью на человека','Одежда','Ручная кладь',''],
  ['pack-ts','Футболки: 4–5 каждому','Одежда','Чемодан',''],
  ['pack-shorts','Шорты: 3 пары каждому','Одежда','Чемодан',''],
  ['pack-pants','Лёгкие длинные брюки: 1 пара каждому','Одежда','Чемодан',''],
  ['pack-underwear','Бельё: 7 комплектов каждому','Одежда','Чемодан',''],
  ['pack-swim','Купальники / плавки: по 2','Море','Чемодан',''],
  ['pack-coral','Коралловые тапочки ×2','Море','Чемодан','critical'],
  ['pack-mask','Маски / трубки для снорклинга','Море','Чемодан',''],
  ['pack-uv','UV-футболки для плавания','Море','Чемодан','hot'],
  ['pack-spf','SPF 50: 2 флакона на двоих','Солнце','Чемодан','critical'],
  ['pack-face-spf','SPF для лица + бальзам для губ','Солнце','Чемодан',''],
  ['pack-hats','Головные уборы ×2','Солнце','Чемодан','critical'],
  ['pack-glasses','Солнцезащитные очки ×2','Солнце','Ручная кладь',''],
  ['pack-after-sun','Средство после загара','Солнце','Чемодан',''],
  ['pack-hygiene','Щётки, паста, дезодорант, расчёска, бритва','Гигиена','Чемодан',''],
  ['pack-wipes','Влажные салфетки / антисептик','Гигиена','Ручная кладь',''],
  ['pack-pharmacy','Обезболивающее, антигистаминное, пластыри','Аптечка','Чемодан',''],
  ['pack-stomach','Средства на случай ЖКТ + электролиты','Аптечка','Чемодан',''],
  ['pack-sneakers','Кроссовки — ехать в них','Обувь','На себе',''],
  ['pack-slides','Сланцы ×2','Обувь','Чемодан',''],
  ['pack-hoodie','Лёгкая кофта для поезда/самолёта','Одежда','На себе',''],
  ['pack-watercase','Водонепроницаемый чехол телефона','Море','Чемодан','']
];

const info = [
  ['Виза','Если весь отдых проходит в Шарм-эль-Шейхе и разрешённой зоне Южного Синая, обычно используют бесплатный штамп Sinai Only до 15 дней. Для поездок за пределы зоны может понадобиться полноценная египетская виза. Перед вылетом перепроверьте правило у туроператора/авиакомпании.'],
  ['Деньги','Не рассчитывайте на российские Visa/Mastercard/Мир. Для 7 ночей All Inclusive разумно иметь запас наличных долларов и мелкие купюры для чаевых.'],
  ['Вода','Пить воду из-под крана не стоит. Используйте бутилированную воду даже для чувствительных зубов/желудка.'],
  ['Солнце','Конец августа — очень жаркий период. SPF 50, головной убор, вода и более спокойный режим в первые дни реально важнее половины вещей в чемодане.'],
  ['Интернет','Приложение работает без сети после открытия. Для карт, мессенджеров и связи лучше заранее решить вопрос с eSIM/роумингом/SIM.'],
  ['Офлайн','Сохраните в телефонах паспорта, страховки, ваучер, билеты, название отеля и контакты туроператора. Лучше — на обоих телефонах.']
];

const state = JSON.parse(localStorage.getItem('egypt-trip-state') || '{}');
const save = () => localStorage.setItem('egypt-trip-state', JSON.stringify(state));
const isDone = id => Boolean(state[id]);

function checkboxRow(id, text, tag='') {
  const checked = isDone(id);
  const tagHtml = tag ? `<span class="tag ${tag}">${tag === 'critical' ? 'ВАЖНО' : tag === 'hot' ? 'ЖАРА' : tag}</span>` : '';
  return `<div class="check"><input type="checkbox" id="${id}" ${checked?'checked':''}><label for="${id}" class="${checked?'done':''}">${text}${tagHtml}</label></div>`;
}

function renderStages(){
  const el = document.getElementById('stages');
  el.innerHTML = `<div class="section-title">Этапы поездки</div>` + stages.map((s,i)=>{
    const done = s.items.filter(([id])=>isDone(id)).length;
    return `<details class="card" ${i===0?'open':''}><summary><div class="stage-num">${i+1}</div><div class="summary-main"><strong>${s.title}</strong><span>${s.sub} · ${done}/${s.items.length}</span></div><div class="chev">›</div></summary><div class="card-body">${s.items.map(([id,t,tag])=>checkboxRow(id,t,tag)).join('')}${s.tip?`<div class="tip">${s.tip}</div>`:''}</div></details>`
  }).join('');
}

let currentFilter='Все';
function renderPacking(){
  const el = document.getElementById('packing');
  const filters=['Все','Ручная кладь','Чемодан','На себе','Критичное'];
  const filtered = packing.filter(x => currentFilter==='Все' || x[3]===currentFilter || (currentFilter==='Критичное' && x[4]==='critical'));
  el.innerHTML = `<div class="section-title">Куда что положить</div><div class="filter-row">${filters.map(f=>`<button class="filter ${currentFilter===f?'active':''}" data-filter="${f}">${f}</button>`).join('')}</div>`+
    (filtered.length ? `<div class="card"><div class="card-body">${filtered.map(([id,t,cat,place,tag])=>checkboxRow(id,`${t} <span class="tag">${place}</span>`,tag)).join('')}</div></div>` : `<div class="empty">Ничего не найдено</div>`);
}

function renderInfo(){
  document.getElementById('info').innerHTML = `<div class="section-title">Короткие памятки</div><div class="info-grid">${info.map(([h,p])=>`<div class="info-card"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`;
}

function updateProgress(){
  const ids = [...stages.flatMap(s=>s.items.map(x=>x[0])), ...packing.map(x=>x[0])];
  const done = ids.filter(isDone).length;
  document.getElementById('doneCount').textContent=done;
  document.getElementById('totalCount').textContent=ids.length;
  document.getElementById('progressBar').style.width=`${Math.round(done/ids.length*100)}%`;

  const today = new Date();
  const start = new Date(TRIP.start+'T00:00:00');
  const end = new Date(TRIP.end+'T23:59:59');
  let title='Подготовка к поездке';
  if(today>=start && today<=end) title='Вы в путешествии';
  if(today>end) title='Поездка завершена';
  document.getElementById('currentStageTitle').textContent=title;
}

function rerender(){ renderStages(); renderPacking(); renderInfo(); updateProgress(); }

document.addEventListener('change', e=>{
  if(e.target.matches('input[type="checkbox"]')){
    state[e.target.id]=e.target.checked;
    save();
    const label=e.target.nextElementSibling;
    if(label) label.classList.toggle('done', e.target.checked);
    updateProgress();
    // update counters without collapsing open details
    document.querySelectorAll('#stages .card').forEach((card,i)=>{
      const span=card.querySelector('.summary-main span');
      const s=stages[i];
      const done=s.items.filter(([id])=>isDone(id)).length;
      if(span) span.textContent=`${s.sub} · ${done}/${s.items.length}`;
    });
  }
});

document.addEventListener('click', e=>{
  const tab=e.target.closest('.tab');
  if(tab){
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  }
  const filter=e.target.closest('.filter');
  if(filter){ currentFilter=filter.dataset.filter; renderPacking(); }
});

document.getElementById('resetBtn').addEventListener('click',()=>{
  if(confirm('Сбросить все отметки?')){
    Object.keys(state).forEach(k=>delete state[k]);
    save(); rerender();
  }
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault(); deferredPrompt=e;
  document.getElementById('installBtn').classList.remove('hidden');
});
document.getElementById('installBtn').addEventListener('click', async()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  document.getElementById('installBtn').classList.add('hidden');
});

if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

rerender();
