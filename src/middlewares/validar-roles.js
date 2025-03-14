export const tieneRoleUser = (...roles) => {
    return (req, res, next) => {

        if (!req.usuario) {
            return res.status(500).json({
                success: false,
                msg: 'You want to verify a role without validating the token first!'
            })
        }

        if (!roles.includes(req.usuario.role)) {
            return res.status(401).json({
                success: false,
                msg: `User dont autorizated, has rol ${req.usuario.role}, roles autorizated are ${roles}!`
            })
        }

        next();
    }
}

export const tieneRoleAdmin = (...roles) => {
    return (req, res, next) => {

        if (!req.administrador) {
            return res.status(500).json({
                success: false,
                msg: 'You want to verify a role without validating the token first!'
            })
        }

        if (!roles.includes(req.administrador.role)) {
            return res.status(401).json({
                success: false,
                msg: `Administrador dont autorizated, has rol ${req.administrador.role}, roles autorizated are ${roles}!`
            })
        }

        next();
    }
}