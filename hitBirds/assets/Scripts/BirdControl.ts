const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {
    // 生命值
    hp: number = 1;
    // 目标位置 +-110，185
    targetPos: cc.Vec2 = null;
    // 速度
    speed: number = 50;

    start () {
        this.fly();
    }

    fly() {
        // 随机目标点
        this.targetPos = cc.v2(Math.random() * 220 - 110, 185);
        // 反转精灵
        if (this.targetPos.x > this.node.x) {
            this.node.scaleX = -1;
        }
        // 移动
        let move = cc.moveTo((this.targetPos.y-this.node.y)/this.speed, this.targetPos);
        this.node.runAction(move);
    }

    // update (dt) {}
}
