const axios = require("./youtube-axios");
const youtubeAPI = require("./youtube-api");

exports.searchForVideos = async (searchQuery, nextPageToken, amount) => {
  const config = youtubeAPI.buildSearchRequest(
    searchQuery,
    nextPageToken,
    amount
  );
  return axios
    .request(config)
    .then((response) => {
      const results = youtubeAPI.reduceSearchForVideos(
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
