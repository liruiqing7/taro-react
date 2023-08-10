export default defineAppConfig({
  pages: ["pages/index/index", "pages/user/index", "pages/cards/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        iconPath: "",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "",
        pagePath: "pages/user/index",
        text: "用户",
      },
      {
        iconPath: "",
        pagePath: "pages/cards/index",
        text: "作品",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
});
