import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

type Props = {
  r: string
}

const Hoge: NextPage<Props> = ({ r }) => <>{r}</>

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<string>('http://docker_sample_backend:4000').then((r) => r.data)

  return { props: { r: res } }
}
export default Hoge
