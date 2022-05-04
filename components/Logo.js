import Image from "next/image";

export default function Logo({ size = 150, className }) {
  return (
    <div className={className}>
      <Image
        src="/CosmicPigeonLogo.svg"
        alt="The Cosmic Pigeon"
        width={size}
        height={size}
      />
    </div>
  );
}
