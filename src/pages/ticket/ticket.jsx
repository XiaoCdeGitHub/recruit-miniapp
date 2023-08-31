import { View } from "@tarojs/components";
import "./ticket.scss";
import TicketBox from "../../Components/TicketBox/TicketBox";
import Taro from '@tarojs/taro'

export default function Ticket() {
  const toTicketGot = () => {
    Taro.navigateTo({
      url:'/pages/ticketGot/ticketGot'
    })
  }
  return (
    <View className="page">
      <View className="top">
        <View className="title">场次</View>
        <View className="ticket-got" onClick={toTicketGot}>已抢的票</View>
      </View>
      <View className="info-container">
        <View className="info-box">
          <TicketBox
            title="第一次宣讲大会"
            name="李林涛"
            time="2023.9.1"
            position="大数据学院九楼 数港报告厅"
            type='null'
          ></TicketBox>
        </View>
      </View>
    </View>
  );
}
