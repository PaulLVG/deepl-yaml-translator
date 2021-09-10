import { deeplTranslate } from './deeplTranslate.js';

// read.js
import fs from 'fs';
import yaml from 'js-yaml';

//Parameters for the translation job
let source_locale = "en"; //Set source locale
let target_locale = "ru"; //Set translation target
let source_file = './source.yaml'; //Set the filepath to the original yaml document.
let deeplAuthKey = '' // Indicate your DeepL API authentication key here.

async function translateIterate (data, source, target, deeplAuthKey) {
    for (const key in data) {
        if (typeof data[key] === 'string') {
            let translation = await deeplTranslate(data[key], source, target);
            data[key] = translation;
        } else if (typeof data[key] === 'object') {
            await translateIterate(data[key], source, target);
        }
    }
    fs.writeFileSync(`common.${target}.yaml`, yaml.dump(data), 'utf8')
}

/*Complete array for locales: ['fr', 'es', 'it', 'de', 'pt-pt', 'nl', 'ja', 'ru', 'zh'] */

/*let target_locales = ['pt-pt', 'nl', 'ja', 'ru', 'zh'];*/ //Doesn't work, don't know why… To investigate later (goal: generate all translated files at once.)

try {
    let fileContents = fs.readFileSync(source_file, 'utf8');
    let obj = yaml.load(fileContents);
    translateIterate(obj, source_locale, target_locale);
} catch (e) {
    console.log('Error: something went wrong…');
}