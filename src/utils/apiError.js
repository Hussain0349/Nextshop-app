class apiError extends Error {
    constructor(statusCode,message= 'some went wrong',error = [],data){
        super(message)
        this.statusCode = statusCode,
        this.error = error,
        this.message = message
        this.data = null
    }
}
export default apiError