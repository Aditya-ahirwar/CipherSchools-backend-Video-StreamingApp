import mongoose from "mongoose";
import User from "../models/User.js";
import Video from "../models/Video.js";


export const getUser = async (req, res,) => {
    const user = await User.findOne({ id: req.user.id });
    if(!user) res.status(400).send("user not found");
    const { password, ...others } = user._doc;
    res.send(others);
};

export const findUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
      await Video.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{dislikes:id}
      })
      res.status(200).json("The video has been liked.")
    } catch (err) {
      next(err);
    }
  };
  
  export const dislike = async (req, res, next) => {
      const id = req.user.id;
      const videoId = req.params.videoId;
      try {
        await Video.findByIdAndUpdate(videoId,{
          $addToSet:{dislikes:id},
          $pull:{likes:id}
        })
        res.status(200).json("The video has been disliked.")
    } catch (err) {
      next(err);
    }
  };