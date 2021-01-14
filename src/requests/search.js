require('dotenv').config();
const util = require('./util');

/**
 * Search
 * https://developers.google.com/youtube/v3/docs/search
 */
exports.buildSearchRequest = (query, nextPageToken, amount = 10) => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/search",
    {
      part: "id,snippet",
      q: query,
      type: "video",
      pageToken: nextPageToken,
      maxResults: amount,
      key: process.env.YOUTUBE_API_KEY,
    },
    null
  );
};

/**
 * Search Related Videos
 */
exports.buildRelatedVideosRequest = (videoId, nextPageToken, amountRelatedVideos = 12) => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/search",
    {
      part: "snippet",
      type: "video",
      pageToken: nextPageToken,
      maxResults: amountRelatedVideos,
      relatedToVideoId: videoId,
      key: process.env.YOUTUBE_API_KEY,
    },
    null
  );
};

