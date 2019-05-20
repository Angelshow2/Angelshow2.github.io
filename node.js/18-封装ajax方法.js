function get(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
        callback(xhr.responseText)
    }
    xhr.open("get", url, true)
    xhr.send()
}

//调用
get("data.json", function () {
    console.log(data)
})