// lib/letter-templates.ts
import { format } from 'date-fns'
import { LetterData } from '@/types/letter'

type TemplateFunction = (data: LetterData) => string;

// 添加 TemplateCategory 类型
export type TemplateCategory = 'professional' | 'casual' | 'industry-specific';

// 添加模板类别映射
export const templateCategories: Record<TemplateCategory, string> = {
  professional: 'Professional',
  casual: 'Casual',
  'industry-specific': 'Industry Specific'
};

export interface Template {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;  // 使用新定义的类型
  generate: TemplateFunction;
}

export const letterTemplates: Record<string, Template> = {
  professional: {
    id: 'professional',
    name: 'Professional Standard',
    description: 'A formal and professional template suitable for most situations',
    category: 'professional',
    generate: (data) => `Date: ${format(new Date(), 'MMMM dd, yyyy')}

Dear ${data.managerName || '[Manager Name]'},

I am writing to formally notify you of my decision to resign from my position as ${data.position} at ${data.company}. My last day of work will be ${data.lastWorkingDay ? format(new Date(data.lastWorkingDay), 'MMMM dd, yyyy') : '[Date]'}.

I appreciate the opportunities for professional growth and development you have provided during my time here. I plan to do everything possible to make sure that my departure is smooth and to ensure that all my projects are completed and/or transitioned.

${data.additionalNotes}

Thank you for your guidance during my time here.

Sincerely,
${data.employeeName}`
  },

  friendly: {
    id: 'friendly',
    name: 'Friendly and Appreciative',
    description: 'A warm and personal tone while maintaining professionalism',
    category: 'casual',
    generate: (data) => `Date: ${format(new Date(), 'MMMM dd, yyyy')}

Dear ${data.managerName},

I hope this letter finds you well. I am writing to let you know that I have made the decision to leave my position as ${data.position} at ${data.company}. My last day will be ${data.lastWorkingDay ? format(new Date(data.lastWorkingDay), 'MMMM dd, yyyy') : '[Date]'}.

I want to express my sincere gratitude for the wonderful experience I've had working here. The opportunities for growth and the supportive environment you've created have meant a lot to me.

${data.additionalNotes}

I'm committed to ensuring a smooth transition and will make sure all my projects are properly handed over.

Thank you for your understanding and support.

Best regards,
${data.employeeName}`
  },

  detailed: {
    id: 'detailed',
    name: 'Detailed and Comprehensive',
    description: 'A thorough template with transition details',
    category: 'professional',
    generate: (data) => `Date: ${format(new Date(), 'MMMM dd, yyyy')}

Dear ${data.managerName},

I am writing to formally submit my resignation from my position as ${data.position} at ${data.company}, effective ${data.lastWorkingDay ? format(new Date(data.lastWorkingDay), 'MMMM dd, yyyy') : '[Date]'}.

During my remaining time at the company, I am fully committed to:
1. Completing all ongoing projects
2. Documenting my current processes and responsibilities
3. Training team members or my successor
4. Ensuring a smooth transition of my duties

I want to express my sincere appreciation for the opportunities for professional and personal development that you have provided me during my time here. The experience has been invaluable.

${data.additionalNotes}

I wish you and the company continued success in the future.

Best regards,
${data.employeeName}`
  },

  techIndustry: {
    id: 'techIndustry',
    name: 'Technology Industry',
    description: 'Specifically tailored for IT and tech positions',
    category: 'industry-specific',
    generate: (data) => `Date: ${format(new Date(), 'MMMM dd, yyyy')}

Dear ${data.managerName},

I am writing to inform you of my decision to resign from my position as ${data.position} at ${data.company}. My last day will be ${data.lastWorkingDay ? format(new Date(data.lastWorkingDay), 'MMMM dd, yyyy') : '[Date]'}.

I will ensure all my projects are properly documented and transitioned, including:
- Complete documentation of current codebase and projects
- Knowledge transfer sessions with team members
- Handover of all access credentials and security protocols
- Documentation of system configurations and deployment procedures

${data.additionalNotes}

Thank you for the opportunity to work with such an innovative team.

Best regards,
${data.employeeName}`
  },

  shortNotice: {
    id: 'shortNotice',
    name: 'Short Notice',
    description: 'For situations requiring a quick departure',
    category: 'professional',
    generate: (data) => `Date: ${format(new Date(), 'MMMM dd, yyyy')}

Dear ${data.managerName},

I am writing to notify you of my immediate resignation from my position as ${data.position} at ${data.company}. Due to unforeseen circumstances, my last day will be ${data.lastWorkingDay ? format(new Date(data.lastWorkingDay), 'MMMM dd, yyyy') : '[Date]'}.

I understand this is shorter than the standard notice period, and I will do everything possible to facilitate a smooth transition in the time available.

${data.additionalNotes}

I appreciate your understanding in this matter.

Sincerely,
${data.employeeName}`
  }
};

export const getTemplateCategories = () => {
  return Array.from(new Set(Object.values(letterTemplates).map(t => t.category)));
};

// 修改 getTemplatesByCategory 函数的类型
export const getTemplatesByCategory = (category: TemplateCategory) => {
  return Object.values(letterTemplates).filter(t => t.category === category);
};