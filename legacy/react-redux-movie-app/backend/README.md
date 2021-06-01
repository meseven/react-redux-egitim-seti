# React & Redux Movie App Backend
That Restful API develop with Node.JS and Express.

## How to install
Clone this folder and install dependencies.

`npm install`

## Enviroments variables
Create a file named ".env" in the root directory and fill its contents as follows.

```ruby
DB_HOST=xxx
DB_NAME=xxx
```

## Run the app
`npm start:dev` // for locally

## Endpoints

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | List all movies. |
| /api/movies | `POST` | {'title':'foo', 'cover':'cover url' } | Create a new movie. |
| /api/movies/:_id | `GET` | Empty | Get a movie. |
| /api/movies/:_id | `PUT` | {'title':'foo', 'cover':'new cover url'} | Update a movie with new info. |
| /api/movies/:_id | `DELETE` | Empty | Delete a movie. |

