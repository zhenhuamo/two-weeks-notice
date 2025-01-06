// types/html-to-docx.d.ts
declare module 'html-to-docx' {
    export default function htmlToDocx(
      html: string,
      options?: any,
      callback?: (buffer: Buffer) => void
    ): Promise<Buffer>;
  }