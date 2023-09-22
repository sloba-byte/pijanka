0) How to persist state accross multiple browser views?

- In chess we had global variable for "selected" "matrix" "turn" etc.
This worked because it was only part of 1 browser view. However, how to handle multiple browser views that need to share some informations? 
In example of chess, how to play with two people in different browsers?

Or here, how to know which songs are left to be played?


```js
//fetching songs from server
 fetch("http://192.168.1.13:3333")
        .then((response) => response.json())
        .then((json) => {
            _songsToAsk = json.Songs
            _askedSongs = json.Asked
            show()
        });

```

```js
//reset
fetch("http://192.168.1.13:3333/reset")
```


```js
//song asked
  fetch("http://192.168.1.13:3333/ask?i=" + i)
  //where i is index in _songsToAsk array
```

```js
//create li (list item) for ol(order list) to be appendChild latter to ol
  let li = document.createElement("li")
```