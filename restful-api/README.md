# Zettabyte RESTfull API
RESTfull API using Express and Apollo GraphQL

## Project Specifications

Create an Express.js server for a blog application that should have following detail:
1. Articles
2. Comments
Connect the express app to the mLab server to store data (Link : https://mlab.com/) and
create the following routes:
1. Api to do Create, Update Delete on article
2. Api to do Read on article with sorting,

## Usage

- Before running the application, make sure you have installed pm2
- If you haven't installed it, follow the step: 
``` 
1. npm install pm2 -g

2.  untuk menjalankan pm2, ketik di root folder 
pm2 start

3. untuk melihat log yang terjadi ketik di root folder 
pm2 log

4. untuk mematikan pm2, ketika di root folder 
pm2 stop ecosystem.config.js
```

### Service Graphql run on : http://localhost:6000

### Service Express Articles run on : http://localhost:4000

### Service Express Comments run on : http://localhost:5000
