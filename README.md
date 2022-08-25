# Builder - SoWe

Projeto de testes automatizados para o aplicativo SoWe

## Tecnologias usadas

- NodeJS - 16.17.0
- CodeceptJS 3.3.5
- Appium 1.22.3-4
- Allure 2.18.1
- Android Studio 2021.2.1

## Clonando o repositório para execução dos testes

1. Crie uma pasta para clonar o repositório, nesse exemplo criei a pasta Builder dentro de C:

```
cd/
cd Builder
```

2. No console, digite o comando:
```
git clone https://github.com/luizsanches87/builder.git
```

## Instalações

### NodeJS
- Realize o download e instalação: https://nodejs.org/en/

### CodeceptJS
Dentro da pasta C:\Builders, rode:

- npx create-codeceptjs .
- npx codeceptjs init
- Selecione Appium

### Instalando o Appium
- Realize o download e instalação: https://appium.io/downloads.html

### Allure
Dentro da pasta C:\Builders, rode:
- npm install -g allure-commandline --save-dev

### Android Studio
- Realize o download e instalação: https://developer.android.com/studio


## Execução dos Testes Automatizados

### Inicializando o device Android com o servidor do Appium

- Crie um device pelo Android Studio > Device Manager
- Abra o Appium
- Inicialize o servidor do Appium

### CodeceptJS

No arquivo codecept.conf.js, configure:

Appium:
```
helpers: {
    Appium: {
      app: 'C:\\Builder\\challenge-qa.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
```

Gherkin:
```conf
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/cellPhonePage_steps.js',
      './step_definitions/homePage_steps.js',
      './step_definitions/fullNamePage_steps.js',
      './step_definitions/locationPage_steps.js']
  },
```

Allure:
```
  plugins: {
    allure: {},
```

- Para execução dos testes automatizados de todos os cenários implementados, rode o camando:
```
npx codeceptjs run --features --plugins allure
```

Após a execução terminar, para visualização com o plugin Allure rode o comando:
```
allure serve output
```
