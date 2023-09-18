"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// Gets a list of options, which might be empty (not null nor undefined)
console.log((0, _1.allMimeTypesOf)("xml").join(","));
// Gives: application/xml,text/xml
console.log((0, _1.allMimeTypesOf)("sml").join(","));
// Gives: [empty string]
// Gets the single best guess or null
console.log((0, _1.optimisticMimeTypeOf)("xml"));
// Gives: MimeType { mime_MimeType: 'application/xml' }
console.log((0, _1.optimisticMimeTypeOf)("xml")?.toString());
// Gives: application/xml
console.log((0, _1.optimisticMimeTypeOf)("sml"));
// Gives: null
console.log((0, _1.optimisticMimeTypeOf)("sml")?.toString());
// Gives: undefined
// Gets the single best guess or a default
console.log((0, _1.optimisticMimeTypeDefault)("xml", "something"));
// Gives: MimeType { mime_MimeType: 'application/xml' }
console.log((0, _1.optimisticMimeTypeDefault)("sml", "something"));
// Gives: something
console.log((0, _1.optimisticMimeTypeDefault)("sml"));
// Gives: undefined
