import ManagerBase from "./Scripts/ManagerBase";
import { MessageType } from "./Scripts/Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {
    static Instance: UIManager;

    onLoad () {
        super.onLoad();
        UIManager.Instance = this;
    }

    SetMessageType(): number {
        return MessageType.Type_UI;
    }


}
