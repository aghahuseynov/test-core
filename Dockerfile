FROM microsoft/dotnet:2.2-sdk AS build-env
WORKDIR /app
RUN apt-get update \
 && apt-get install -y gnupg \
 && apt-get install -y curl \
 && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
 && apt-get install -y nodejs \
 && apt-get install -y build-essential
 
COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .

CMD ASPNETCORE_URLS=http://*:$PORT dotnet AntDesign.dll
