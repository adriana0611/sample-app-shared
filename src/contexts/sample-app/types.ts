export type SampleAppContextData = {
  product: string;
  data: any;
  name: string;
  number: number;
  region: string;
};

export type SampleAppContextType = SampleAppContextData & {
  updateAppContext: (payload: Partial<SampleAppContextData>) => void;
};
