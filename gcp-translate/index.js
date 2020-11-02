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
    const leadingWsOrig = el.search(/\S/);
    const trailingWsOrig = el.length - leadingWsOrig - el.trim().length;
    const leadingWsTrans = translation.search(/\S/);
    const trailingWsTrans = translation.length - leadingWsTrans - translation.trim().length;
    const missingLeadingWs = leadingWsOrig - leadingWsTrans;
    const missingTrailingWs = trailingWsOrig - trailingWsTrans;
    const addFront = missingLeadingWs > 0 ? missingLeadingWs : 0;
    const addBack = missingTrailingWs > 0 ? missingTrailingWs : 0;
    dict[el] = ' '.repeat(addFront) + translation + ' '.repeat(addBack)
  }
  const output = JSON.stringify(dict, undefined, 2);
  fs.writeFileSync(`../${lang}/dict.json`, output);
}

quickStart('de');
