import { askGroq } from "../utils/openai.js";
import Thread from "../models/Thread.js";

export const aiChat = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const answer = await askGroq(prompt);

    res.json({ answer });
  } catch (error) {
    res.status(500).json({
      message: "AI request failed",
      error: error.response?.data || error.message,
    });
  }
};

export const getAllThread = async (req, res) => {
  try {
    const threads = await Thread.find({}).sort({ updatedAt: -1 });
    // here .short updated at -1 shows recent update on top
    res.json(threads);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "unable to fetch ",
    });
  }
};

export const getThread = async (req, res) => {
  const { threadId } = req.params;

  try {
    const thread = await Thread.findOne({ threadId });

    if (!thread) {
      res.status(400).json({
        error: "thread not found",
      });
    }

    res.json(thread.messages);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "unable to fetch chat",
    });
  }
};

export const deleteThread = async (req, res) => {
  const { threadId } = req.params;

  try {
    const deleteThread = await Thread.findOneAndDelete({ threadId });

    if (!deleteThread) {
      res.status(400).json({
        error: "thread not found",
      });
    }
    res.status(200).json({
      success: "chat deleted succefully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "unable to delete chat",
    });
  }
};

export const chat = async (req, res) => {
  const { threadId, message } = req.body;

  if (!threadId || !message) {
    return res.status(400).json({
      message: "missing require field",
    });
  }

  try {
    let thread = await Thread.findOne({ threadId });

    if (!thread) {
      //create new thread in db
      thread = new Thread({
        threadId,
        title: message,
        messages: [{ role: "user", content: message }],
      });
    } else {
      thread.messages.push({ role: "user", content: message });
    }

    const assistantReply = await askGroq(message);

    thread.messages.push({ role: "assistant", content: assistantReply });
    thread.updatedAt = new Date();

    await thread.save();

    res.json({ reply: assistantReply });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
