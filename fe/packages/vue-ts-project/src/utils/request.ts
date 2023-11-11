export const Config = {
  Host: 'http://localhost:3000',
};

export const request = (
  url: string,
  init: Omit<RequestInit, 'body'> & {
    body: any;
  }
) => {
  if (init.method !== 'GET') {
    init.body = JSON.stringify(init.body);
  }

  return fetch(`${Config.Host}${url}`, init);
};
