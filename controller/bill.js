const Bill = require("../models/Bill");


const getBills = async (req, res) => {
    try {
        const bill = await Bill.find();
        return res.status(200).json({
            message: "Success",
            data: bill
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const getBill = async (req, res) => {
    try {
        const { id } = req.params;
        const bill = await Bill.findById({ _id: id });
        return res.status(200).json({
            message: "Success",
            bill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const newBill = async (req, res) => {
    try {
        const bill = new Bill(req.body);
        await bill.save();
        return res.status(200).json({
            message: "Success",
            bill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const updateBill = async (req, res) => {
    try {
        const { id } = req.params;
        const bill = req.body;
        const result = await Bill.findByIdAndUpdate(id, bill);
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const deleteBill = async (req, res) => {
    try {   
        const { id } = req.params;
        const result = await Bill.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

module.exports = {
    getBills,
    getBill,
    newBill,
    updateBill,
    deleteBill
}