// lib/guides-data.ts
export interface Guide {
    id: string;
    title: string;
    description: string;
    category: 'general' | 'best-practices' | 'tips' | 'timing';
    content: string;
  }
  
  export const guides: Record<string, Guide> = {
    'how-to-resign': {
      id: 'how-to-resign',
      title: 'How to Resign Professionally',
      description: 'A comprehensive guide to resigning from your job professionally and gracefully',
      category: 'general',
      content: `
  # How to Resign Professionally
  
  Resigning from your job is a significant career move that requires careful planning and professional execution. Here's a comprehensive guide to help you navigate this process:
  
  ## Before Submitting Your Resignation
  
  1. **Confirm Your Decision**
     - Evaluate your reasons for leaving
     - Have another job secured (if applicable)
     - Review your current contract and obligations
  
  2. **Prepare Your Transition Plan**
     - Document your current projects
     - Organize your files
     - Create handover documentation
  
  3. **Time Your Announcement**
     - Choose an appropriate day and time
     - Schedule a meeting with your manager
     - Prepare what you'll say
  
  ## During the Resignation Process
  
  1. **Submit Your Written Notice**
     - Use our letter generator to create a professional resignation letter
     - Keep the tone positive and professional
     - Be clear about your last working day
  
  2. **Meet with Your Manager**
     - Express gratitude for opportunities
     - Offer to help with the transition
     - Maintain professionalism regardless of the response
  
  3. **Handle the Transition**
     - Complete ongoing projects
     - Document processes and procedures
     - Train your replacement if possible
  
  ## After Announcing Your Resignation
  
  1. **Maintain Professionalism**
     - Continue working diligently
     - Stay positive in workplace conversations
     - Don't discuss negative aspects of your job
  
  2. **Prepare for Exit**
     - Organize digital and physical files
     - Document passwords and access information
     - Create status reports for ongoing projects
  
  3. **Plan Your Goodbyes**
     - Write thank-you notes to colleagues
     - Schedule handover meetings
     - Plan your last day appropriately`
    },
    'resignation-timing': {
      id: 'resignation-timing',
      title: 'When is the Best Time to Resign?',
      description: 'Learn about the optimal timing for submitting your resignation',
      category: 'timing',
      content: `
  # Choosing the Right Time to Resign
  
  Timing your resignation properly can make a significant difference in maintaining professional relationships and ensuring a smooth transition.
  
  ## Key Considerations
  
  1. **Notice Period**
     - Standard two weeks notice
     - Industry-specific expectations
     - Contract requirements
  
  2. **Project Timelines**
     - Current project status
     - Upcoming deadlines
     - Team dependencies
  
  3. **Company Calendar**
     - Avoid critical business periods
     - Consider fiscal year timing
     - Be mindful of team vacation schedules
  
  ## Best Times to Resign
  
  1. **Early in the Week**
     - Allows time for transition planning
     - Gives HR time to process paperwork
     - Provides structure for the notice period
  
  2. **After Project Completion**
     - Minimizes disruption to work
     - Easier handover process
     - Better for team morale
  
  3. **Beginning of the Month**
     - Simpler for payroll processing
     - Clearer for benefits calculation
     - Better for administrative purposes`
    }
    // ... 可以添加更多指南
  };
  
  export const guideCategories = {
    general: 'General Guides',
    'best-practices': 'Best Practices',
    tips: 'Tips & Advice',
    timing: 'Timing Considerations'
  };