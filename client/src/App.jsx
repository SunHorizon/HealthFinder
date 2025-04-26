import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import Maps from "./components/Maps";

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
    <Maps />
  );
}

export default App;