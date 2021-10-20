export type HoldingType = {
  id: string;
  qty: number;
  symbol?: string;
  name?: string;
  image?: string;
  current_price?: number;
  total?: number;
  sparkline_in_1h?: { value: number[] };
  holding_value_change_1h?: number;
  price_change_percentage_1h_in_currency?: number;
  sparkline_in_24h?: { value: number[] };
  holding_value_change_24h?: number;
  price_change_percentage_24h_in_currency?: number;
  sparkline_in_7d?: { value: number[] };
  holding_value_change_7d?: number;
  price_change_percentage_7d_in_currency?: number;
  sparkline_in_14d?: { value: number[] };
  holding_value_change_14d?: number;
  price_change_percentage_14d_in_currency?: number;
  sparkline_in_30d?: { value: number[] };
  holding_value_change_30d?: number;
  price_change_percentage_30d_in_currency?: number;
  sparkline_in_200d?: { value: number[] };
  holding_value_change_200d?: number;
  price_change_percentage_200d_in_currency?: number;
  sparkline_in_1y?: { value: number[] };
  holding_value_change_1y?: number;
  price_change_percentage_1y_in_currency?: number;
};