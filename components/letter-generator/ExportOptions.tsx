// components/letter-generator/ExportOptions.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Download, Copy, Mail, FileText } from "lucide-react"
import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import jsPDF from 'jspdf'
import { format } from 'date-fns'
import { type LetterData } from '@/types/letter'

interface ExportOptionsProps {
  letterData: LetterData;
  letterContent: string;
}

export function ExportOptions({ letterData, letterContent }: ExportOptionsProps) {

 // 导出为 Word
  const exportToWord = async () => {
  const paragraphs = letterContent.split('\n').filter(line => line.trim());

  const doc = new Document({
    sections: [{
      properties: {},
      children: paragraphs.map(text => 
        new Paragraph({
          spacing: {
            after: 200,
            line: 360,
          },
          children: [
            new TextRun({
              text: text,
              size: 24,
            })
          ],
        })
      )
    }]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `resignation-letter-${format(new Date(), 'yyyy-MM-dd')}.docx`);
};


  // 修改 Google Docs 导出功能
  const openInGoogleDocs = () => {
    // 打开新的 Google Docs
    window.open('https://docs.google.com/document/create', '_blank');
    // 复制内容到剪贴板
    navigator.clipboard.writeText(letterContent).then(() => {
      alert('Content copied to clipboard. Please paste (Ctrl+V) into the new Google Doc.');
    });
  };

  // 其他现有的导出功能保持不变
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(letterContent, 20, 20, {
      maxWidth: 170,
      lineHeightFactor: 1.5,
    });
    doc.save(`resignation-letter-${format(new Date(), 'yyyy-MM-dd')}.pdf`);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(letterContent);
      alert('Letter copied to clipboard!');
    } catch (err) {
      alert('Failed to copy letter to clipboard');
    }
  };

  const sendEmail = () => {
    const subject = `Resignation Letter - ${letterData.employeeName}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(letterContent)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <Button 
        onClick={exportToPDF}
        className="flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Save as PDF
      </Button>

      <Button 
        onClick={exportToWord}
        variant="outline"
        className="flex items-center gap-2"
      >
        <FileText className="w-4 h-4" />
        Save as Word
      </Button>

      <Button 
        onClick={openInGoogleDocs}
        variant="outline"
        className="flex items-center gap-2"
      >
        <FileText className="w-4 h-4" />
        Open in Google Docs
      </Button>

      <Button 
        onClick={copyToClipboard}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Copy className="w-4 h-4" />
        Copy to Clipboard
      </Button>

      <Button 
        onClick={sendEmail}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Mail className="w-4 h-4" />
        Send via Email
      </Button>
    </div>
  );
}