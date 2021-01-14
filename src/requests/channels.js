require('dotenv').config();

/**
 * Channels
 */
exports.buildChannelRequest = (channelId) => {
  return buildApiRequest(
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

