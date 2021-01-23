const axios = require("./youtube-axios");

const ytSearchRequests = require("./requests/search");
const ytSearchReducers = require("./reducers/search");

const ytChannelsRequests = require("./requests/channels");
const ytChannelsReducers = require("./reducers/channels");

const ytCommentsRequests = require("./requests/comments");
const ytCommentsReducers = require("./reducers/comments");

const ytVideosRequests = require("./requests/videos");
const ytVideosReducers = require("./reducers/videos");

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

exports.listChannelDetails = async (channelId) => {
  const config = ytChannelsRequests.buildChannelDetailsRequest(
    channelId
  );
  return axios
    .request(config)
    .then((response) => {
      const result = ytChannelsReducers.reduceChannelDetailsRequest(
        response.data.items, channelId
      );
      return result;
    })
    .catch((err) => {
      console.log(err); 
      return err;
    });
};

exports.listCommentThreads = async (videoId, nextPageToken) => {
  const config = ytCommentsRequests.buildCommentThreadRequest(
    videoId, nextPageToken
  );
  return axios
    .request(config)
    .then((response) => {
      const result = ytCommentsReducers.reduceCommentThreadsRequest(
        response.data, videoId
      );
      return result;
    })
    .catch((err) => {
      console.log(err); 
      return err;
    });
};

exports.listVideoDetails = async (videoId) => {
  const config = ytVideosRequests.buildVideoDetailsRequest(
    videoId
  );
  return axios
    .request(config)
    .then((response) => {
      const result = ytVideosReducers.reduceVideoDetailsRequest(
        response.data.items, videoId
      );
      return result;
    })
    .catch((err) => {
      console.log(err); 
      return err;
    });
};
