import FSMManager from "./FSMManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FSMState {
    // 当前状态ID
    StateID: number;
    // 状态拥有者
    component: cc.Component;
    // 所属状态机
    fsmManager: FSMManager;

    constructor(stateID: number, component: cc.Component, fsmManager: FSMManager) {
        this.StateID = stateID;
        this.component = component;
        this.fsmManager = fsmManager;
    }

    // 进入状态
    OnEnter() {}

    // 状态更新中
    OnUpdate() {}

}
