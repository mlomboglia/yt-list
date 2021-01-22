require('dotenv').config();
const util = require('./util');

/**
 * Comment Threads
 */
exports.buildCommentThreadRequest = (videoId, nextPageToken) => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/commentThreads",
    {
      part: "id,snippet",
      pageToken: nextPageToken,
      key: process.env.YOUTUBE_API_KEY,
      videoId,
    },
    null
  );
};

