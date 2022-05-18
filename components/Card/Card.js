export function Card({ children, className }) {
  return (
    <article
      className={`my-4 overflow-hidden bg-white shadow hover:shadow-xl rounded-xl ${className}`}
    >
      {children}
    </article>
  );
}
