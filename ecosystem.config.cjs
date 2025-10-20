module.exports = {
  apps: [
    {
      name: "sims-ppob",
      script: "./node_modules/.bin/serve",
      args: "-s dist -l 5173",
    },
  ],
};

