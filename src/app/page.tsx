"use client";
import Layout from "./layout";
import Image from "next/image";
import "./styles.scss"; // Import file SCSS
import "./hall/hallcss.scss"; // Import file SCSS
import { useState } from "react";
export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <Layout>
      {/* Thanh top */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <div className="flex items-center">
          <Image src="/img/workers/nv1.png" alt="Avatar" width={50} height={50} className="rounded-full" />
          <span className="ml-2 font-bold">Tài Nguyễn</span>
        </div>
      </header>

      {/* Màn hình chính */}
      <>
        <main className="flex flex-col min-h-screen bg-gray-100">
          {/* Thanh top */}
          <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
            <div className="flex items-center">
              <Image src="/img/workers/nv1.png" alt="Avatar" width={40} height={40} className="rounded-full" />
              <span className="ml-2 font-bold">Hall</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 font-bold">3.77</span>
              <Image src="/img/icons/coin.png" alt="Coin" width={24} height={24} />
            </div>
          </header>

          {/* Scrollable Dialog */}
          <div className="flex-grow overflow-y-auto">
            <div className="min-h-screen">
              <div className="button-container fixed-top flex gap-6 bg-transparent p-4">
                {/* <button className=" text-white px-10 py-6 rounded-2xl flex items-center text-2xl"> */}
                <Image src="/img/workers/nv1.png" alt="Icon 1" width={74} height={74} />
                {/* </button> */}
                {/* <button className="bg-green-500 text-white px-10 py-6 rounded-2xl flex items-center text-2xl"> */}
                <Image src="/img/workers/nv2.png" alt="Icon 1" width={74} height={74} />
                {/* </button> */}
                {/* <button className="bg-yellow-500 text-white px-10 py-6 rounded-2xl flex items-center text-2xl"> */}
                <Image src="/img/workers/nv3.png" alt="Icon 1" width={64} height={64} />
                {/* </button> */}
                {/* <button className="bg-red-500 text-white px-10 py-6 rounded-2xl flex items-center text-2xl"> */}
                <Image src="/img/workers/nv6.png" alt="Icon 1" width={64} height={64} />
                {/* </button> */}
              </div>
            </div>

            <div className="dialog-placeholder h-64"></div> {/* Khoảng trống phía trên */}
            <div className="dialog bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto;">
              <h2 className="text-lg font-bold mb-4">TK Blind</h2>
              <div className="flex-grow overflow-y-auto pt-32">
              <div className="quests-grid">
                  {[2, 4, 6, 8].map((perDay, index) => (
                    <div className="quest-card" key={index}>
                      <div className="quest-top">
                        <span className="quest-count">0</span>
                        <span className="quest-percent">20%</span>
                      </div>
                      <div className="quest-image">
                        <img src="/img/workers/nv1.png" alt="Goblin" />
                      </div>
                      <div className="quest-daily">
                        <img src="https://goblinx.org/load/img/coin.png" alt="coin" />
                        <span>{perDay} per day</span>
                      </div>
                      <div className="quest-action">
                        <button>
                          <img src="https://goblinx.org/load/img/coin.png" alt="coin" /> {perDay * 5}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="quests-grid">
                  {[2, 4, 6, 8].map((perDay, index) => (
                    <div className="quest-card" key={index}>
                      <div className="quest-top">
                        <span className="quest-count">0</span>
                        <span className="quest-percent">20%</span>
                      </div>
                      <div className="quest-image">
                        <img src="https://goblinx.org/games/img/person/emply.png" alt="Goblin" />
                      </div>
                      <div className="quest-daily">
                        <img src="https://goblinx.org/load/img/coin.png" alt="coin" />
                        <span>{perDay} per day</span>
                      </div>
                      <div className="quest-action">
                        <button>
                          <img src="https://goblinx.org/load/img/coin.png" alt="coin" /> {perDay * 5}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="quests-grid">
                  {[2, 4, 6, 8].map((perDay, index) => (
                    <div className="quest-card" key={index}>
                      <div className="quest-top">
                        <span className="quest-count">0</span>
                        <span className="quest-percent">20%</span>
                      </div>
                      <div className="quest-image">
                        <img src="https://goblinx.org/games/img/person/emply.png" alt="Goblin" />
                      </div>
                      <div className="quest-daily">
                        <img src="https://goblinx.org/load/img/coin.png" alt="coin" />
                        <span>{perDay} per day</span>
                      </div>
                      <div className="quest-action">
                        <button>
                          <img src="https://goblinx.org/load/img/coin.png" alt="coin" /> {perDay * 5}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="quests-grid">
                  {[2, 4, 6, 8].map((perDay, index) => (
                    <div className="quest-card" key={index}>
                      <div className="quest-top">
                        <span className="quest-count">0</span>
                        <span className="quest-percent">20%</span>
                      </div>
                      <div className="quest-image">
                        <img src="https://goblinx.org/games/img/person/emply.png" alt="Goblin" />
                      </div>
                      <div className="quest-daily">
                        <img src="https://goblinx.org/load/img/coin.png" alt="coin" />
                        <span>{perDay} per day</span>
                      </div>
                      <div className="quest-action">
                        <button>
                          <img src="https://goblinx.org/load/img/coin.png" alt="coin" /> {perDay * 5}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </main>

      </>
    </Layout>
  );
}