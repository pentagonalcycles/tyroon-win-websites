import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    quote:
      'Practice manager Tyroon Win is excellent. He\'s both responsive and highly knowledgeable.',
    source: 'Chambers UK Bar Guide',
    year: '2024',
  },
  {
    quote:
      'Tyroon Win is always very responsive, easy to deal with and a pleasure to work with. Permit me to be clear: Tyroon is a star. From the first moment I met him, he was the personification of \'can do\'. He consistently delivers in terms of both accessibility and administration. A clerk par excellence.',
    source: 'Chambers and Partners',
    year: '2023',
  },
  {
    quote:
      'Tyroon is really responsive and I find him very easy to work with. As a very small set with one clerk, there is a very personal service from Tyroon.',
    source: 'Chambers and Partners',
    year: '2022',
  },
  {
    quote: 'The clerk, Tyroon Win, is first class and seemingly always available to assist.',
    source: 'Chambers and Partners',
    year: '2021',
  },
  {
    quote:
      '"Excellent" clerk Tyroon Win is "exceptionally easy to get along with and efficient". "It is very easy to discuss matters with him and he is practical and proactive."',
    source: 'Legal 500',
    year: '2019',
  },
  {
    quote:
      'He is "excellent at ensuring the barristers\' availability" and "makes everything run smoothly".',
    source: 'Chambers and Partners',
    year: '2019',
  },
  {
    quote:
      'Practice Manager Tyroon Win is very clear and upfront and does everything right: it all just happens. Tyroon is excellent and does his utmost to make sure that our barrister\'s availability matches the times at which we need him.',
    source: 'Chambers and Partners',
    year: '2018',
  },
  {
    quote:
      'Practice Manager Tyroon Win has "never been anything other than entirely charming, professional, flexible and cooperative". "He is the epitome of an excellent clerk", and "particularly good at ensuring calls are returned and immediate access to counsel is given on urgent issues".',
    source: 'Legal 500',
    year: '2017',
  },
  {
    quote:
      'Practice Manager Tyroon Win is very personable and has very good interpersonal skills. He is very efficient, able to understand the sensitivities of a case and very sensible and pragmatic.',
    source: 'Chambers and Partners',
    year: '2017',
  },
];

export const featuredTestimonials: Testimonial[] = testimonials.slice(0, 3);
