import { PropsWithChildren } from 'react';

export default function PageHeading({ children }: PropsWithChildren) {
  return (
    <h1 className="text-3xl md:text-4xl font-handwriting text-accent-dark mb-4">
      {children}
    </h1>
  );
}