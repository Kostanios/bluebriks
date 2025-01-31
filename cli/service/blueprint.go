package service

import (
	"bytes"
	"cli/util"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

func CreateBlueprint(file string) {
	data, err := os.ReadFile(file)
	if err != nil {
		log.Fatalf("Error reading file: %v", err)
	}

	url, err := util.GetBaseURL("/api/v1/blueprint")
	if err != nil {
		log.Fatalf("Error reading file: %v", err)
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(data))
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}

	util.HandleError(resp)

	fmt.Println("Blueprint created successfully.")
	os.Exit(0)
}

func GetBlueprintByID(id string) {
	url, err := util.GetBaseURL("/api/v1/blueprint/" + id)
	if err != nil {
		log.Fatalf("Error getting base URL: %v", err)
	}

	resp, err := http.Get(url)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response body: %v", err)
	}

	util.HandleError(resp)

	fmt.Println("Blueprint Details:", string(body))

	os.Exit(0)
}

func ListBlueprints() {
	url, err := util.GetBaseURL("/api/v1/blueprint")
	if err != nil {
		log.Fatalf("Error getting base URL: %v", err)
	}

	resp, err := http.Get(url)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response body: %v", err)
	}

	util.HandleError(resp)

	fmt.Println("Blueprints:", string(body))

	os.Exit(0)
}

func UpdateBlueprint(id, file string) {
	data, err := os.ReadFile(file)
	if err != nil {
		log.Fatalf("Error reading file: %v", err)
	}

	url, err := util.GetBaseURL("/api/v1/blueprint/" + id)
	if err != nil {
		log.Fatalf("Error getting base URL: %v", err)
	}

	req, err := http.NewRequest("PUT", url, bytes.NewBuffer(data))
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}

	util.HandleError(resp)

	fmt.Println("Blueprint updated successfully.")
	os.Exit(0)
}

func DeleteBlueprint(id string) {
	url, err := util.GetBaseURL("/api/v1/blueprint/" + id)
	if err != nil {
		log.Fatalf("Error getting base URL: %v", err)
	}

	req, err := http.NewRequest("DELETE", url, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}

	util.HandleError(resp)

	fmt.Println("Blueprint deleted successfully.")
	os.Exit(0)
}
