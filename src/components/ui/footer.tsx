import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pb-14 text-neutral-300">
      <h3 className="mb-2 pt-12 text-xl font-bold">Contact Us</h3>
      <div className="mb-12 flex flex-col gap-2 text-center">
        <p>
          <span className="font-semibold text-cosmicgreen">Email</span>{" "}
          info@galacticmilk.com
        </p>
        <p>
          <span className="font-semibold text-cosmicgreen">Phone</span> +12 345
          678 901
        </p>
        <p>
          <span className="block font-semibold text-cosmicgreen">
            Live Support Center
          </span>{" "}
          Click here to chat with our advisor
        </p>
      </div>
      <div className="mb-3 flex gap-2 text-neutral-300 *:h-[25px] *:w-[25px]">
        <FaSquareInstagram />
        <FaFacebook />
        <FaLinkedin />
        <FaYoutube />
        <FaXTwitter />
      </div>
      <p>© 2024 CosmicMilk</p>
    </footer>
  );
}
