'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function Page() {
  const [topic, setTopic] = useState('BISE 11th 12th Result 2026')
  const [className, setClassName] = useState('')
  const [board, setBoard] = useState('')
  const [roll, setRoll] = useState('')

  const boardsLinks = {
    "Lahore": "https://www.biselahore.com/",
    "Gujranwala": "https://www.bisegrw.edu.pk/",
    "Faisalabad": "https://www.bisefsd.edu.pk/",
    "Multan": "https://www.bisemultan.edu.pk/",
    "Rawalpindi": "https://www.biserwp.edu.pk/",
    "Sargodha": "https://www.bisesargodha.edu.pk/",
    "Bahawalpur": "https://www.bisebwp.edu.pk/",
    "Sahiwal": "https://www.bisesahiwal.edu.pk/",
    "DG Khan": "https://www.bisedgkhan.edu.pk/"
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!board) return alert("Please select board")
    if (!className) return alert("Please select class")
    if (!roll) return alert("Please enter roll number")

    const link = boardsLinks[board] || "https://www.punjab.gov.pk/board_of_intermediate_secondary_education";
    window.open(link, '_blank') // Official website naye tab me
  }

  return (
    <>
      <Head>
        <title>BISE Result 2026 - Official Punjab Board Result Online</title>
        <meta name="description" content="Check BISE 11th and 12th Class Result 2026 online. Select your Board, Class and Roll Number to get result from official BISE website. Lahore, Multan, Faisalabad, Gujranwala and all Punjab Boards." />
        <meta name="keywords" content="BISE Result 2026, Punjab Board Result, 11th Class Result, 12th Class Result, biselahore.com, bise result online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'system-ui, sans-serif'}}>

        <div style={{background: 'white', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', padding: '40px', width: '100%', maxWidth: '500px'}}>

          <h1 style={{textAlign: 'center', fontSize: '28px', fontWeight: '800', color: '#1e293b', marginBottom: '8px'}}>{topic}</h1>
          <p style={{textAlign: 'center', color: '#64748b', marginBottom: '30px'}}>Check Your Result From Official Website</p>

          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>

            {/* 1. TOPIC */}
            <div>
              <label style={{fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px'}}>1. Topic</label>
              <input type="text" value={topic} onChange={e => setTopic(e.target.value)} style={{width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px'}} />
            </div>

            {/* 2. SELECTED CLASS */}
            <div>
              <label style={{fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px'}}>2. Select Class</label>
              <select value={className} onChange={e => setClassName(e.target.value)} required style={{width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px'}}>
                <option value="">-- Select Class --</option>
                <option value="11th">11th Class</option>
                <option value="12th">12th Class</option>
              </select>
            </div>

            {/* 3. SELECTED BOARD */}
            <div>
              <label style={{fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px'}}>3. Select Board</label>
              <select value={board} onChange={e => setBoard(e.target.value)} required style={{width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px'}}>
                <option value="">-- Select Board --</option>
                {Object.keys(boardsLinks).map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* 4. ROLL NUMBER + BUTTON */}
            <div>
              <label style={{fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px'}}>4. Enter Roll No</label>
              <div style={{display: 'flex', gap: '10px'}}>
                <input type="text" placeholder="roll number likho" value={roll} onChange={e => setRoll(e.target.value)} required style={{flex: 1, padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px'}} />
                <button type="submit" style={{padding: '12px 24px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '16px'}}>Result</button>
              </div>
            </div>

          </form>

          <p style={{textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '25px'}}>Note: Button click karne se official BISE website khul jayegi</p>
        </div>
      </main>
    </>
  )
}
