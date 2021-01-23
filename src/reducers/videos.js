const response_types = require('../youtube-response-types');

/**
 * Channels Reducer
 */
exports.reduceVideoDetailsRequest = (response, videoId) => {
  return {
    videoId: videoId,
    snippet: response[0].snippet,
    statistics: response[0].statistics,
    contentDetails: response[0].contentDetails
  };
}; 

