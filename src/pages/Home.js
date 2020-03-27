import React from 'react';
import '../style/Home.css';
import img1 from '../img/chocolate.jpg';
import img2 from '../img/blueberry.jpg';
import img3 from '../img/pancake.jpg';
const news = [
    {
        id: 1,
        photo: <img src={img1} alt='Cukrzyca' />,
        title: "Insulinooponość a cukrzyca",
        content: "Insulinooporność jest jednym z objawów, które powinny nas zaalarmować, bowiem stanowi przedsionek do samej cukrzycy. ",
    },
    {
        id: 2,
        photo: <img src={img2} alt='Dieta' />,
        title: "Czy istnieje dieta cud?",
        content: "Wbrew pozorom, nie wierzę w dietę cud - ona nie istnieje.Najwazniejszym jest wyrobie u siebie zdrowych nawyków zywieniowych, które umozliwią utrzymanie efektow. ",
    },
    {
        id: 3,
        photo: <img src={img3} alt="Gluten" />,
        title: "Wpływ unikania produktów glutenowych a zdrowie",
        content: "Gluten to białko występujące w produktach zbozowych, który moze powodowac reakcje alergiczne u niektórych ludzi. Jednak celowe unikanie tego białka moze wywołać wtórną nietolerancję organizmu na gluten.",
    },
]

function Home() {
    const list = news.map(item =>
        <>
            <div key={item.id}>{item.photo}</div>
            <h1 key={item.id}>{item.title}</h1>
            <p key={item.id}>{item.content}</p>
        </>
    )
    return (
        <>
            <header className="header">Aktualności</header>
            <div className="images col-6">{list}</div>
        </>
    )
};
export default Home;