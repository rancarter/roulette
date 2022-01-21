import { BetType } from "./Roulette.types";

class Bet {
  constructor(public type: BetType, public amount: number) {}
}

class Roulette {
  balance: number;
  bets = new Map<BetType, Bet[]>();

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  placeBet(bet: Bet): void {
    const currentBets = this.bets.get(bet.type) ?? [];

    this.bets.set(bet.type, [...currentBets, bet]);
    this.balance -= bet.amount;
  }
}

export { Roulette, Bet };
