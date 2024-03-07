const userModel = require('../model/userModel')

const controllerSignup = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        if (!name || !email || !subject || !message) {
            return res.status(200).json({
                success: false,
                message: 'All fileds is required'
            })
        }

        const user = await userModel.create({ name, email, subject, message })
        return res.status(200).json({
            success: true,
            message: 'user is successful'
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: 'Fail to sign up user'
        })
    }
}

module.exports = controllerSignup