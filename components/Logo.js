import Image from "next/image";

export default function Logo() {
  return (
    <div className="px-4 py-2">
      <Image
        src="/CosmicPigeonLogo.svg"
        alt="The Cosmic Pigeon"
        width={150}
        height={150}
      />
    </div>
  );
}
