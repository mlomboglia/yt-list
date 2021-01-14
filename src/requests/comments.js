require('dotenv').config();

/**
 * Comment Threads
 */
exports.buildCommentThreadRequest = (videoId, nextPageToken) => {
  return buildApiRequest(
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

