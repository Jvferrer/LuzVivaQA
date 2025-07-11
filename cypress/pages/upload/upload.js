// Classe que reúne todas as ações relacionadas ao upload de arquivos na página
class Upload {
  // Acessa a página de upload usando a rota /upload
  static visitarPaginaUpload() {
    cy.visit('/upload');
  }

  // Seleciona um arquivo para upload usando o botão tradicional
  static selecionarArquivoPorBotao(nomeArquivo) {
    // Localiza o input do tipo file e aplica forçadamente o arquivo desejado
    cy.get('input#file-upload')
      .selectFile(`cypress/fixtures/${nomeArquivo}`, { force: true });
  }

  // Simula o envio de arquivo via arrastar e soltar (drag and drop)
  static selecionarArquivoPorDragAndDrop(nomeArquivo) {
    // Esse input também permite drag-drop, então basta usar a mesma referência
    cy.get('input#file-upload')
      .selectFile(`cypress/fixtures/${nomeArquivo}`, {
        action: 'drag-drop',
        force: true,
      });
  }

  // Para fazer upload simultâneo de vários arquivos
  static selecionarMultiplosArquivos(listaArquivos) {
    // Converte os nomes em caminhos completos dentro da pasta de fixtures
    const caminhos = listaArquivos.map(f => `cypress/fixtures/${f}`);
    cy.get('input#file-upload')
      .selectFile(caminhos, { force: true });
  }

  // Clica no botão que envia o arquivo após a seleção
  static clicarBotaoUpload() {
    cy.get('#file-submit').click();
  }

  // Valida se o nome do arquivo enviado aparece no elemento #uploaded-files
  static verificarNomeArquivoEnviado(nomeArquivo) {
    cy.get('#uploaded-files').should('contain.text', nomeArquivo);
  }
}

// Exporta a classe para que os testes possam usá-la
export default Upload;
