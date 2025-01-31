package util

import (
	"errors"
	"github.com/joho/godotenv"
	"os"
)

func GetBaseURL(endpoint string) (string, error) {
	_ = godotenv.Load()
	address, addressExists := os.LookupEnv("FASTIFY_ADDRESS")
	if !addressExists {
		return "", errors.New("address is not exist")
	}

	port, portExists := os.LookupEnv("FASTIFY_PORT")
	if !portExists {
		return "", errors.New("port is not exist")
	}

	baseURL := "http://" + address + ":" + port + endpoint
	return baseURL, nil
}
