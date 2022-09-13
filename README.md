# Basic Module Federation Implementation

## Clonar Repo

```
git clone git@github.com:FranLopezMeli/basic-mf-implementation.git
```
## Levantar Aplicación
```
cd container
npm i
npm start
```
## Levantar Módulo Federado
```
cd widget
npm i
npm start
```

Navegar a: http://localhost:8080

## URL del Módulo Federado expuesto
Navegar a: http://localhost:8081/remoteEntry.js

## Implementación del plugin

[Aplicación](https://github.com/FranLopezMeli/basic-mf-implementation/blob/main/container/config/webpack.dev.js#L15) - 
[Módulo Federado](https://github.com/FranLopezMeli/basic-mf-implementation/blob/main/widget/config/webpack.dev.js#L15)
