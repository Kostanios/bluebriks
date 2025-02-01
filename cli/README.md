# Blueprint CLI Tool

This is a CLI tool for managing blueprints using the Cobra library. You can create, retrieve, list, update, and delete blueprints through the command-line interface.

## Installation

go version ```1.23.3```

1. Install the necessary dependencies:
    ```sh
    go mod tidy
    ```

2. Create a `.env` file in the root of the project and define the following (u can use .env.example):
    ```env
    FASTIFY_ADDRESS=0.0.0.0
    FASTIFY_PORT=3006
    ```

3. Build the CLI tool (also you have an option to use already compiled file:
    ```sh
    go build -o blueprint-cli
    ```

Now you can run the CLI tool using `./blueprint-cli`!

## Commands

### `create`

Create a new blueprint by providing a JSON file.

#### Usage:

create blueprint
```shell
./blueprint-cli create --file <file-path>
```

Retrieve a blueprint by its ID.

```shell
./blueprint-cli get --id <blueprint-id>
```

List all available blueprints.
```shell
./blueprint-cli list
```

Update an existing blueprint by providing an ID and a JSON file.
```shell
./blueprint-cli update --id <blueprint-id> --file <file-path>
```

Delete a blueprint by its ID.
```shell
./blueprint-cli delete --id <blueprint-id>
```
