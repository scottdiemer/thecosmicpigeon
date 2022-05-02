import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/CosmicPigeonLogo.svg"
        alt="The Cosmic Pigeon"
        width={200}
        height={200}
      />
    </>
  );
}
