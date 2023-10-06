import ComponentBase from "./Scripts/ComponentBase";
import Message, { MessageType } from "./Scripts/Message";
import UIManager from "./UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HPControl extends ComponentBase {
    hp:number = 100;

    start () {
        UIManager.Instance.RegisterReceiver(this);
    }

    ReceiveMessage(message: Message) {
        super.ReceiveMessage(message);
        if(message.Command == MessageType.UI_RefershHP) {
            let num = <number>message.Content;
            this.ChangeHP(num);
        }
    }

    ChangeHP(attack) {
        this.hp -= attack;
        this.node.children[1].getComponent(cc.Label).string = this.hp.toString();
    }
}
