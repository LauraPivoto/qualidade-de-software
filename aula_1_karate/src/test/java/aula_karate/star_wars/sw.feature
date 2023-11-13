Feature: Testando API do Star Wars

Scenario: Testando retorno para o planeta 60
    Given url 'https://swapi.dev/api/planets/60'
    When method get
    Then status 200

Scenario: Testando retorno para os veículos
    Given url 'https://swapi.dev/api/vehicles/'
    When method get
    Then status 200