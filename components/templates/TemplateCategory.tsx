// components/templates/TemplateCategory.tsx
import { type Template } from '@/lib/letter-templates'
import { TemplateCard } from './TemplateCard'

interface TemplateCategoryProps {
  title: string;
  templates: Template[];
}

export function TemplateCategory({ title, templates }: TemplateCategoryProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard 
            key={template.id} 
            template={template} 
          />
        ))}
      </div>
    </div>
  )
}