// components/templates/TemplateCard.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Template } from '@/lib/letter-templates'
import Link from "next/link"

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{template.name}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {/* 预览示例 */}
          <div className="bg-gray-50 p-4 rounded-md text-sm truncate">
            Dear [Manager Name],

            I am writing to inform you...
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" asChild>
              <Link href={`/templates/${template.id}`}>
                Preview
              </Link>
            </Button>
            <Button asChild>
              <Link 
                href={`/generator?template=${template.id}`}
                className="flex items-center"
              >
                Use Template
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}