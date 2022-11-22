const fees = require('../models/tableForFees')

const generatePayment = (request, response) => {
    fees.findOne({ users_id: request.body.user }, (err, result) => {

        if(!result) {            
            fees.create({ users_id: request.body.user, fee_to_pay: request.body.fee_to_pay })
            response.send('No pending payment')
        }else{
            result.fee_to_pay += request.body.fee_to_pay;
            result.save();
            response.send(result)
        }        
    })
}

module.exports = {
    generatePayment
}