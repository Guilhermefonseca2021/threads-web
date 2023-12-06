import { Request, Response } from "express";
import User from "../model/UserModel";
import bcrypt from "bcryptjs";
import { UserProps } from "../types/user";
import auth from "../config/auth";
import jwt from "jsonwebtoken";

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

    if (newUser) {
      res.status(201).json(newUser);
    }

    return res.status(200).json(newUser);
  } catch (err) {
    console.log("Error in signup", err);
    return res.status(500).json(err);
  }
}

async function loginUser(req: Request, res: Response) {
  const { username, password }: UserProps = req.body;

  try {
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password as string
    );

    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .json({ message: "Username ou senha estao invalidos." });
    }

    const { id } = user;

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
      token: jwt.sign({ id }, auth.secret as string, {
        expiresIn: auth.expiresIn,
      }),
    });
  } catch (err: any) {
    console.log("Error in loginuser", err);
    return res.status(500).json({ message: err.message });
  }
}

async function logoutUser(req: Request, res: Response) {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.log("Error in logoutUser", err);
    return res.status(500).json({ message: err });
  }
}

declare global {
  namespace Express {
    interface Request {
      user: UserProps;
    }
  }
}

async function followUnfollowUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const userToModify = await User.findById(id);
    console.log(userToModify)
    const currentUser = await User.findById(req.user._id);
    console.log(currentUser)

    
    if (!userToModify || !currentUser) {
      return res.status(400).json({ message: "User not found" });
    }

    if (id === req.user._id) {
      return res  
        .status(400)
        .json({ message: "You cannot follow/unfollow yourself" });
    }

    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { following: id },
      });
      await User.findByIdAndUpdate(id, {
        $pull: { followers: req.user._id },
      });
    } else { 
      await User.findByIdAndUpdate(req.user._id, {
        $push: { following: id },
      });
      await User.findByIdAndUpdate(id, {
        $push: { followers: req.user._id },
      });
    }

    return res.status(200).json({ message: "Operation successful" });
  } catch (err: any) {
    console.error("Error in followUnfollowUser", err);
    return res.status(500).json({ message: err.message });
  }
}

export { signupUser, loginUser, logoutUser, followUnfollowUser };
