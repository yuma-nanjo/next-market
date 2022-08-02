import jwt from "jsonwebtoken";

const secret_key = "nextmarket";

const auth = (handler) => {
  return async (req, res) => {
    if (req.method === "GET") {
      return handler(req, res);
    }

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVtYUBnbWFpbC5jb20iLCJpYXQiOjE2NTk0MzA5NzksImV4cCI6MTY1OTUxMzc3OX0.H8d_tOvkh1tAwkwYgrGnV8yIhNjWSFqX-WEiZ5WmXsE";

    // const token = await req.headers.authorization.split("")[1];

    if (!token) {
      return res.status(401).json({ message: "トークンがありません" });
    }

    try {
      const decoded = jwt.verify(token, secret_key);
      req.body.email = decoded.email;
      return handler(req, res);
    } catch (err) {
      return res
        .status(401)
        .json({ message: "トークンが正しくないので、ログインしてください" });
    }
  };
};

export default auth;
