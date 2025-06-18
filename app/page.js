"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [year, setYear] = useState("");

  const callTheQuranData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callTheQuranData();
  }, [callTheQuranData]);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logoicon.png"
              alt="Quran App Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Al-Quran
            </h1>
          </div>
          <a
            href="#download-app"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Download Our App
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-10">
          {data.map((surah) => (
            <div key={surah.id}>
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-300 tracking-wide">
                  {surah.transliteration}
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">
                  {surah.name}
                </p>
                <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  {surah.type} • {surah.total_verses} verses
                </div>
              </div>
              <div className="space-y-6">
                {surah.verses.map((verse) => (
                  <div
                    key={verse.id}
                    className="group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 text-sm font-medium">
                        {verse.id}
                      </span>
                      <p className="flex-1 text-right text-2xl leading-loose text-gray-800 dark:text-white font-quran">
                        {verse.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-lg mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="border-t dark:border-gray-700 mt-8 pt-6 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; {year} Al-Quran Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
