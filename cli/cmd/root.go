package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "cli", // The base command for your application
	Short: "A CLI tool to interact with the API",
	Long: `A CLI application to interact with the API for managing blueprints.
The CLI supports commands like create and get, which allow you to manage blueprints.`,
	Run: func(cmd *cobra.Command, args []string) {
		// Default action when no subcommand is passed
		fmt.Println("Welcome to the Blueprint CLI!")
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func init() {
}
