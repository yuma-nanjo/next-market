const goodbye = (req, res) => {
  res.status(200).json({ message: "さようなら" });
};

export default goodbye;
