"use client";
import Link from "next/link";
import Image from "next/image";
import "./styles.scss"; // Import file CSS

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-green-500">
        {children}
        {/* Footer menu */}
        <footer className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 bg-gray-900 text-white shadow-md">
          <Link href="/hall">
            <button className="flex flex-col items-center">
              <Image src="/img/menu/partner.png" alt="Partner Invite" width={34} height={34} />
              <span className="text-xs">Invite</span>
            </button>
          </Link>
          <Link href="/earn">
            <button className="flex flex-col items-center">
              <Image src="/img/menu/setting.png" alt="Earn Rewards" width={34} height={34} />
              <span className="text-xs">Earn</span>
            </button>
          </Link>
          <Link href="/">
            <button className="flex flex-col items-center">
              <Image src="/img/menu/topUP.png" alt="Gaming Hall" width={34} height={34} />
              <span className="text-xs">Hall</span>
            </button>
          </Link>
          <Link href="/wallet">
            <button className="flex flex-col items-center">
              <Image src="/img/menu/withDraw.png" alt="Wallet Management" width={34} height={34} />
              <span className="text-xs">Wallet</span>
            </button>
          </Link>
          <Link href="/shop">
            <button className="flex flex-col items-center">
              <Image src="/img/menu/logo.png" alt="Online Shop" width={34} height={34} />
              <span className="text-xs">Setting</span>
            </button>
          </Link>
        </footer>
      </body>
    </html>
  );
}