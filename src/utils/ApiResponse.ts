class ApiResponse {
  statusCode: number;
  message: string;
  data: object;
  success: boolean;
  constructor(
    statusCode: number,
    message: string,
    success: boolean,
    data: object
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data || {};
    this.success = success;
  }
}

export { ApiResponse };
