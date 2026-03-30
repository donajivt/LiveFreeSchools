using Livefree.Schools.Host.Extensions;
using Livefree.Schools.Repositories.Extensions;
using Livefree.Schools.Services.Extensions;

var builder = WebApplication.CreateBuilder(args);

string BuildConnectionString(string connectionString)
    => $"{connectionString};User Id={builder.Configuration["DbUser"]};Password={builder.Configuration["DbPassword"]}";

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services
    .AddSchoolsRepositories(
        connectionString: BuildConnectionString(builder.Configuration.GetConnectionString("Schools")))
    .AddSchoolsServices()
    .AddSchoolsEndpointsService();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app
    .MapSchoolsRoutes()
    .Run();