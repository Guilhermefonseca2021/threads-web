import { Request, Response } from "express";
import User from "../model/UserModel";
import bcrypt from "bcryptjs";
import { UserProps } from "../types/user";

async function signupUser(req: Request, res: Response) {
  const { name, email, username, password }: UserProps = req.body;
  try {
    const user = await User.findOne({ email });
    
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    if (!email || !password) {
      return res.status(400).json({ massage: "Fill up all the form field" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashPassword,
    });

    if(newUser) { 
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username
      })
    }

    return res.status(200).json(newUser);
  } catch (err) {
    console.log('Error in signup', err)
    return res.status(500).json(err);
  }
}

export {
  signupUser
}
