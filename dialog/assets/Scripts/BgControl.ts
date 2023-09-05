import MsgControl from "./MsgControl";
import PaoJieControl from "./PaojieControl";

const {ccclass, property} = cc._decorator;

class Message {
    name: string;
    content: string;
    face: string;
    mouth: string;

    constructor(name: string, content: string, face: string, mouth: string) {
        this.name = name;
        this.content = content;
        this.face = face;
        this.mouth = mouth;
    }
}

@ccclass
export default class BgControl extends cc.Component {
    //人物和消息的控制器
    @property(PaoJieControl)
    paojieControl: PaoJieControl = null;
    @property(MsgControl)
    msgControl: MsgControl = null;

    // 消息数组
    msgs: Message[] = null;
    // 当前是第几条消息
    index: number = 0;

    start () {
        this.msgs = [
            new Message("御坂美琴", "今天天气不错", "paojieface_02", "paojiemouth_02"),
            new Message("御坂美琴", "来喝点饮料", "paojieface_01", "paojiemouth_01"),
            new Message("御坂美琴", "可惜贩卖机坏了", "paojieface_02", "paojiemouth_02")
        ];

        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event) => {
            if(this.index <= this.msgs.length) {
                if(this.msgControl.node.active == false){
                    this.msgControl.node.active = true;
                }

                let message = this.msgs[this.index++];
                this.paojieControl.setImage(message.face, message.mouth); 
                this.msgControl.setMessage(message.name, message.content);
            }
        });
    }

    // update (dt) {}
}
