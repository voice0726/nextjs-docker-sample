import { NextApiHandler } from "next";
import axios from "axios";

const Handler: NextApiHandler = async (_, res) => {
  // add authentication if necessary
  const response = await axios.get<string>('http://docker_sample_backend:4000/').then((r) => r.data)
  res.json(response)
}

export default Handler;
