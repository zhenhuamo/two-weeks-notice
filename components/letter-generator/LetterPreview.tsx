// components/letter-generator/LetterPreview.tsx
// import type { LetterData } from './LetterGenerator'
import { type LetterData } from '@/types/letter'
import { format } from 'date-fns'

interface LetterPreviewProps {
  data: LetterData;
}

export function LetterPreview({ data }: LetterPreviewProps) {
  const generateLetter = () => {
    const templates = {
      professional: `
[Current Date]

${data.managerName}
[Manager's Title]
${data.company}
[Company Address]

Dear ${data.managerName},

I am writing to inform you of my decision to resign from my position as ${data.position} at ${data.company}. My last day of work will be ${data.lastWorkingDay}, two weeks from today.

I appreciate the opportunities for professional growth and development you have provided during my time at ${data.company}. I plan to do everything possible to make sure that my departure is smooth and to ensure that all my projects are completed and/or transitioned.

${data.additionalNotes}

Thank you for your guidance during my time here.

Sincerely,
${data.employeeName}
      `,
      // Add other templates here...
    }

    return templates[data.template as keyof typeof templates] || templates.professional
  }

  return (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div className="whitespace-pre-wrap font-mono text-sm">
        {generateLetter()}
      </div>
    </div>
  )
}