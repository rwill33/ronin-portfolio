import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ronin Williams-Young | AI Engineer & Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Ronin Williams-Young
        </div>
        <div
          style={{
            fontSize: 36,
            marginBottom: 20,
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          AI Engineer & Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: 'center',
            opacity: 0.8,
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Expert in React, TypeScript, Python, AI/ML, and Enterprise Software
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          williams-young.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
