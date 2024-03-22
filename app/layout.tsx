import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const metadata : Metadata ={
  title : "SaralSchool-Home Page",
  description : "Build skills with our courses and mentor from world-class companies. 100% personalised coaching available. We are on mission to prepare every indiviual for the job market, and become independent .",
  keywords : "Online courses, Technology courses, Entrepreneurship training, Management tutorials, 11th grade classes, 12th grade courses, Private tuition, E-learning platform, Virtual classes, Educational resources, Skill development, Business course, Leadership training, High school subjects, Professional development, Career advancement, Digital marketing courses, Programming tutorials, Web development classes,  Financial management courses,  Project management training,  Exam preparation,  Online coaching,  Personalized learning,  Distance education,  Study materials,  Entrepreneurial skills,  Time management tips,  Online classroom,  Interactive learning,  Career guidance,  Business strategy courses,  Soft skills training,  Tutoring services,  College entrance exams,  Self-paced learning,  Industry-relevant skills,  Professional certification,  Communication skills training,  Remote learning, Test prep",
  robots : "index , follow",
  openGraph: {
    type : "website",
    siteName : "Saral School",
    description :"Build skills with our courses and mentor from world-class companies. 100% personalised coaching available. We are on mission to prepare every indiviual for the job market, and become independent .",
    url : "https://saral-school.pages.dev/home",
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased  overflow-x-hidden sm:overflow-x-hidden`}>{children}</body>
    </html>
  );
}
