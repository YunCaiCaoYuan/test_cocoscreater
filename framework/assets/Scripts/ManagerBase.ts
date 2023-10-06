import ComponentBase from "./ComponentBase";
import Message, { MessageType } from "./Message";
import MessageCenter from "./MessageCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ManagerBase extends ComponentBase {
    // 管理的消息接收者数组
    ReceiveList: ComponentBase[] = [];
    // 当前管理类接收的具体消息类型
    MessageType: number;

    onLoad() {
        this.MessageType = this.SetMessageType();
        MessageCenter.Managers.push(this);
    }

    // 设置管理类的消息类型
    SetMessageType() {
        return MessageType.Type_UI;
    }

    // 注册消息监听
    RegisterReceiver(compB: ComponentBase) {
        this.ReceiveList.push(compB);
    }

    // 接收消息
    ReceiveMessage(message: Message) {
        super.ReceiveMessage(message);

        if (message.Type != this.MessageType) {
            return;
        }

        for (let compB of this.ReceiveList) {
            compB.ReceiveMessage(message);
        }
    }

}
