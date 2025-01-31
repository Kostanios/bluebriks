CREATE DATABASE bluebriks;

CREATE TABLE blueprints (
                            id SERIAL PRIMARY KEY,
                            name VARCHAR(255),
                            version VARCHAR(50),
                            author VARCHAR(255),
                            blueprint_data JSONB
);