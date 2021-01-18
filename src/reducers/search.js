const response_types = require('../youtube-response-types');

/**
 * Search Reducer
 */
exports.reduceSearchVideosRequest = (response, searchQuery) => {
  let searchItems = response.items.map((item) => ({
    ...item,
    videoId: item.id.videoId,
  }));
  return {
    totalResults: response.pageInfo.totalResults,
    query: searchQuery,
    items: searchItems,
    nextPageToken: response.nextPageToken,
  };
}; 

exports.reduceRelatedVideosRequest = (response, videoId) => {
  const relatedVideoIds = response.items.map((video) => video.id.videoId);
  return {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items: relatedVideoIds,
    videoId: videoId
  };
};
