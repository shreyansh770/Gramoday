const request = require('supertest')('http://localhost:8081');
const expect = require('chai').expect;


describe("POST /reports", function () {
    it("stores individual or aggregated report", async function () {
        const response = await request.post('/reports').send({
            "report": {
                "userID": "user-1",
                "marketID": "market-1",
                "marketName": "Vashi Navi Mumbai",
                "cmdtyID": "cmdty-1",
                "marketType": "Mandi",
                "cmdtyName": "Potato",
                "priceUnit": "Pack",
                "convFctr": 50,
                "price": 700
            }
        });

        expect(response.status).to.eql(200); // checks if request has executed succesfully

    });
});



describe("GET /reports?id", function () {
    it("checks for reports with certain id ", async function () {
        const id = "629e0bd0a30459f919b086e2"
        const response = await request.get('/reports?id=' + id);
        expect(response.status).to.eql(200);

    });
});