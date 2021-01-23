const ytlist = require("../src");
const assert = require("assert").strict;

describe("Search", () => {
  it("Search Videos", async () => {
    const search = await ytlist.searchVideos("Whitesnake", null, 10);
    assert.equal(search.items[0].id.videoId, "WyF8RHM1OCg");
  });
  it("Search Related Videos", async () => {
    const search = await ytlist.searchRelatedVideos("WyF8RHM1OCg", null, 10);
    assert.equal(search.items[0], "3E6WRnqftj8");
  });
});

describe("Channel", () => {
  it("List Channel", async () => {
    const channel = await ytlist.listChannel("UC_x5XG1OV2P6uZZ5FSM9Ttw");
    assert.equal(channel.snippet.title, "Google Developers");
  });
});

describe("Comments", () => {
  it("List CommentThreads", async () => {
    const comments = await ytlist.listCommentThreads("WyF8RHM1OCg", null);
    assert.equal(comments.pageInfo.totalResults, 20);
  });
});
