const ENV = 'dev'

const configuration = () => ({
    NODE_ENV: ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
});

export{ENV, configuration}
