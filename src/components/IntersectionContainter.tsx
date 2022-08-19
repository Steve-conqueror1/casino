import React, { useRef } from 'react';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
  isLoading: boolean;
  loadMore: () => void;
};

export const IntersectionContainter: React.FC<Props> = (props: Props) => {
  const { children, loadMore, isLoading } = props;

  const intersectionRef = useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const element = intersectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectionContainer = entries[0];
        if (intersectionContainer.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <Box
      ref={intersectionRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {children}
    </Box>
  );
};
