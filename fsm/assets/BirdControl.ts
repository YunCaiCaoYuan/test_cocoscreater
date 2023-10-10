import DieState from "./DieState";
import FSMManager from "./Scripts/FSMManager";
import FlyState from "./FlyState";

const {ccclass, property} = cc._decorator;

enum BirdState {
    Fly,
    Die
}

@ccclass
export default class NewClass extends cc.Component {
    ani:cc.Animation;
    // 状态机
    fsmManager: FSMManager;

    start () {
        this.ani = this.getComponent(cc.Animation);
        this.fsmManager = new FSMManager();
        // 创建两个状态
        let fly = new FlyState(BirdState.Fly, this, this.fsmManager);
        let die = new DieState(BirdState.Die, this, this.fsmManager);
        this.fsmManager.stateList = [fly, die];
        // 开始执行状态
        this.fsmManager.changeState(BirdState.Fly);
    }

    update(dt) {
        if(this.fsmManager.currentIndex != -1) {
            this.fsmManager.onUpdate();
        }
    }

    fly() {
        this.fsmManager.changeState(BirdState.Fly);

        // this.ani.play("fly");
        //...
    }

    die() {
        this.fsmManager.changeState(BirdState.Die);

        // this.ani.play("die");
        //...
    }

}
