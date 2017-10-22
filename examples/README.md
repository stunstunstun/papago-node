## Usages

#### Prerequisite

```bash
export CLIENT_ID='Your application's client id'
export CLIENT_SECRET='Your application's client secret'
```

#### APIs

```javascript
import Translator from 'papago';

translator = new Translator(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
translator.translate('안녕하세요')
.then(result => {
    console.log(result.text); // Hello.
})
.catch(err => {
    console.log(err.code);
});
```

```javascript
import Translator from 'papago';

translator = new Translator(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
translator.translate('안녕하세요', 'ko', 'es')
.then(result => {
    console.log(result.text); // Hola
})
.catch(err => {
    console.log(err.code);
});
```

#### Languages Code

Code | Desc 
--|--
ko | Korean
en | English
ja | Japanese
zh-CN | Chinese
es | Spainish
th | Thai
fr | French
vi | Vietnamese
id | Hindi