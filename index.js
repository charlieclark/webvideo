#!/usr/bin/env node

var argv = require('yargs').argv;
var execSync = require('child_process').execSync;
var path = require('path');
var fs = require('fs');
var format = require("string-template");

var file = argv.file;
var config = {};

var defaults = {
    mute: false,
    size: null,
    dest: path.dirname(file),
    formats: "mp4,webm,ogv",
    name: path.basename(file, path.extname(file))
};

if (!file) {
    console.error("please provide a file");
    return;
}

for (key in defaults) {
    config[key] = argv[key] || defaults[key]
};

for (extension of config.formats.split(",")) {
    console.log("\n", "NOW CONVERTING : ", extension, "\n")
    processVideo(extension);
};

function processVideo(extension) {

    var command;
    var dest = config.dest + "/" + config.name + "." + extension;
    var size = config.size ? ('-vf scale=' + config.size + ":-1") : "";
    var mute = config.mute ? '-an' : '';

    var options = {
        inputFile: file,
        dest: dest,
        crf: config.crf,
        size: size,
        mute: mute
    }

    switch (extension) {
        case "mp4":
            command = format('ffmpeg -y -i {inputFile} {mute} -vcodec libx264 {size} -preset slow -f mp4 -crf 20 {dest}', options);
            break;
        case "webm":
            command = format('ffmpeg -y -i {inputFile} -c:v libvpx {size} -crf 5 -b:v 1M {mute} -c:a libvorbis {dest}', options)
            break;
        case "ogv":
            command = format('ffmpeg -y -i {inputFile} -c:v libtheora {size} -c:a libvorbis {mute} -q:v 6 -q:a 5 {dest}', options)
            break
    }

    if(command){
        execSync(command);
    }
}