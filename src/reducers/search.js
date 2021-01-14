const response_types = require('../youtube-response-types');

/**
 * Search Reducer
 */
exports.reduceSearchVideosRequest = (response, searchQuery) => {
  let searchResults = response.items.map((item) => ({
    ...item,
    videoId: item.id.videoId,
  }));
  return {
    totalResults: response.pageInfo.totalResults,
    query: searchQuery,
    results: searchResults,
    nextPageToken: response.nextPageToken,
  };
}; 

exports.reduceRelatedVideosRequest = (response) => {
  const relatedVideoIds = response.items.map((video) => video.id.videoId);
  return {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items: relatedVideoIds
  };
};
