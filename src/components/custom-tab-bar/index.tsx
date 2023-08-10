// import React from "react";
// import Taro from "@tarojs/taro";
// import { CoverView, View } from "@tarojs/components";

// import "./index.scss";

// export default React.memo(() => {
//   const tabList = [
//     {
//       path: "pages/index/index",
//       iconPath: "",
//       text: "首页",
//     },
//     {
//       path: "pages/cards/index",
//       iconPath: "",
//       text: "分类",
//     },
//     {
//       path: "pages/user/index",
//       iconPath: "",
//       text: "个人",
//     },
//   ];

//   const handleTabItem = (path) => {
//     console.log(path);
//     Taro.navigateTo({
//       url: `/${path}`,
//     });
//   };

//   return (
//     <CoverView className="tabStyle">
//       <View className="tabList">
//         {tabList.map((item, index) => {
//           return (
//             <View
//               key={item.text + index}
//               className="tabItem"
//               onClick={() => {
//                 handleTabItem(item.path);
//               }}
//             >
//               {item.text}
//             </View>
//           );
//         })}
//       </View>
//     </CoverView>
//   );
// });
