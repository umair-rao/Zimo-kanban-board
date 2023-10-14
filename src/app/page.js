'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../app/layout';

const DynamicStudioBoard = dynamic(() => import('../components/StudioBoard'), {
  ssr: false,
});

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReady(true);
    }
  }, []);

  return (
    <Layout>
      <div className="p-10 flex flex-col h-screen">
        {ready && (
          <div className="min-w-full min-h-screen h-screen overflow-hidden bg-blue-100">
            <DynamicStudioBoard />
          </div>
        )}
      </div>
    </Layout>
  );
}
