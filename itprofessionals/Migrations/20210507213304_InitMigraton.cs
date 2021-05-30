using Microsoft.EntityFrameworkCore.Migrations;

namespace Itprofessionals.Migrations
{
    public partial class InitMigraton : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CTC",
                table: "Openings",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CTC",
                table: "Openings");
        }
    }
}
