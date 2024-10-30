import swaggerJsdoc from "swagger-jsdoc";

export const swaggerDocument = swaggerJsdoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "PSF API",
            version: "1.0.0",
            description:
                "Essa API está em fase de desenvolvimento...",
        },
        servers: [
            {
                url: "http://localhost:8080/",
            },
        ],
        /* components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        }, */
    },
    apis: ["./src/routes/*.ts"],
});