import News from "../models/news";

export const getNewsPosts = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
