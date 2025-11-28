export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    global.latestData = req.body;  // 保存最新行情
    return res.status(200).json({ status: "ok" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
