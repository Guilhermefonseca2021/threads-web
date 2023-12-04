import { ErrorRequestHandler } from "express";

async function signupUser(req: Request, res: Response) {
    try {

    } catch(err: Err) {
        res.status(500).json({ message: err.message})
    }
}

export  {
    signupUser
};