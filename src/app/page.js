import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Andrey from "./assets/andrey.jpg"
import Biografia from "./assets/biografia.jpg"

export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen pb-4">
      <header className="bg-gradient-to-r from-black to-blue-950 shadow-2xl flex py-4 justify-center">
        <h1 className="text-white text-5xl font-italianno">Andrey Viola</h1>
        <ul className="hidden">

          <li className="text-white">
            <FaInstagram />
          </li>

          <li className="text-white">
            <FaWhatsapp />
          </li>

          <li className="text-white">
            <FaYoutube />
          </li>

        </ul>
      </header>
      <main className="flex flex-col gap-6 justify-center items-center">
        <Image
          src={Andrey}
          alt="andrey viola"
          className="shadow-2xl"
        />
        <div className="w-3/4 h-96 overflow-scroll bg-[url('assets/biografia.jpg')] bg-cover">
          <div className="bg-black bg-opacity-60 w-full p-5 flex flex-col gap-2">
            <h1 className="font-italianno text-white text-6xl">Biografia</h1>
            <p className="text-base text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna tristique, tempor justo quis, malesuada odio. Nunc rutrum augue mi, sed feugiat lorem sagittis vitae. Nulla sed erat accumsan, suscipit metus ac, mattis sapien. Ut volutpat rutrum sagittis. Praesent ultricies neque eu iaculis suscipit. Vivamus mattis, nisl ut egestas molestie, leo justo iaculis sem, ac scelerisque elit ante viverra justo. Morbi quam nulla, accumsan at faucibus quis, egestas vel eros. Ut ut vestibulum lectus, quis aliquam nisi. Fusce eu mi a felis semper egestas at eu sem.

              Praesent pulvinar sem et tempor tincidunt. Nulla tincidunt, diam non sollicitudin volutpat, purus nibh dignissim elit, non elementum urna sapien vel felis. Proin dui est, cursus eget dictum non, blandit eget tortor. Quisque eu ante at orci aliquam condimentum. Pellentesque iaculis laoreet nisl sed blandit. Sed quis ornare nulla, eget cursus purus. Aliquam et feugiat est. Nam consequat tellus quis aliquam convallis. Nam vel facilisis dui. In hac habitasse platea dictumst. Vestibulum feugiat lorem lectus, non euismod neque tempor ut. Vivamus condimentum turpis purus, vitae elementum nulla tempus vitae. Suspendisse suscipit turpis ac nisl consectetur, at consectetur purus volutpat.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}
