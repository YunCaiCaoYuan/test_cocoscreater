const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {
    // 生命值
    hp: number = 1;
    // 目标位置 +-110，185
    targetPos: cc.Vec2 = null;
    // 速度
    speed: number = 50;
    // 游戏结束回调
    dieCallback: Function = null;
    // 加分回调
    addScoreCallback: Function = null;

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
        let seq = cc.sequence(move, cc.callFunc(()=>{
            this.dieCallback();
        }));
        this.node.runAction(seq);


        // 如果触摸了精灵
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {    
            if (this.hp > 0) {
                this.hp--;
                this.node.stopAllActions();
                this.getComponent(cc.Animation).play('die');
            
                let moveDie = cc.moveTo((this.node.y+100)/(this.speed*2), cc.v2(this.node.x, -100));
                this.node.runAction(cc.sequence(moveDie, cc.callFunc(()=>{
                    this.node.destroy();
                })));    
                // 加分
                this.addScoreCallback();       
             }
        });
    }

    // update (dt) {}
}
 