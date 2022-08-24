const { I } = inject();

Given('I click in button Cadastrar', () => {
  I.wait(8);
  I.tap('Cadastrar');
});

When("I'm on the Cell Phone page", () => {


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

Then("Enter cell phone number {string} and {string}", (num, test) => {
  if (test == 'success') {
    I.fillField('~insira o numero de celular', num);
    I.tap('~Botao Avancar');
    I.wait(1);
    Then('I must see the page Nome Completo', () => {
      I.see('Nome Completo');
    })
  } else if (test = 'fail') {
    I.fillField('~insira o numero de celular', num);
    I.tap('~Botao Avancar');
    I.wait(1);
    Then('I must see the page Nome Completo', () => {
      I.dontSee('Nome Completo');
    })
  }
})