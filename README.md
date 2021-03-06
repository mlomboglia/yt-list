# yt-list ![build-master][build-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[build-url]: https://github.com/mlomboglia/yt-list/workflows/build-master/badge.svg
[npm-image]: https://img.shields.io/npm/v/yt-list.svg
[npm-url]: https://npmjs.org/package/yt-list
[downloads-image]: https://img.shields.io/npm/dm/yt-list.svg
[downloads-url]: https://npmjs.org/package/yt-list

# JavaScript Wrapper for YouTube API on list methods

Simplify your life using this api to search videos, related videos, channel details, comments threads on YouTube.<br/>
Results are on Youtube API response format 

# Install

```
npm install yt-list@latest
```

# Usage
API expects a YOUTUBE_API_KEY variable with the API key<br/>
Create .env file in the root of your project with your YouTube API Key 

```bash
YOUTUBE_API_KEY=your youtube api key
```

```js
const ytlist = require('yt-list')

```

# API
## Search
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

Search Related Videos based on a videoId

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

## Channels
### listChannelDetails(channelId)

List channel details by ChannelId

```javascript
const channel = await ytlist.listChannelDetails(channelId);

// Response object
{
  channelId: String,
  snippet: {
    title: String,
    description: String,
    thumbnails: { medium: [Object] }
  },
  statistics: { subscriberCount: String }
}
```

## Comments
### listCommentThreads (videoId, nextPageToken)

List comment threads of a videoId

NextPageToken to retrieve the next page of results

```javascript
const comments = await ytlist.listCommentThreads(videoId, nextPageToken);

// Response object
{
   pageInfo: { totalResults: Integer, resultsPerPage: Integer },
   items: Array[Object], // YouTube API response format below
   videoId: String,
   nextPageToken: String,
}

// YouTube API response format
{
  "kind": "youtube#commentThread",
  "etag": etag,
  "id": string,
  "snippet": {
    "channelId": string,
    "videoId": string,
    "topLevelComment": comments Resource,
    "canReply": boolean,
    "totalReplyCount": unsigned integer,
    "isPublic": boolean
  },
  "replies": {
    "comments": [
      comments Resource
    ]
  }
}

{
  "kind": "youtube#comment",
  "etag": etag,
  "id": string,
  "snippet": {
    "authorDisplayName": string,
    "authorProfileImageUrl": string,
    "authorChannelUrl": string,
    "authorChannelId": {
      "value": string
    },
    "channelId": string,
    "videoId": string,
    "textDisplay": string,
    "textOriginal": string,
    "parentId": string,
    "canRate": boolean,
    "viewerRating": string,
    "likeCount": unsigned integer,
    "moderationStatus": string,
    "publishedAt": datetime,
    "updatedAt": datetime
  }
}
```

## Videos
### listVideoDetails(videoId)

List video details by VideoId

```javascript
const video = await ytlist.listVideoDetails(viodeId);

// Response object
{
  "videoId": String,
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
    "channelTitle": string,
    "tags": [
      string
    ],
    "categoryId": string,
    "liveBroadcastContent": string,
    "defaultLanguage": string,
    "localized": {
      "title": string,
      "description": string
    },
    "defaultAudioLanguage": string
  },
  "contentDetails": {
    "duration": string,
    "dimension": string,
    "definition": string,
    "caption": string,
    "licensedContent": boolean,
    "regionRestriction": {
      "allowed": [
        string
      ],
      "blocked": [
        string
      ]
  },
  "statistics": {
    "viewCount": unsigned long,
    "likeCount": unsigned long,
    "dislikeCount": unsigned long,
    "favoriteCount": unsigned long,
    "commentCount": unsigned long
  }
}
```

# Tests
Tests are written with [mocha](https://mochajs.org)

```bash
npm test
```
