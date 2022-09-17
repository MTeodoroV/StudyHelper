import JWT from 'jsonwebtoken';

export default function AccessToken(role) {
    return function(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(403).send({ Auth: false });
        } else {
            JWT.verify(token, process.env.JWT_KEY, function (err, decoded) {
                if (err) {
                    return res.status(500).send({ auth: false });
                } else {
                    req.user = decoded.id;
                    if (decoded.access >= role) {
                        next();
                    } else {
                        return res.status(401).send({ message: 'Não autorizado' });
                    }
                
                }
            });
        }
    }
}