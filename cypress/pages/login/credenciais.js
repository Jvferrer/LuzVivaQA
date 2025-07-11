class Login {
  // Visita a página de login
  static visitarPagina() {
    cy.visit('/login');
  }

  // Preenche o campo username
  static preencherCampoUsername(username) {
    cy.get('#username').should('be.visible').clear().type(username);
  }

  // Preenche o campo password
  static preencherCampoPassword(password) {
    cy.get('#password').should('be.visible').clear().type(password);
  }

  // Clica no botão de login
  static clicarBotaoLogin() {
    cy.get('button[type="submit"]').should('be.visible').click();
  }

  // Verifica se a URL contém "/secure" após login
  static verificarUrlSegura() {
    cy.url().should('include', '/secure');
  }

  // Verifica a mensagem exibida na caixa de alerta
  static verificarMensagem(mensagemEsperada) {
    cy.get('#flash')
      .should('be.visible')
      .invoke('text')
      .then((texto) => {
        const textoNormalizado = texto.replace(/\s+/g, ' ').trim();
        expect(textoNormalizado).to.include(mensagemEsperada);
      });
  }

  // Acessa diretamente uma URL
  static acessarUrlDiretamente(url) {
    cy.visit(url);
  }

  // Verifica se foi redirecionado para a página de login
  static verificarRedirecionamentoLogin() {
    cy.url().should('include', '/login');
  }
}

export default Login;
