// components/letter-generator/LetterForm.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { LetterData } from '@/types/letter'

interface LetterFormProps {
  data: LetterData;
  onChange: (data: LetterData) => void;
}

export function LetterForm({ data, onChange }: LetterFormProps) {
  const handleChange = (field: keyof LetterData, value: string) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="template">Letter Template</Label>
          <Select
            value={data.template}
            onValueChange={(value) => handleChange('template', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="detailed">Detailed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="employeeName">Your Full Name</Label>
          <Input
            id="employeeName"
            value={data.employeeName}
            onChange={(e) => handleChange('employeeName', e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label htmlFor="managerName">Manager's Name</Label>
          <Input
            id="managerName"
            value={data.managerName}
            onChange={(e) => handleChange('managerName', e.target.value)}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            value={data.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Company Inc."
          />
        </div>

        <div>
          <Label htmlFor="position">Your Position</Label>
          <Input
            id="position"
            value={data.position}
            onChange={(e) => handleChange('position', e.target.value)}
            placeholder="Software Engineer"
          />
        </div>

        <div>
          <Label htmlFor="lastWorkingDay">Last Working Day</Label>
          <Input
            id="lastWorkingDay"
            value={data.lastWorkingDay}
            onChange={(e) => handleChange('lastWorkingDay', e.target.value)}
            placeholder="January 31, 2024"
          />
        </div>

        <div>
          <Label htmlFor="additionalNotes">Additional Notes</Label>
          <Textarea
            id="additionalNotes"
            value={data.additionalNotes}
            onChange={(e) => handleChange('additionalNotes', e.target.value)}
            placeholder="Add any additional messages or specific transition plans..."
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}