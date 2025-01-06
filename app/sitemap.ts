// app/sitemap.ts
import { MetadataRoute } from 'next'
import { letterTemplates } from '@/lib/letter-templates'
import { qaData } from '@/lib/qa-data'
import { guides } from '@/lib/guides-data'

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = 'https://2weeknoticeletters.com'

 // ����ҳ��
 const staticPages = [
   '',
   '/generator',
   '/templates',
   '/guides',
   '/qa',
   '/about'
 ].map(route => ({
   url: `${baseUrl}${route}`,
   lastModified: new Date(),
   changeFrequency: 'daily' as const,
   priority: route === '' ? 1 : 0.8, // ��ҳ���ȼ����
 }))

 // ģ������ҳ��
 const templatePages = Object.keys(letterTemplates).map(templateId => ({
   url: `${baseUrl}/templates/${templateId}`,
   lastModified: new Date(),
   changeFrequency: 'weekly' as const,
   priority: 0.6
 }))

 // ָ������ҳ��
 const guidePages = Object.keys(guides).map(guideId => ({
   url: `${baseUrl}/guides/${guideId}`,
   lastModified: new Date(),
   changeFrequency: 'weekly' as const,
   priority: 0.6
 }))

 // Q&A����ҳ�� 
 const qaPages = Object.keys(qaData).map(qaId => ({
   url: `${baseUrl}/qa/${qaId}`,
   lastModified: new Date(),
   changeFrequency: 'weekly' as const,
   priority: 0.5
 }))

 return [...staticPages, ...templatePages, ...guidePages, ...qaPages]
}