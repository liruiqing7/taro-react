import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./app.scss";

function App(props: PropsWithChildren) {
  // children 是将要会渲染的页面
  return <Provider store={store}>{props.children}</Provider>;
}

export default App;
