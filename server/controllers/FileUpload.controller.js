export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  res.status(200).json({ fileUrl: req.file.location });
};
