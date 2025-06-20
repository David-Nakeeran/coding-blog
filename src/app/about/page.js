export default function AboutPage() {
  return (
    <>
      <h2>About This Coding Blog</h2>
      <p>
        Welcome to my coding blog a place where I share programming thoughts,
        lessons learned, and experiments as I build my way through full stack
        development.
      </p>
      <p>
        This site is built using the modern Next.js App Router, connected to a
        PostgreSQL database using the pg library. It&apos;s fully CRUD-enabled
        meaning you can:
      </p>
      <ul>
        <li>Create, edit, and delete posts</li>
        <li>Leave comments on posts</li>
        <li>See updates revalidated server side in real time</li>
      </ul>
      <p>
        Everything is handcrafted no CMS, no frameworks doing the heavy lifting
        just me writing code and learning best practices. The goal of this
        project is to sharpen my full stack skills while creating something
        genuinely useful: a place to document and share the coding journey.
      </p>
      <p>
        Stay tuned for posts about JavaScript, databases, frameworks like React
        and Next.js, and anything else I pick up along the way.
      </p>
      <p>Thanks for stopping by and happy coding!</p>
    </>
  );
}
