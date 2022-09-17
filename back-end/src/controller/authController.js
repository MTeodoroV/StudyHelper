import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AuthModel  from '../model/authModel';

class AuthController {
	static Login(req, res) {
		AuthModel.findEmail(req.body.email).then((response) => {
			if (bcrypt.compareSync(req.body.password, response.password)) {
				const token = JWT.sign({
					id: response.id,
					access: response.level
				}, process.env.JWT_KEY, { expiresIn: 60 * 10 });

				res.status(200).send({ auth: true, token });
			} else {
				res.status(401).send({ auth: false, token: null });
			}
		}).catch((error) => {
			res.status(500).send({ message: 'Erro ao tentar logar', error });
		});
	}
}

export default AuthController;