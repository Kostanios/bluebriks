package cmd

import (
	"cli/service"
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var deleteCmd = &cobra.Command{
	Use:   "delete",
	Short: "Delete a blueprint by ID",
	Long: `Delete an existing blueprint by providing an ID.
Example:
  cli delete --id 123`,
	Run: func(cmd *cobra.Command, args []string) {
		id, _ := cmd.Flags().GetString("id")

		if id == "" {
			fmt.Println("Error: --id flag is required")
			os.Exit(1)
		}

		service.DeleteBlueprint(id)
	},
}

func init() {
	rootCmd.AddCommand(deleteCmd)
	deleteCmd.Flags().StringP("id", "i", "", "ID of the blueprint to delete")
}
