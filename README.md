A simple ffmpeg wrapper to easily generate web friendly mp4,webm and ogv versions of a file

### For good measure, first run:

    brew install ffmpeg --with-vpx --with-vorbis --with-libvorbis --with-vpx --with-vorbis --with-theora --with-libogg --with-libvorbis --with-gpl --with-version3 --with-nonfree --with-postproc --with-libaacplus --with-libass --with-libcelt --with-libfaac --with-libfdk-aac --with-libfreetype --with-libmp3lame --with-libopencore-amrnb --with-libopencore-amrwb --with-libopenjpeg --with-openssl --with-libopus --with-libschroedinger --with-libspeex --with-libtheora --with-libvo-aacenc --with-libvorbis --with-libvpx --with-libx264 --with-libxvid

### To install the tool

`npm install -g https://github.com/charlieclark/webvideo.git`

### To use

`webvideo --file path/to/video.mov`

### optional options

`--mute true/false ( default false )`

`--size 500 ( default same as input )`

`--dest "save/videos/here/" ( default same directory as input )`

`--formats "mp4,webm" ( default mp4,webm,ogv )`

`--name "newName" (default same as input )`