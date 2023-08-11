import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
// import CustomTabBar from "src/components/custom-tab-bar";

import "./index.scss";
import TodoList from "src/components/todosSlice";

export default function Cards() {
  useLoad(() => {
    console.log("Page loaded");
  });

  return (
    <View className="cards">
      <Text>Hello world!</Text>
      <TodoList />
      {/* <CustomTabBar /> */}
    </View>
  );
}
