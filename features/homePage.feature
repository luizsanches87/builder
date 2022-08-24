Feature: Home Page

    @homePageTexts
    Scenario Outline: I see the texts
        Given I open the SoWe app
        When I'm on the home page SoWe
        Then I must see the texts "<text>"

        Examples:
            | text                                                                                            |
            | Explore climas locais socialmente, com o Sowe                                                   |
            | Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa. |

    @homePageButtons
    Scenario Outline: I see the buttons
        Given I open the SoWe app
        When I'm on the home page SoWe
        Then I must see the buttons "<buttons>"

        Examples:
            | buttons   |
            | Cadastrar |
            | Entrar    |
