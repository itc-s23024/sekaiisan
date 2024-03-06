const Seiza = ({ content }) => {
  // 昇順にランキングを表示するために、ランキングをスコアの昇順にソートする
  const sortedRanking = content.horoscope['2024/03/content'].sort(
    (a, b) => a.rank - b.rank
  )

  return (
    <>
      <h1>本日の星座占い</h1>
      {content.horoscope['2024/03/content'].map((horoscope, index) => (
        <div key={index}>
          <p>{horoscope.rank}位</p>
          <p>{horoscope.sign}</p>
          <p>本日のラッキーアイテムは{horoscope.item}</p>
          <p>{horoscope.content}</p>
        </div>
      ))}
      <p>利用したAPIはこちら</p>
      <p>
        powerd by <a href='http://jugemkey.jp/api/'>JugemKey</a>
      </p>
      <p>
        【PR】<a href='http://www.tarim.co.jp/'>原宿占い館 塔里木</a>
      </p>
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
