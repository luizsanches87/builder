const { I } = inject();

Given('I filled out the cell phone', () => {
  I.wait(8);
  I.tap('Cadastrar');
  I.wait(2);
  I.fillField('~insira o numero de celular', '11988887777');
  I.tap('~Botao Avancar');
  I.wait(3);
});

When("I'm on the Full Name page", () => {

});

Then('I must see the texts {string}', (seeText) => {
  I.see(seeText);

});

Then('I must see the button {string}', (seeButton) => {
  I.seeElement(seeButton);

});

Then('I must see the field {string}', (seeField) => {
  I.seeElement(seeField);

});

Then("Enter name {string} and {string}", (name, status) => {
  if (status == 'success') {
    I.fillField('~Insira o nome completo', name);
    I.tap('~Botao Avancar');
    I.wait(1);
    Then('I must see the page Localização', () => {
      I.see('Localização');
    })
  } else if (status = 'fail') {
    I.fillField('~Insira o nome completo', name);
    I.tap('~Botao Avancar');
    I.wait(1);
    Then('I must see the page Localização', () => {
      I.dontSee('Localização');
    })
  }
})