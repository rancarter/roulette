import { Bet, Roulette } from "./Roulette";
import { BetType } from "./Roulette.types";

describe("Roulette", () => {
  it("place bets", () => {
    const roulette = new Roulette(1000);

    roulette.placeBet(new Bet(BetType.NUM1, 100));

    expect(roulette.balance).toBe(900);
    expect(roulette.bets.get(BetType.NUM1)).toEqual([
      new Bet(BetType.NUM1, 100),
    ]);

    roulette.placeBet(new Bet(BetType.NUM1, 200));

    expect(roulette.balance).toBe(700);
    expect(roulette.bets.get(BetType.NUM1)).toEqual([
      new Bet(BetType.NUM1, 100),
      new Bet(BetType.NUM1, 200),
    ]);
  });
});
