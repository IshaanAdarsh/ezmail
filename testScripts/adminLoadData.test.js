import {describe, expect, it} from 'vitest';
import { load } from '../src/routes/admin/[slug]/+page.server';

describe('load function', () => {
  const mockPosts = [
    {
      slug: 'bona-fide',
      title: 'Request for Bona fide Certificate',
      subject: 'request a bona fide certificate from [College/University Name]',
      content: 'Dear [College/University],' +

        '\n\nI am writing to request a bona fide certificate from [College/University Name] for the purpose of [reason for certificate, such as applying for a scholarship or visa]. I am a student currently enrolled in [your current degree and major] and my student ID number is [student ID number].' +

        '\nI would greatly appreciate it if you could provide me with a bona fide certificate that confirms my enrollment and student status at [College/University Name]. I would also like to request that the certificate include my full name, student ID number, degree and major, and the duration of my enrollment.' +

        '\nPlease let me know the procedure for obtaining the certificate and any necessary documents I need to submit. I would be happy to provide any additional information that may be required.' +

        '\n\nThank you for your time and consideration.' +

        '\n\nSincerely,' +
        '\n[Your Name]' +
        '\n[Your contact information (phone number and email address)]',
      tag: ['request', 'bona fide', 'academics']
    }
    // Add more mock posts here if needed
  ];

  it('should load the correct post when it exists', () => {
    const mockParams = { slug: 'bona-fide' };
    const expectedResult = { post: mockPosts[0] };
    const result = load({ params: mockParams, posts: mockPosts });
    expect(result).toEqual(expectedResult);
  });

  it('should throw a 404 error when the post does not exist', () => {
    const mockParams = { slug: 'non-existent-post' };
    expect(() => {
      load({ params: mockParams, posts: mockPosts });
    }).toThrowError();
  });
});