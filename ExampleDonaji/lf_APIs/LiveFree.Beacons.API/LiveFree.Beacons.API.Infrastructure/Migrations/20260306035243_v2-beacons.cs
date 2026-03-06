using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LiveFree.Beacons.API.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class v2beacons : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "BeaconType",
                table: "Beacons",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "BeaconType",
                table: "Beacons",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
