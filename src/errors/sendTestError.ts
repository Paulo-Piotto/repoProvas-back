class SendTestError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'SendTestError';
      }
}

export default SendTestError;