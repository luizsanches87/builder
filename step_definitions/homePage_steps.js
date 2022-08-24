const { I } = inject();

Given('I open the SoWe app', () => {
    I.wait(8);
    I.seeAppIsInstalled("io.platformbuilders.challenge.qa");
});

When("I'm on the home page SoWe", () => {
});

Then("I must see the text {string}", (seeText) => {
    I.see(seeText);
});

Then("I must see the buttons {string}", (seeButton) => {
    I.see(seeButton);
});