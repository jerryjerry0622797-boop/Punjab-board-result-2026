'use client';
import { useState } from 'react';

export default function Home() {
  const [rollNo, setRollNo] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');

  const boards = [
    { name: "BISE Lahore", url: "https://www.biselahore.com" },
    { name: "BISE Gujranwala", url: "https://www.bisegrw.com" },
    { name: "BISE Faisalabad", url: "https://www.bisefsd.edu.pk" },
    { name: "BISE Multan", url: "https://www.bisemultan.edu.pk" },
    { name: "BISE Rawalpindi", url: "https://www.biserwp.edu.pk" },
    { name: "BISE Sargodha", url: "https://www.bisesargodha.edu.pk" },
    { name: "BISE Bahawalpur", url: "https://www.bisebwp.edu.pk" },
    { name: "BISE Sahiwal", url: "https://www.bisesahiwal.edu.pk" },
    { name: "BISE DG Khan", url: "https://www.bisedgkhan.edu.pk" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!selectedBoard) return alert("Pehle Board select karo");
    const boardData = boards.find(b => b.name === selectedBoard);
    window.open(boardData.url, '_blank'); // Official site naye tab me
  }

  return (
    <main style={{padding: '20px', fontFamily: 'Arial'}}>
      <h1>BISE Result 2025</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label>Board Select karo: </label>
          <select value={selectedBoard} onChange={(e) => setSelectedBoard(e.target.value)} required>
            <option value="">-- Select Board --</option>
            {boards.map((board) => <option key={board.name}>{board.name}</option>)}
          </select>
        </div>

        <div style={{marginBottom: '15px'}}>
          <label>Roll No: </label>
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required placeholder="123456" />
        </div>

        <button type="submit">Result Dekho</button>
      </form>
    </main>
  );
}
