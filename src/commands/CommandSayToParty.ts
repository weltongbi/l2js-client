import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import Say2 from "../network/serverpackets/Say2";

export default class CommandSayToParty extends AbstractGameCommand<GameClient> {
  execute(text: string): void {
    this.Client?.sendPacket(new Say2(Say2.PARTY, text));
  }
}
