// VALIDAÇÃO - FORM
document.querySelector('form').addEventListener('submit', function(event) {
    let isValid = true;

    // Referências aos elementos
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const formMessage = document.getElementById('formMessage');

    // Limpa mensagens de erro
    nameError.textContent = '';
    emailError.textContent = '';
    formMessage.textContent = '';

    // Validação do nome
    if (!nameInput.value.trim()) {
        nameError.textContent = 'O nome é obrigatório.';
        isValid = false;
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    // Impede o envio do formulário caso tenha erros
    if (!isValid) {
        event.preventDefault();
    } else {
        formMessage.textContent = 'Formulário enviado com sucesso!';
    }
});