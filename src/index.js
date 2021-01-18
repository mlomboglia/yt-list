const axios = require("./youtube-axios");

const ytSearchRequests = require("./requests/search");
const ytSearchReducers = require("./reducers/search");

const ytChannelRequests = require("./requests/channels");
const ytChannelReducers = require("./reducers/channels");

exports.searchVideos = async (searchQuery, nextPageToken, amount) => {
  const config = ytSearchRequests.buildSearchRequest(
    searchQuery,
    nextPageToken,
    amount
  );
  return axios
    .request(config)
    .then((response) => {
      const results = ytSearchReducers.reduceSearchVideosRequest(
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
  const config = ytSearchRequests.buildRelatedVideosRequest(
    videoId, 
    nextPageToken,
    amountRelatedVideos
  );
  return axios
    .request(config)
    .then((response) => {
      const results = ytSearchReducers.reduceRelatedVideosRequest(
        response.data, videoId
      );
      return results;
    })
    .catch((err) => {
      console.log(err); 
      return err;
    });
};

exports.listChannel = async (channelId) => {
  const config = ytChannelRequests.buildChannelRequest(
    channelId
  );
  return axios
    .request(config)
    .then((response) => {
      const result = ytChannelReducers.reduceChannelRequest(
        response.data.items, channelId
      );
      return result;
    })
    .catch((err) => {
      console.log(err); 
      return err;
    });
};
