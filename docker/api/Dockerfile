# Imagen base para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app

# Copiar el archivo ZIP desde api-drop
COPY api-drop/EmployeeCrudApi.zip .

# Instalar unzip y descomprimir el archivo ZIP
RUN apt-get update && apt-get install -y unzip && unzip EmployeeCrudApi.zip -d /app && rm EmployeeCrudApi.zip

# Exponer el puerto 80
EXPOSE 80

# Configurar las URLs para que la aplicación escuche en HTTP
ENV ASPNETCORE_URLS="http://+:80"

# Comando para ejecutar la aplicación
ENTRYPOINT ["dotnet", "EmployeeCrudApi.dll"]
