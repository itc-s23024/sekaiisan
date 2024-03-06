const Seiza = ({ content }) => {
  return (
    <>
      <h1>本日の星座占い</h1>
      {content.horoscope['2024/03/content'].map((horoscope, index) => (
        <div key={index}>
          <p>{horoscope.sign}</p>
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
