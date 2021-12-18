class GetTestsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GetTestsError';
      }
}

export default GetTestsError;