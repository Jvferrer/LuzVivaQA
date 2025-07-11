Feature: Upload de Arquivos

  Scenario: Fazer upload através do botão 'choose file'
    Given que estou na página de upload
    When faço upload do arquivo "arquivo-exemplo.txt" usando o botão de upload
    Then devo ver o nome do arquivo "arquivo-exemplo.txt" exibido na página

  Scenario: Fazer upload através da área de upload marcada
    Given que estou na página de upload
    When faço upload do arquivo "arquivo2.txt" por drag and drop
    Then devo ver o nome do arquivo "arquivo2.txt" exibido na página

  Scenario: Fazer upload de uma sequência de arquivos
    Given que estou na página de upload
    When faço upload dos arquivos "arquivo-exemplo.txt" e "arquivo2.txt" usando o botão de upload
    Then devo ver o nome do último arquivo "arquivo2.txt" exibido na página
