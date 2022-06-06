const express = require('express');
const indvModel = require('../Models/indvModel');
const {
    conversion
} = require('../Utils/conversion');

const reportRouter = express.Router();

reportRouter.route('/').post(comb);
reportRouter.route('/').get(getReport);


// post reports/
async function comb(req, res) {
    try {

        let subReport = req.body;

        let report = await indvModel.find({
            marketID: subReport.marketID,
            cmdtyID: subReport.cmdtyID
        })

        if (report.length == 0) {

            let priceKg = conversion(subReport.convFctr, subReport.price);

            if (priceKg !== -1) {

                let combinedReport = {
                    cmdtyName: subReport.cmdtyName,
                    cmdtyID: subReport.cmdtyID,
                    marketID: subReport.marketID,
                    marketName: subReport.marketName,
                    users: [subReport.userID],
                    price: priceKg
                }


                let newReport = await indvModel.create(combinedReport)

                let rid = newReport._id;

                res.status(200).json({
                    status: "success",
                    reportID: `${rid}`
                })
            } else {
                res.json({
                    status: "error",

                })
            }
        } else {



            let priceKg = conversion(subReport.convFctr, subReport.price);

            if (priceKg !== -1) {

                // update users array and price

                let usersTillNow = report[0].users.length;

                let newUserArray = [...report[0].users]
                newUserArray.push(subReport.userID)

                let newMeanPrice = (report[0].price + priceKg) / (usersTillNow + 1);


                let updatedReport = await indvModel.findOneAndUpdate({
                    marketId: subReport.marketId,
                    cmdtyID: subReport.cmdtyID
                }, {
                    $set: {

                        users: newUserArray,
                        price: newMeanPrice

                    }
                }, {
                    new: true
                })

                let rid = updatedReport._id;

                res.json({
                    status: "success",
                    reportID: `${rid}`
                })

            }

        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
}





// get reports/?id
async function getReport(req, res) {
    try {


        let id = req.query.id

        let combinedReport = await indvModel.findOne({
            _id: id
        })

        res.status(200).json({
            combinedReport
        })

    } catch (error) {

    }
}


module.exports = reportRouter;