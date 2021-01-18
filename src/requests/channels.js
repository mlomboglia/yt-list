require('dotenv').config();
const util = require('./util');

/**
 * Channels
 */
exports.buildChannelRequest = (channelId) => {
  return util.buildApiRequest(
    "GET",
    "/youtube/v3/channels",
    {
      part: "snippet,statistics",
      id: channelId,
      key: process.env.YOUTUBE_API_KEY,
      fields:
        "kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)",
    },
    null
  );
};

