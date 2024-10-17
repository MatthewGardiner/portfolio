import Head from 'next/head'; // Import Head from Next.js

export default function AboutComponent() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
      </Head>
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            I am a passionate junior developer with four years of experience in the tech industry, currently based in Bradford and open to new opportunities.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            I have a strong academic background, having completed a BSc in Computer Science and an MSc in Big Data Science and Technology. Throughout my career, I have worked on a diverse range of projects using various languages and frameworks, including Lua, Python, TypeScript, and C#.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Beyond my professional life, I am an avid archer with nearly a decade of shooting experience, having achieved a national ranking of 32nd. As I continue to grow in my career, I am eager to embrace new challenges that will further enhance my software development skills.
          </p>
        </div>
      </section>
    </>
  );
}
