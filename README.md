# TypeScript-API
<p>
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" alt="typescript" width="30" height="30"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" alt="express" width="30" height="30"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="30" height="30"/>
<img src="https://img.icons8.com/dusk/64/000000/postman-api.png" alt="postman" width="30" height="30"/>
</p> 

[TypeScript](https://www.typescriptlang.org/) is a superset to JavaScript. That simply means that it extends JavaScript. It builds up on JavaScript. TypeScript gives us, as a developer, a better development experience because it adds certain feature to the code which only exist during development, but which still help us write better code and avoid unwanted errors. And unlike JavaScript, TypeScript does not run in the browser. Instead, TypeScript has to be compiled to JavaScript so that it runs again.

## Folder Structure
```bash
📦NodeTypeScript
 ┣ 📂src
 ┃ ┣ 📂models
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┗ 📜app.ts
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

The entire application is contained within the `src` folder.

`models/todos.ts` is a minimal Rack model defined for API.

`routes/todos.ts` runs a simplistic test and generates the API
documentation below.


## Note
 It is based on TypeScript Make sure you Have installed NodeJS and TS Globally.
 
## Prerequisite
◾ [Nodejs](https://nodejs.org/en/download/)

◾ [TypeScript](https://www.typescriptlang.org/download)

◾ [Postman](https://www.postman.com/)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install -g typescript
tsc --init //config file
npm i body-parser
npm i express
npm i @types/body-parser
npm i @types/express
``` 

## Usage

```
🔹 Clone the Repo
🔹 Install The Above #Installation
🔹 compile the app through ```tsc```
🔹 run the app through npm start
🔹🔹🔹🔹🔹🔹
```

## Run the app
    npm start


## Note
  
  _As soon as you compile the app ```tsc``` and run the app through ```npm start```. You would see a new folder in your root project folder ```dist```. This Folder contains
 the TS complied to JS.
 
 
# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /`

   http://localhost:3000

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    
    {
    "todos": []
    }
    
## Create a new Thing

### Request

`POST /todo`

    http://localhost:3000/todo
    
### Response

    HTTP/1.1 201 OK
    Status: 201 OK
    Connection: close
    Content-Type: application/json
  {
    "message": "added todo",
    "todo": {
        "id": "2020-10-19T06:48:22.441Z",
        "text": "My First Todo!"
        }
  } 
  
## Update a exisisting Thing

### Request

`PUT /todo/:todoId`

   http://localhost:3000/todo/2020-10-19T05:28:16.568Z
    
### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    
    {
        "message": "updated todo",
        "todos": [
            {
                "id": "2020-10-19T07:02:40.886Z",
                "text": "Updated todo!!"
            }
        ]
    }

## Delete a exisisting Thing

### Request

`DELETE /todo/:todoId`

   http://localhost:3000/todo/2020-10-19T05:28:16.568Z
    
### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    
    {
        "message": "Deleted!!",
        "todos": [
            {
                "id": "2020-10-19T07:02:40.886Z",
                "text": "Updated todo!!"
            }
        ]
    }
 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

<p align="center">
<a href='https://ko-fi.com/C0C12CBIQ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=5' border='5' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
