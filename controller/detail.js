

const Detail = require("../models/Detail")


const getDetails = (req, res) => {
    res.send({ details: "Details" });
};


const getDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await Detail.findById({ _id: id });
        return res.status(200).json({
            message: "Success",
            detail
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const newDetail = async (req, res) => {
    try {
        const detail = new Detail(req.body);
        await detail.save();
        return res.status(200).json({
            message: "Success",
            detail
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}


const deleteDetail = async (req, res) => {
    try {   
        const { id } = req.params;
        const result = await Detail.findByIdAndDelete(id);
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
    getDetails,
    getDetail,
    newDetail,
    deleteDetail
}







