
let _songsToAsk = []
let _askedSongs = []

/*
function () {
    console.log("click", i)
}
() => {
    console.log("click", i)
}
function b() {
    console.log("click", i)
}
*/

function show() {
    let songsOL = document.getElementById("songs")
    songsOL.innerHTML = ""

    for (let i = 0; i < _songsToAsk.length; i++) {
        const song = _songsToAsk[i];
        let li = document.createElement("li")

        let btn = document.createElement("button")
        btn.innerText = "Asked"
        btn.onclick = () => {
            fetch("https://192.168.1.13:3333/ask?i=" + i)
                .then(() => {
                    fetch("https://192.168.1.13:3333")
                        .then((response) => response.json())
                        .then((json) => {
                            _songsToAsk = json.Songs
                            _askedSongs = json.Asked
                            show()
                        });
                })

        }

        li.innerText = song
        li.appendChild(btn)

        songsOL.appendChild(li)
    }

    let asked = document.getElementById("asked")
    asked.innerHTML = ""
    for (let i = 0; i < _askedSongs.length; i++) {
        const song = _askedSongs[i];

        let li = document.createElement("li")
        li.innerText = song

        asked.appendChild(li)
    }
}

function onLoad() {
    fetch("https://192.168.1.13:3333")
        .then((response) => response.json())
        .then((json) => {
            _songsToAsk = json.Songs
            _askedSongs = json.Asked
            show()
        });

    setInterval(() => {
        fetch("https://192.168.1.13:3333")
            .then((response) => response.json())
            .then((json) => {
                _songsToAsk = json.Songs
                _askedSongs = json.Asked
                show()
            });
    }, 500)
}

