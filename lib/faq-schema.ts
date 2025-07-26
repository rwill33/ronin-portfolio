// FAQ Schema for better SEO visibility
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Ronin Williams-Young?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ronin Williams-Young is an AI Engineer at Bond Brand Loyalty and a Software Engineering student at Western University. He specializes in React, TypeScript, Python, AI/ML, and enterprise software development with experience in fintech, data analytics, and cloud technologies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Ronin Williams-Young work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ronin works with a wide range of technologies including React, TypeScript, NestJS, Python, AI/ML frameworks (OpenAI, Google Gemini), cloud platforms (AWS, Azure, Google Cloud), databases (PostgreSQL), containerization (Docker), infrastructure as code (Terraform), and various other modern web development tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of projects has Ronin Williams-Young built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ronin has built various projects including PhilanthPro (a fintech application for charitable donation optimization), ProWire (a sports technology platform for live audio streaming), Course Outline Manager (an education technology solution), and other enterprise applications. His projects span fintech, sports technology, education technology, and entertainment sectors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Ronin Williams-Young work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ronin currently works as an AI Engineer Intern at Bond Brand Loyalty in Toronto, Ontario. He previously worked at Electric Mind (formerly Intelliware) as a Software Engineer Intern, where he developed enterprise applications and fintech solutions.',
      },
    },
    {
      '@type': 'Question',
      name: "What is Ronin Williams-Young's educational background?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ronin is pursuing a dual degree in Software Engineering at Western University and Honours Business Administration at Ivey Business School. He has received academic honors including the Scholarship of Distinction and has been on the Dean's Honor List multiple times.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Ronin Williams-Young?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Ronin Williams-Young via email at ronin@williams-young.com, phone at +1 (647) 570-2191, or connect with him on LinkedIn at linkedin.com/in/ronin-williams-young/ or GitHub at github.com/rwill33.',
      },
    },
  ],
};

export default faqSchema;
