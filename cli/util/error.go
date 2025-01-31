package util

import (
	"io"
	"log"
	"net/http"
)

func HandleError(resp *http.Response) {
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Fatalf("Error closing body: %v", err)
		}
	}(resp.Body)

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		log.Fatalf("Failed to create blueprint: %s", string(body))
	}
}
