# YAML DeepL translator

This Node.js module takes a YAML file as an input, in any source language, and returns a translated version of all its strings in any target language, using the DeepL API.

# How to run

## 1. Specify parameters

To make it work, you first need to specify various parameters in translate-yaml.js :

* **source_locale:** the locale of the source YAML file.
* **target_locale:** the target locale for the translation.
* **source_file:** the filepath to the source YAML file.
* **deeplAuthKey:** your DeepL API authentication key. You can create your DeepL account and get your authentication key at: https://www.deepl.com/pro-api?cta=header-pro/

## 2. Run with node

Make sure you have node installed on your machine.

Then, open a CLI to the folder, and simply run `node translate-yaml.js`.

The translated YAML file (data-output.{{TARGET_LOCALE}}.yaml) will be ouput to the root of the folder.

# Current limitations
1. Only works with parameters set in translate-yaml.js, not with arguments taken from the CLI. To be updated later.
2. Only works one call at a time. To be updated later to allow for use with an array of target locales.
3. Does not support the use of glossaries. I do not plan on adding this feature – but feel free to fork this repo and add it yourself!

Feel free to fork, distribute, modify in whatever way – credits appreciated but not required :)

PaulLVG