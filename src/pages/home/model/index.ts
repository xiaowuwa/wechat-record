export interface IRecordItem {
  id: number;
  date: Date;
  paid: number;
  income: number;
  list: IRecordItemList[];
}

export interface IRecordItemList {
  label: string;
  merchant: string;
  paid: number;
  time: string;
}
