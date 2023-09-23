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

//how this works:
//1) fetch is executed async (async means similar as setInterval, it's not going to execute function right away but sometimes in future)
//2) When fetch finish, it's going to call function from .then
//3) fetch returns response, which contains reposne.json()
//4) next .then is going to use this json (json contains Songs and Asked. It's basiclly a Class which has arrays .Songs and .Asked

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
