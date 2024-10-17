# Imagen base para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copiar los binarios publicados de la API desde la carpeta docker/api al contenedor
COPY . .

# Exponer los puertos 80 (HTTP) y 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Configurar las URLs para que la aplicación escuche en HTTP
ENV ASPNETCORE_URLS="http://+:80"

# Comando para ejecutar la aplicación
ENTRYPOINT ["dotnet", "EmployeeCrudApi.dll"]
