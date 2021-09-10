import  fetch from 'node-fetch';

//DeepL API call with parameters
export async function deeplTranslate(str, source, target) {
    //Prepare response var
    let translatedStr;

    //DeepL request parameters
    const baseURL = 'https://api-free.deepl.com/v2/translate?&split_sentences=0&preserve_formatting=1&auth_key=';
    const authKey = 'bcce5a0d-7c2f-3d53-d78c-8d143a79f23f%3Afx'; //DeepL API authentication key
    let target_lang = target;
    let source_lang = source;
    let formality = 'less';
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