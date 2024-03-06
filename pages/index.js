const Seiza = ({ content }) => {
  return (
    <>
      <h1>本日の星座占い</h1>
      <p>{content.horoscope['2024/03/content'][0].sign}</p>
      <p>{content.horoscope['2024/03/content'][0].item}</p>
      <p>{content.horoscope['2024/03/content'][0].content}</p>
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
