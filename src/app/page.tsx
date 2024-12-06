export default function Home() {
  return (
    <article>
      <p>
        <strong>🔥 Server:</strong> Most component hydration and rendering happens on the server.
        Data fetching only occurs on the server. Then everything is streamed to your browser. This
        is new with React 18 and Next.js 14.
      </p>
      <p>
        <strong>👴 Client:</strong> Most components are rendered and hydrated after being parsed by
        your browser. Data fetching only happens in the browser. Data fetching requires a Next.js
        Route Handler. This attempts to mimic the experience of a traditional React/Next.js app.
      </p>
    </article>
  );
}
