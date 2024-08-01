import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';
import CodeSnippet from '@/components/CodeSnippet';

export async function generateMetadata({ params }) {
  const { title, abstract } = await loadBlogPost(params.postSlug);

  return {
    title: `${title} • ${BLOG_TITLE}`,
    description: abstract,
  };
}

async function BlogPost({ params }) {
  const { title, publishedOn, content } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content} components={{ pre: CodeSnippet }}></MDXRemote>
      </div>
    </article>
  );
}

export default BlogPost;
