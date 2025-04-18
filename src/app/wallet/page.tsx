"use client";
import Image from "next/image";
import "../wallet/walletcss.scss"
import { useState } from "react";

export default function Wallet() {
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
          <h2 className="text-lg font-bold mb-4">Wallet</h2>
          <div className="wallet-container">
      <div className="wallet-card">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="avatar">
            <Image src="/img/workers/nv6.png" alt="Avatar" width={60} height={60} />
          </div>
          <div className="username">Ngân Nguyễn</div>
        </div>

        {/* Wallet Connection */}
        <div className="wallet-header">
          <span>Wallet</span>
          <button className="connect-button">Connect</button>
        </div>

        {/* Token Address */}
        <div className="token-address">
          <span className="label">Token address</span>
          <div className="address-box">
            EQBo3...GUJT_
            {/* <Image src="/img/icons/copy.svg" alt="Copy" width={14} height={14} /> */}
          </div>
          <div className="chart-link">Chart</div>
        </div>

        {/* Balances */}
        <div className="balances">
          <div className="balance-box">
            <div className="token-type">KAT</div>
            <div className="token-amount">7.45</div>
            <div className="actions">
              <button className="btn swap">Swap</button>
              <button className="btn withdraw">Withdraw</button>
            </div>
          </div>

          <div className="balance-box">
            <div className="token-type">TON</div>
            <div className="token-amount">0</div>
            <div className="actions">
              <button className="btn withdraw-blue">Withdraw</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <div
            className={`tab ${activeTab === "withdrawals" ? "active" : ""}`}
            onClick={() => setActiveTab("withdrawals")}
          >
            WITHDRAWALS
          </div>
          <div
            className={`tab ${activeTab === "activities" ? "active" : ""}`}
            onClick={() => setActiveTab("activities")}
          >
            ACTIVITIES
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "withdrawals" ? (
            <div className="empty-message">No withdrawals yet.</div>
          ) : (
            <div className="empty-message">No activities recorded.</div>
          )}
        </div>

        <div className="version">Version 1.0.9</div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}