function greetingFunction(name, callback) {
    callback(name)
}

function helloCallback(name) {
    console.log("Hello,", name)
}

greetingFunction("Michael", helloCallback)