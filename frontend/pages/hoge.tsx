import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import getRawBody from "raw-body";

type Props = {
  r?: string
}

const Hoge: NextPage<Props> = ({ r }) => <>{r}</>

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {

  switch (req.method) {
    case "GET": {
      const response = await axios.get<string>('http://docker_sample_backend:4000').then((r) => r.data)

      return { props: { r: response } }
    }
    case "POST": {
      const body = await getRawBody(req)
      const response = await axios.post<string>('http://docker_sample_backend:4000/', body.toString('utf-8')).then((r) => r.data)

      return { props: { r: response } }
    }
    default:

      res.statusCode = 402

      return { props: {}}
  }

}
export default Hoge
