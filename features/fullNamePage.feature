Feature: Full Name

  @fullNamePage
  Scenario Outline: I see the texts
    Given I filled out the cell phone
    When I'm on the Full Name page
    Then I must see the texts "<text>"

    Examples:
      | text          |
      | Cadastro      |
      | Nome Completo |

  @fullNamePageButtons
  Scenario Outline: I see the buttons
    Given I filled out the cell phone
    When I'm on the Full Name page
    Then I must see the button "<button>"

    Examples:
      | button         |
      | ~Botao Avancar |

  @fullNamePageFields
  Scenario Outline: I see the fields
    Given I filled out the cell phone
    When I'm on the Full Name page
    Then I must see the field "<field>"

    Examples:
      | field                   |
      | ~Insira o nome completo |

  @fullNamePageValidator
  Scenario Outline: Validator Full Name
    Given I filled out the cell phone
    When I'm on the Full Name page
    And Enter name "<fullName>" and "<status>"
    Then I must see the page Localização

    Examples:
      | fullName     | status  |
      | Luiz Sanches | success |
      | Luiz         | success |
      | Leo          | success |
      | Lu           | fail    |
      | L            | fail    |
      | 123          | fail    |