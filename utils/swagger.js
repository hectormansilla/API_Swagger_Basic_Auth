const options = {
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "My API in swaager",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3002",
        },
      ],
      components: {
        securitySchemes: {
            basicAuth: {
            type: "http",
            scheme: "basic"
          },
        },
      },
      security: [
        {
          basicAuth: [],
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

  module.exports = { options };