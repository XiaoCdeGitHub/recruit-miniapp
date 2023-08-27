import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import React, { useState } from 'react';
export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");

  });
  const [currentIndex, setCurrentIndex] = useState(1);
  const items = [
    { id: 1, name: "红芯书院" },
    { id: 2, name: "云顶书院" },
    { id: 3, name: "aa书院" },
    { id: 4, name: "bb书院" },
    { id: 5, name: "cc书院" },
    { id: 6, name: "dd书院" },
  ];
  const handleChange = (e) => {
    console.log("当前滑块的索引", e.detail.current);
    // currentIndex = e.detail.current;
    if (e.detail.current === 5) {
      setCurrentIndex(0);
    } else {
    setCurrentIndex(e.detail.current+1);
      
    }
  };

  return (
    <View className="home">
      <View className="prompts">
        <h1>您好，</h1>
        <View className="welcome">
          欢迎使用<h1>「云昭云曜」</h1>
        </View>
        <View>请选择你所在的</View>
        <h1>「书院」</h1>
      </View>

      <Swiper
        className="swiper"
        indicatorColor="#999"
        indicatorActiveColor="red"
        vertical={false}
        circular
        indicatorDots={false}
        displayMultipleItems={3}
        current={0}
        onChange={handleChange}
        autoplay
      >
        {items.map((item, index) => {
          let className = "swiper-slide";
          if (index === currentIndex) {
            className += " active";
          }
          return (
            <SwiperItem key={item.id}>
              <View className={className}>{item.name}</View>
            </SwiperItem>
          );
        })}
      </Swiper>
    </View>
  );
}
