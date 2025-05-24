import Link from "next/link";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
      <div className="text-center space-y-6">
        <Text
          as="h1"
          size="5xl"
          weight="bold"
          color="blue-700"
          className="leading-tight"
        >
          Welcome to Next.js 15 Boilerplate
        </Text>

        <Text size="lg" weight="medium" className="max-w-prose mx-auto">
          A robust and modern boilerplate for your Next.js projects, built with
          TanStack Query, Tailwind CSS, ESLint, Prettier, and Husky.
        </Text>

        <Text size="base" color="gray-600" className="italic">
          Created by Panji Hanum.
        </Text>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/posts" passHref>
            <Text
              as="span"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Go to Posts Example
            </Text>
          </Link>
          <a
            href="https://github.com/panjihanum/nextjs-boilerplate-2025" // Ganti dengan repo Anda jika sudah ada
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
          >
            View on GitHub
          </a>
        </div>

        <Text size="sm" color="gray-500" className="pt-8">
          Start building your next big idea!
        </Text>
      </div>
    </main>
  );
}
