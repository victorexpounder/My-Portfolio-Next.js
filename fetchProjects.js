'use server'
import client from './contentfulClient';

export const fetchProjects = async () => {
  const response = await client.getEntries({
    content_type: 'pageBlogPost', 
    order: 'sys.createdAt', // Sort by creation date (oldest to newest)

  });

  return response.items.map((item) => {
    return {
      title: item.fields.title,
      shortDescription: item.fields.shortDescription,
      featuredImage: item.fields.featuredImage,
      demo: item.fields.demo,
      repo: item.fields.repo,
    };
  });
};
