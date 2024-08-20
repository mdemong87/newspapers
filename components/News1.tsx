import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Post {
  img: string;
  link: string;
  title: string;
}

interface NewsProps {
  title: string;
  link: string;
  limit: number;
  post: Post[];
}

const News1: React.FC<NewsProps> = ({ title, link, limit, post }) => {
  return (
    <div className="container my-2">
        <div className='flex items-center justify-between my-2'>
            <h2 className="text-xl font-bold">{title}</h2>
            <Link href={link} className="text-blue-500 hover:underline block">
                See all
            </Link>
        </div>
      
      <div className='flex flex-wrap md:flex-row'>
        {post.slice(0, limit).map((p, index) => {
          if (index === 0) {
            return (
              <Link href={p.link} key={index} className="w-2/6 bg-white p-2">
                <Image
                    src={p.img || "/default.jpg"}
                    width={300}
                    height={300}
                    alt={p.title}
                    className='w-full h-44 object-cover'
                />
                <p className='line-clamp-2'>
                  {p.title}
                </p>
              </Link>
            );
          } else if (index === 1) {
            return (
                <Link href={p.link} key={index} className="w-2/6 bg-white p-2">
                    <Image
                        src={p.img || "/default.jpg"}
                        width={300}
                        height={300}
                        alt={p.title}
                        className='w-full h-44 object-cover'
                    />
                    <p className='line-clamp-2'>
                    {p.title}
                    </p>
                </Link>
            );
          } else if (index === 2) {
            return (
                <Link href={p.link} key={index} className="w-2/6 bg-white p-2">
                    <Image
                        src={p.img || "/default.jpg"}
                        width={300}
                        height={300}
                        alt={p.title}
                        className='w-full h-44 object-cover'
                    />
                    <p className='line-clamp-2'>
                    {p.title}
                    </p>
              </Link>
            );
          } else {
            return (
                <Link href={p.link} key={index} className="w-full bg-white p-2 flex items-center space-x-2">
                    <Image
                        src={p.img || "/default.jpg"}
                        width={300}
                        height={300}
                        alt={p.title}
                        className='w-20 h-16'
                    />
                    <p className='line-clamp-2'>
                    {p.title}
                    </p>
                </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default News1;
