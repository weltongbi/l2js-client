import GameClientPacket from "./GameClientPacket";

export default class SunRise extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    return true;
  }

  //@Override
  run(): void {}
}
