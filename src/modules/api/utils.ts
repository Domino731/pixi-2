
const processSignUpError = (errorCode: string) => {
    switch (errorCode){
        case "auth/email-already-in-use":
            return "Account with this email has been already created!"
        default:
            return "Api error"   
    }
}
export const authUtils = {
    processSignUpError
}