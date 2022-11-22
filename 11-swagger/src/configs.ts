const configuration = () => ({
    // configuration of the port
    NODE_ENV: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
});

export{configuration}