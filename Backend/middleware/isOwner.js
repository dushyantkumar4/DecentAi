import { Thread } from "../models/Thread.js";

export const isOwner = async (req, res, next) => {
  try {
    const thread = await Thread.findBYId(req.params.threadId);
    if (!thread) {
      return res.status(404).json({ message: "thread not found" });
    }
    // this will only run when role != admin , user.id !=req.id
    if (thread.createdBy.toString() !== req.user.id && user.role !== "admin") {
      return res.status(403).json({ message: "you are not allow to do this " });
    }

    req.thread = thread;

    next();
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
