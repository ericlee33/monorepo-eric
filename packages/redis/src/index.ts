import { createClient } from 'redis';

const client = createClient();

const main = async () => {
  await client.connect();

  client.on('error', (err) => console.log('redis client error', err));

  await client.set('key', 'value');

  await client.disconnect();
};

main();
