import User from '../models/User.js';

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
};