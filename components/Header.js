import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        {/* Logo and socials */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6 
        py-8"
        >
          {/* Logo wrapper with responsive design*/}
          <div className="w-1/2 max-w-[220px] lg:max-w-[240px] xl:w-auto">
            <Link href="/">
             
                <Image
                  src="/logo.svg"
                  width={737}
                  height={678}
                  alt="logo"
                  className="translate-z-0 w-full h-full"
                />
           
            </Link>
          </div>
          <div className="-mt-4 w-[120px]
          ">
            {/* Social */}
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
