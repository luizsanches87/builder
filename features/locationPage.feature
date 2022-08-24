Feature: Location

  @locationPage
  Scenario Outline: I see the texts
    Given I filled out the full name
    When I'm on the Location page
    Then I must see the texts "<text>"

    Examples:
      | text                                                                                                                  |
      | Cadastro                                                                                                              |
      | Localização                                                                                                           |
      | Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática. |

  @locationPageButtons
  Scenario Outline: I see the buttons
    Given I filled out the full name
    When I'm on the Location page
    Then I must see the button "<button>"

    Examples:
      | button                  |
      | ~LOCALIZAÇÃO AUTOMÁTICA |

  @locationPagePopup
  Scenario Outline: I see the texts in popup Location
    Given I clicked on Localização Automática
    When I'm on the popup Location
    Then I must see the texts "<text>"

    Examples:
      | text                                                       |
      | Compartilhar a localização                                 |
      | Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet. |

  @locationPagePopupButtons
  Scenario Outline: I see the buttons in popup Location
    Given I clicked on Localização Automática
    When I'm on the popup Location
    Then I must see the button "<button>"

    Examples:
      | button |
      | ~Sim   |
      | ~Não   |


  @locationPagePopupValidator
  Scenario Outline: Validator Buttons Location
    Given I clicked on Localização Automática
    When I clicked in "<button>"
    Then I see the text "<text>"

    Examples:
      | button | text        |
      | ~Sim   | SoWe        |
      | ~Não   | Localização |