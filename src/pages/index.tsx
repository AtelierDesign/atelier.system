import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  // Redirect to /cover
  useEffect(() => {
    router.replace('/design');
  });

  return null;
};

export default Index;
