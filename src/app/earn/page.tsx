"use client";
import Image from "next/image";
import "../earn/earncss.scss";
import { useState } from "react";

export default function Earn() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
        <div className="dialog-placeholder h-64"></div> {/* Khoảng trống phía trên */}
        <div className="dialog bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
          <h2 className="text-lg font-bold mb-4">Earn</h2>
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





          </div>
        </div>
      </div>
    </div>
  );
}