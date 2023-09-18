"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimisticMimeTypeDefault = exports.optimisticMimeTypeOf = exports.allMimeTypesOf = exports.COMMON_MIME_TYPES = exports.MimeType = void 0;
class MimeType {
    constructor(type_MimeType, tail_MimeType) {
        this.type_MimeType = type_MimeType;
        this.tail_MimeType = tail_MimeType;
    }
    toString() {
        return this.type_MimeType + "/" + this.tail_MimeType;
    }
}
exports.MimeType = MimeType;
exports.COMMON_MIME_TYPES = {
    aac: [new MimeType("audio", "aac")],
    abw: [new MimeType("application", "x-abiword")],
    arc: [new MimeType("application", "x-freearc")],
    avif: [new MimeType("image", "avif")],
    avi: [new MimeType("video", "x-msvideo")],
    azw: [new MimeType("application", "vnd.amazon.ebook")],
    bin: [new MimeType("application", "octet-stream")],
    bmp: [new MimeType("image", "bmp")],
    bz: [new MimeType("application", "x-bzip")],
    bz2: [new MimeType("application", "x-bzip2")],
    cda: [new MimeType("application", "x-cdf")],
    csh: [new MimeType("application", "x-csh")],
    css: [new MimeType("text", "css")],
    csv: [new MimeType("text", "csv")],
    doc: [new MimeType("application", "msword")],
    docx: [
        new MimeType("application", "vnd.openxmlformats-officedocument.wordprocessingml.document"),
    ],
    eot: [new MimeType("application", "vnd.ms-fontobject")],
    epub: [new MimeType("application", "epub+zip")],
    gz: [new MimeType("application", "gzip")],
    gif: [new MimeType("image", "gif")],
    htm: [new MimeType("text", "html")],
    html: [new MimeType("text", "html")],
    ico: [new MimeType("image", "vnd.microsoft.icon")],
    ics: [new MimeType("text", "calendar")],
    jar: [new MimeType("application", "java-archive")],
    jpeg: [new MimeType("image", "jpeg")],
    jpg: [new MimeType("image", "jpeg")],
    js: [new MimeType("text", "javascript")],
    json: [new MimeType("application", "json")],
    jsonld: [new MimeType("application", "ld+json")],
    mid: [new MimeType("audio", "midi"), new MimeType("audio", "x-midi")],
    midi: [new MimeType("audio", "midi"), new MimeType("audio", "x-midi")],
    mjs: [new MimeType("text", "javascript")],
    mp3: [new MimeType("audio", "mpeg")],
    mp4: [new MimeType("video", "mp4")],
    mpeg: [new MimeType("video", "mpeg")],
    mpkg: [new MimeType("application", "vnd.apple.installer+xml")],
    odp: [new MimeType("application", "vnd.oasis.opendocument.presentation")],
    ods: [new MimeType("application", "vnd.oasis.opendocument.spreadsheet")],
    odt: [new MimeType("application", "vnd.oasis.opendocument.text")],
    oga: [new MimeType("audio", "ogg")],
    ogv: [new MimeType("video", "ogg")],
    ogx: [new MimeType("application", "ogg")],
    opus: [new MimeType("audio", "opus")],
    otf: [new MimeType("font", "otf")],
    png: [new MimeType("image", "png")],
    pdf: [new MimeType("application", "pdf")],
    php: [new MimeType("application", "x-httpd-php")],
    ppt: [new MimeType("application", "vnd.ms-powerpoint")],
    pptx: [
        new MimeType("application", "vnd.openxmlformats-officedocument.presentationml.presentation"),
    ],
    rar: [new MimeType("application", "vnd.rar")],
    rtf: [new MimeType("application", "rtf")],
    sh: [new MimeType("application", "x-sh")],
    svg: [new MimeType("image", "svg+xml")],
    tar: [new MimeType("application", "x-tar")],
    tif: [new MimeType("image", "tiff")],
    tiff: [new MimeType("image", "tiff")],
    ts: [new MimeType("video", "mp2t")],
    ttf: [new MimeType("font", "ttf")],
    txt: [new MimeType("text", "plain")],
    vsd: [new MimeType("application", "vnd.visio")],
    wav: [new MimeType("audio", "wav")],
    weba: [new MimeType("audio", "webm")],
    webm: [new MimeType("video", "webm")],
    webp: [new MimeType("image", "webp")],
    woff: [new MimeType("font", "woff")],
    woff2: [new MimeType("font", "woff2")],
    xhtml: [new MimeType("application", "xhtml+xml")],
    xls: [new MimeType("application", "vnd.ms-excel")],
    xlsx: [
        new MimeType("application", "vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
    ],
    xml: [new MimeType("application", "xml"), new MimeType("text", "xml")],
    xul: [new MimeType("application", "vnd.mozilla.xul+xml")],
    zip: [new MimeType("application", "zip")],
    "3gp": [new MimeType("video", "3gpp"), new MimeType("audio", "3gpp")],
    "3g2": [new MimeType("video", "3gpp2"), new MimeType("audio", "3gpp2")],
    "7z": [new MimeType("application", "x-7z-compressed")],
};
function allMimeTypesOf(ext) {
    let res = exports.COMMON_MIME_TYPES[ext.toLowerCase()];
    return res === undefined ? [] : res;
}
exports.allMimeTypesOf = allMimeTypesOf;
function optimisticMimeTypeOf(ext) {
    let res = allMimeTypesOf(ext);
    return res.length === 0 ? null : res[0];
}
exports.optimisticMimeTypeOf = optimisticMimeTypeOf;
function optimisticMimeTypeDefault(ext, def) {
    let res = allMimeTypesOf(ext);
    return res.length === 0 ? def : res[0];
}
exports.optimisticMimeTypeDefault = optimisticMimeTypeDefault;
