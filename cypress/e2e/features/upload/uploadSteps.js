import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Upload from '../../../pages/upload/upload'

Given('que estou na página de upload', () => {
  Upload.visitarPaginaUpload()
})

When(
  'faço upload do arquivo {string} usando o botão de upload',
  (arquivo) => {
    Upload.selecionarArquivoPorBotao(arquivo)
    Upload.clicarBotaoUpload()
  }
)

When(
  'faço upload do arquivo {string} por drag and drop',
  (arquivo) => {
    Upload.selecionarArquivoPorDragAndDrop(arquivo)
    Upload.clicarBotaoUpload()
  }
)

When(
  'faço upload dos arquivos {string} e {string} usando o botão de upload',
  (arquivo1, arquivo2) => {
    Upload.selecionarMultiplosArquivos([arquivo1, arquivo2])
    Upload.clicarBotaoUpload()
  }
)

Then(
  'devo ver o nome do arquivo {string} exibido na página',
  (arquivo) => {
    Upload.verificarNomeArquivoEnviado(arquivo)
  }
)

Then(
  'devo ver o nome do último arquivo {string} exibido na página',
  (arquivo) => {
    Upload.verificarNomeArquivoEnviado(arquivo)
  }
)
