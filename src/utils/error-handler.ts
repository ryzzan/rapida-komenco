export class MyErrorHandler {
    validatorError = (error: any): string => {
        if (error?.required) return 'Campo obrigatório';
        if (error?.email) return 'Formato de e-mail inválido';
        if (error?.minlength) return 'Tamanho mínimo não alcançado';

        return 'Erro não definido';
    }

    apiErrorMessage = (errorMessage: string) => {
        switch (errorMessage) {
            case 'Error: Incorrect password':
                return 'Senha incorreta.'
                break;
            case 'Error: User not found':
                return 'Usuário não encontrado.'
                break;
            case 'Error: The email has already been registered':
                return 'E-mail já cadastrado.'
                break;
            case 'Error: The uniqueId has already been registered':
                return 'CPF já cadastrado.'
                break;

            case 'Error: Birth date doesnt correspond to the CPF':
                return 'Data de nascimento não corresponde a do CPF.'
                break;

            case 'Project does not have authorization':
                return 'Sem autorização para este aplicativo.'
                break;
        
            default:
                return errorMessage;
                break;
        }
    }
}