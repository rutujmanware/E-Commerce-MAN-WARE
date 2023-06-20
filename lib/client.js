import sanityClient from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url';

export const client =  sanityClient(
    {
        projectId:'434ug9ef',
        dataset:'production',
        apiVersion:'2023-06-16',
        useCdn:true,
        token: process.env.NEXT_SANITY_PUBLIC_TOKEN,
    }
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);