// components/letter-generator/LetterGenerator.tsx
"use client"

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
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
import { format, addDays } from 'date-fns'
import { ExportOptions } from './ExportOptions'
import { letterTemplates } from '@/lib/letter-templates'
import { useSearchParams } from 'next/navigation'

// 表单验证模式
const formSchema = z.object({
  template: z.string().min(1, "Please select a template"),
  employeeName: z.string().min(1, "Name is required"),
  managerName: z.string().min(1, "Manager's name is required"),
  company: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  lastWorkingDay: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    const maxDate = addDays(today, 90);
    return selectedDate >= today && selectedDate <= maxDate;
  }, "Last working day must be between today and 90 days from now"),
  additionalNotes: z.string().optional()
});

// 添加本地存储相关的函数
const STORAGE_KEY = 'resignation-letter-draft';

const saveToDraft = (data: FormData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    data,
    timestamp: new Date().toISOString()
  }));
};

const loadFromDraft = (): { data: FormData; timestamp: string } | null => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return null;
};

const clearDraft = () => {
  localStorage.removeItem(STORAGE_KEY);
};

type FormData = z.infer<typeof formSchema>;

const defaultValues: FormData = {
  template: 'professional',
  employeeName: '',
  managerName: '',
  company: '',
  position: '',
  lastWorkingDay: format(addDays(new Date(), 14), 'yyyy-MM-dd'),
  additionalNotes: ''
};

export function LetterGenerator() {
  // 添加状态来跟踪草稿信息
  const [hasSavedDraft, setHasSavedDraft] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const searchParams = useSearchParams()
  



  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isDirty }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const formData = watch();

  const onTemplateChange = (value: string) => {
    setValue('template', value, { shouldValidate: true });
  };

  // 生成信件内容
  const generateLetterContent = () => {
    const selectedTemplate = letterTemplates[formData.template];
    if (selectedTemplate) {
      return selectedTemplate.generate(formData);
    }
    // 如果没有找到模板，使用默认模板
    return letterTemplates.professional.generate(formData);
  };
  

  const letterContent = generateLetterContent();

  // 处理 URL 参数中的模板选择
  // 处理 URL 参数中的模板选择
  useEffect(() => {
    const templateId = searchParams.get('template')
    if (templateId && letterTemplates[templateId]) {
      setValue('template', templateId)
    }
  }, [searchParams, setValue])


  // 检查并加载草稿
  useEffect(() => {
    const saved = loadFromDraft();
    if (saved) {
      setHasSavedDraft(true);
      setLastSaved(saved.timestamp);
      const shouldRestore = window.confirm(
        `Found a saved draft from ${new Date(saved.timestamp).toLocaleString()}. Would you like to restore it?`
      );
      if (shouldRestore) {
        reset(saved.data);
      } else {
        clearDraft();
      }
    }
  }, [reset]);

  // 自动保存功能
  useEffect(() => {
    if (isDirty) {
      const timeoutId = setTimeout(() => {
        saveToDraft(formData);
        setLastSaved(new Date().toISOString());
      }, 1000); // 1秒后自动保存

      return () => clearTimeout(timeoutId);
    }
  }, [formData, isDirty]);

  // 添加手动保存和清除功能
  const handleSaveDraft = () => {
    saveToDraft(formData);
    setLastSaved(new Date().toISOString());
    setHasSavedDraft(true);
  };

  const handleClearDraft = () => {
    if (window.confirm('Are you sure you want to clear the draft?')) {
      clearDraft();
      reset(defaultValues);
      setHasSavedDraft(false);
      setLastSaved(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 表单部分 */}
      <div className="space-y-6">
        {/* 添加草稿控制按钮和状态显示 */}
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-col">
            {lastSaved && (
              <span className="text-sm text-gray-500">
                Last saved: {new Date(lastSaved).toLocaleString()}
              </span>
            )}
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSaveDraft}
            >
              Save Draft
            </Button>
            {hasSavedDraft && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearDraft}
              >
                Clear Draft
              </Button>
            )}
          </div>
        </div>
         {/* 原有的表单字段 */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="template">Letter Template</Label>
            <Select
              value={formData.template}
              onValueChange={onTemplateChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(letterTemplates).map(([key, template]) => (
                  <SelectItem key={key} value={key}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.template && (
              <p className="mt-1 text-sm text-red-500">
                {errors.template.message}
              </p>
            )}
            {letterTemplates[formData.template] && (
              <p className="mt-1 text-sm text-gray-500">
                {letterTemplates[formData.template].description}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="employeeName">Your Full Name</Label>
            <Input
              id="employeeName"
              {...register('employeeName')}
              placeholder="John Doe"
              className={errors.employeeName ? "border-red-500" : ""}
            />
            {errors.employeeName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.employeeName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="managerName">Manager's Name</Label>
            <Input
              id="managerName"
              {...register('managerName')}
              placeholder="Jane Smith"
              className={errors.managerName ? "border-red-500" : ""}
            />
            {errors.managerName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.managerName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              {...register('company')}
              placeholder="Company Inc."
              className={errors.company ? "border-red-500" : ""}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="position">Your Position</Label>
            <Input
              id="position"
              {...register('position')}
              placeholder="Software Engineer"
              className={errors.position ? "border-red-500" : ""}
            />
            {errors.position && (
              <p className="mt-1 text-sm text-red-500">
                {errors.position.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="lastWorkingDay">Last Working Day</Label>
            <Input
              id="lastWorkingDay"
              type="date"
              {...register('lastWorkingDay')}
              min={format(new Date(), 'yyyy-MM-dd')}
              max={format(addDays(new Date(), 90), 'yyyy-MM-dd')}
              className={errors.lastWorkingDay ? "border-red-500" : ""}
            />
            {errors.lastWorkingDay && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastWorkingDay.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              {...register('additionalNotes')}
              placeholder="Any additional messages or specific transition plans..."
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* 预览部分 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {letterContent}
          </pre>
        </div>
        
        <ExportOptions 
          letterData={formData}
          letterContent={letterContent}
        />
      </div>
    </div>
  );
}