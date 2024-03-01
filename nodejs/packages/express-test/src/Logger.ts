enum Level {
  Info = 'Info',
}

class Logger {
  constructor() {}

  get logFilePath() {
    return 'session-logs.log';
  }

  get dateLocaleString() {
    return new Date().toLocaleString();
  }

  info(data: string) {
    return `[${Level.Info}][${this.dateLocaleString}]${data}\n`;
  }
}

export default new Logger();
