const response_types = require('../youtube-response-types');

/**
 * Comments Reducer
 */
exports.reduceCommentsRequest = (response, videoId) => {
  return {
    pageInfo: response.pageInfo,
    items: response.items,
    videoId: videoId,
    nextPageToken: response.nextPageToken,
  };
}; 

