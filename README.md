## Gramoday

This is an API build to aggregate different price reports provided by diffrent user of same commodity from the same market to get a mean price per kilograms

## HOW TO GET STARTED
1) npm install
2) node start or nodemon server.js

## TO TEST
1) npm test

## ADDING A REPORT
# POST REQUEST
1) req on http://localhost:8081/reports/
2) add the report 
![2022-06-07 (3)](https://user-images.githubusercontent.com/56127597/172233066-db027615-be90-4d2f-978e-7a661949f342.png)



## GETTING MARKET-COMMODITY COMBINED REPORT
# GET REQUEST
1) req on http://localhost:8081/reports/?id=629e529857ddef38973461eb 
2) here 'id' is the _id of aggregated report

![2022-06-07 (2)](https://user-images.githubusercontent.com/56127597/172233083-6e3c7f85-27fd-451d-ae48-7e4f46d14efd.png)

## FOR TESTING 
1) Let the server run and along that run npm test
2) There are two tests 
  2.1) one for /reports -> to check Whether the response being send is correct
  2.2) another for /reports/?id -> to check we are getting correct combined report
![2022-06-07 (4)](https://user-images.githubusercontent.com/56127597/172233636-da015a3a-014f-471c-91b7-d252bf52f6ac.png)
