export const useFetchApi = async (urlApi: string): Promise<Response> => {
  const response = await fetch(urlApi);

  return response;
};
