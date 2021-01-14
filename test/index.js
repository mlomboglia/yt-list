const ytlist = require('../src');
const assert = require('assert').strict;

describe('Search', () => {
    it("Search Videos", async () => {
        const search = await ytlist.searchVideos("Whitesnake", null, 10);
        assert.equal(search.results[0].id.videoId, "WyF8RHM1OCg");
    });
    it("Search Related Videos", async () => {
        const search = await ytlist.searchRelatedVideos("WyF8RHM1OCg", null, 10);
        assert.equal(search.items[0], "3E6WRnqftj8"); 
    });
  }); 
