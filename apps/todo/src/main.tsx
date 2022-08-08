import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

renderWithQiankun({
  mount(props) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount");
    const { container } = props;
    const mountRoot = container?.querySelector("#root");
    ReactDOM.createRoot(mountRoot || document.querySelector("#root"));
  },
  update: function (props: QiankunProps): void | Promise<void> {
    throw new Error("Function not implemented.");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
