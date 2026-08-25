export class CiCdModel {
  constructor(
    public ciDescription: string,
    public cdDescription: string,
    public benefits: string[],
    public tools: string[],
    public practices: string[],
    public commonErrors: string[]
  ) {}
}