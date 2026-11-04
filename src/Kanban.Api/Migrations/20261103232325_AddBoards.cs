using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Kanban.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddBoards : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BoardId",
                table: "Items",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Boards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Boards", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Items_BoardId",
                table: "Items",
                column: "BoardId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Boards_BoardId",
                table: "Items",
                column: "BoardId",
                principalTable: "Boards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Boards_BoardId",
                table: "Items");

            migrationBuilder.DropTable(
                name: "Boards");

            migrationBuilder.DropIndex(
                name: "IX_Items_BoardId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "BoardId",
                table: "Items");
        }
    }
}
