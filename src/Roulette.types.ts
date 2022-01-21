export enum BetType {
  NUM1 = "NUM1",
  NUM2 = "NUM2",
  NUM3 = "NUM3",
  NUM4 = "NUM4",
  NUM5 = "NUM5",
  NUM6 = "NUM6",
  NUM7 = "NUM7",
  NUM8 = "NUM8",
  NUM9 = "NUM9",
  NUM10 = "NUM10",
  NUM11 = "NUM11",
  NUM12 = "NUM12",
  NUM13 = "NUM13",
  NUM14 = "NUM14",
  NUM15 = "NUM15",
  NUM16 = "NUM16",
  NUM17 = "NUM17",
}

export interface Bet {
  type: BetType;
  amount: number;
}
