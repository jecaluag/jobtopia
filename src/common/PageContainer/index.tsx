import React from "react";

const PageContainer = ({ children }: Record<any, any>) => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-dark">
    {children}
  </main>
);

export default PageContainer;
