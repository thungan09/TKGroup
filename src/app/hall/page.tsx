"use client";
import Image from "next/image";
import "./hallcss.scss";

export default function Hall() {
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

      {/* Nội dung */}
      <div className="flex-grow overflow-y-auto">
        <div className="dialog-placeholder h-20"></div>

        <div className="dialog">
        <div className="referral-box bg-[#1f1632] text-white rounded-lg p-4 mt-4 border-2 border-white shadow-lg">
  <h2 className="text-lg font-bold mb-4 text-center">
    Unlock a multi-level rewards program
  </h2>

  <div className="referral-container">
    <div className="referral-text">
      <div className="referral-item">
        <span style={{ color: '#fbbf24' }}>5%</span>
        <p>on your referral’s purchases.</p>
      </div>
      <div className="referral-item">
        <span style={{ color: '#fbbf24' }}>2%</span>
        <p>purchases by your referral’s referrals.</p>
      </div>
      <div className="referral-item">
        <span style={{ color: '#fbbf24' }}>0.5%</span>
        <p>purchases by your referral’s referral’s referrals.</p>
      </div>
    </div>

    <div className="referral-coin-box">
      <img src="/img/anh.png"/>
      <p>0</p>
      <button>Withdraw</button>
    </div>
  </div>

  <button className="invite-btn mt-4 mx-auto block">
    Invite Friends
  </button>
</div>

<br />
          <div className="invitee-box text-black rounded-lg p-4 mt-4 shadow-md border border-white">
            <h3 className="font-bold mb-2">Your Invitees (0)</h3>
            <p className="text-sm text-gray-800">No invitees yet. Invite friends to earn rewards!</p>
          </div>

        </div>

      </div>
    </div>
  );
}
