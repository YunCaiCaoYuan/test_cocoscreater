const {ccclass, property} = cc._decorator;

@ccclass
export default class PaoJieControl extends cc.Component {

    start () {

    }

    update (dt) {

    }

    setImage(face: string, mouth: string) {
        cc.loader.loadRes(face, cc.SpriteFrame, (err, spriteFrame) => {
            this.node.children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(mouth, cc.SpriteFrame, (err, spriteFrame) => {
            this.node.children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });  
    }
}
