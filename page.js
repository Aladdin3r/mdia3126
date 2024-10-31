"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [artData, setArtData] = useState(null);
  // to do
  //
  // x button that fetches
  // x container for button
  // x container for display content (empty, loading, fulfilled states)
  // x fetch content (handle and format content)
  // - error handling
  // - styling
  // - breakpoints (mobile-first methodology)
  // - function to clear data

  async function fetchArt() {
    const API_URL =
      "https://api.artic.edu/api/v1/artworks/search?q=egypt&limit=5";
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log("button clicked");
    // console.log(response);
    // alert("button clicked");
    setArtData(data.data); //make sure to target the right object item
    setLoading(false);
  }

  const Header = () => {
    return (
      <section>
        <h1>Midterm App Practice</h1>
        <button className="border-2 border-brown p-2" onClick={fetchArt}>
          Fetch 🖼️
        </button>
      </section>
    );
  };

  const ArtListContainer = () => {
    if (loading) {
      return <section>Loading... ䷄</section>;
    }
    if (artData) {
      const artListItems = [];
      artData.forEach((art, i) => {
        //   "_score": 91.0908,
        // "thumbnail": {
        //   "alt_text": "A work made of sixteen silver dye bleach print diptychs, framed\n1)\tsisters i (l: nefertiti, r: devonia)\n2)\tsisters ii (l: nefertiti's daughter merytaten, r: devonia's daughter candace)\n3)\tsisters iii (l: nefertiti's daughter maketaten, r: devonia's daughter kimberley)\n4)\tsisters iv (l: devonia's sister lorraine, r: nefertiti's sister mutnedjmet)\n5)\tceremonial occasions i (l: devonia as matron of honor, r: nefertiti performing a lustration)\n6)\tceremonial occasions ii (l: devonia attending a wedding, r: nefertiti performing an aten ritual)\n7)\ta mother's kiss (t: candace and devonia, b: nefertiti and daughter)\n8)\tmotherhood (l: nefertiti, r: devonia reading to candace and edward, jr.)\n9)\tyoung princesses (l: nefertiti's daughter ankhesenpaaten, r: devonia's daughter candace)\n10)\twordly princesses (l: nefertiti's daughter merytaten, r: devonia's daughter kimberley)\n11)\tcrowned heads (l: nefertiti's husband akhenaten, r: devonia's husband edward)\n12)\tyoung queens (l: nefertiti, aged 24, r: devonia, aged 24)\n13)\tprogress of queens (l: devonia, aged 35. r: nefertiti, aged 36)\n14)\tcross-generational (l: nefertiti, the last image, r: devonia's daughter kimberley)\n15)\thero worship (l: devonia at 14 and lorraine at 3, r: devonia at 24 and lorraine at 13)\n16)\tsibling rivalry (l: nefertiti, r: nefertiti's sister mutnedjmet).",
        //   "width": 6080,
        //   "lqip": "data:image/gif;base64,R0lGODlhBQAFAPQAAJqSjLyojb6qj6egnLuokLypkL2rkrSspLi0rb65sr+7tMO9s8K9tMO/tcS+tcW+tsvCtsXBuMbCu87Gu8nDvMvGvczHwNDMxdHMxgAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVoBM1zGIhknJVQDJg0PFQU2AUhBACADs=",
        //   "height": 5792
        // },
        // "api_model": "artworks",
        // "is_boosted": false,
        // "api_link": "https://api.artic.edu/api/v1/artworks/193318",
        // "id": 193318,
        // "title": "Miscegenated Family Album",
        // "timestamp": "2024-10-30T22:57:34-05:00"

        artListItems.push(
          <article key={art.id}>
            <img src={art.thumbnail.lqip} />
            <p>Image size is weird, cannot manually change it</p>
            <p>Title: {art.title}</p>
            <p>{art.thumbnail.alt_text}</p>
          </article>
        );
      });

      return <section className="mt-5">{artListItems}</section>;
    }
    return <section>No Images fetched!</section>;
  };

  return (
    <>
      <Header />
      <ArtListContainer />
    </>
  );
}
