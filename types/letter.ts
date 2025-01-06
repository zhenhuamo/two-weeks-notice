// types/letter.ts 或直接在 LetterGenerator.tsx 中
export interface LetterData {
  employeeName: string;
  managerName: string;
  company: string;
  position: string;
  lastWorkingDay: string;
  additionalNotes?: string; // 使之成为可选字段
  template: string;
}