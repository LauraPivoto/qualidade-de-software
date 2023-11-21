Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno pokemon/charmander
        Given url url_base
        And path 'pokemon/charmander'
        When method get
        Then status 200

Scenario: Testando retorno pokemon/ informação errada
        Given url url_base
        And path 'pokemon/caramelo'
        When method get
        Then status 404
        
Scenario: Testando retorno pikachu e verificando o JSON.
    Given url url_base
    And path 'pokemon/charmander'
    When method get
    Then status 200
    And match response.name == "charmander"
    And match response.id == 4


Scenario: Testando retorno pokemon Rede entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base
    And path 'version/2/'
    When method get
    Then status 200
    And def idioma = $.names[1].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "ko"
    And match response.id == 3