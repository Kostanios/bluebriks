package cmd

import (
	"cli/service"
	"github.com/spf13/cobra"
)

var listCmd = &cobra.Command{
	Use:   "list",
	Short: "List all blueprints",
	Long: `Fetch and display a list of all blueprints from the API.
Example:
  cli list`,
	Run: func(cmd *cobra.Command, args []string) {
		service.ListBlueprints()
	},
}

func init() {
	rootCmd.AddCommand(listCmd)
}
