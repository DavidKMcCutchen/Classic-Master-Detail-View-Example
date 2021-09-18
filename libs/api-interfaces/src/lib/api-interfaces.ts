export interface ApiPagination {
  count: number;
  entries: API[]
};

  export interface API {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

export const emptyAPI = {
  API: '',
  Description: '',
  Auth: '',
  HTTPS: false,
  Cors: '',
  Link: '',
  Category: ''
};

