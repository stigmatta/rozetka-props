import './App.css';
import Component from './Component';
import Monitory from './images/monitory.png';
import Noutbuki from './images/noutbuki.png';
import PCs from './images/kompyutery.png';
import Gaming from './images/gaming.png';
import Planshety from './images/planshety.png';
import Kabeli from './images/kabeli-i-perekhodniki.png';
import Complect from './images/kompyuternye-komplektuyushchie.png';
import Network from './images/setevoe-oborudovanie.png';
import Naushniki from './images/naushniki-i-aksessuary.png';
import Keyboards from './images/klaviatury-i-myshi.png';
import Electronics from './images/aksessuari-dlia-elektronyky.png';
import Office from './images/ofisnaya-tekhnika.png';

function App() {

  const items = [
    { title: "Ноутбуки", image: Noutbuki },
    { title: "Комп'ютери, неттопи, моноблоки", image: PCs },
    { title: "Монітори", image: Monitory },
    { title: "Gaming", image: Gaming },
    { title: "Планшети", image: Planshety },
    { title: "Кабелі та перехідники", image: Kabeli },
    { title: "Комп'ютерні комплектуючі", image: Complect, list:['SSD','Системи охолодження','Відеокарти','Оперативна пам`ять','Процесори','Материнські плати','Жорсткі диски','Блоки живлення'] },
    { title: "Мережеве обладнання", image: Network, list: ['Маршрутизатори','Комутатори','Мережеві адаптери','Пасивне мережеве обладнання','Точки доступу Wi-Fi','Ретранслятори Wi-Fi сигналу','Патч-корди'] },
    { title: "Навушники та аксесуари", image: Naushniki, list: ['Навушники','TWS','Ігрові гарнітури','Вакуумні навушники','Навушники вкладиші','Накладні навушники','Повнорозмірні навушники','Підсилювачі для навушників','Аксесуари для навушників'] },
    { title: "Клавіатури та миші", image: Keyboards, list: ['Комп`ютерні миші','Килимки для миші','Клавіатури','Комплекти клавіатури та миші','Аксесуари для клавіатур та мишок']},
    { title : "Аксесуари для електроніки", image : Electronics, list: ['USB флешки','Хаби і кардридери','Аксесуари для ПК і ноутбуків','Комплектуючі для ноутбуків','Мережеві фільтри','Чохли та клавіатури для планшетів','Сумки, рюкзаки та чохли для ноутбуків','Очисні засоби',]},
    { title : "Офісна техніка", image : Office, list: ['Принтери і БФП','Сканери','Витратні матеріали для принтерів','Дошки, фліпчарти']}
  ];

  return (
    <div className="App">
      {items.map((item) => (
        <Component image={item.image} title={item.title} list = {item.list} />
      ))}
    </div>
  );
}

export default App;
