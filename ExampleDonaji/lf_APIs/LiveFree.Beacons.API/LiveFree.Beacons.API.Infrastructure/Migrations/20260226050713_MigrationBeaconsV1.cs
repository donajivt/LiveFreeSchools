using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LiveFree.Beacons.API.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class MigrationBeaconsV1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Beacons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DeviceName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BeaconType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<long>(type: "bigint", nullable: false),
                    DistrictId = table.Column<int>(type: "int", nullable: true),
                    SchoolId = table.Column<int>(type: "int", nullable: true),
                    FacultyId = table.Column<int>(type: "int", nullable: true),
                    IsAvailable = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Beacons", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BeaconEvents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeaconId = table.Column<int>(type: "int", nullable: false),
                    EmergencyType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false),
                    ReverseGeocode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOnUTC = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeaconEvents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BeaconEvents_Beacons_BeaconId",
                        column: x => x.BeaconId,
                        principalTable: "Beacons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BeaconLocations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeaconId = table.Column<int>(type: "int", nullable: false),
                    LocationDateUTC = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Street1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Street2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Locality = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReverseGeocode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false),
                    BatteryLevel = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeaconLocations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BeaconLocations_Beacons_BeaconId",
                        column: x => x.BeaconId,
                        principalTable: "Beacons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeaconEvents_BeaconId",
                table: "BeaconEvents",
                column: "BeaconId");

            migrationBuilder.CreateIndex(
                name: "IX_BeaconLocations_BeaconId",
                table: "BeaconLocations",
                column: "BeaconId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeaconEvents");

            migrationBuilder.DropTable(
                name: "BeaconLocations");

            migrationBuilder.DropTable(
                name: "Beacons");
        }
    }
}
