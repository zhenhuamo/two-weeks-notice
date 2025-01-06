// lib/qa-data.ts
export interface QA {
    id: string;
    question: string;
    answer: string;
    category: 'general' | 'timing' | 'legal' | 'etiquette';
  }
  
  export const qaCategories = {
    general: 'General Questions',
    timing: 'Timing & Notice Period',
    legal: 'Legal Considerations',
    etiquette: 'Professional Etiquette'
  };
  
  export const qaData: Record<string, QA> = {
    'notice-period': {
      id: 'notice-period',
      question: 'Is two weeks notice always required?',
      answer: `While two weeks notice is a standard professional courtesy in most industries, the actual requirement can vary. Here are some key points to consider:
  
  - Check your employment contract for specific notice period requirements
  - Some positions may require longer transition periods
  - Senior roles often need more time for proper handover
  - Always try to provide as much notice as reasonably possible
  - Be prepared for your employer's response, which might include immediate departure`,
      category: 'timing'
    },
    'verbal-written': {
      id: 'verbal-written',
      question: 'Should I resign verbally or in writing?',
      answer: `It's best to do both. Here's the recommended approach:
  
  1. Schedule a meeting with your manager for a verbal discussion
  2. Follow up immediately with a formal written notice
  3. Keep a copy of your written notice for your records
  4. Be professional and positive in both communications`,
      category: 'etiquette'
    },
    'legal-rights': {
      id: 'legal-rights',
      question: 'What are my legal rights when resigning?',
      answer: `Your legal rights during resignation include:
  
  - Right to receive your final paycheck
  - Payment for unused vacation days (if company policy allows)
  - Continuation of health benefits (COBRA in the US)
  - Access to unemployment benefits (depending on circumstances)
  - Protection from discrimination or retaliation`,
      category: 'legal'
    }
    // 可以添加更多 Q&A
  };