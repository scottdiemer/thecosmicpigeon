import Copyright from "./Copyright";
import { LinkList } from "./LinkList";
import links from "../data/links";

export default function Footer() {
  const listStyles = "uppercase py-4";
  return (
    <div className="bg-secondary/50 text-tertiary">
      <ul className="flex justify-between container">
        <LinkList links={links} className={listStyles} />
      </ul>
      <Copyright className="py-4" name="The Cosmic Pigeon" />
    </div>
  );
}
