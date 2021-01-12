const ytlist = require('../src/index');
const assert = require('assert').strict;

describe('Search', () => {
    it("Basic test", async () => {
        const search = await ytlist.searchForVideos("Whitesnake", null, 10);
        assert.equal(search.results[0].id.videoId, "WyF8RHM1OCg");
    });
  });
