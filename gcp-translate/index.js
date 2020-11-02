require('dotenv').config()

const projectId = process.env.GOOGLE_PROJECT_ID;
const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');

const translate = new Translate({projectId});

async function quickStart(lang) {
  const list = JSON.parse(fs.readFileSync('../en/texts.json').toString());
  const dict = {}
  for (const el of list) {
    const [translation] = await translate.translate(el, lang);
    dict[el] = translation
  }
  const output = JSON.stringify(dict, undefined, 2);
  fs.writeFileSync(`../${lang}/dict.json`, output);
}

quickStart('pl');
