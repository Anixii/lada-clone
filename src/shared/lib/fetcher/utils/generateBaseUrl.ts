export const generateBaseUrl = (url: string, data?: {params?: {[key: string]: string}}) => {

  const queryParams = data?.params ? `?${new URLSearchParams(data.params).toString()}` : '';
  return (
    `${url}${url.endsWith('/') ? '' : '/'}${queryParams}`
  );
};
