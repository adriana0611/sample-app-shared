export type SampleAppContextData = {
  product: "Product 1" | "Product 2";
  data: any;
  name: string;
  number: number;
  region: string;
};

export type SampleAppContextType = SampleAppContextData & {
  updateAppContext: (payload: Partial<SampleAppContextData>) => void;
};
