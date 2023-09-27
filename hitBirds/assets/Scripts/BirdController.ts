import BirdControl from "./BirdControl"; 
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    birdPrefab: cc.Prefab = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    time:number = 1;

    score:number = 0;

    start () {
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(this.time), cc.callFunc(() => {
            let bird = cc.instantiate(this.birdPrefab);

            bird.setParent(this.node);

            bird.y = this.node.y;
            bird.x = Math.random() * 220 - 110;

            bird.getComponent(BirdControl).fly();

            bird.getComponent(BirdControl).addScoreCallback = () => {
                this.score += 100;
                this.scoreLabel.string = this.score.toString();
                // console.log("分数：" + this.score);
            };
            bird.getComponent(BirdControl).dieCallback = () => {
                this.node.destroyAllChildren();
                this.node.stopAllActions();
                console.log("死亡");
            };          
        }))));
    }

}
 