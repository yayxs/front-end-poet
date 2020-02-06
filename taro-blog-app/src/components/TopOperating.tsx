import { View, Button } from "@tarojs/components";
import './TopOperating.scss'
function TopOperating() {


  return (
    <View className= "TopOperating">
      <Button size='mini' type='primary'>获取博客列表</Button>
      <Button size='mini' type='default'>创建新帖子</Button>
      <Button size='mini' type='warn'>删除帖子</Button>
    </View>
  )
}

export default TopOperating