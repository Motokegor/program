import './style/App.scss';
import Header from './components/Header/Header'

const card =[
{
  tariff:"Безлимитный 300",
  price: "300 руб/мес",
  speed:"до 10 Мбит/сек",
  volume:"Объём включенного",
  title:"тарифа не ограничен",
  color:"aqua"
},
{
  tariff:"Безлимитный 450",
  price: "450 руб/мес",
  speed:"до 50 Мбит/сек",
  volume:"Объём включенного ",
  title:"тарифа не ограничен",
  color:"green"
},
{
  tariff:"Безлимитный 550",
  price: "550 руб/мес",
  speed:"до 100 Мбит/сек",
  volume:"Объём включенного ",
  title:"тарифа не ограничен",
  color:"red"
},
{
  tariff:"Безлимитный 1000",
  price: "1000 руб/мес",
  speed:"до 200 Мбит/сек",
  volume:"Объём включенного ",
  title:"тарифа не ограничен",
  color:"black"
}


]




export default function App() {
  return (
    <div className='App'>
      <Header tariff={card[0].tariff} price={card[0].price} speed={card[0].speed} color={card[0].color} volume={card[0].volume} title={card[0].title}/>
      <Header tariff={card[1].tariff} price={card[1].price} speed={card[1].speed} color={card[1].color} volume={card[0].volume} title={card[1].title}/>
      <Header tariff={card[2].tariff} price={card[2].price} speed={card[2].speed} color={card[2].color} volume={card[2].volume} title={card[2].title}/>
      <Header tariff={card[3].tariff} price={card[3].price} speed={card[3].speed} color={card[3].color} volume={card[3].volume} title={card[3].title}/>
    </div>
  );
}


