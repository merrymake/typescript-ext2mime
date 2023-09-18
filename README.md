# ext2mime

A simple library for mapping the most common file extensions to mime types.

## Usage

First install the library

```bash
npm i @mist-cloud-eu/ext2mime
```

### In Typescript

```Typescript
import { allMimeTypesOf, optimisticMimeTypeDefault, optimisticMimeTypeOf } from "@mist-cloud-eu/ext2mime";

// Gets a list of options, which might be empty (not null nor undefined)
console.log(allMimeTypesOf("xml").join(","));
// Gives: application/xml,text/xml
console.log(allMimeTypesOf("sml").join(","));
// Gives: [empty string]

// Gets the single best guess or null
console.log(optimisticMimeTypeOf("xml"));
// Gives: MimeType { mime_MimeType: 'application/xml' }
console.log(optimisticMimeTypeOf("xml")?.toString());
// Gives: application/xml
console.log(optimisticMimeTypeOf("sml"));
// Gives: null
console.log(optimisticMimeTypeOf("sml")?.toString());
// Gives: undefined

// Gets the single best guess or a default
console.log(optimisticMimeTypeDefault("xml", "something"));
// Gives: MimeType { mime_MimeType: 'application/xml' }
console.log(optimisticMimeTypeDefault("sml", "something"));
// Gives: something
console.log(optimisticMimeTypeDefault("sml"));
// Gives: undefined
```
