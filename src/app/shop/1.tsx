import Layout from "../layout";
import Image from "next/image";
import "../styles.scss"; // Import file SCSS

const cards = [
  { id: 1, img: "/img/workers/nv1.png", perDay: 10, price: 85 },
  { id: 2, img: "/img/workers/nv2.png", perDay: 15, price: 90 },
  { id: 3, img: "/img/workers/nv3.png", perDay: 25, price: 100 },
  { id: 4, img: "/img/workers/nv4.png", perDay: 35, price: 110 },
  { id: 5, img: "/img/workers/nv5.png", perDay: 55, price: 130 },
  { id: 6, img: "/img/workers/nv6.png", perDay: 20, price: 95 },
  { id: 7, img: "/img/workers/nv7.png", perDay: 30, price: 105 },
  { id: 8, img: "/img/workers/nv8.png", perDay: 40, price: 115 },
  { id: 9, img: "/img/workers/nv9.png", perDay: 50, price: 125 },
  { id: 10, img: "/img/workers/nv10.png", perDay: 60, price: 135 },
  { id: 11, img: "/img/workers/nv11.png", perDay: 70, price: 145 },
  { id: 12, img: "/img/workers/nv12.png", perDay: 80, price: 155 },
  { id: 13, img: "/img/workers/nv13.png", perDay: 90, price: 165 },
  { id: 14, img: "/img/workers/nv14.png", perDay: 100, price: 175 },
  { id: 15, img: "/img/workers/nv15.png", perDay: 110, price: 185 },
  { id: 16, img: "/img/workers/nv16.png", perDay: 120, price: 195 },
  { id: 17, img: "/img/workers/nv17.png", perDay: 130, price: 205 },
  { id: 18, img: "/img/workers/nv18.png", perDay: 140, price: 215 },
  { id: 19, img: "/img/workers/nv19.png", perDay: 150, price: 225 },
  { id: 20, img: "/img/workers/nv20.png", perDay: 160, price: 235 },
];

export default function Shop() {
  return (
    <Layout>
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <div className="flex items-center">
          <Image src="/img/workers/nv1.png" alt="Avatar" width={40} height={40} className="rounded-full" />
          <span className="ml-2 font-bold">Shop</span>
        </div>
      </header>
      <main className="flex-grow flex justify-center items-center">
        <div className="card-view-container">
          <div className="grid grid-cols-4 gap-4 p-4">
            {cards.map((card) => (
              <div key={card.id} className="card">
                <Image src={card.img} alt={`Card ${card.id}`} width={56} height={56} className="rounded-md" />
                <div className="card-info">
                  <p>{card.perDay} per day</p>
                  <button className="btnBuy">{card.price}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}