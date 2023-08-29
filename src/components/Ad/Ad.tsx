'use client';

import { useState } from 'react';

const Ad = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <button
      onClick={() => setActive(true)}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '336px', height: '280px' }}
        data-ad-client="ca-pub-4646162930720718"
      ></ins>
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Deploy{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </button>
  );
};

export default Ad;
