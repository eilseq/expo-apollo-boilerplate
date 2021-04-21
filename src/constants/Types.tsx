export type ElementFields = {
  title: string;
  description: string;
};

export type GraphQlQueryResult = {
  loading: boolean;
  error: string | undefined;
  data: any;
};
