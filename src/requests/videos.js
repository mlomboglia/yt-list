require('dotenv').config();
const util = require('./util');

/**
 * Video Categories
 */
exports.buildVideoCategoriesRequest = () => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/videoCategories",
    {
      part: "snippet",
      regionCode: "US",
      key: process.env.YOUTUBE_API_KEY,
    },
    null
  );
};

/**
 * Most Popular Videos
 * https://www.googleapis.com/youtube/v3/videos
 */
exports.buildMostPopularVideosRequest = (
  amount = 12,
  loadDescription = false,
  nextPageToken,
  videoCategoryId = null
) => {
  let fields =
    "nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)";
  if (loadDescription) {
    fields += ",items/snippet/description";
  }
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/videos",
    {
      part: "snippet,statistics,contentDetails",
      chart: "mostPopular",
      maxResults: amount,
      regionCode: "US",
      pageToken: nextPageToken,
      fields,
      videoCategoryId,
      key: process.env.YOUTUBE_API_KEY,
    },
    null
  );
};

/**
 * Videos
 */
exports.buildVideoDetailsRequest = (videoId) => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/videos",
    {
      part: "snippet,statistics,contentDetails",
      id: videoId,
      key: process.env.YOUTUBE_API_KEY,
      fields:
        "kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)",
    },
    null
  );
};

 