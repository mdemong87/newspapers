import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NewsItem {
  img: string;
  link: string;
  title: string;
}

interface NewsProps {
  title: string;
  link: string;
  limit: number;
  post: NewsItem[];
}

const News2: React.FC<NewsProps> = ({ title, link, limit, post }) => {
  return (
    <div className="container my-2">
        <div className='flex items-center justify-between my-2'>
            <h2 className="text-xl font-bold">{title}</h2>
            <Link href={link} className="text-blue-500 hover:underline block">
                See all
            </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {post.slice(0, limit).map((item, index) => (
              <Link href={item.link} className='bg-white p-2 flex items-center space-x-1' key={index}>
                  <Image
                      src={item.img || "/default.jpg"}
                      width={300}
                      height={300}
                      alt={item.title}
                      className='w-20 h-16 object-cover'
                  />
                  <p className='line-clamp-2'>{item.title}</p>
              </Link>
            ))}
        </div>
    </div>
  );
};

export default News2;
