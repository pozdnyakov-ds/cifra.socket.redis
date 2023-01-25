const redis = require('redis');
//const client = redis.createClient({url: 'redis://192.168.0.62:6379'});
const client = redis.createClient({url: 'redis://10.15.6.28:6380'});
console.log('Redis test start...');

client.on('connect', () => {
    console.log('Connected!');
    client.set('framework', 'Vue Nuxt'); 
});

client.on("error", (error) => {
    console.error(`Error : ${error}`)
});

(async () => {
    await client.connect();

    const key = 'Что то';
    //await client.set(key, 'Тестирование');
    await client.setEx(key, 6000, 'Тестирование_1')

    const value = await client.get(key);
    console.log(`KEY: ${key} = ${value}`);

    await client.disconnect();
})()