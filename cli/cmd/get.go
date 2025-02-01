package cmd

import (
	"cli/service"
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var getCmd = &cobra.Command{
	Use:   "get",
	Short: "Retrieve a blueprint by ID",
	Long: `Fetch a blueprint from the API using its ID.
Example:
  cli get --id 123`,
	Run: func(cmd *cobra.Command, args []string) {
		id, _ := cmd.Flags().GetString("id")

		if id == "" {
			fmt.Println("Error: --id flag is required")
			os.Exit(1)
		}

		service.GetBlueprintByID(id)
	},
}

func init() {
	rootCmd.AddCommand(getCmd)
	getCmd.Flags().StringP("id", "i", "", "ID of the Blueprint to retrieve")
}
