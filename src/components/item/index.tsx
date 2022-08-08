import { ReactElement, ReactNode } from "react";
import "./index.css";

type Node = () => ReactElement;
export interface ItemProps {
  icon?: string | Node;
  title: string;
  description: string;
  href: string;
}
export default ({ icon, title, description, href }: ItemProps) => {
  return (
    <a className="item" href={href}>
      {typeof icon === "string" ? (
        <img src={icon} alt="" title="icon" className="icon" />
      ) : typeof icon === "object" ? null : (
        ""
      )}
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </a>
  );
};
