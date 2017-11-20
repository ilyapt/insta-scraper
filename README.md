# insta-scraper
> Node module for getting basic data from Instagram without login or need for tokens

## Installation
#### Node
```
$ npm install insta-scraper
```

#### Browser
```
<script src="https://wzrd.in/standalone/insta-scraper@latest"></script>
```
_[Using Browserify CDN](https://wzrd.in)_

## Usage
#### Node
```
var instaScraper = require('insta-scraper');
```

#### Browser
Once included on the page, methods can be accessed directly from `instaScraper` window object

## Methods
```
instaScraper.getAccountInfo(username, function(error,response_json){ })
```

```
instaScraper.getAccountMedia(username, [max_id], function(error,response_json){ })
```

```
instaScraper.getMediaByTag(tag, [max_id], function(error,esponse_json){ })
```

```
instaScraper.getMediaByLocationId(locationId, [max_id], function(error,response_json){ })
```

```
instaScraper.getMediaByCode(media_code, function(error,response_json){ })
```

```
instaScraper.generalSearch(search_keyword, function(error,response_json){ })
```

```
instaScraper.generalQuery(instagram_query, function(error,response_json){ })
```

## Known issue
Please pass **max_id** param to methods as String, with quotes, because Javascript don't work with large int
