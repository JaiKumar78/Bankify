import MobileNavBar from "@/components/MobileNavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {
    firstName: "Jai Kumar",
    lastName: "Dhanasekaran"
  }

  return (
    <main className="flex h-full w-full font-inter">
        <SideBar user = { loggedIn } />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' alt="logo" width={30} height={30} />
            <div>
              <MobileNavBar user = {loggedIn} />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
