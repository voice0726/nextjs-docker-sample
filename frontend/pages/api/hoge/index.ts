import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (_, res)=>{
  // add authentication if necessary
  const r = await fetch('http://localhost:4000/')
  res.json(r)
}

export default Handler;
