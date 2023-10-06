import ManagerBase from "./ManagerBase";
import Message from "./Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MessageCenter {
    // 管理类列表
    static Managers: ManagerBase[] = [];

    // 发送消息
    static SendMessage(message: Message) {
        for (let manager of this.Managers) {
            manager.ReceiveMessage(message);
        }
    }

    // 发送消息
    static SendCustomMessage(type: number, command: number, content: any) {
        let msg = new Message(type, command, content);
        this.SendMessage(msg);
    }

}
