import { NextApiHandler } from "next";
import axios from "axios";
import { parseBody } from "next/dist/next-server/server/api-utils";

const Handler: NextApiHandler = async (req, res) => {
  // add authentication if necessary

  switch (req.method) {
    case "GET": {
      const response = await axios.get<string>('http://docker_sample_backend:4000/').then((r) => r.data)
      res.json(response);
      break;
    }
    case "POST": {
      const body = await parseBody(req, '1mb') as string
      console.log(body)
      const response = await axios.post<string>('http://docker_sample_backend:4000/', body).then((r) => r.data)
      res.json(response);
      break;
    }
    default:
      res.status(402).end()
  }
}

export default Handler;
