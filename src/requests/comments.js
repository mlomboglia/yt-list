require('dotenv').config();
const util = require('./util');

/**
 * Comment Threads
 * https://www.googleapis.com/youtube/v3/comments
 * https://www.googleapis.com/youtube/v3/commentThreads
 */
exports.buildCommentThreadRequest = (videoId, nextPageToken) => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/commentThreads",
    {
      part: "id,replies,snippet",
      pageToken: nextPageToken,
      key: process.env.YOUTUBE_API_KEY,
      videoId,
    },
    null
  );
};

