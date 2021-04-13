// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.query, 'API')
  res.status(200).json({ name: 'John Doe' })
}
