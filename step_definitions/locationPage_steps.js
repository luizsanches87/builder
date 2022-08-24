const { I } = inject();

Given('I filled out the full name', () => {
  I.wait(8);
  I.tap('Cadastrar');
  I.wait(1);
  I.fillField('~insira o numero de celular', '11988887777');
  I.tap('~Botao Avancar');
  I.wait(1);
  I.fillField('~Insira o nome completo', 'Luiz Sanches');
  I.tap('~Botao Avancar');
  I.wait(1);
});

Given('I clicked on Localização Automática', () => {
  I.wait(8);
  I.tap('Cadastrar');
  I.wait(1);
  I.fillField('~insira o numero de celular', '11988887777');
  I.tap('~Botao Avancar');
  I.wait(1);
  I.fillField('~Insira o nome completo', 'Luiz Sanches');
  I.tap('~Botao Avancar');
  I.wait(4);
  I.tap('~LOCALIZAÇÃO AUTOMÁTICA');
  I.wait(4);
});

When("I'm on the Location page", () => {

});

When("I'm on the popup Location", () => {

});

When("I clicked in {string}", (button) => {
  I.wait(3);
  I.tap(button);
});

Then('I must see the texts {string}', (seeText) => {
  I.see(seeText);

});

Then('I must see the button {string}', (seeButton) => {
  I.seeElement(seeButton);

});

Then('I see the text {string}', (text) => {
  I.wait(3);
  I.see(text);

});
