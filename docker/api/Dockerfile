# Imagen base para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copiar y descomprimir los binarios publicados de la API desde el archivo zip
COPY api-drop/EmployeeCrudApi.zip ./
RUN apt-get update && apt-get install -y unzip && unzip EmployeeCrudApi.zip && rm EmployeeCrudApi.zip

# Exponer los puertos 80 (HTTP) y 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Configurar las URLs para que la aplicación escuche en HTTP
ENV ASPNETCORE_URLS="http://+:80"

# Comando para ejecutar la aplicación
ENTRYPOINT ["dotnet", "EmployeeCrudApi.dll"]
