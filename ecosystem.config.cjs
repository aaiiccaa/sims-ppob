module.exports = {
    apps: [
        {
            name: "sims-ppob",
            script: "npx",
            args: "serve -s dist -l 5173", 
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
