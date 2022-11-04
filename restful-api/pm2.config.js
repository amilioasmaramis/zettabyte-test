module.exports = {
  apps: [
    {
      name: "zettabyte - Orchestrator-Graphql",
      script: "cd orchestrator-graphql && npm install && nodemon app.js",
    },
    {
      name: "zettabyte - Orchestrator-Express-Articles",
      script:
        "cd orchestrator-express/Articles && npm install && nodemon app.js",
    },
    {
      name: "zettabyte - Orchestrator-Express-Comments",
      script:
        "cd orchestrator-express/Comments && npm install && nodemon app.js",
    },
  ],
};
