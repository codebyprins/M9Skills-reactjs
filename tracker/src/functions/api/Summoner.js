// pages/api/summoner.js

export default async function handler(req, res) {
  const { name, region } = req.query;  // Get name and region from query parameters
  const apiKey = process.env.RIOT_API_KEY;  // API key is securely stored server-side
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to fetch summoner data' });
    }

    const data = await response.json();
    res.status(200).json(data);  // Return the fetched data
  } catch (error) {
    console.error('Error fetching summoner data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
