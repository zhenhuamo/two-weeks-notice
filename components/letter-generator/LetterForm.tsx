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
import { format, addDays } from 'date-fns'

interface LetterFormProps {
 data: LetterData;
 onChange: (data: LetterData) => void;
}

// 默认表单数据
const defaultFormData: LetterData = {
 template: 'professional',
 employeeName: '',
 managerName: '',
 company: '',
 position: '',
 lastWorkingDay: format(addDays(new Date(), 14), 'yyyy-MM-dd'),
 additionalNotes: ''
};

export function LetterForm({ data, onChange }: LetterFormProps) {
 const handleChange = (field: keyof LetterData, value: string) => {
   onChange({ ...data, [field]: value })
 }

 const handleReset = () => {
   onChange(defaultFormData)
 }

 return (
   <div className="space-y-6">
     <div className="space-y-4">
       <div>
         <Label htmlFor="template">Letter Template <span className="text-red-500">*</span></Label>
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
         <Label htmlFor="employeeName">Your Full Name <span className="text-red-500">*</span></Label>
         <Input
           id="employeeName"
           value={data.employeeName}
           onChange={(e) => handleChange('employeeName', e.target.value)}
           placeholder="John Doe"
           required
         />
       </div>

       <div>
         <Label htmlFor="managerName">Manager&apos;s Name <span className="text-red-500">*</span></Label>
         <Input
           id="managerName"
           value={data.managerName}
           onChange={(e) => handleChange('managerName', e.target.value)}
           placeholder="Jane Smith"
           required
         />
       </div>

       <div>
         <Label htmlFor="company">Company Name <span className="text-red-500">*</span></Label>
         <Input
           id="company"
           value={data.company}
           onChange={(e) => handleChange('company', e.target.value)}
           placeholder="Company Inc."
           required
         />
       </div>

       <div>
         <Label htmlFor="position">Your Position <span className="text-red-500">*</span></Label>
         <Input
           id="position"
           value={data.position}
           onChange={(e) => handleChange('position', e.target.value)}
           placeholder="Software Engineer"
           required
         />
       </div>

       <div>
         <Label htmlFor="lastWorkingDay">Last Working Day <span className="text-red-500">*</span></Label>
         <Input
           id="lastWorkingDay"
           type="date"
           value={data.lastWorkingDay}
           onChange={(e) => handleChange('lastWorkingDay', e.target.value)}
           min={format(new Date(), 'yyyy-MM-dd')}
           max={format(addDays(new Date(), 90), 'yyyy-MM-dd')}
           required
         />
         <p className="mt-1 text-sm text-gray-500">
           Select a date between today and 90 days from now
         </p>
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

       <div className="flex justify-end space-x-4 pt-4">
         <Button
           type="button"
           variant="outline"
           onClick={handleReset}
         >
           Reset Form
         </Button>
         <Button
           type="button"
           variant="secondary"
           onClick={() => window.print()}
         >
           Print Preview
         </Button>
       </div>
     </div>
   </div>
 )
}