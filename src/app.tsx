import { useEffect } from "react";
import { registerMicroApps, start } from "qiankun";
import Item, { type ItemProps } from "./components/item";
import "./app.css";

export default () => {
  useEffect(() => {
    registerMicroApps([
      {
        name: "RestofYou",
        entry: "//localhost:5000",
        container: "#container",
        activeRule: "/app-rest",
      },
      {
        name: "Todo-mvc",
        entry: "//localhost:5174",
        container: "#container",
        activeRule: "/app-todo",
      },
      // {
      //   name: "angularApp",
      //   entry: "//localhost:4200",
      //   container: "#container",
      //   activeRule: "/app-angular",
      // },
    ]);
    // 启动 qiankun
    start();
  }, []);

  // TODO add icons
  const data: ItemProps[] = [
    {
      title: "TODOs",
      description: "a tool to manage todos task",
      href: "app-todo",
    },
    {
      title: "Rest of You",
      description: "show the rest of some target, like your lifetime",
      href: "app-rest",
    },
    {
      title: "2323",
      description: "2323",
      href: "",
    },
  ];
  return (
    <>
      <h1 className="main-title">Maple-Colorful</h1>
      <p className="main-desc">Colorful Tools To Power Life and Development!</p>
      <div className="color-items">
        {data.map((item) => (
          <Item {...item} key={item.title} />
        ))}
      </div>
      <div id="container"></div>
    </>
  );
};
