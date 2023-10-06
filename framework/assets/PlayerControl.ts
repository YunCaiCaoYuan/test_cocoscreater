import ComponentBase from "./Scripts/ComponentBase";
import { MessageType } from "./Scripts/Message";
import MessageCenter from "./Scripts/MessageCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends ComponentBase {

    start () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event) => {
            MessageCenter.SendCustomMessage(MessageType.Type_UI, MessageType.UI_RefershHP, 10);
        } );
    }

}
