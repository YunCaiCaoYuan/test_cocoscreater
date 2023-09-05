const {ccclass, property} = cc._decorator;

@ccclass
export default class MsgControl extends cc.Component {

    start () {

    }

    update (dt) {

    }

    setMessage(name: string, content: string) {
        this.node.children[0].getComponent(cc.Label).string = name;
        this.node.children[1].getComponent(cc.Label).string = content;
    }
}
