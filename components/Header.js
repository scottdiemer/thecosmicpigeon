import Logo from "./Logo";

export default function Header({ children }) {
  return (
    <header className="bg-tertiary/30 border-b-4 border-secondary">
      <div className="container">
        <div className="hidden md:flex">
          <Logo className="px-4 py-2" />
          <div className="text-center self-center grow">
            <h1 className="font-lobster text-6xl text-primary">
              The Cosmic Pigeon
            </h1>
            <h2 className="font-daughter mt-2 text-2xl">
              An eclectic mix of handicrafts
            </h2>
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}
