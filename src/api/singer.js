var arr = []
var name = []
this.$http.get("/api/top/artists").then(res => {
    arr.push(res.data.artists);
    for (const i of list[0]) {
        name.push(i.name);
    }
    console.log(name)
})