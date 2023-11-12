const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // onLoad () {}

    start () {
        
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let delta = event.touch.getDelta()
            this.node.x += delta.x
            this.node.y += delta.y
        });


    }

    // update (dt) {}


}
