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
                return 'Senha incorreta'
                break;
            case 'Error: User not found':
                return 'Usuário não encontrado'
                break;
        
            default:
                break;
        }
        return errorMessage;
    }
}