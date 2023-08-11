import { Button, Text, View } from "@tarojs/components";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "src/redux/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <View>
      <View>
        <Button onClick={() => dispatch(increment(count))}>点我加</Button>
        <Text>{count}</Text>
        <Button onClick={() => dispatch(decrement(count))}>点我减</Button>
      </View>
    </View>
  );
}
