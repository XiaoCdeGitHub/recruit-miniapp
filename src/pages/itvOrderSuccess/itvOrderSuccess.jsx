import { View } from "@tarojs/components";
import ApplyState from "../../Components/ApplyState/ApplyState";

export default function itvOrderSuccess() {
    return (
        <View>
            <ApplyState value='预约成功!' state='success'></ApplyState>
        </View>
    )
}