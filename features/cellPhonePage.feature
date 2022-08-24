Feature: Cell Phone

  @cellPhonePage
  Scenario Outline: I see the texts
    Given I click in button Cadastrar
    When I'm on the Cell Phone page
    Then I must see the texts "<text>"

    Examples:
      | text                                                                            |
      | Cadastro                                                                        |
      | celular                                                                         |
      | Você receberá um código de confirmação no número de telefone celular informado. |

  @cellPhonePageButtons
  Scenario Outline: I see the buttons
    Given I click in button Cadastrar
    When I'm on the Cell Phone page
    Then I must see the button "<button>"

    Examples:
      | button         |
      | ~Botao Avancar |

  @cellPhonePageFields
  Scenario Outline: I see the fields
    Given I click in button Cadastrar
    When I'm on the Cell Phone page
    Then I must see the field "<field>"

    Examples:
      | field                       |
      | ~insira o numero de celular |


  @cellPhonePageValidator
  Scenario Outline: Validator Cell Phone Numbers
    Given I click in button Cadastrar
    When I'm on the Cell Phone page
    And Enter cell phone number "<cellPhoneNumber>" and "<status>"
    Then I must see the page Nome Completo

    Examples:
      | cellPhoneNumber | status  |
      | 11999998888     | success |
      | 1199999888      | fail    |
      | 119999988       | fail    |
      | 11999998        | fail    |
      | 1199999         | fail    |
      | 119999          | fail    |
      | 11999           | fail    |
      | 1199            | fail    |
      | 119             | fail    |
      | 11              | fail    |
      | 1               | fail    |
      | aaaaaaaaaaa     | fail    |
      | abc             | fail    |
