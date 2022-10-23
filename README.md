# Store

Se elaboro el proyecto incluyendo las funciones básicas **CRUD** y realizando las peticiones de [FAKE STORE API](https://fakestoreapi.com/docs)

## Features
Tiene 2 páginas
- `/home` - `/` :  Muestra la lista de todo los productos
- `/category/[nombre de la categoria]` :  Muestra los productos filtrados por categoria
- Incluye un buscador global, además cada producto que se muestra tiene la opción de editarlo o eliminarlo de la lista y de igual forma puedes agregar un nuevo producto.

## FakestoreAPI
```
https://fakestoreapi.com/
```
## Get Started
Primero clonar el repositorio
```
git clone git@github.com:CinKat/store.git
```

Luego, instalar dependencias
```
npm install
# o
yarn intall
```
Agregar las variables de ambientes y enlace de API, puedes usar el archivo env.template
```
REACT_APP_BASE_URI=
```
Y por ultimo ejecutar 
```
npm start
```

## Librerias, componentes o bibliotecas usados

### Emotion

[Emotion](https://emotion.sh/docs/introduction) es una libreria diseñada para escribir estilos CSS en JS, proporciona una composición de estilos predecible.

En este caso use emotion ya que me permite crear CSS usando Javascript, de esta forma evito separar los archivos CSS. Además los estilos que se inyectan se están ocupando de manera automática, quiero decir que los usuarios cargaran menor cantidad de código.
Cuando se define los estilos, realmente estamos creando componentes en React, ahora al estar todo en un solo componente, es más fácil darle mantenimiento.

### React Router

[React Router](https://reactrouter.com/en/dev/start/overview) es una colección de componentes de navegación la cual podemos usar en web o en móvil con React Native. Con esta librería vamos a obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

Use react router porque me permite crear rutas fijas, ya sea mostranto un formulario, lista o tablas de datos, etc. También me permite crear rutas dinámicas, para mostrar datos de un cliente o producto en específico, etc.
