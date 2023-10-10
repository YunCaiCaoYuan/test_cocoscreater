import FSMState from "./Scripts/FSMState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DieState extends FSMState {
    // 进入状态
    OnEnter() {
        super.OnEnter();
        this.component.getComponent(cc.Animation).play('die');
    }

    // 状态更新中
    OnUpdate() {
        super.OnUpdate();
    }

}
