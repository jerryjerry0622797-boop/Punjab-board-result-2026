"use client";
export const dynamic = 'force-dynamic';
import { useState } from 'react';
export default function Home() {
const [selectedBoard, setSelecedBoard] = useState('');
  const handleCheckResult = (e) => {
    e.preventDefault();
    if (!selectedBoard) {
      alert("Pehle Board select karo!");
      return;
    }
    const board = boards.find(b => b.name === selectedBoard);
    if (board) {
      window.open(board.url, '_blank');
    }
  };
  // Har board ki official site
    const boardLinks = [
      { name: "BISE Gujranwala", url: "https://www.bisegrw.edu.pk" },
  { name: "BISE LAHORE",url: "https://www.biselahore.com" },
  { name: "BISE Faisalabad", url: "https://www.bisefsd.edu.pk" },
  { name: "BISE Multan", url: "https://www.bisemultan.edu.pk" },
  { name: "BISE Bahawalpur", url: "https://www.bisebwp.edu.pk" },
  { name: "BISE Sargodha", url: "https://www.bisesargodha.edu.pk" },
  { name: "BISE Rawalpindi", url: "https://www.biserawalpindi.edu.pk" },
  { name: "BISE Sahiwal", url: "https://www.bisesahiwal.edu.pk" },
      { name: "BISE DG Khan", url: "https://www.bisedgkhan.edu.pk" },
    ];

    window.open(boardLinks[board], '_blank')
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 font-sans">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
          Punjab Board 11th & 12th Class Result 2026
        </h1>
        <p className="text-red-600 font-bold text-lg">Expected Result Date: 23 September 2026 at 10:00 AM</p>
      </div>

      {/* RESULT CHECK BOX */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mb-8 border-t-4 border-blue-700">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Check Your Result Now</h2>

        <form onSubmit={handleCheckResult}>
          <div className="mb-4">
            <label className="font-bold text-gray-700 block mb-1">1. Select Class</label>
            <select name="class" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">-- Select Class --</option>
              <option>12th Class - HSSC Part 2</option>
              <option>11th Class - HSSC Part 1</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="font-bold text-gray-700 block mb-1">2. Select Board</label>
            <select name="board" required className="w-full p-3 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>BISE Gujranwala</option>
              <option>BISE Lahore</option>
              <option>BISE Faisalabad</option>
              <option>BISE Multan</option>
              <option>BISE Rawalpindi</option>
              <option>BISE Sargodha</option>
              <option>BISE Bahawalpur</option>
              <option>BISE Sahiwal</option>
              <option>BISE DG Khan</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="font-bold text-gray-700 block mb-1">3. Enter Roll No</label>
            <input
              type="number"
              name="rollno"
              required
              placeholder="e.g. 123456"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded-md font-bold text-lg hover:bg-blue-800 transition duration-200">
            Check Result
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-3 text-center">Note: You will be redirected to your selected board's official website</p>
      </div>

      {/* SEO ARTICLE */}
      <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">Punjab All BISE Board Result 2026</h2>
        <p className="mb-4 text-gray-700">
          Punjab k tamam 9 Boards <b>11th Class</b> aur <b>12th Class HSSC Result 2026</b> ka elan
          <b> 23 September 2026 at 10:00 AM</b> ko karenge. Is me Lahore, Gujranwala, Faisalabad, Multan,
          Rawalpindi, Sargodha, Bahawalpur, Sahiwal aur DG Khan shamil hain.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800">How to Check Any Board Result?</h3>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Select Class: 11th or 12th</li>
          <li>Select Your Board from 9 Punjab Boards</li>
          <li>Enter your Roll Number</li>
          <li>Click "Check Result" - You will go to official board site</li>
        </ol>

        <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800">List of All Punjab Boards</h3>
        <p className="text-gray-700">
          BISE Lahore, BISE Gujranwala, BISE Faisalabad, BISE Multan, BISE Rawalpindi,
          BISE Sargodha, BISE Bahawalpur, BISE Sahiwal, BISE DG Khan
        </p>
      </article>

      {/* FOOTER */}
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© 2026 PunjabResultCheck. Not affiliated with any BISE Board.</p>
      </footer>

    </main>
  )
}
