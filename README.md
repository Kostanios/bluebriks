# Blue Print App

## This app is developed to interact with blueprints

A Blueprint provides an abstraction layer for building and managing complex cloud infrastructure.
Instead of writing detailed Terraform or CloudFormation scripts for each specific cloud resource, our Blueprints encapsulate all the necessary configurations, dependencies, and parameters required to spin up resources across different cloud providers.

## Fast setup with docker-compose

1. Set up environment variables:

   Create a `.env` file in the root of the project and define the following (u can use .env.example):

    ```env
    FASTIFY_ADDRESS=0.0.0.0
    FASTIFY_PORT=3006
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_HOST=postgres
    ```

   You can also use other environment variables depending on your app configuration.

2. Run your containers on docker-compose ```docker-compose up -d```
3. go to [CLI Guide](./cli/README.md)


### Setup your server localy - [Server Guide](./server/README.md) (optional)

![image](https://github.com/user-attachments/assets/79255c9d-5d3c-4f14-b4e6-4208d5d8d02d)
