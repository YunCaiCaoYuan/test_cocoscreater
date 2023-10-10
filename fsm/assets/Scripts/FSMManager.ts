import FSMState from "./FSMState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FSMManager {
    // 状态列表
    stateList: FSMState[] = [];
    // 当前状态ID
    currentIndex: number = 0;

    // 改变状态
    changeState(stateID: number) {
        this.currentIndex = stateID;
        this.stateList[this.currentIndex].OnEnter();
    }

    // 更新调用
    onUpdate() {
        if (this.currentIndex != -1) {
            this.stateList[this.currentIndex].OnUpdate();
        }
    }
    
}
