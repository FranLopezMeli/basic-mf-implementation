# Basic Module Federation Implementation

## :arrow_double_down: Clonar Repo

```
git clone git@github.com:FranLopezMeli/basic-mf-implementation.git
```
## :rocket: Levantar Aplicación
```
cd container
npm i
npm start
```
## :rocket: Levantar Módulo Federado
```
cd widget
npm i
npm start
```

:eyes: Navegar a: http://localhost:8080

## :eyes: URL del Módulo Federado expuesto
Navegar a: http://localhost:8081/remoteEntry.js

## :eyes: Implementación del plugin

[Aplicación](https://github.com/FranLopezMeli/basic-mf-implementation/blob/main/container/config/webpack.dev.js#L15) - 
[Módulo Federado](https://github.com/FranLopezMeli/basic-mf-implementation/blob/main/widget/config/webpack.dev.js#L15)
