import  fetch from 'node-fetch';

//DeepL API call with parameters
export async function deeplTranslate(str, source, target, deeplAuthKey) {
    //Prepare response var
    let translatedStr;

    //DeepL request parameters
    const baseURL = 'https://api-free.deepl.com/v2/translate?&split_sentences=0&preserve_formatting=1&auth_key=';
    const authKey = deeplAuthKey //DeepL API authentication key
    let target_lang = target;
    let source_lang = source;
    let formality = 'less'; //change to 'more' for formal translation. Formality 'less' only works with some languages (fr,es,it,de,pt-pt,pt-br,ru). Defaults to 'more' for unsupported languages.
    let requestURL;
    
    if (target_lang === 'de' || target_lang === 'fr' || target_lang === 'it' || target_lang === 'es' || target_lang === 'nl' || target_lang === 'pl' || target_lang === 'pt-pt' || target_lang === 'pt-br' || target_lang ===  'ru') { // DeepL "formality" feature only supported in these languages
       requestURL = baseURL + authKey + '&text=' + str + '&target_lang=' + target_lang + '&source_lang=' + source_lang + '&formality=' + formality ;
    } else {
        requestURL = baseURL + authKey + '&text=' + str + '&target_lang=' + target_lang + '&source_lang=' + source_lang;
    }
    
    //Fetch the translation & print to console
    const req = await fetch(requestURL)
    const leJson = await req.json();

    return leJson.translations[0].text;
}