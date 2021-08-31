/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob');
const fs = require('fs');

class TranslationMerger {
  constructor(private sourceRoot: string, private destRoot: string) {}

  public merge(): void {
    const translations = this.getTranslations();
    const map = new Map<string, string[]>();
    translations.forEach((translation) => {
      const match = translation.match(/<xliff (.*?) trgLang="(.*?)">(.*?)<file (.*?)>(.*?)<\/file>(.*?)<\/xliff>/ms);
      if (match) {
        const lang = match[2].trim();
        const units: string = '    ' + match[5].trim();
        let arr = map.get(lang);
        if (!arr) {
          arr = [];
          map.set(lang, arr);
        }
        arr.push(units);
        map.set(lang, arr);
      }
    });

    map.forEach((units, lang) => {
      let xliffContents = '<?xml version="1.0" encoding="UTF-8"?>\r\n';
      xliffContents += '<';
      xliffContents += `xliff version="2.0"\r\n  xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="${lang}">\r\n`;
      xliffContents += '  <file id="ngi18n" original="ng.template">\r\n';
      xliffContents += units.join('\r\n') + '\r\n';
      xliffContents += '  </file>\r\n';
      xliffContents += '</xliff>\r\n';
      const filePath = `${this.destRoot}/messages.${lang}.xlf`;
      fs.writeFileSync(filePath, xliffContents);
    });
  }

  private getTranslations(): string[] {
    const files: string[] = glob.sync(this.sourceRoot + '/**/*.ts');

    const translations: string[] = files
      .map((file) => fs.readFileSync(file, 'utf8'))
      .filter((content: string) => content.indexOf('<xliff version="2.0"') > -1)
      .flatMap((content) => content.match(/<xliff version="2.0"(.*?)<\/xliff>/gms))
      .filter((translation) => translation !== null);
    return translations;
  }
}

const source = __dirname.substr(0, __dirname.indexOf('\\src') + 4).replace(/\\/g, '/');
const dest = source + '/assets/i18n';
new TranslationMerger(source, dest).merge();
