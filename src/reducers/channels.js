const response_types = require('../youtube-response-types');

/**
 * Channels Reducer
 */
exports.reduceChannelDetailsRequest = (response, channelId) => {
  return {
    channelId: channelId,
    snippet: response[0].snippet,
    statistics: response[0].statistics
  };
}; 

