import News from "../models/news.js";

export const getNewsPosts = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
    console.log("News was found :)");
  } catch (err) {
    res.status(404).json({
      message: `There is an error in the retrival of news posts, consult the database for further diagnosis ${err.message}`,
    });
  }
};
