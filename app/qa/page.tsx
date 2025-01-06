// app/qa/page.tsx
import { qaData, qaCategories, type QA } from '@/lib/qa-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function QAPage() {
  const categories = Object.keys(qaCategories) as Array<keyof typeof qaCategories>;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg text-gray-600">
          Find answers to common questions about resignation and notice periods
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => {
          const questions = Object.values(qaData).filter(qa => qa.category === category);
          
          return (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{qaCategories[category]}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {questions.map((qa) => (
                  <AccordionItem key={qa.id} value={qa.id}>
                    <AccordionTrigger className="text-left">
                      {qa.question}
                    </AccordionTrigger>
                    <AccordionContent className="prose">
                      {qa.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  )
}