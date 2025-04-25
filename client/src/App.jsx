import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getImage = async () => {
      try {
        const data = await fetchImage();
        setImageUrl(data.image); // `data.image` could be a URL or base64 string
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    getImage();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Image from Server</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Fetched from server" style={{ maxWidth: "500px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;