package cmd

import (
	"cli/service"
	"fmt"
	"github.com/spf13/cobra"
	"os"
)

var createCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new blueprint",
	Long: `Create a new blueprint by providing a JSON file.
Example:
  cli create --file bricks.json`,
	Run: func(cmd *cobra.Command, args []string) {
		file, _ := cmd.Flags().GetString("file")

		if file == "" {
			fmt.Println("Error: --file flag is required")
			os.Exit(1)
		}

		service.CreateBlueprint(file)
	},
}

func init() {
	rootCmd.AddCommand(createCmd)
	createCmd.Flags().StringP("file", "f", "", "Path to the JSON file for the Blueprint")
}
