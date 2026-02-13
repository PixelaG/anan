import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.png";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.png";
export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const getNoButtonText = () => {
    const phrases = [
      "არა",
      "დარწმუნებული ხარ?",
      "ნამდვილად დარწმუნებული ხარ?",
      "კიდევ იფიქრე!",
      "ბოლო შანსი!",
      "კიდევვ არაა?",
      "შეიძლება ინანო!",
      "კიდევ ერთხელ დაფიქრდი!",
      "აბსოლუტურად დარწმუნებული ხარ?",
      "იცოდე რომ ინანებ!",
      "ნუ ხარ ასეთი ცივი!",
      "ეს შენი საბოლოო პასუხია?",
      "გულს მიტეხ ;(",
      "ეს შენი საბოლოო პასუხია?",
      "გულს მიტეხ ;(",
      "გთხოვ? :( გულს მიკლავ",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {" "}
      {yesPressed ? (
        <>
          {" "}
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="mb-6"
          />{" "}
          <div className="text-4xl md:text-6xl font-bold text-center flex flex-col items-center space-y-4">
            {" "}
            <span>იესსსსსსს!!!</span>{" "}
            <span>ვიცოდი რომ დამთანხმდებოდი 🫶😘💘</span>{" "}
          </div>{" "}
        </>
      ) : (
        <>
          {" "}
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />{" "}
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />{" "}
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />{" "}
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            {" "}
            ანა, იქნები ჩემი ვალენტინი? 😍🥰{" "}
          </h1>{" "}
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {" "}
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              {" "}
              კი 😘{" "}
            </button>{" "}
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {" "}
              {noCount === 0 ? "არა" : getNoButtonText()}{" "}
            </button>{" "}
          </div>{" "}
        </>
      )}{" "}
      <Footer />{" "}
    </div>
  );
}
const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://www.instagram.com/giorgis_pixela/"
      target="__blank"
    >
      {" "}
      დაამზადა FIXUXI - იმ{" "}
      <span role="img" aria-label="heart">
        {" "}
        ❤️{" "}
      </span>{" "}
    </a>
  );
};
