const axios = require("./youtube-axios");
const ytRequests = require("./requests/search");
const ytReducers = require("./reducers/search");

exports.searchVideos = async (searchQuery, nextPageToken, amount) => {
  const config = ytRequests.buildSearchRequest(
    searchQuery,
    nextPageToken,
    amount
  );
  return axios
    .request(config)
    .then((response) => {
      const results = ytReducers.reduceSearchVideosRequest(
        response.data,
        searchQuery
      );
      return results;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

exports.searchRelatedVideos = async (videoId, nextPageToken, amountRelatedVideos) => {
  const config = ytRequests.buildRelatedVideosRequest(
    videoId, 
    nextPageToken,
    amountRelatedVideos
  );
  return axios
    .request(config)
    .then((response) => {
      const results = ytReducers.reduceRelatedVideosRequest(
        response.data
      );
      return results;
    })
    .catch((err) => {
      console.log(err); 
      return err;
    });
};
