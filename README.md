# yt-list [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/yt-list.svg
[npm-url]: https://npmjs.org/package/yt-list
[downloads-image]: https://img.shields.io/npm/dm/yt-list.svg
[downloads-url]: https://npmjs.org/package/yt-list

# JavaScript Wrapper for YouTube API on list methods

Simplify your life using this api to search, list videos, channels, comments on YouTube.
Results are on Youtube format 

# Install

```
npm install yt-list@latest
```

# Usage
API expects a YOUTUBE_API_KEY variable with the API key

Create .env file in the root of your project with your YouTube API Key 

YOUTUBE_API_KEY=your youtube api key

```js
const ytlist = require('yt-list')

```

# API
### searchVideos(searchQuery, nextPageToken, amount)

Search videos based on a search query. 

NextPageToken to retrieve the next page of results
Amount of results per page

```javascript
const searchResults = await ytlist.searchVideos(searchQuery, nextPageToken, amount);

// Response object
{
   totalResults: Integer,
   query: String,
   items: Array[Object], // YouTube API response format below
   nextPageToken: String,
}

// YouTube API response format
{
  "kind": "youtube#searchResult",
  "etag": etag,
  "id": {
    "kind": string,
    "videoId": string,
    "channelId": string,
    "playlistId": string
  },
  "snippet": {
    "publishedAt": datetime,
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      (key): {
        "url": string,
        "width": unsigned integer,
        "height": unsigned integer
      }
    },
    "videoId": string
  }
}
```

### searchRelatedVideos(videoId, nextPageToken, amount)

Search Related Videos based on a videoId. 

NextPageToken to retrieve the next page of results
Amount of results per page

```javascript
const searchRelatedResults = await ytlist.searchRelatedVideos(videoId, nextPageToken, amount);

// Response object
{
   totalResults: Integer,
   items: Array[String], // Related Video Ids
   nextPageToken: String,
}
```

# Tests
Tests are written with [mocha](https://mochajs.org)

```bash
npm test
```
