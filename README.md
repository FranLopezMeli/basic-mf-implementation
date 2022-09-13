# Basic Module Federation Implementation

## Clonar Repo

```
git clone git@github.com:FranLopezMeli/basic-mf-implementation.git
```
## Levantar Host
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

## URL de Módulo Federado
Navegar a: http://localhost:8081/remoteEntry.js

### Implementación del plugin

[Host](https://github.com/FranLopezMeli/basic-mf-implementation/blob/main/container/config/webpack.dev.js#L15) - 
[Módulo Federado](https://github.com/FranLopezMeli/basic-mf-implementation/blob/main/widget/config/webpack.dev.js#L15)
