import React, { useState } from 'react'

const Seiza = ({ content }) => {
  // ランキングの状態を管理するuseStateフック
  const [ranking, setRanking] = useState([])

  // ランダムなスコアを生成する関数
  const generateRandomScore = () => {
    // 0から100の間のランダムな整数を生成する
    return Math.floor(Math.random() * 101)
  }

  // ランキングを生成する関数
  const generateRanking = () => {
    // 星座ごとのランダムなスコアを計算する
    const horoscopesWithScores = content.horoscope['2024/03/content'].map(
      horoscope => ({
        ...horoscope,
        score: generateRandomScore()
      })
    )

    // スコアに基づいてランキングをソートする
    const sortedRanking = horoscopesWithScores.sort((a, b) => b.score - a.score)

    // ランキングを更新する
    setRanking(sortedRanking)
  }

  // 初回のみランキングを生成する
  useState(() => {
    generateRanking()
  }, [])

  return (
    <>
      <h1>本日の星座占い</h1>
      {ranking.map((horoscope, index) => (
        <div key={horoscope.sign}>
          <p>
            {index + 1}位: {horoscope.sign}
          </p>
          <p>本日のラッキーアイテムは{horoscope.item}</p>
          <p>{horoscope.content}</p>
        </div>
      ))}
    </>
  )
}

const getStaticProps = async () => {
  const res = await fetch(
    'https://api.jugemkey.jp/api/horoscope/free/2024/03/content'
  )
  const content = await res.json()

  return {
    props: { content }
  }
}

/*
const getStaticPaths = async () => {
  return {
    paths: ['content/item', 'content/sign'],
    fallback: false
  }
}
*/

export default Seiza
export { getStaticProps /* getStaticPaths */ }
