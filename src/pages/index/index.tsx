import { View, Text, CoverView, Icon, Button } from "@tarojs/components";
import { useLoad, useReachBottom } from "@tarojs/taro";
import { useSelector, useDispatch } from "react-redux";

// import CustomTabBar from "src/components/custom-tab-bar/index";

import "./index.scss";
import { addList } from "src/redux/todoList";

export default function Index() {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.todos);
  console.log(list, "todoList");

  useLoad(() => {
    console.log("Page loaded11.");
  });

  useReachBottom(() => {
    console.log("用户触底了");
  });

  const handleClick = (e) => {
    console.log("执行");
    if (e) {
      console.log("dataset", e?.currentTarget.dataset);
    }
  };

  const handleAddList = () => {
    dispatch(
      addList({
        id: Date.now(),
        text: `新的 ${Date.now()}`,
      })
    );
  };

  return (
    <CoverView className="pageStyle">
      <View className="index">
        <Text
          onClick={(e) => {
            handleClick(e);
          }}
        >
          路由1233
        </Text>
      </View>
      <View className="iconList">
        <Icon size="60" type="success" />
        <Icon size="60" type="info" />
        <Icon size="60" type="warn" color="#ccc" />
        <Icon size="60" type="warn" />
        <Icon size="60" type="waiting" />
        <Icon size="20" type="success_no_circle" />
        <Icon size="20" type="warn" />
        <Icon size="20" type="success" />
        <Icon size="20" type="download" />
        <Icon size="20" type="clear" color="red" />
        <Icon size="20" type="search" />
        <Icon size="20" type="info_circle" />
        <Icon size="20" type="circle" />
      </View>
      <Text userSelect={true}>文本组件</Text>
      <Button onClick={handleAddList}>增加todoList</Button>
      {/* <CustomTabBar /> */}
    </CoverView>
  );
}
