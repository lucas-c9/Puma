const authService = require('../service/auth.service.js');
const authRepository = require('../repository/auth.repository.js');


exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const token = await authService.authenticate(email, password);
        if (token) {
            res.status(200).json({ token })
        } else {
            res.status(401).json({ error: 'Error de Autenticación' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
}


exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.register(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Registration error' });
    }
};
exports.getAllUsers = async (req, res) => {
    try {
        const Users = await authRepository.getAllUsers();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto en get All usuarios:' + error })
    }
}