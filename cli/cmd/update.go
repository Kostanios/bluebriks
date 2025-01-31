package cmd

import (
	"cli/service"
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var updateCmd = &cobra.Command{
	Use:   "update",
	Short: "Update an existing blueprint by ID",
	Long: `Update an existing blueprint by providing an ID and a new JSON file.
Example:
  cli update --id 123 --file updated_bricks.json`,
	Run: func(cmd *cobra.Command, args []string) {
		id, _ := cmd.Flags().GetString("id")
		file, _ := cmd.Flags().GetString("file")

		if id == "" {
			fmt.Println("Error: --id flag is required")
			os.Exit(1)
		}
		if file == "" {
			fmt.Println("Error: --file flag is required")
			os.Exit(1)
		}

		service.UpdateBlueprint(id, file)
	},
}

func init() {
	// Add the update command to the root command
	rootCmd.AddCommand(updateCmd)

	// Define the flags for the update command
	updateCmd.Flags().StringP("id", "i", "", "ID of the blueprint to update")
	updateCmd.Flags().StringP("file", "f", "", "Path to the updated JSON file for the blueprint")
}
