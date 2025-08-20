import React from 'react';
import { RedocStandalone } from 'redoc';

export default function RedocPage() {
  return (
    <RedocStandalone
      specUrl="/openapi.json"
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: '#1890ff' } } },
      }}
    />
  );
}

